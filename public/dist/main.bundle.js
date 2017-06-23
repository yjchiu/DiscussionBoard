webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__topic_topic_component__ = __webpack_require__("../../../../../src/app/topic/topic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// import { {{Players}}Component } from './{{players}}/{{players}}.component';
var routes = [
    { path: '', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'topic/:id', component: __WEBPACK_IMPORTED_MODULE_4__topic_topic_component__["a" /* TopicComponent */] },
    { path: 'user/:id', component: __WEBPACK_IMPORTED_MODULE_5__user_user_component__["a" /* UserComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container{\n    border: 2px solid black;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/ng2-bootstrap/x.x.x/ng2-bootstrap.min.js\"></script>\n<link href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css\" rel=\"stylesheet\">\n\n\n<div class=\"container\">\n   <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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
    function AppComponent(_http) {
        this._http = _http;
        this.users = [];
        this.getUsers();
        console.log("content:/// refreshed!!come here again ", this.users);
    }
    AppComponent.prototype.getUsers = function () {
        var _this = this;
        console.log("null users in parent: ", this.users);
        this._http.retrieveAll()
            .then(function (data) {
            _this.users = data.reverse();
            // console.log("content: ", this.users);
        })
            .catch(function (err) { console.log(err); });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_cookie_services_cookies_service__ = __webpack_require__("../../../../angular2-cookie/services/cookies.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__topic_topic_component__ = __webpack_require__("../../../../../src/app/topic/topic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__user_user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_10__topic_topic_component__["a" /* TopicComponent */],
            __WEBPACK_IMPORTED_MODULE_11__user_user_component__["a" /* UserComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5_angular2_cookie_services_cookies_service__["CookieService"], __WEBPACK_IMPORTED_MODULE_4__http_service__["a" /* HttpService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".red{\n    color: red;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <h3>Welcome, {{ name }} !</h3>\n  <ul class=\"list-inline\">\n    <li><a [routerLink]=\"['/dashboard']\">Dashboard</a></li>\n    <li><a (click)=\"logOut()\">Logout</a></li>\n  </ul>\n    <table class=\"table table-bordered table-striped\">\n      <thead>\n        <tr>\n          <td>Category</td>\n          <td>Topic</td>\n          <td>User Name</td>\n          <td>Posts</td>\n        </tr>\n        <tr *ngFor=\" let topic of topics\">\n          <td>{{ topic.category }}</td>\n          <td><a [routerLink]=\"['/topic', topic._id ]\">{{ topic.title }}</a></td>\n          <td><a [routerLink]=\"['/user', topic._user ]\">{{ topic.username }}</a></td>\n          <td>{{ topic.count }}</td>\n        </tr>\n      </thead>\n      <tbody>\n        \n      </tbody>\n    </table>\n    <hr>\n  <!--{{ topic | json }}<hr>\n  {{ topics | json }}-->\n  <div id=\"topic_form\">\n    <h3>Add a new Topic</h3>\n    <form #topicForm=\"ngForm\" (submit)=\"createNewTopic(topicForm)\">\n      <div class=\"form-group\">\n        <label for=\"title\">Topic:\n        <input type=\"text\" name=\"title\" class=\"form-control\"\n        [(ngModel)]=\"topic.title\"\n        required\n        minlength=\"2\"\n        #title=\"ngModel\"\n        >\n        </label>\n      </div>\n      <div class=\"red\" *ngIf='title.errors && ( title.touched || topicForm.submitted)'>\n        <p *ngIf='title.errors.required'>Topic is required</p>\n        <p *ngIf='title.errors.minlength'>Topic must be at least 2 characters.</p>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"discription\">Description:\n        <textarea rows=\"3\" name=\"description\" class=\"form-control\"\n        [(ngModel)]=\"topic.description\"\n        required\n        minlength=\"5\"\n        #description=\"ngModel\"\n        ></textarea> \n        </label>\n      </div>\n      <div class=\"red\" *ngIf='description.errors && ( description.touched || topicForm.submitted)'>\n        <p *ngIf='description.errors.required'>Description is required</p>\n        <p *ngIf='description.errors.minlength'>Description must be at least 5 characters.</p>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"category\">Category:\n          <select name=\"category\" class=\"form-control\"\n          [(ngModel)]=\"topic.category\"\n          required\n          #cat=\"ngModel\"\n          >\n            <option value=\"Javascript\">Javascript</option>\n            <option value=\"MySQL\">MySQL</option>\n            <option value=\"UX\">UX</option>\n            <option value=\"HTML\">HTML</option>\n            <option value=\"Python\">Python</option>\n          </select>\n        </label>\n      </div>\n      <div class=\"red\" *ngIf='cat.errors && ( cat.touched || topicForm.submitted)'>\n        <p *ngIf='cat.errors.required'>Category is required</p>\n      </div>\n      \n      <button [disabled]=\"!topicForm.valid\" type=\"submit\" class=\"btn btn-success\">Submit</button>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service__ = __webpack_require__("../../../../angular2-cookie/services/cookies.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = (function () {
    function DashboardComponent(_httpService, _cookieService, _route) {
        var _this = this;
        this._httpService = _httpService;
        this._cookieService = _cookieService;
        this._route = _route;
        this.name = '';
        this.user_id = '';
        this.topic = {
            title: '',
            description: '',
            category: '',
            count: 0,
            _user: '',
            username: '',
        };
        this.topics = [];
        if (!this._cookieService.get("loginuserName")) {
            this._route.navigate(['/']);
        }
        this.name = this._cookieService.get("loginuserName");
        this.user_id = this._cookieService.get("loginuserId");
        this.topic._user = this.user_id;
        this.topic.username = this.name;
        console.log(this.user_id);
        this._httpService.getAllTopics()
            .then(function (alltopics) {
            console.log("all topics: ", alltopics);
            _this.topics = alltopics;
        });
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.createNewTopic = function (form) {
        var _this = this;
        if (!form.valid) {
            return;
        }
        console.log("topic", this.topic);
        this._httpService.createTopic(this.topic)
            .then(function (topic) {
            console.log(topic);
            _this._httpService.getAllTopics()
                .then(function (alltopics) {
                console.log("all topics: ", alltopics);
                _this.topics = alltopics;
            })
                .catch(function (err) {
                console.log(err);
            });
            topic = {
                title: '',
                description: '',
                category: '',
                count: 0,
                _user: '',
                username: '',
            };
            form.resetForm();
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    DashboardComponent.prototype.logOut = function () {
        this._cookieService.remove("loginuserName");
        this._cookieService.remove("loginuserId");
        this._route.navigate(['/']);
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service__["CookieService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _c || Object])
], DashboardComponent);

var _a, _b, _c;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HttpService = (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    // User
    HttpService.prototype.retrieveAll = function () {
        return this._http.get('/users')
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    HttpService.prototype.createUser = function (user) {
        console.log("user:", user);
        return this._http.post("/newuser", user)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    HttpService.prototype.getOneUser = function (user) {
        console.log("getOne", user);
        return this._http.post('/getuser', user)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    // Topic
    HttpService.prototype.createTopic = function (topic) {
        console.log("Topic:", topic);
        return this._http.post("/newtopic", topic)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    HttpService.prototype.getAllTopics = function () {
        return this._http.get('/topics')
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    HttpService.prototype.getOneTopic = function (topic_id) {
        // console.log(topic_id);
        return this._http.post('/gettopic', topic_id)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    HttpService.prototype.TopicAddPost = function (post) {
        return this._http.post('/addpost', post)
            .map(function (data) { data.json(); console.log("data", data); })
            .toPromise();
    };
    //Post
    HttpService.prototype.createPost = function (post) {
        return this._http.post('/newpost', post)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    HttpService.prototype.getAllPosts = function (topic) {
        return this._http.post('/allposts', topic)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    HttpService.prototype.getTopicFromUser = function (user) {
        console.log("get topic from user service: ", user);
        return this._http.post('/usertopics', user)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    HttpService.prototype.getPostFromUser = function (user) {
        return this._http.post('/userposts', user)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    HttpService.prototype.getCommentFromUser = function (user) {
        return this._http.post('/usercomments', user)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    HttpService.prototype.createComment = function (comment) {
        console.log("service create comment", comment);
        return this._http.post('/newcomment', comment)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    HttpService.prototype.postAddComment = function (comment) {
        return this._http.post('/addcomment', comment)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    HttpService.prototype.VoteUp = function (post) {
        return this._http.post('/voteup', post)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    HttpService.prototype.VoteDown = function (post) {
        return this._http.post('/votedown', post)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    return HttpService;
}());
HttpService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], HttpService);

var _a;
//# sourceMappingURL=http.service.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".red{\n    color: red;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"login_component\">\n  <!--{{ name | json }}-->\n  <h3>Hello</h3>\n  <form #loginForm=\"ngForm\" (submit)=\"getUser(loginForm)\">\n    <div class=\"form-group\">\n    <label>Please enter your name to join and share your ideas</label>\n    <input type=\"text\" name=\"name\" class=\"form-control\"\n    [(ngModel)] = \"user.name\"\n    required\n    minlength=\"3\"\n    #username=\"ngModel\"\n    >\n    </div>\n    <div class=\"red\" *ngIf='username.errors && ( username.touched || loginForm.submitted)'>\n        <p *ngIf='username.errors.required'>Name is required</p>\n        <p *ngIf='username.errors.minlength'>Name must be at least 3 characters.</p>\n    </div>\n    <button [disabled]=\"!loginForm.valid\" type=\"submit\" class=\"btn btn-success\">Enter</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service__ = __webpack_require__("../../../../angular2-cookie/services/cookies.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
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
    function LoginComponent(_httpServide, _cookieService, _router) {
        this._httpServide = _httpServide;
        this._cookieService = _cookieService;
        this._router = _router;
        this.user = {
            name: '',
        };
        if (this._cookieService.get("loginuserName")) {
            this._router.navigate(['/dashboard']);
        }
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.getUser = function (form) {
        var _this = this;
        if (!form.valid) {
            return;
        }
        this._httpServide.getOneUser(this.user)
            .then(function (userfinded) {
            if (userfinded != null) {
                console.log("fined: ", userfinded);
                _this._cookieService.put("loginuserName", userfinded.name);
                _this._cookieService.put("loginuserId", userfinded._id);
                _this.user = {
                    name: '',
                };
                form.resetForm();
                _this._router.navigate(['/dashboard']);
            }
            else {
                _this._httpServide.createUser(_this.user)
                    .then(function (usercreated) {
                    console.log("created: ", usercreated);
                    _this._cookieService.put("loginuserName", usercreated.name);
                    _this._cookieService.put("loginuserId", usercreated._id);
                    _this.user = {
                        name: '',
                    };
                    form.resetForm();
                    _this._router.navigate(['/dashboard']);
                });
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service__["CookieService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/topic/topic.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".red{\n    color: red;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/topic/topic.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <ul class=\"list-inline\">\n    <li><a [routerLink]=\"['/dashboard']\">Dashboard</a></li>\n    <li><a (click)=\"logOut()\">Logout</a></li>\n  </ul>\n  <!--{{ topic | json }}-->\n  <h3><a [routerLink]=\"['/user', topic._user ]\">{{ topic.username }}</a> posted a topic:</h3>\n  <p><strong>{{ topic.title }}</strong></p>\n  <p>Description: {{ topic.description }}</p>\n  <!--{{ post | json }}-->\n  <form #postForm=\"ngForm\" (submit)=\"createNewPost(postForm)\">\n    <div class=\"form-group\">\n      <label for=\"post\">Post your answer here...</label>\n      <textarea rows=\"3\" name=\"content\" class=\"form-control\"\n      [(ngModel)]=\"post.content\"\n      required\n      minlength=\"5\"\n      #content=\"ngModel\"\n      ></textarea>\n      \n      <div class=\"red\" *ngIf='content.errors && ( content.touched || postForm.submitted)'>\n        <p *ngIf='content.errors.required'>Post is required</p>\n        <p *ngIf='content.errors.minlength'>Post must be at least 5 characters.</p>\n    </div>\n\n    </div>\n    <button [disabled]=\"!postForm.valid\" type=\"submit\" class=\"btn btn-success\">Post</button>\n  </form>\n  <hr>\n  <!--{{ posts | json }}-->\n  <div class=\"post_container\" *ngFor=\"let post of posts\">\n    <h4><a [routerLink]=\"['/user', post._user ]\">{{ post.name }}</a> {{post.content }}</h4>\n    <div *ngFor=\"let comment of post.comments\">\n      <p><a [routerLink]=\"['/user', comment._user ]\">{{ comment.name }}</a> {{ comment.content }}</p>\n    </div>\n    <p>{{ post.votes_up }} <button (click)=\"voteUP(post._id)\" class=\"btn btn-success\"><span class=\"glyphicon glyphicon-menu-up\"></span></button> {{ post.votes_down }} <button (click)=\"voteDOWN(post._id)\" class=\"btn btn-danger\"><span class=\"glyphicon glyphicon-menu-down\"></span></button></p>\n    {{ post._id | json }}\n    <form #commentForm=\"ngForm\" (submit)=\"createNewComment(commentcontent.value, post._id, commentcontent.error)\">\n    <div class=\"form-group\">\n      <label for=\"comment\">Leave your comment here...</label>\n      <textarea rows=\"3\" name=\"content\" class=\"form-control\"\n      required\n      minlength=\"3\"\n      #commentcontent\n      ></textarea>\n      \n      <div class=\"red\" *ngIf='commentcontent.errors && ( commentcontent.touched || commentForm.submitted)'>\n        <p *ngIf='commentcontent.errors.required'>Comment is required</p>\n        <p *ngIf='commentcontent.errors.minlength'>Comment must be at least 3 characters.</p>\n    </div>\n\n    </div>\n    <button [disabled]=\"!commentForm.valid\" type=\"submit\" class=\"btn btn-success\">Comment</button>\n  </form>\n  <hr>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/topic/topic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__ = __webpack_require__("../../../../angular2-cookie/services/cookies.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TopicComponent = (function () {
    function TopicComponent(_route, __httpService, _cookieService, _router) {
        var _this = this;
        this._route = _route;
        this.__httpService = __httpService;
        this._cookieService = _cookieService;
        this._router = _router;
        this.topic_id = {
            id: ''
        };
        this.topic = {
            username: '',
        };
        this.post = {
            name: '',
            content: '',
            votes_up: 0,
            votes_down: 0,
            _user: '',
            _topic: '',
        };
        this.posts = [];
        this.clicked_post = {
            id: '',
        };
        this.comment = {
            name: '',
            content: '',
            _user: '',
            _post: '',
        };
        if (!this._cookieService.get("loginuserName")) {
            this._router.navigate(['/']);
        }
        this._route.params.subscribe(function (param) {
            _this.topic_id.id = param.id;
            _this.post.name = _this._cookieService.get("loginuserName");
            _this.post._user = _this._cookieService.get("loginuserId");
            _this.post._topic = param.id;
            _this.comment.name = _this._cookieService.get("loginuserName");
            _this.comment._user = _this._cookieService.get("loginuserId");
            _this.comment._post = param.id;
        });
        this.__httpService.getOneTopic(this.topic_id)
            .then(function (updatedtopic) {
            // console.log("TOPIC COMPONENT", updatedtopic);
            _this.topic = updatedtopic;
            _this.__httpService.getAllPosts(_this.topic)
                .then(function (returntopic) {
                // console.log("Return all posts: ", returntopic);
                _this.posts = returntopic.posts;
                console.log(_this.posts);
            });
        });
    }
    TopicComponent.prototype.ngOnInit = function () {
    };
    TopicComponent.prototype.createNewPost = function (form) {
        var _this = this;
        if (!form.valid) {
            return;
        }
        console.log(this.post);
        this.__httpService.createPost(this.post)
            .then(function (post) {
            // console.log("created post: ", post);
            _this.__httpService.TopicAddPost(post)
                .then(function (obj) {
                console.log("obj", obj);
                _this.__httpService.getAllPosts(_this.topic)
                    .then(function (returntopic) {
                    // console.log("Return all posts: ", returntopic);
                    _this.posts = returntopic.posts;
                });
            });
            post = {
                name: '',
                content: '',
                votes_up: 0,
                votes_down: 0,
                _user: '',
                _topic: '',
            };
            form.resetForm();
        })
            .catch(function (err) {
            console.log("EERROORR", err);
        });
    };
    TopicComponent.prototype.createNewComment = function (value, post_id, error) {
        var _this = this;
        console.log(error);
        this.comment.content = value;
        this.comment._post = post_id;
        console.log(this.comment);
        this.__httpService.createComment(this.comment)
            .then(function (commentcreated) {
            console.log("comment created: ", commentcreated);
            _this.__httpService.postAddComment(commentcreated)
                .then(function (obj) {
                // console.log("obj: ", obj);
                console.log("TOPIC", _this.topic);
                _this.__httpService.getAllPosts(_this.topic)
                    .then(function (returntopic) {
                    console.log("Create New Comment Return all posts: ", returntopic);
                    _this.posts = returntopic.posts;
                });
            })
                .catch();
        })
            .catch(function (err) {
            console.log("Create Comment Error: ", err);
        });
    };
    TopicComponent.prototype.voteUP = function (post_id) {
        var _this = this;
        console.log("Pass id plz: ", post_id);
        this.clicked_post.id = post_id;
        this.__httpService.VoteUp(this.clicked_post)
            .then(function (updatedpost) {
            console.log("vote_up updatedpost: ", updatedpost);
            _this.__httpService.getAllPosts(_this.topic)
                .then(function (returntopic) {
                console.log("Create New Comment Return all posts: ", returntopic);
                _this.posts = returntopic.posts;
            });
        })
            .catch();
    };
    TopicComponent.prototype.voteDOWN = function (post_id) {
        var _this = this;
        this.clicked_post.id = post_id;
        this.__httpService.VoteDown(this.clicked_post)
            .then(function (updatedpost) {
            console.log("vote_down updatedpost: ", updatedpost);
            _this.__httpService.getAllPosts(_this.topic)
                .then(function (returntopic) {
                console.log("Create New Comment Return all posts: ", returntopic);
                _this.posts = returntopic.posts;
            });
        })
            .catch();
    };
    TopicComponent.prototype.logOut = function () {
        this._cookieService.remove("loginuserName");
        this._cookieService.remove("loginuserId");
        this._router.navigate(['/']);
    };
    return TopicComponent;
}());
TopicComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-topic',
        template: __webpack_require__("../../../../../src/app/topic/topic.component.html"),
        styles: [__webpack_require__("../../../../../src/app/topic/topic.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__["CookieService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _d || Object])
], TopicComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=topic.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <ul class=\"list-inline\">\n    <li><a [routerLink]=\"['/dashboard']\">Dashboard</a></li>\n    <li><a (click)=\"logOut()\">Logout</a></li>\n  </ul>\n  <h1>Username: {{ name }}</h1>\n  <h3>Posted....</h3>\n  <ul>\n    <li>{{ topicCount }} Topics</li>\n    <li>{{ postCount }} Posts</li>\n    <li>{{ commentCount }} Comments</li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__ = __webpack_require__("../../../../angular2-cookie/services/cookies.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserComponent = (function () {
    function UserComponent(_route, __httpService, _cookieService, _router) {
        var _this = this;
        this._route = _route;
        this.__httpService = __httpService;
        this._cookieService = _cookieService;
        this._router = _router;
        this.user = {
            id: '',
        };
        this.name = '';
        this.topicCount = 0;
        this.postCount = 0;
        this.commentCount = 0;
        if (!this._cookieService.get("loginuserName")) {
            this._router.navigate(['/']);
        }
        this._route.params.subscribe(function (param) {
            _this.user.id = param.id;
            _this.__httpService.getTopicFromUser(_this.user)
                .then(function (alltopics) {
                console.log("all topics:", alltopics);
                if (alltopics.length == 0) {
                    _this.name = '';
                }
                else {
                    _this.name = alltopics[0].username;
                }
                _this.topicCount = alltopics.length;
            });
            _this.__httpService.getPostFromUser(_this.user)
                .then(function (allposts) {
                console.log("all topics:", allposts);
                if (_this.name == '') {
                    _this.name = allposts[0].name;
                }
                _this.postCount = allposts.length;
            });
            _this.__httpService.getCommentFromUser(_this.user)
                .then(function (allcomments) {
                console.log("all comments", allcomments);
                if (_this.name == '') {
                    _this.name = allcomments[0].name;
                }
                _this.commentCount = allcomments.length;
            })
                .catch();
        });
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent.prototype.logOut = function () {
        this._cookieService.remove("loginuserName");
        this._cookieService.remove("loginuserId");
        this._router.navigate(['/']);
    };
    return UserComponent;
}());
UserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user',
        template: __webpack_require__("../../../../../src/app/user/user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/user.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__["CookieService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _d || Object])
], UserComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=user.component.js.map

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
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map