webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/album/album.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h4{\n    color:royalblue;\n}\ndiv{\n    background-color:lightgrey;\n    margin:10px;\n}\nimg{\n    display:-webkit-box;\n    display:-ms-flexbox;\n    display:flex;\n    width: 100%;\n    height: 100%\n}\n\nbutton{\n    background-color:pink;\n    width:100px;\n    height:50px; \n}\n\n.deleteButton{\n    background-color:crimson;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/album/album.component.html":
/***/ (function(module, exports) {

module.exports = "<div> \n  <h4>This is album component</h4>\n  <button (click)=\"getAlbum()\">Get Album</button>\n</div>\n\n<div class=\"panel panel-default\" *ngFor=\"let album of albums\">\n  <p>Album name: {{album.albumName}} <button class=\"deleteButton\" (click)=\"deleteAlbum(album.albumID)\">Delete Album</button> </p>\n  \n  <div class=\"panel panel-default\" *ngFor=\"let album of album.images\">\n    <img src= {{album}}>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/album/album.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlbumComponent = (function () {
    function AlbumComponent(http) {
        this.http = http;
        this.albums = [];
    }
    AlbumComponent.prototype.ngOnInit = function () {
    };
    AlbumComponent.prototype.getAlbum = function () {
        var _this = this;
        this.http.get('/album')
            .subscribe(function (response) {
            response.json().forEach(function (album) {
                console.log(album.url.split(','));
                var obj = {
                    albumID: album.id,
                    albumName: album.albumName,
                    images: album.url.split(',')
                };
                _this.albums.push(obj);
            });
        }, function (err) {
            console.log(err);
        });
    };
    AlbumComponent.prototype.deleteAlbum = function (id) {
        this.http.delete('/deletealbum/' + id)
            .subscribe(function (response) {
            response.json().forEach(function (album) {
                console.log(id);
                console.log(album.url.split(','));
                var obj = {
                    albumID: album.id,
                    albumName: album.albumName,
                    images: album.url.split(',')
                };
            });
            console.log(response),
                function (error) {
                    console.log(error);
                };
        });
        this.albums = this.albums.filter(function (n) {
            return n.albumID != id;
        });
        console.log(this.albums);
    };
    return AlbumComponent;
}());
AlbumComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-album',
        template: __webpack_require__("../../../../../src/app/album/album.component.html"),
        styles: [__webpack_require__("../../../../../src/app/album/album.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], AlbumComponent);

var _a;
//# sourceMappingURL=album.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* unused harmony export routingComponents */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: '/signup', pathMatch: 'full' },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_3__signup_signup_component__["a" /* SignupComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: 'oauth2callback', redirectTo: '/login' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
        ]
    })
], AppRoutingModule);

var routingComponents = [__WEBPACK_IMPORTED_MODULE_3__signup_signup_component__["a" /* SignupComponent */], __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */]];
//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".appDiv{\n    background-color:rgb(233, 201, 114);\n    margin:10px 10px 10px 10px;\n}\nh1{\n    font-family: Arial, Helvetica, sans-serif\n}\n\nh4{\n    color:royalblue;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"appDiv\" style=\"text-align:center\">\n  <h4>This is app component</h4>\n  <h1>\n     {{title}}\n  </h1>\n  <h3>NO MORE SHATTERED MEMORIES</h3>\n  <h3>THE SMART WAY TO ORGANIZE YOUR PHOTOS</h3>\n\n  <app-login></app-login>\n\n<!-- <nav>\n  <a routerLink=\"/\" routerLinkActive=\"inactive\">signUp</a>\n</nav> --> \n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__photos_service__ = __webpack_require__("../../../../../src/app/photos.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(photosService) {
        this.photosService = photosService;
        this.title = 'fotosort';
        //  firebase.initializeApp({
        //         apiKey: "AIzaSyDnwljBbcXSBNz_SgqTICaZ6B6Rg5PJr0g",
        //         authDomain: "noonewillnotice-2e8e6.firebaseapp.com",
        //         databaseURL: "https://noonewillnotice-2e8e6.firebaseio.com",
        //         projectId: "noonewillnotice-2e8e6",
        //         storageBucket: "noonewillnotice-2e8e6.appspot.com",
        //         messagingSenderId: "276231888981"
        //     });
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__photos_service__["a" /* PhotosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__photos_service__["a" /* PhotosService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__photos_service__ = __webpack_require__("../../../../../src/app/photos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__token_service__ = __webpack_require__("../../../../../src/app/token.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__username_service__ = __webpack_require__("../../../../../src/app/username.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__authguard_service__ = __webpack_require__("../../../../../src/app/authguard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__members_members_component__ = __webpack_require__("../../../../../src/app/members/members.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__photos_photos_component__ = __webpack_require__("../../../../../src/app/photos/photos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__filter_pipe__ = __webpack_require__("../../../../../src/app/filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__album_album_component__ = __webpack_require__("../../../../../src/app/album/album.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_12__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_13__signup_signup_component__["a" /* SignupComponent */],
            __WEBPACK_IMPORTED_MODULE_14__members_members_component__["a" /* MembersComponent */],
            __WEBPACK_IMPORTED_MODULE_16__photos_photos_component__["a" /* PhotosComponent */],
            __WEBPACK_IMPORTED_MODULE_17__filter_pipe__["a" /* FilterPipe */],
            __WEBPACK_IMPORTED_MODULE_18__album_album_component__["a" /* AlbumComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_15__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_9_angularfire2__["a" /* AngularFireModule */].initializeApp({
                apiKey: "AIzaSyDnwljBbcXSBNz_SgqTICaZ6B6Rg5PJr0g",
                authDomain: "noonewillnotice-2e8e6.firebaseapp.com",
                databaseURL: "https://noonewillnotice-2e8e6.firebaseio.com",
                projectId: "noonewillnotice-2e8e6",
                storageBucket: "noonewillnotice-2e8e6.appspot.com",
                messagingSenderId: "276231888981"
            }),
            __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__["a" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_11_angularfire2_auth__["a" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__photos_service__["a" /* PhotosService */], __WEBPACK_IMPORTED_MODULE_6__token_service__["a" /* TokenService */], __WEBPACK_IMPORTED_MODULE_7__username_service__["a" /* UsernameService */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_8__authguard_service__["a" /* AuthGuard */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/authguard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AuthGuard = (function () {
    function AuthGuard() {
    }
    AuthGuard.prototype.canActivate = function () {
        console.log('AuthGuard#canActivate called');
        // Authentication logic here.
        return true;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], AuthGuard);

//# sourceMappingURL=authguard.service.js.map

/***/ }),

/***/ "../../../../../src/app/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (photolinks, term) {
        var emptyArray = [{ image: 'http://www.ellagret.gr/images/no-photo.jpg', tags: [] }];
        if (!term)
            return photolinks;
        // return photolinks
        return photolinks.filter(function (link) { return link.tags.toString().toLowerCase().includes(term.toLowerCase()); });
    };
    return FilterPipe;
}());
FilterPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'filter'
    })
], FilterPipe);

//# sourceMappingURL=filter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div{\n  background-color:lightgreen;\n  margin:10px 10px ; \n  \n}\nh2{\n  text-align:center;\n  color:navy;\n}\n\nh4{\n  color:royalblue;\n}\n\nbutton{\n    width: 300px;\n    height: 70px;\n    background-color: lightskyblue; \n    margin: 10px 10px 10px 10px;\n    font-size: 20px\n}\n.example-container {\n  width: 500px;\n  height: 300px;\n  border: 1px solid rgba(0, 0, 0, 0.5);\n}\n\n.example-sidenav-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 100%;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n.example-sidenav {\n  padding: 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div><h4>This is login component</h4>\n<h2>Welcome to your homepage, {{username}}!</h2>\n<div>\n  <br>\n  <button type='button' class='btn btn-primary' (click)='clearPhoto()'>Clear Clarifai Photos</button>\n</div>\n\n</div>\n<app-album></app-album>\n\n<app-photos></app-photos> \n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__photos_service__ = __webpack_require__("../../../../../src/app/photos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__token_service__ = __webpack_require__("../../../../../src/app/token.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__username_service__ = __webpack_require__("../../../../../src/app/username.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(userService, photosService, http, tokenService) {
        this.userService = userService;
        this.photosService = photosService;
        this.http = http;
        this.tokenService = tokenService;
        this.photolinks = [];
        this.username = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.getUsername();
    };
    LoginComponent.prototype.clearPhoto = function () {
        this.http.get('/clearClarifai').subscribe(function (res) {
            console.log(res.json());
        }, function (err) { });
    };
    LoginComponent.prototype.getUsername = function () {
        var _this = this;
        this.userService.obtainUserName().subscribe(function (res) {
            console.log("This is from getUsername()" + JSON.parse(JSON.stringify(res.json())).user);
            return _this.username = JSON.parse(JSON.stringify(res.json())).user;
        }, function (err) {
            console.log('error occurs');
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__username_service__["a" /* UsernameService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__username_service__["a" /* UsernameService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__photos_service__["a" /* PhotosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__photos_service__["a" /* PhotosService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__token_service__["a" /* TokenService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__token_service__["a" /* TokenService */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/members/members.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/members/members.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  members works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/members/members.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MembersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MembersComponent = (function () {
    function MembersComponent() {
    }
    MembersComponent.prototype.ngOnInit = function () {
    };
    return MembersComponent;
}());
MembersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-members',
        template: __webpack_require__("../../../../../src/app/members/members.component.html"),
        styles: [__webpack_require__("../../../../../src/app/members/members.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MembersComponent);

//# sourceMappingURL=members.component.js.map

/***/ }),

/***/ "../../../../../src/app/photos.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotosService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__token_service__ = __webpack_require__("../../../../../src/app/token.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PhotosService = (function () {
    function PhotosService(http, tokenService) {
        this.http = http;
        this.tokenService = tokenService;
        this.photolinks = [];
        // console.log(this.tokenService.token);
        // this.token = JSON.parse(localStorage.getItem('token'));
    }
    PhotosService.prototype.ngOnInit = function () {
    };
    PhotosService.prototype.onGetPhoto = function () {
        return this.http.get('/getphoto');
        // this.http.get('/getphoto').subscribe((res)=>{
        //   this.photolinks = [];
        //   res.json()['links'].forEach((album)=>{
        //     album.forEach((link)=>{
        //       this.photolinks.push(link)
        //     })
        //   })
        // }, (err)=>{})
    };
    return PhotosService;
}());
PhotosService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__token_service__["a" /* TokenService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__token_service__["a" /* TokenService */]) === "function" && _b || Object])
], PhotosService);

var _a, _b;
//# sourceMappingURL=photos.service.js.map

/***/ }),

/***/ "../../../../../src/app/photos/photos.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div{\n    display:block;\n    background-color:lightgoldenrodyellow;\n    margin:10px 10px 10px 10px; \n}\nbutton{\n    width:100px;\n    height:50px;\n    background-color:lightpink;\n}\nimg{\n    display:block;\n    width: 40%;\n    height: 40%;\n}\n\nh4{\n    color:royalblue;\n}\n\n.tagButton{\n    width:50px;\n    height:20px;\n    background-color: yellow;\n    text-align:center;\n    transition: 0.5s;\n    -webkit-transition: 0.5s;\n}\n\n.tagDiv{\n    display:-webkit-inline-box;\n    display:-ms-inline-flexbox;\n    display:inline-flex;\n}\n\n.tagDivDiv{\n    display:-webkit-box;\n    display:-ms-flexbox;\n    display:flex;\n}\n\n#cross {\n    height: 20px;\n    width: 20px;\n}\n\n#crossbutton{\n    width: 25px;\n    height: 25px;\n    margin-right: 2.5px;\n    opacity: 0;\n    transition: 0.5s;\n    -webkit-transition: 0.5s;\n}\n\n#crossbutton:hover{\n    width: 25px;\n    height: 25px;\n    margin-right: 2.5px;\n    opacity: 1;\n    transition: 0.5s;\n    -webkit-transition: 0.5s;\n}\n\n.strike {\n    text-decoration: line-through;\n}\n\n.switch {\n  width: 60px;\n  height: 34px;\n}\n\n.switch .taginput {display:none;}\n\n.slider {\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ffff66;\n  transition: .4s;\n}\n\n.slider:before {\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  transition: .4s;\n}\n\n.taginput:checked + .slider {\n  background-color: #2196F3;\n}\n\n.taginput:focus + .slider {\n  box-shadow: 0 0 1px #2196F3;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/photos/photos.component.html":
/***/ (function(module, exports) {

module.exports = "<div><h4>This is photo component</h4>\n<h3>To add photo to a new album:<br>\n1) click to select, click again to deselect<br>\n2) Enter album name <br>\n3) Click \"Get Album\"above to retrieve your album\"</h3>\n<button type='button' class='btn btn-primary' (click)='getPhoto()'>Get my Photos from Google</button>\n<input [ngStyle]=\"createAlbumError\" [(ngModel)]=\"albumName\" placeholder=\"Album Name\">\n<button (click)=\"createAlbum()\">Create Album</button>\n\n<input [(ngModel)]=\"term\" placeholder=\"Add Keyword\">\n<button (click)=\"addTerm()\">Enter</button>\n\n<div *ngFor='let term of searchTerm'>\n  <button [ngStyle]=\"term.myStyle\" (click)=\"changeStyle(term.term)\"> {{term.term}} <button (click)=\"deleteTag(term.term)\" id=\"crossbutton\"><img id=\"cross\" src=\"https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/cross-24-512.png\"></button></button>\n</div> \n</div>\n <!-- <div *ngFor='let term of searchTerm' class=\"slider\">\n  <input type='checkbox' class='taginput'> {{term}} <button (click)=\"deleteTag(term)\" id=\"crossbutton\"><img id=\"cross\" src=\"https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/cross-24-512.png\"></button>\n</div>  -->\n\n\n<!-- <label *ngFor='let term of searchTerm' class=\"switch\">\n  <input type=\"checkbox\" class='taginput'> {{term}} <button (click)=\"deleteTag(term)\" id=\"crossbutton\"><img id=\"cross\" src=\"https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/cross-24-512.png\"></button>\n  <span class=\"slider\"></span>\n</label> -->\n\n<!-- <input [ngStyle]=\"myStyle\" type=\"button\" value=\"set color\" (click)=\"changeStyle()\"> -->\n<!-- <button [ngStyle]=\"myStyle\" (click)=\"changeStyle()\">SET COLOR</button> -->\n\n <!-- <form>\n  Search Box: <input type='text' placeholder=\"search\" name=\"term\" (input)=\"onSearch($event)\">\n</form>  -->\n\n <span>\n  <img *ngIf=\"loading\" src=\"https://gifimage.net/wp-content/uploads/2017/09/animated-gif-loading-12.gif\">\n</span> \n\n\n <div class=\"panel panel-default\" *ngFor=\"let link of photos | filter:term\" (click)=\"addLink(link.image)\">\n    <img src= {{link.image}}>\n\n      <div class=\"tagDiv\" *ngFor=\"let tag of link.tags\">\n          <div class=\"tagDivDiv\"> \n            <button class=\"tagButton\">{{tag}}</button> \n          </div>\n      </div>\n</div>\n\n  "

/***/ }),

/***/ "../../../../../src/app/photos/photos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__photos_service__ = __webpack_require__("../../../../../src/app/photos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_underscore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { BrowserModule } from '@angular/platform-browser';
// import { ReactiveFormsModule } from '@angular/forms'; 
// import { FormControl,FormGroup, Validators } from '@angular/forms';
// import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'; 
// import { MatDialogModule } from '@angular/material/dialog';
// import { OverlayModule } from '@angular/cdk/overlay'
var PhotosComponent = (function () {
    function PhotosComponent(http, photosService /*, public dialog: MatDialog*/) {
        this.http = http;
        this.photosService = photosService; /*, public dialog: MatDialog*/
        this.term = '';
        this.searchTerm = [];
        this.searchConfirm = [];
        this.photoURLyouwanttoadd = [];
        this.albumName = '';
        this.loading = false;
        this.createAlbumError = {
            "border-color": "white"
        };
    }
    PhotosComponent.prototype.ngOnInit = function () {
    };
    // onSearch(e){
    //   this.term = e.target.value;
    // }
    PhotosComponent.prototype.getPhoto = function () {
        var _this = this;
        //using /getphoto route
        console.log('getPhoto from Google clicked');
        this.photosService.onGetPhoto().subscribe(function (res) {
            _this.photolinks = res.json()['links'];
            _this.photos = _this.photolinks;
        }, function (err) {
            console.log('get photo error occurs!');
        });
    };
    PhotosComponent.prototype.changeStyle = function (term) {
        if (this.searchConfirm.includes(term)) {
            this.searchConfirm = this.searchConfirm.filter(function (n) { return n != term; });
            this.searchTerm.forEach(function (T) {
                if (T.term == term) {
                    T.myStyle = {
                        background: 'lightpink'
                    };
                }
            });
        }
        else {
            this.searchConfirm.push(term);
            this.searchTerm.forEach(function (T) {
                if (T.term == term) {
                    T.myStyle = {
                        background: 'yellow'
                    };
                }
            });
        }
        this.filterPhoto();
    };
    PhotosComponent.prototype.addTerm = function () {
        var obj = {
            term: this.term,
            myStyle: {
                background: 'yellow'
            }
        };
        if (!this.searchTerm.map(function (term) { return term.term; }).includes(this.term)) {
            this.searchTerm.push(obj);
            this.searchConfirm.push(this.term);
        }
        this.term = '';
        this.filterPhoto();
    };
    PhotosComponent.prototype.deleteTag = function (tag) {
        this.searchTerm = this.searchTerm.filter(function (n) {
            return n.term != tag;
        });
        this.searchConfirm = this.searchConfirm.filter(function (n) {
            return n != tag;
        });
        console.log(this.searchConfirm);
        this.filterPhoto();
    };
    PhotosComponent.prototype.createAlbum = function () {
        console.log(this.albumName);
        if (this.albumName) {
            this.createAlbumError = {
                "border-color": "white"
            };
            this.http.post('/createalbum', { albumName: this.albumName, url: this.photoURLyouwanttoadd }).subscribe(function (res) { }, function (err) { });
        }
        else {
            this.createAlbumError = {
                "border-color": "red"
            };
        }
    };
    PhotosComponent.prototype.addLink = function (link) {
        if (!this.photoURLyouwanttoadd.includes(link)) {
            this.photoURLyouwanttoadd.push(link);
        }
        else {
            this.photoURLyouwanttoadd = this.photoURLyouwanttoadd.filter(function (n) {
                return n != link;
            });
        }
        console.log(this.photoURLyouwanttoadd);
        this.filterPhoto();
    };
    PhotosComponent.prototype.filterPhoto = function () {
        var _this = this;
        this.photos = this.photolinks.filter(function (link) {
            if ((__WEBPACK_IMPORTED_MODULE_3_underscore__["intersection"](link.tags, _this.searchConfirm)).length == _this.searchConfirm.length) {
                return link;
            }
        });
    };
    return PhotosComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], PhotosComponent.prototype, "photolinks", void 0);
PhotosComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-photos',
        template: __webpack_require__("../../../../../src/app/photos/photos.component.html"),
        styles: [__webpack_require__("../../../../../src/app/photos/photos.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__photos_service__["a" /* PhotosService */] /*, public dialog: MatDialog*/ !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__photos_service__["a" /* PhotosService */] /*, public dialog: MatDialog*/) === "function" && _b || Object])
], PhotosComponent);

var _a, _b;
//# sourceMappingURL=photos.component.js.map

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div{\n    background-color:lightblue;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<button type='button' class='btn btn-primary' (click)='signUp()'>Sign Up with Google</button>\n"

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__token_service__ = __webpack_require__("../../../../../src/app/token.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = (function () {
    function SignupComponent(router, tokenService, http) {
        this.router = router;
        this.tokenService = tokenService;
        this.http = http;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.signUp = function () {
        var _this = this;
        this.tokenService.onCheckToken().subscribe(function (res) {
            if (res.json()) {
                _this.router.navigateByUrl('/login');
            }
            else {
                _this.tokenService.onSignUp();
            }
        }, function (err) {
            console.log(err);
        });
        // this.http.get('/checktoken').subscribe((res)=>{
        //   if(res.json()){
        //     console.log(res.json())
        //   } else {
        //   }
        // }, (err)=>{
        //   this.tokenService.onSignUp();
        // })
    };
    ;
    return SignupComponent;
}());
SignupComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-signup',
        template: __webpack_require__("../../../../../src/app/signup/signup.component.html"),
        styles: [__webpack_require__("../../../../../src/app/signup/signup.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__token_service__["a" /* TokenService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__token_service__["a" /* TokenService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]) === "function" && _c || Object])
], SignupComponent);

var _a, _b, _c;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ "../../../../../src/app/token.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_picasa__ = __webpack_require__("../../../../picasa/src/picasa.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_picasa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_picasa__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TokenService = (function () {
    function TokenService(/*private photosService:PhotosService,*/ http, router) {
        this.http = http;
        this.router = router;
    }
    TokenService.prototype.onCheckToken = function () {
        return this.http.get('/checktoken');
    };
    TokenService.prototype.onSignUp = function () {
        window.location.href = '/auth/google';
    };
    TokenService.prototype.oonSignUp = function () {
        var picasa = new __WEBPACK_IMPORTED_MODULE_4_picasa__();
        var config = {
            clientId: '37970128122-78lisq0ssc0i18jk2b49stl9m89d1mv5.apps.googleusercontent.com',
            redirectURI: 'http://localhost:8080/oauth2callback'
        };
        var authURL = picasa.getAuthURL(config);
        window.location.href = authURL;
    };
    TokenService.prototype.ooonSignUp = function () {
        var _this = this;
        var provider = new __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"].GoogleAuthProvider();
        provider.addScope('profile');
        provider.addScope('email');
        __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]()
            .signInWithPopup(provider)
            .then(function (result) {
            // This gives you a Google Access Token.
            var token = result.credential.accessToken;
            localStorage.clear();
            localStorage.setItem('accessToken', token);
            // The signed-in user info.
            var user = result.user.email;
            console.log(user);
            // This checks the token
            // console.log(token)
            // console.log(this.photosService.token);
            // }).then(()=>{
            //     this.token = (localStorage.getItem('token'));
            //     // console.log(this.token);
            //     this.http.post('/user/login', JSON.parse(this.token)).subscribe((res)=>{
            //       console.log(this.token);
            //       // console.log(res.json())
            //     },(err)=>{
            //           alert("You are not logged in. Dude!");
            //     });
        }).then(function () {
            _this.router.navigateByUrl('/login');
        }).catch(function (err) {
            console.log(err);
            _this.router.navigateByUrl('');
        });
    };
    return TokenService;
}());
TokenService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _b || Object])
], TokenService);

var _a, _b;
//# sourceMappingURL=token.service.js.map

/***/ }),

/***/ "../../../../../src/app/username.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsernameService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__token_service__ = __webpack_require__("../../../../../src/app/token.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsernameService = (function () {
    function UsernameService(http, tokenService) {
        this.http = http;
        this.tokenService = tokenService;
    }
    UsernameService.prototype.obtainUserName = function () {
        console.log(' username service working');
        return this.http.get('/username');
    };
    return UsernameService;
}());
UsernameService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__token_service__["a" /* TokenService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__token_service__["a" /* TokenService */]) === "function" && _b || Object])
], UsernameService);

var _a, _b;
//# sourceMappingURL=username.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    HIHI: 'HIHI',
    host: 'localhost:8080'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills__ = __webpack_require__("../../../../../src/polyfills.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/polyfills.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es7_reflect__ = __webpack_require__("../../../../core-js/es7/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_zone_js_dist_zone__ = __webpack_require__("../../../../zone.js/dist/zone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_zone_js_dist_zone__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/weak-map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following for the Reflect API. */
// import 'core-js/es6/reflect';
/** Evergreen browsers require these. **/
// Used for reflect-metadata in JIT. If you use AOT (and only Angular decorators), you can remove.

/**
 * Required to support Web Animations `@angular/platform-browser/animations`.
 * Needed for: All but Chrome, Firefox and Opera. http://caniuse.com/#feat=web-animation
 **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */
/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
 */
// import 'intl';  // Run `npm install --save intl`.
/**
 * Need to import at least one locale-data with intl.
 */
// import 'intl/locale-data/jsonp/en';
//# sourceMappingURL=polyfills.js.map

/***/ }),

/***/ "../../../../har-validator/node_modules/ajv/lib recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../har-validator/node_modules/ajv/lib recursive";

/***/ }),

/***/ "../../../../har-validator/node_modules/ajv/lib/compile recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../har-validator/node_modules/ajv/lib/compile recursive";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map