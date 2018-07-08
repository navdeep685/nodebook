const Sequelize = require('sequelize')

const db = new Sequelize('bookdb', 'ecomm', 'ecomm', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        min: 0,
        max: 5,
    }
})

const Users = db.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
       },
    Password: {
      type: Sequelize.STRING,
        allowNull: false,
    },
    college: {
        type: Sequelize.STRING,
        allowNull: false,
        },
    address: {
      type: Sequelize.STRING,
        allowNull: false,       
     },
    phone:{
      type: Sequelize.STRING,
        allowNull: false       
     },
    gender:{
        type: Sequelize.STRING,
         allowNull: false,
     }
})
const Product = db.define('products', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    BookName: {
        type: Sequelize.STRING,
        allowNull: false
    },
     AuthorName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email:{
       type: Sequelize.STRING,
        allowNull: false, 
    },
    price: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    },
    condition:{
         type:   Sequelize.ENUM,
       values: ['New', 'Almost New', 'Slight Damage','Worn'],
    },
})
Product.belongsTo(Users,{as : 'seller'})


const Wishlist = db.define('wishlists',{
    User_id: {
       type: Sequelize.INTEGER,
        allowNull:false,
    },
    Product_id: {
       type: Sequelize.INTEGER,
        allowNull:false,
    },

})

const Message = db.define('messages',{
    User_id: {
       type: Sequelize.INTEGER,
        allowNull:false,
    },
     Product_id: {
       type: Sequelize.INTEGER,
        allowNull:false,
    },
          Seller_id: {
       type: Sequelize.INTEGER,
        allowNull:false,
    },
    message: {
        type: Sequelize.STRING,
        allowNull:false,
    }    
})



db.sync()
    .then(() => console.log("Database has been synced"))
    .catch((err) => console.error("Error creating database"))

exports = module.exports = {
    Users:Users, Product:Product , Wishlist: Wishlist, db : db, Message:Message,
}
