const express = require('express')
const path = require('path')
const jwt = require('jsonwebtoken');
const app = express();
var multer  = require('multer')


// storing images in image folder
let storage = multer.diskStorage({
  destination: function(req,file,cb){
       cb(null, path.join(__dirname,'images'));
  },
  filename: function(req,file,cb){
    cb(null, file.originalname+path.extname(file.originalname))
  }

})

// uploading all types of images
let upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
     if ((file.mimetype == 'image/jpeg') || (file.mimetype == 'image/png') || (file.mimetype == 'image/bmp')) {
        cb(null, true);
     }else{
        cb(null, false)
     }
  }
})
// getting the file name from the front end and allowing one file
let ImageUpload = upload.fields(
  [
     {name:"fileName", maxCount: 1 }
  ]
);



app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.use('/', express.static(path.join(__dirname, 'public')))
app.post('/image',
function (req, res, next) {
  ImageUpload(req, res, function (err) {
     if (err) {
        return res.status(500).json({
           "status": "ERROR",
           "error_message": JSON.stringify(err)
        });
     }else{
        return res.status(201).send("File uploaded.");
     }
  })
});

app.use('/login', require('./routes/api/login'))
app.use('/users', require('./routes/api/users'))
app.use('/api', require('./routes/api').route)
app.use('/myimage',express.static(path.join(__dirname, 'images')))




app.listen(2000, () => console.log('Server started at http://localhost:2000'))