(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add/add.component.css":
/*!***************************************!*\
  !*** ./src/app/add/add.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/add/add.component.html":
/*!****************************************!*\
  !*** ./src/app/add/add.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p style=\"margin-top: 123px;\">\n \n</p>\n<div class=\"container\">\n<form name=\"myform\" [formGroup]=\"myform\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n        <label for=\"productName\">Book Name: </label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"bname\" id=\"bookName\" placeholder=\"Enter Book Name\">\n    </div>\n    <div class=\"form-group\">\n        <label for=\"productManufacturer\">Author: </label>&nbsp;\n        <input type=\"text\" class=\"form-control\" id=\"bookAuthor\" formControlName=\"aname\" placeholder=\"Enter Author Name\">\n    </div>\n    <div class=\"form-group\">\n        <label for=\"productPrice\">Price:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n        <input type=\"number\" class=\"form-control\" id=\"bookPrice\" formControlName=\"price\" placeholder=\"Enter Price\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"productPrice\">Email:</label>\n      <input type=\"email\" class=\"form-control\" id=\"email\" [(ngModel)]='emailbind' formControlName=\"email\" readonly placeholder=\"Enter Price\"> \n  </div>\n  <div class=\"form-group\">\n    <label for=\"productPrice\">Upload Image:</label>\n    <input type=\"file\" class=\"form-control\" id=\"Image\"    (change)=\"handleFileInput($event.target.files)\"> \n</div>\n\n\n  <select id=\"bookselect\" formControlName=\"condition\">\n  <option>condition:</option>\n  <option>New</option>\n  <option>Almost New</option>\n  <option>Slight Damage</option>\n  <option>Worn</option>\n  </select>\n  <br>\n  <br>\n  <textarea rows=\"4\" cols=\"20\" id=\"description\" placeholder=\"Enter description\" formControlName=\"description\"></textarea>\n  <br>\n  <button id=\"submit\" type=\"submit\" value=\"submit\" class=\"btn btn-primary center\">Add Books</button>   \n</form>\n</div>\n"

/***/ }),

/***/ "./src/app/add/add.component.ts":
/*!**************************************!*\
  !*** ./src/app/add/add.component.ts ***!
  \**************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _dataservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dataservice.service */ "./src/app/dataservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { Observable } from 'rxjs';
var AddComponent = /** @class */ (function () {
    function AddComponent(fb, http, data) {
        this.fb = fb;
        this.http = http;
        this.data = data;
        this.fileToUpload = null;
        this.emailbind = localStorage.getItem('email');
    }
    AddComponent.prototype.ngOnInit = function () {
        this.myform = this.fb.group({
            bname: "",
            aname: "",
            email: "",
            description: "",
            price: "",
            condition: "",
            sellerId: localStorage.getItem('userId'),
        });
    };
    AddComponent.prototype.handleFileInput = function (files) {
        this.fileToUpload = files.item(0);
        //this.uploadFileToActivity();
    };
    AddComponent.prototype.onSubmit = function () {
        var values = this.myform.value;
        console.log(values);
        this.postdata(values, this.fileToUpload);
    };
    AddComponent.prototype.postFile = function (name) {
        var formData = new FormData();
        formData.append('fileName', this.fileToUpload, name);
        this.http
            .post('/image', formData)
            .subscribe(function (data) {
            console.log(data);
        });
    };
    AddComponent.prototype.postdata = function (data, fileToUpload) {
        var _this = this;
        this.http.post('/api/products', data).subscribe(function (data) {
            _this.postFile(data.id);
            console.log(data);
            if (data) {
                alert("Successfully added products");
            }
        });
    };
    AddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! ./add.component.html */ "./src/app/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.css */ "./src/app/add/add.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _dataservice_service__WEBPACK_IMPORTED_MODULE_3__["DataserviceService"]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar{\r\n    background-color: #23415C;\r\n   padding: 1% 0;\r\n    font-size: 2.0 em;\r\n}\r\n.navbar-header{\r\n    margin-left: 10px;\r\n}\r\n.navbar-brand {\r\n    \r\n    margin-bottom:5px;\r\n    padding: 0 15px 5px;\r\n    \r\n}\r\n.navbar-default .navbar-nav li a {\r\n    color:#D5D5D5;\r\n}\r\n.navbar-default .navbar-nav li a:hover,.navbar-default .navbar-nav li a:active {\r\n    color:#FFF;\r\n}\r\nfooter{\r\n   /* margin-top: 50px;\r\n    /* width:100%; */\r\n    /* height:140px;  */\r\n    /* height: 150px;*/\r\n    \r\n    color:#FFF;\r\n}\r\n.fa{\r\n    padding: 10px;\r\n    font-size: 25px;\r\n    color: #FFF;\r\n}\r\n.fa:hover{\r\n    color:#D5D5D5;\r\n    text-decoration: none;\r\n} \r\n    \r\n    \r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navbar-collapse-main\" >\r\n            <span class =\"sr-only\">Toggle navigation</span>\r\n            <span class =\"icon-bar\"></span>\r\n            <span class =\"icon-bar\"></span>\r\n            <span class =\"icon-bar\"></span>\r\n            \r\n            </button>\r\n            <a class=\"navbar-brand\" style=\"margin-top: 12px ;color:#b3ffe0\">Books Dunia</a>\r\n        </div>\r\n        \r\n       \r\n        <div class=\"collapse navbar-collapse\" id=\"navbar-collapse-main\">\r\n                <ul class=\"nav navbar-nav\">\r\n                        <li><a  routerLink=\"/listings\" ><b>Home</b></a></li>           \r\n                      </ul>\r\n        <ul class=\"nav navbar-nav navbar-right\">\r\n            <li><a  routerLink=\"/listings/add\" [style.visibility]=\"toggoleShow\" >Add books</a></li> \r\n            <li><a routerLink=\"/wishlist\" [style.visibility]=\"toggoleShow\" ><span class=\"glyphicon glyphicon-heart\"></span> Wishlist</a></li>\r\n            <li><a routerLink=\"/messages\" [style.visibility]=\"toggoleShow\"> <span class=\"glyphicon glyphicon-envelope\"></span>  Messages</a></li>\r\n            <li><a routerLink=\"/signup\" [style.visibility]=\"toggoleShowHide\"><span class=\"glyphicon glyphicon-user\"></span> Sign Up</a></li>\r\n            <li><a routerLink=\"/Login\" [style.visibility]=\"toggoleShowHide\"><span class=\"glyphicon glyphicon-log-in\"></span> Login</a></li>\r\n            \r\n            <li><a routerLink=\"/listings\" [style.visibility]=\"toggoleShow\" (click)=\"logout()\"><span class=\"glyphicon glyphicon-log-out\"></span> Logout</a></li>\r\n        </ul>\r\n        \r\n        \r\n        </div>\r\n    </div>\r\n    </nav>\r\n\r\n\r\n<router-outlet></router-outlet>\r\n\r\n\r\n<footer id=\"myFooter\" style=\"background-color: #23415C; margin-top: 9%; \">\r\n        <div class=\"container\">\r\n            <div class=\"row\"s>\r\n                <div class=\"col-sm-3\" style=\"color:#b3ffe0\">\r\n                    <h2 class=\"logo\"> Book Dunia </h2>\r\n                </div>\r\n                <div class=\"col-sm-2\">\r\n                        <h5>Get started</h5>\r\n                        <ul>\r\n                            <li>Home</li>\r\n                            <li>Sign up</li>\r\n                        \r\n                        </ul>\r\n                </div>\r\n                <div class=\"col-sm-2\">\r\n                </div>\r\n                <div class=\"col-sm-2\">\r\n                        <h5>Support</h5>\r\n                        <ul>\r\n                            <li>FAQ</li>\r\n                            <li>Help desk</li>\r\n                            <li>Forums</li>\r\n                        </ul>\r\n                </div>\r\n                <div class=\"col-sm-3\">\r\n                    <div class=\"social-networks\">\r\n                        <a href=\"#\" class=\"twitter\"><i class=\"fa fa-twitter\"></i></a>\r\n                        <a href=\"#\" class=\"facebook\"><i class=\"fa fa-facebook\"></i></a>\r\n                        <a href=\"#\" class=\"google\"><i class=\"fa fa-google-plus\"></i></a>\r\n                    </div>\r\n            \r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"footer-copyright\">\r\n            <p style=\"text-align: center;font-size: 20px;\">© All Rights Reserved </p>\r\n        </div>\r\n    </footer>\r\n    \r\n  \r\n           "

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
        this.toggoleShowHide = "";
        this.toggoleShow = "";
    }
    AppComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('userId') && (localStorage.getItem('password'))) {
            this.toggoleShowHide = 'hidden';
            //this.toggoleShow='visible';
        }
        else {
            this.toggoleShowHide = 'visible';
            this.toggoleShow = 'hidden';
        }
    };
    AppComponent.prototype.logout = function () {
        localStorage.removeItem('userId'),
            localStorage.removeItem('password'),
            localStorage.removeItem('email');
        this.toggoleShowHide = 'visible';
        this.toggoleShow = 'hidden';
    };
    AppComponent.prototype.check = function () {
        localStorage.getItem('userId');
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _listings_listings_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./listings/listings.component */ "./src/app/listings/listings.component.ts");
/* harmony import */ var _listingid_listingid_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./listingid/listingid.component */ "./src/app/listingid/listingid.component.ts");
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-order-pipe */ "./node_modules/ngx-order-pipe/ngx-order-pipe.es5.js");
/* harmony import */ var _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./wishlist/wishlist.component */ "./src/app/wishlist/wishlist.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./add/add.component */ "./src/app/add/add.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var routes = [
    {
        path: '',
        component: _listings_listings_component__WEBPACK_IMPORTED_MODULE_8__["ListingsComponent"],
    },
    {
        path: 'signup',
        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"],
    },
    {
        path: 'Login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
    },
    {
        path: 'listings',
        component: _listings_listings_component__WEBPACK_IMPORTED_MODULE_8__["ListingsComponent"],
    },
    { path: 'listings/add', component: _add_add_component__WEBPACK_IMPORTED_MODULE_12__["AddComponent"] },
    { path: 'listingid/:id',
        component: _listingid_listingid_component__WEBPACK_IMPORTED_MODULE_9__["ListingidComponent"]
    },
    { path: 'wishlist',
        component: _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_11__["WishlistComponent"]
    },
    { path: 'messages',
        component: _messages_messages_component__WEBPACK_IMPORTED_MODULE_13__["MessagesComponent"]
    },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _listings_listings_component__WEBPACK_IMPORTED_MODULE_8__["ListingsComponent"],
                _listingid_listingid_component__WEBPACK_IMPORTED_MODULE_9__["ListingidComponent"],
                _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_11__["WishlistComponent"],
                _add_add_component__WEBPACK_IMPORTED_MODULE_12__["AddComponent"],
                _messages_messages_component__WEBPACK_IMPORTED_MODULE_13__["MessagesComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                ngx_order_pipe__WEBPACK_IMPORTED_MODULE_10__["OrderModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes)
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dataservice.service.ts":
/*!****************************************!*\
  !*** ./src/app/dataservice.service.ts ***!
  \****************************************/
/*! exports provided: DataserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataserviceService", function() { return DataserviceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var DataserviceService = /** @class */ (function () {
    function DataserviceService(http, router, route) {
        this.http = http;
        this.router = router;
        this.route = route;
    }
    DataserviceService.prototype.signinuser = function (data) {
        var _this = this;
        console.log(data);
        this.http.post('/Login', data).subscribe(function (data) {
            if (data['message']) {
                alert("Sorry wrong credentials");
            }
            _this.localstore(data);
        });
    };
    DataserviceService.prototype.getProducts = function () {
        return this.http.get('/api/products');
    };
    DataserviceService.prototype.getbypricelow = function () {
        return this.http.get('/api/products/filterbylow');
    };
    DataserviceService.prototype.getbypricehigh = function () {
        return this.http.get('/api/products/filterbyhigh');
    };
    DataserviceService.prototype.localstore = function (data) {
        console.log(data);
        localStorage.setItem('userId', data[0]['id']);
        localStorage.setItem('email', data[0]['email']);
        localStorage.setItem('password', data[0]['Password']);
        if (data.length == 1) {
            window.location.reload();
            this.route.navigate(['']);
            //console.log(data.length)
            alert("successful");
            // console.log(this.show)
        }
        else {
            window.alert("please enter correct details!!!");
        }
    };
    DataserviceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DataserviceService);
    return DataserviceService;
}());



/***/ }),

/***/ "./src/app/listingid/listingid.component.css":
/*!***************************************************!*\
  !*** ./src/app/listingid/listingid.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/listingid/listingid.component.html":
/*!****************************************************!*\
  !*** ./src/app/listingid/listingid.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p style=\"margin-top: 120px;\"></p>\n\n<div *ngFor=\"let item of list_id_pro\" style=\"margin-left: 10%\"> \n    <p *ngIf=\"(item.id == selected)\">\n        <button (click)= \"listingsMenu(do.id)\" style=\"background-color: white;\"><div class=\"col-4 card mx-2 p-4\" style=\"float: left; margin-left: 40px;  width: 280px;margin-top: 23px; text-align: center;  \"> \n            <img class=\"card-img-top\" [src]=\"'/myimage/'+item.id\" alt=\"Card image cap\" style=\"width:100%; height:190px\">\n            <h5 class=\"product-name\"><b>BookName: {{item.BookName}}</b></h5>\n            \n            <div class=\"product-manufacturer\"><b>AuthorName: {{item.AuthorName}}</b></div>\n            <div class=\"row\">\n                <div class=\"col m-3 p-3\" id=\"price\">\n                    <b> Price: Rs.{{item.price}}</b>\n                    <br>\n                    <p><b>Condition: {{item.condition}}</b></p>\n                    <hr>\n                   <p> <b>Description :</b> {{item.description}}</p>\n                    <button class=\"btn btn-primary \" (click)=\"sendMessage()\">Add to Wishlist</button><br><br>\n                   \n                </div>\n         \n            \n            </div>  <!-- close row-->\n            </div> </button>  \n    </p>\n</div>\n\n<br>\n<div style=\"margin-left: 10%;   border: 15px solid green; width:315px\">\n    <br>\n    <p style=\"text-align: center;font-size: 15px\"><b>Contact Seller</b></p>\n<input type=text placeholder=\"send message\" #messageInput style=\" margin : 0 auto;display: block\" ><br>\n<button id=\"submit\" type=\"submit\" value=\"submit\" class=\"btn btn-primary center\" style=\" margin : 0 auto;display: block;\" (click)=\"onSend(messageInput.value)\">Send Message</button>\n</div>"

/***/ }),

/***/ "./src/app/listingid/listingid.component.ts":
/*!**************************************************!*\
  !*** ./src/app/listingid/listingid.component.ts ***!
  \**************************************************/
/*! exports provided: ListingidComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingidComponent", function() { return ListingidComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dataservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dataservice.service */ "./src/app/dataservice.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListingidComponent = /** @class */ (function () {
    function ListingidComponent(_dataService, router, http, route) {
        this._dataService = _dataService;
        this.router = router;
        this.http = http;
        this.route = route;
    }
    ListingidComponent.prototype.getItems = function () {
        var _this = this;
        this._dataService.getProducts().subscribe(function (Prod) {
            _this.list_id_pro = Prod;
            console.log(_this.list_id_pro);
            console.log(_this.selected);
            //if(this.selected==)
            var myid = JSON.stringify(_this.list_id_pro);
        });
    };
    ListingidComponent.prototype.ngOnInit = function () {
        var _this = this;
        {
            this.router.paramMap.subscribe(function (params) {
                _this.selected = +(params.get('id'));
                _this.getItems();
            });
        }
    };
    ListingidComponent.prototype.sendMessage = function () {
        if (localStorage.getItem('userId')) {
            this.http.post('/api/wish', { User_id: localStorage.getItem('userId'), Product_id: this.selected }).subscribe(function (data) {
                console.log(data);
                if (data['message']) {
                    alert("You have already added to wishlist");
                }
                else {
                    alert("Successfully added to wishlist");
                }
            });
        }
        else {
            alert("please log in first");
        }
    };
    ListingidComponent.prototype.onSend = function (data) {
        console.log(data);
        this.http.post('/api/message', { userid: localStorage.getItem('userId'), productid: this.selected, sellerid: this.list_id_pro[0]['sellerId'], message: data }).subscribe(function (data) {
            console.log(data);
            if (data) {
                alert("message send Successfully");
            }
        });
    };
    ListingidComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-listingid',
            template: __webpack_require__(/*! ./listingid.component.html */ "./src/app/listingid/listingid.component.html"),
            styles: [__webpack_require__(/*! ./listingid.component.css */ "./src/app/listingid/listingid.component.css")]
        }),
        __metadata("design:paramtypes", [_dataservice_service__WEBPACK_IMPORTED_MODULE_2__["DataserviceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ListingidComponent);
    return ListingidComponent;
}());



/***/ }),

/***/ "./src/app/listings/listings.component.css":
/*!*************************************************!*\
  !*** ./src/app/listings/listings.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/listings/listings.component.html":
/*!**************************************************!*\
  !*** ./src/app/listings/listings.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top: 110px; width: 100%; height:400px;\" >\n  <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\" style=\"height: 400px;\">\n    <!-- Indicators -->\n    <ol class=\"carousel-indicators\">\n      <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n      <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n    </ol>\n\n    <!-- Wrapper for slides -->\n    <div class=\"carousel-inner\">\n      <div class=\"item active\">\n        <img src=\"https://image.freepik.com/free-vector/shopping-online-sale-background_23-2147509490.jpg\" alt=\"Los Angeles\" style=\"width:100%; height: 400px;\">\n      </div>\n\n      <div class=\"item\">\n        <img src=\"assets/books4.jpg\" alt=\"Chicago\" style=\"width:100%;height: 400px;\">\n      </div>\n    \n      <div class=\"item\">\n        <img src=\"assets/books1.jpg\" alt=\"New york\" style=\"width:100%;height:400px;\">\n      </div>\n    </div>\n\n    <!-- Left and right controls -->\n    <a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\">\n      <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">\n      <span class=\"glyphicon glyphicon-chevron-right\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </div>\n</div>\n<br>\n<!-- closing of slider-->\n<!--card in bootstrap-->\n<div class=\"container\" >\n<select  (change)=\"sortbyprice($event.target.value)\">\n    <option>Filter By Price:</option>\n    <!-- <option *ngFor=\"let item of list_id_pro | orderBy:{{list_id_pro.price}}\">\n         -->\n      <option [value]=1>Price Low to High</option>\n    <option [value]=2>Price High to Low</option>\n  </select> \n\n  <select name=\"bycondition\" (change)=\"sortFilter($event.target)\" style=\"margin-left:7%\">\n    <option *ngFor=\"let cond of bookcondition\" [value]=\"cond\">{{cond}}</option>\n  </select>\n\n  <!--Search by BookName-->\n  <input type=\"search\" id=\"login-password\"  placeholder=\"Search By Book Name\" [(ngModel)]=\"Book\" (change)=\"onSearchChange($event.target.value)\" style=\"margin-left:7%\" >\n  <button>Search</button>\n  <input type=\"search\" id=\"login-password\"  placeholder=\"Search By Author Name\"  (change)=\"onSearchAuthor($event.target.value)\"  style=\"margin-left:7%\">\n  <button>Search</button>\n</div>\n\n<!--card below-->\n\n<div class=\"container\">\n<div class=\"card\" style=\"float: left; margin-left: 40px;  width: 334px;margin-top: 19px; text-align: center;\" *ngFor=\"let do of products \" >\n    <button (click)= \"listingsMenu(do.id)\" style=\"background-color: white;\"><div class=\" card \" style=\"float: left; margin-left: 40px;  width: 280px;margin-top: 23px; text-align: center;  \">\n  <img class=\"card-img-top\" [src]=\"'/myimage/'+do.id\" alt=\"Card image cap\" style=\"width:100%; height:190px\">\n  <div class=\"card-body\">\n    <p class=\"card-title\"><b>BookName: {{do.BookName}}</b></p>\n    <p class=\"card-text\"><b> AuthorName: {{do.AuthorName}}</b></p>\n    <p class=\"card-text\"><b> Price: {{do.price}}</b></p>\n    <p class=\"card-text\"><b> Condition: {{do.condition}}</b></p>\n    <button class=\"btn btn-success\" (click)= \"listingsMenu(do.id)\">View Details</button>\n  </div><!--Close of ng body-->\n</div> </button>  \n\n</div> <!--Close of ng loop-->\n\n</div><!--Container Closed-->\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/listings/listings.component.ts":
/*!************************************************!*\
  !*** ./src/app/listings/listings.component.ts ***!
  \************************************************/
/*! exports provided: ListingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingsComponent", function() { return ListingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _dataservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dataservice.service */ "./src/app/dataservice.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListingsComponent = /** @class */ (function () {
    function ListingsComponent(_dataService, fb, http, router, route) {
        this._dataService = _dataService;
        this.fb = fb;
        this.http = http;
        this.router = router;
        this.route = route;
        this.textvalue = '';
        this.bookcondition = ["New", "Almost New", "Slight Damage", "Worn"];
    }
    ListingsComponent.prototype.getItems = function () {
        var _this = this;
        this._dataService.getProducts().subscribe(function (Prod) {
            _this.products = Prod;
            console.log(_this.products);
        });
    };
    ListingsComponent.prototype.ngOnInit = function () {
        this.loginform = this.fb.group({});
        this.filters = {
            condition: ""
        };
        this.getItems();
    };
    ListingsComponent.prototype.listingsMenu = function (id) {
        console.log(id);
        this.route.navigate(['listingid', id]);
    };
    ListingsComponent.prototype.sortFilter = function (shape) {
        var _this = this;
        this.filters = {
            condition: shape.value
        };
        console.log(this.filters);
        this.http.post('/api/products/filter', this.filters).subscribe(function (data) {
            _this.products = data;
            console.log(data);
        });
    };
    ListingsComponent.prototype.onSearchChange = function (book) {
        var _this = this;
        this.http.post('/api/products/filterbybook', { bookname: book }).subscribe(function (data) {
            _this.products = data;
            console.log(data);
        });
    };
    ListingsComponent.prototype.onSearchAuthor = function (author) {
        var _this = this;
        this.http.post('/api/products/filterbyAuthor', { authorname: author }).subscribe(function (data) {
            _this.products = data;
            console.log(data);
        });
    };
    ListingsComponent.prototype.sortbyprice = function (price) {
        var _this = this;
        if (price == 1) {
            this._dataService.getbypricelow().subscribe(function (Prod) {
                _this.products = Prod;
                console.log(_this.products);
            });
        }
        else if (price == 2) {
            this._dataService.getbypricehigh().subscribe(function (Prod) {
                _this.products = Prod;
                console.log(_this.products);
            });
        }
    };
    ListingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-listings',
            template: __webpack_require__(/*! ./listings.component.html */ "./src/app/listings/listings.component.html"),
            styles: [__webpack_require__(/*! ./listings.component.css */ "./src/app/listings/listings.component.css")]
        }),
        __metadata("design:paramtypes", [_dataservice_service__WEBPACK_IMPORTED_MODULE_2__["DataserviceService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ListingsComponent);
    return ListingsComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">    \n  <div id=\"loginbox\" style=\"margin-top:120px;\" class=\"mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2\">                    \n      <div class=\"panel panel-info\" >\n              <div class=\"panel-heading\">\n                  <div class=\"panel-title\">Sign In</div>\n                  <div style=\"float:right; font-size: 80%; position: relative; top:-10px\"></div>\n              </div>     \n\n              <div style=\"padding-top:30px\" class=\"panel-body\" >\n\n                  <div style=\"display:none\" id=\"login-alert\" class=\"alert alert-danger col-sm-12\"></div>\n                      \n                  <form id=\"loginform\" name=\"loginform\"  class=\"form-horizontal\" [formGroup]=\"loginform\" (ngSubmit)=\"onLoginSubmit()\" >\n                              \n                      <div style=\"margin-bottom: 25px\" class=\"input-group\">\n                                  <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n                                  <input id=\"login-username\" type=\"email\" formControlName=\"email\" class=\"form-control\" name=\"username\" value=\"\" placeholder=\" email\">                                        \n                              </div>\n                          \n                      <div style=\"margin-bottom: 25px\" class=\"input-group\">\n                                  <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>\n                                  <input id=\"login-password\" type=\"password\" formControlName=\"password\" class=\"form-control\" name=\"password\" placeholder=\"password\">\n                              </div>\n                              \n\n                          \n                      <div class=\"input-group\">\n                                <div class=\"checkbox\">\n                                  <label>\n                                    <input id=\"login-remember\" type=\"checkbox\" name=\"remember\" value=\"1\"> Remember me\n                                  </label>\n                                </div>\n                              </div>\n                              <hr>\n\n                          <div style=\"margin-top:10px\" class=\"form-group\">\n                              <!-- Button -->\n\n                              <div class=\"col-sm-12 controls\">\n                                <button id=\"submit\" type=\"submit\" value=\"submit\" class=\"btn btn-primary center\">Login</button>\n                                \n\n                              </div>\n                        \n                          </div>\n\n\n                          \n                      </form>     \n\n\n                  </div>                     \n              </div>  \n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _dataservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dataservice.service */ "./src/app/dataservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, _dataService, http) {
        this.fb = fb;
        this._dataService = _dataService;
        this.http = http;
    }
    ;
    LoginComponent.prototype.ngOnInit = function () {
        this.loginform = this.fb.group({
            email: "",
            password: "",
        });
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var values = this.loginform.value;
        console.log(values);
        this._dataService.signinuser(values);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _dataservice_service__WEBPACK_IMPORTED_MODULE_3__["DataserviceService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/messages/messages.component.css":
/*!*************************************************!*\
  !*** ./src/app/messages/messages.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/messages/messages.component.html":
/*!**************************************************!*\
  !*** ./src/app/messages/messages.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p style=\"margin-top: 190px;\"></p>\n<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th>Customer Email</th>\n      <th>BookName</th>\n      <th>Authors Name</th>\n      <th>Message</th>\n    </tr>\n  </thead>\n  <tbody *ngFor=\"let i of wishfetchmessage\">\n    <tr>\n      <td>{{i.email}}</td>\n      <td>{{i.BookName}}</td>\n      <td>{{i.AuthorName}}</td>\n      <td>{{i.message}}</td>\n    </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(http) {
        this.http = http;
    }
    MessagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.post('/api/message/fetchmessages', { sellerid: localStorage.getItem('userId') }).subscribe(function (data) {
            console.log(data);
            _this.wishfetchmessage = data;
            if (data['message']) {
                alert("You dont have any message to View");
            }
            console.log(_this.wishfetchmessage);
        });
    };
    MessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.css */ "./src/app/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"margin-top: 100px;\">\n    <div class=\"col-md-6 col-sm-12 col-lg-6 col-md-offset-3\">\n    <div class=\"panel panel-primary\">\n      <div class=\"panel-heading\">Enter Your Details Here\n      </div>\n      <div class=\"panel-body\">\n        <form name=\"myform\" [formGroup]=\"myform\" (ngSubmit)=\"onSubmit()\">\n          <div class=\"form-group\">\n            <label for=\"myName\">Name *</label>\n            <input id=\"myName\" name=\"name\" formControlName=\"name\" class=\"form-control\" type=\"text\" data-validation=\"required\"  required>\n            <span id=\"error_name\" class=\"text-danger\"></span>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"lastname\">Email Address*</label>\n            <input id=\"Email\" name=\"email\" formControlName=\"email\" class=\"form-control\" type=\"email\" data-validation=\"email\" pattern=\"\\w+([-+.']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*\" required>\n            <span id=\"error_lastname\" class=\"text-danger\"></span>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"lastname\">Password*</label>\n            <input id=\"password\" name=\"password\" formControlName=\"password\" class=\"form-control\" type=\"password\" data-validation=\"password\" required>\n            <span id=\"error_lastname\" class=\"text-danger\"></span>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"age\">College </label>\n            <input id=\"college\" name=\"college\" formControlName=\"college\"  class=\"form-control\" type=\"text\" min=\"1\" pattern=\"^[a-zA-Z\\s]+$\" required>\n            <span id=\"error_age\" class=\"text-danger\"></span>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"dob\">Address</label>\n            <input type=\"text\" name=\"address\" id=\"address\" formControlName=\"address\" class=\"form-control\" required>\n            <span id=\"error_dob\" class=\"text-danger\"></span>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"dob\">Phone Number</label>\n            <input type=\"number\" name=\"phone\" id=\"phone\" formControlName=\"phone\" class=\"form-control\" placeholder=\"Please Enter 10 Digit Number\" pattern=\"[0-9]{10}\" required>\n            <span id=\"error_dob\" class=\"text-danger\"></span>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"gender\">Gender</label>\n            <select name=\"gender\" id=\"gender\" class=\"form-control\" formControlName=\"gender\" required>\n              <option selected>Male</option>\n              <option>Female</option>\n            </select>\n            <span id=\"error_gender\" class=\"text-danger\"></span>\n          </div>\n          \n          \n          <button id=\"submit\" type=\"submit\" value=\"submit\" [disabled]=\"myform.invalid\" class=\"btn btn-primary center\">Submit</button>\n      \n        </form>\n  \n      </div>\n    </div>\n  </div>\n  </div>\n  "

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _dataservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dataservice.service */ "./src/app/dataservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var idtoken = localStorage.getItem("id_token");
var SignupComponent = /** @class */ (function () {
    function SignupComponent(fb, http, data, route) {
        this.fb = fb;
        this.http = http;
        this.data = data;
        this.route = route;
        this.fileToUpload = null;
    }
    ;
    SignupComponent.prototype.ngOnInit = function () {
        this.myform = this.fb.group({
            name: "",
            email: "",
            password: "",
            college: "",
            address: "",
            phone: "",
            gender: "",
        });
    };
    SignupComponent.prototype.onSubmit = function () {
        var values = this.myform.value;
        console.log(values);
        this.postdata(values);
    };
    SignupComponent.prototype.postdata = function (data) {
        var _this = this;
        this.http.post('/api/users', data).subscribe(function (data) {
            console.log(data);
            if (data) {
                alert("Signup Sucessfull");
                _this.route.navigate(['Login']);
            }
        });
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _dataservice_service__WEBPACK_IMPORTED_MODULE_3__["DataserviceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/wishlist/wishlist.component.css":
/*!*************************************************!*\
  !*** ./src/app/wishlist/wishlist.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/wishlist/wishlist.component.html":
/*!**************************************************!*\
  !*** ./src/app/wishlist/wishlist.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p style=\"margin-top: 113px;\">\n \n</p>\n\n<div class=\"container\">\n     \n  <div class=\"col-4 card mx-2 p-4\" style=\"float: left; margin-left: 40px;  width: 334px;margin-top: 19px; text-align: center; border: 1px solid black;\" *ngFor=\"let do of wish\" > \n        <img class=\"card-img-top\" [src]=\"'http://localhost:2000/myimage/'+do.id\" alt=\"Card image cap\" style=\"width:90%; height:190px ;margin-top:10px\">\n     <h4 class=\"product-name\">{{do.BookName}}</h4>\n     \n     <div class=\"product-book\">{{do.AuthorName}}</div>\n     <div class=\"row\">\n         <div class=\"col m-3 p-3\" id=\"price\">\n             <b> Rs.{{do.price}}</b>\n             <br>\n             <p>{{do.condition}}</p>\n            \n            \n         </div>\n  \n     \n     </div>  <!-- close row-->\n     <button (click)=\"remove_book(do.id)\" class=\"btn btn-primary\">Romove item</button> \n     \n     </div> \n    \n </div>` <!-- close for loop-->\n\n"

/***/ }),

/***/ "./src/app/wishlist/wishlist.component.ts":
/*!************************************************!*\
  !*** ./src/app/wishlist/wishlist.component.ts ***!
  \************************************************/
/*! exports provided: WishlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistComponent", function() { return WishlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dataservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dataservice.service */ "./src/app/dataservice.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WishlistComponent = /** @class */ (function () {
    function WishlistComponent(data, http) {
        this.data = data;
        this.http = http;
    }
    WishlistComponent.prototype.ngOnInit = function () {
        this.fun();
    };
    WishlistComponent.prototype.fun = function () {
        var _this = this;
        this.http.post('/api/wish/wishlistfetch', { User_id: localStorage.getItem('userId') }).subscribe(function (data) {
            // console.log(data)
            _this.wish = data;
        });
    };
    WishlistComponent.prototype.remove_book = function (data) {
        var _this = this;
        this.http.post('/api/wish/wishlist_destroy', { User_id: localStorage.getItem('userId'), Product_id: data }).subscribe(function (data) {
            // window.location.reload();
            _this.fun();
        });
    };
    WishlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wishlist',
            template: __webpack_require__(/*! ./wishlist.component.html */ "./src/app/wishlist/wishlist.component.html"),
            styles: [__webpack_require__(/*! ./wishlist.component.css */ "./src/app/wishlist/wishlist.component.css")]
        }),
        __metadata("design:paramtypes", [_dataservice_service__WEBPACK_IMPORTED_MODULE_1__["DataserviceService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], WishlistComponent);
    return WishlistComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\bookshop\bookshop\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map