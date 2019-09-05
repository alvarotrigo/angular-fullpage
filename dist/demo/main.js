(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./demo/$$_lazy_route_resource lazy recursive":
/*!***********************************************************!*\
  !*** ./demo/$$_lazy_route_resource lazy namespace object ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./demo/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./demo/app/app-routing.module.ts":
/*!****************************************!*\
  !*** ./demo/app/app-routing.module.ts ***!
  \****************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _examples_basic_basic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./examples/basic/basic.component */ "./demo/app/examples/basic/basic.component.ts");
/* harmony import */ var _examples_dynamic_changes_dynamic_changes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./examples/dynamic-changes/dynamic-changes.component */ "./demo/app/examples/dynamic-changes/dynamic-changes.component.ts");
/* harmony import */ var _examples_scrolloverflow_scrolloverflow_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./examples/scrolloverflow/scrolloverflow.component */ "./demo/app/examples/scrolloverflow/scrolloverflow.component.ts");
/* harmony import */ var _examples_type_definitions_type_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/type-definitions/type.component */ "./demo/app/examples/type-definitions/type.component.ts");
/* harmony import */ var _examples_dynamic_ng_for_dynamic_ng_for_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/dynamic-ng-for/dynamic-ng-for.component */ "./demo/app/examples/dynamic-ng-for/dynamic-ng-for.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', component: _examples_basic_basic_component__WEBPACK_IMPORTED_MODULE_2__["BasicExampleComponent"], pathMatch: 'full' },
    { path: 'dynamicChanges', component: _examples_dynamic_changes_dynamic_changes_component__WEBPACK_IMPORTED_MODULE_3__["DynamicChangesExampleComponent"] },
    { path: 'scrollOverflow', component: _examples_scrolloverflow_scrolloverflow_component__WEBPACK_IMPORTED_MODULE_4__["ScrollOverflowExampleComponent"] },
    { path: 'typeDefinitions', component: _examples_type_definitions_type_component__WEBPACK_IMPORTED_MODULE_5__["TypeExampleComponent"] },
    { path: 'dynamicNgFor', component: _examples_dynamic_ng_for_dynamic_ng_for_component__WEBPACK_IMPORTED_MODULE_6__["DynamicNgForComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./demo/app/app.component.ts":
/*!***********************************!*\
  !*** ./demo/app/app.component.ts ***!
  \***********************************/
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
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: "<router-outlet></router-outlet>"
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./demo/app/app.module.ts":
/*!********************************!*\
  !*** ./demo/app/app.module.ts ***!
  \********************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./demo/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./demo/app/app.component.ts");
/* harmony import */ var _examples_basic_basic_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./examples/basic/basic.component */ "./demo/app/examples/basic/basic.component.ts");
/* harmony import */ var _examples_dynamic_changes_dynamic_changes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/dynamic-changes/dynamic-changes.component */ "./demo/app/examples/dynamic-changes/dynamic-changes.component.ts");
/* harmony import */ var _examples_scrolloverflow_scrolloverflow_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/scrolloverflow/scrolloverflow.component */ "./demo/app/examples/scrolloverflow/scrolloverflow.component.ts");
/* harmony import */ var _examples_type_definitions_type_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/type-definitions/type.component */ "./demo/app/examples/type-definitions/type.component.ts");
/* harmony import */ var _examples_dynamic_ng_for_dynamic_ng_for_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/dynamic-ng-for/dynamic-ng-for.component */ "./demo/app/examples/dynamic-ng-for/dynamic-ng-for.component.ts");
/* harmony import */ var _fullpage_angular_fullpage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fullpage/angular-fullpage */ "./dist/@fullpage/angular-fullpage/fesm5/fullpage-angular-fullpage.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// added

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _examples_basic_basic_component__WEBPACK_IMPORTED_MODULE_4__["BasicExampleComponent"],
                _examples_dynamic_changes_dynamic_changes_component__WEBPACK_IMPORTED_MODULE_5__["DynamicChangesExampleComponent"],
                _examples_scrolloverflow_scrolloverflow_component__WEBPACK_IMPORTED_MODULE_6__["ScrollOverflowExampleComponent"],
                _examples_type_definitions_type_component__WEBPACK_IMPORTED_MODULE_7__["TypeExampleComponent"],
                _examples_dynamic_ng_for_dynamic_ng_for_component__WEBPACK_IMPORTED_MODULE_8__["DynamicNgForComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _fullpage_angular_fullpage__WEBPACK_IMPORTED_MODULE_9__["AngularFullpageModule"] // added
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./demo/app/examples/basic/basic.component.html":
/*!******************************************************!*\
  !*** ./demo/app/examples/basic/basic.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fullpage id=\"fullpage2\" [options]=\"config\" (ref)=\"getRef($event)\">\r\n    <div class=\"section\"><h1>Section 1</h1></div>\r\n\t<div class=\"section\"><h1>Section 2</h1></div>\r\n\t<div class=\"section\">\r\n\t\t<div class=\"slide\"><h1>Slide 2.1</h1></div>\r\n\t\t<div class=\"slide\"><h1>Slide 3.2</h1></div>\r\n\t\t<div class=\"slide\"><h1>Slide 3.3</h1></div>\r\n\t</div>\r\n\t<div class=\"section\"><h1>Section 4</h1></div>\r\n</div>\r\n"

/***/ }),

/***/ "./demo/app/examples/basic/basic.component.scss":
/*!******************************************************!*\
  !*** ./demo/app/examples/basic/basic.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".section {\n  text-align: center;\n  font-size: 3em; }\n"

/***/ }),

/***/ "./demo/app/examples/basic/basic.component.ts":
/*!****************************************************!*\
  !*** ./demo/app/examples/basic/basic.component.ts ***!
  \****************************************************/
/*! exports provided: BasicExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicExampleComponent", function() { return BasicExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BasicExampleComponent = /** @class */ (function () {
    function BasicExampleComponent() {
        // this is just an example => for more details on config please visit fullPage.js docs
        this.config = {
            licenseKey: 'YOUR LICENSE KEY HERE',
            sectionsColor: ['#7BAABE', 'whitesmoke', '#7BAABE', 'whitesmoke', '#7BAABE'],
            anchors: ['p1', 'p2', 'p3', 'p4', 'p5'],
            navigation: true,
        };
    }
    BasicExampleComponent.prototype.ngOnInit = function () {
    };
    BasicExampleComponent.prototype.getRef = function (fullPageRef) {
        this.fullpage_api = fullPageRef;
    };
    BasicExampleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basic',
            template: __webpack_require__(/*! ./basic.component.html */ "./demo/app/examples/basic/basic.component.html"),
            styles: [__webpack_require__(/*! ./basic.component.scss */ "./demo/app/examples/basic/basic.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BasicExampleComponent);
    return BasicExampleComponent;
}());



/***/ }),

/***/ "./demo/app/examples/dynamic-changes/dynamic-changes.component.html":
/*!**************************************************************************!*\
  !*** ./demo/app/examples/dynamic-changes/dynamic-changes.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul id=\"menu\">\r\n\t<li data-menuanchor=\"firstPage\"><a href=\"#firstPage\">First section</a></li>\r\n\t<li data-menuanchor=\"secondPage\"><a href=\"#secondPage\">Second section</a></li>\r\n\t<li data-menuanchor=\"thirdPage\"><a href=\"#thirdPage\">Third section</a></li>\r\n\t<li data-menuanchor=\"fourthPage\"><a href=\"#fourthPage\">Fourth section</a></li>\r\n</ul>\r\n\r\n<div fullpage id=\"fullpage\" [options]=\"config\" (ref)=\"getRef($event)\" #fullpageRef>\r\n    <div class=\"section\"><h1>Section 1</h1></div>\r\n\t<div class=\"section\">\r\n\t\t<h1>Section 2</h1>\r\n\t\t<button (click)=\"addSection()\">Add sections and change color</button>\r\n\t\t<button (click)=\"fullpage_api.moveSectionDown()\">Move down</button>\r\n\t\t<button (click)=\"removeLast()\">Remove last</button>\r\n\t</div>\r\n\t<div class=\"section\">\r\n\t\t<div class=\"slide\"><h1>Slide 3.1</h1> </div>\r\n\t\t<div class=\"slide\"><h1>Slide 3.2</h1></div>\r\n\t\t<div class=\"slide\">\r\n\t\t\t<h1>Slide 3.3</h1>\r\n\t\t\t<a routerLink=\"secondTest\">name</a>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"section\">\r\n\t\t<h1>Section 4</h1>\r\n\t\t<button (click)=\"addSection()\">Add sections and change color</button>\r\n\t\t<button (click)=\"fullpage_api.moveTo('secondPage', 2)\">Move to second page</button>\r\n\t\t<button (click)=\"removeLast()\">Remove last</button>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./demo/app/examples/dynamic-changes/dynamic-changes.component.scss":
/*!**************************************************************************!*\
  !*** ./demo/app/examples/dynamic-changes/dynamic-changes.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".section {\n  text-align: center;\n  font-size: 3em; }\n\n#menu li {\n  display: inline-block;\n  margin: 10px;\n  color: #000;\n  background: #fff;\n  background: rgba(255, 255, 255, 0.5);\n  border-radius: 10px; }\n\n#menu li.active {\n  background: #666;\n  background: rgba(0, 0, 0, 0.5);\n  color: #fff; }\n\n#menu li a {\n  text-decoration: none;\n  color: #000; }\n\n#menu li.active a:hover {\n  color: #000; }\n\n#menu li:hover {\n  background: rgba(255, 255, 255, 0.8); }\n\n#menu li a,\n#menu li.active a {\n  padding: 9px 18px;\n  display: block; }\n\n#menu li.active a {\n  color: #fff; }\n\n#menu {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 40px;\n  z-index: 70;\n  width: 100%;\n  padding: 0;\n  margin: 0; }\n"

/***/ }),

/***/ "./demo/app/examples/dynamic-changes/dynamic-changes.component.ts":
/*!************************************************************************!*\
  !*** ./demo/app/examples/dynamic-changes/dynamic-changes.component.ts ***!
  \************************************************************************/
/*! exports provided: DynamicChangesExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicChangesExampleComponent", function() { return DynamicChangesExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DynamicChangesExampleComponent = /** @class */ (function () {
    function DynamicChangesExampleComponent(renderer) {
        this.renderer = renderer;
        // this is just an example => for more details on config please visit fullPage.js docs
        this.config = {
            licenseKey: 'YOUR LICENSE KEY HERE',
            anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
            menu: '#menu',
            navigation: true,
            sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
            // events callback
            afterLoad: function (origin, destination, direction) {
                // console.log(destination);
            },
            afterRender: function () {
                // console.log('afterRender');
            },
            afterResize: function (width, height) {
                // console.log('afterResize' + width + ' ' + height);
            },
            afterSlideLoad: function (section, origin, destination, direction) {
                // console.log(destination);
            }
        };
    }
    DynamicChangesExampleComponent.prototype.ngOnInit = function () {
    };
    DynamicChangesExampleComponent.prototype.getRef = function (fullPageRef) {
        this.fullpage_api = fullPageRef;
    };
    DynamicChangesExampleComponent.prototype.addSection = function () {
        var _this = this;
        // change background color
        this.config['sectionsColor'] = Array(6).fill(0).map(function (x) { return _this.randomColor(); });
        // creating the section div
        var section = this.renderer.createElement('div');
        this.renderer.addClass(section, 'section');
        this.renderer.setProperty(section, 'innerHTML', '<h3>New Section</h3>');
        // adding section
        this.renderer.appendChild(this.fp_directive.nativeElement, section);
        this.fullpage_api.build();
    };
    DynamicChangesExampleComponent.prototype.removeLast = function () {
        var lastSection = this.fp_directive.nativeElement.lastChild;
        if (lastSection.isEqualNode(this.fullpage_api.getActiveSection().item)) {
            this.fullpage_api.moveSectionUp();
        }
        lastSection.remove();
        this.fullpage_api.build();
    };
    DynamicChangesExampleComponent.prototype.randomColor = function () {
        return '#' + Math.random().toString(16).slice(-3);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('fullpageRef'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], DynamicChangesExampleComponent.prototype, "fp_directive", void 0);
    DynamicChangesExampleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dynamic-changes',
            template: __webpack_require__(/*! ./dynamic-changes.component.html */ "./demo/app/examples/dynamic-changes/dynamic-changes.component.html"),
            styles: [__webpack_require__(/*! ./dynamic-changes.component.scss */ "./demo/app/examples/dynamic-changes/dynamic-changes.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], DynamicChangesExampleComponent);
    return DynamicChangesExampleComponent;
}());



/***/ }),

/***/ "./demo/app/examples/dynamic-ng-for/dynamic-ng-for.component.html":
/*!************************************************************************!*\
  !*** ./demo/app/examples/dynamic-ng-for/dynamic-ng-for.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul id=\"menu\">\r\n\t<li data-menuanchor=\"firstPage\"><a href=\"#firstPage\">First section</a></li>\r\n\t<li data-menuanchor=\"secondPage\"><a href=\"#secondPage\">Second section</a></li>\r\n\t<li data-menuanchor=\"thirdPage\"><a href=\"#thirdPage\">Third section</a></li>\r\n\t<li data-menuanchor=\"fourthPage\"><a href=\"#fourthPage\">Fourth section</a></li>\r\n</ul>\r\n\r\n<div fullpage id=\"fullpage\" [options]=\"config\" (ref)=\"getRef($event)\">\r\n    <div *ngFor=\"let section of sections\" class=\"section\" #sectionRef>\r\n\t\t<h1>Section {{section}}</h1>\r\n\t\t<button (click)=\"add()\">Add</button>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./demo/app/examples/dynamic-ng-for/dynamic-ng-for.component.scss":
/*!************************************************************************!*\
  !*** ./demo/app/examples/dynamic-ng-for/dynamic-ng-for.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".section {\n  text-align: center;\n  font-size: 3em; }\n\n#menu li {\n  display: inline-block;\n  margin: 10px;\n  color: #000;\n  background: #fff;\n  background: rgba(255, 255, 255, 0.5);\n  border-radius: 10px; }\n\n#menu li.active {\n  background: #666;\n  background: rgba(0, 0, 0, 0.5);\n  color: #fff; }\n\n#menu li a {\n  text-decoration: none;\n  color: #000; }\n\n#menu li.active a:hover {\n  color: #000; }\n\n#menu li:hover {\n  background: rgba(255, 255, 255, 0.8); }\n\n#menu li a,\n#menu li.active a {\n  padding: 9px 18px;\n  display: block; }\n\n#menu li.active a {\n  color: #fff; }\n\n#menu {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 40px;\n  z-index: 70;\n  width: 100%;\n  padding: 0;\n  margin: 0; }\n"

/***/ }),

/***/ "./demo/app/examples/dynamic-ng-for/dynamic-ng-for.component.ts":
/*!**********************************************************************!*\
  !*** ./demo/app/examples/dynamic-ng-for/dynamic-ng-for.component.ts ***!
  \**********************************************************************/
/*! exports provided: DynamicNgForComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicNgForComponent", function() { return DynamicNgForComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DynamicNgForComponent = /** @class */ (function () {
    function DynamicNgForComponent() {
        this.sections = [1];
        // this is just an example => for more details on config please visit fullPage.js docs
        this.config = {
            licenseKey: 'YOUR LICENSE KEY HERE',
            anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
            menu: '#menu',
            navigation: true,
            sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
        };
    }
    DynamicNgForComponent.prototype.ngOnInit = function () {
    };
    DynamicNgForComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.sectionRef.changes.subscribe(function () {
            _this.ngForRendred();
        });
    };
    DynamicNgForComponent.prototype.getRef = function (fullPageRef) {
        this.fullpage_api = fullPageRef;
    };
    DynamicNgForComponent.prototype.add = function () {
        var twoDigits = Math.random() * 100;
        this.sections.push(Math.round(twoDigits));
    };
    DynamicNgForComponent.prototype.ngForRendred = function () {
        console.log('ngFor dom render is done');
        this.fullpage_api.build();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])('sectionRef'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], DynamicNgForComponent.prototype, "sectionRef", void 0);
    DynamicNgForComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dynamic-ng-for',
            template: __webpack_require__(/*! ./dynamic-ng-for.component.html */ "./demo/app/examples/dynamic-ng-for/dynamic-ng-for.component.html"),
            styles: [__webpack_require__(/*! ./dynamic-ng-for.component.scss */ "./demo/app/examples/dynamic-ng-for/dynamic-ng-for.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DynamicNgForComponent);
    return DynamicNgForComponent;
}());



/***/ }),

/***/ "./demo/app/examples/scrolloverflow/scrolloverflow.component.html":
/*!************************************************************************!*\
  !*** ./demo/app/examples/scrolloverflow/scrolloverflow.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul id=\"menu\">\r\n\t<li data-menuanchor=\"firstPage\"><a href=\"#firstPage\">First section</a></li>\r\n\t<li data-menuanchor=\"secondPage\"><a href=\"#secondPage\">Second section</a></li>\r\n\t<li data-menuanchor=\"thirdPage\"><a href=\"#thirdPage\">Third section</a></li>\r\n\t<li data-menuanchor=\"fourthPage\"><a href=\"#fourthPage\">Fourth section</a></li>\r\n</ul>\r\n\r\n<div fullpage id=\"fullpage\" [options]=\"config\" (ref)=\"getRef($event)\" #fullpageRef>\r\n    <div class=\"section\">\r\n        <h1>Section 1</h1>\r\n        <p>\r\n            Eu nec ferri molestie consequat, vel at alia dolore putant. Labore philosophia ut vix. In vis nostrud interesset appellantur, vis et tation feugiat scripserit. Te nec noster suavitate persecuti. Diceret erroribus cu vix, alii omnes ei sit. Sea an corrumpit patrioque, virtute accumsan nominavi et usu, ex mei dolore vocibus incorrupte.\r\n\r\n            Duo ea saperet tacimates. Sed possim prodesset no, per novum putent doctus ea. Eu mea magna aliquip graecis, pri corpora officiis complectitur ei, lorem saepe consetetur his ad. Meis consulatu ei vis, an altera ocurreret interesset qui.\r\n\r\n            Eu ponderum comprehensam his, case antiopam pri te. Mel ne partem consequat instructior. Ad dicunt malorum sea, ex qui omnes invenire gubergren. Ius cu autem aliquando, pri vide ornatus perpetua an, no has epicuri verterem. Nam at animal pertinax efficiantur.\r\n\r\n            Per alienum torquatos eu. Sed saepe quodsi et, ullum choro definitionem sed et. Ullum elitr comprehensam sed at, sint illum propriae per eu. Eu enim laudem reformidans vel. Pro clita quando ad. Usu te virtute quaestio, ut eruditi tacimates volutpat per.\r\n\r\n            Affert accusamus duo ex, ea pri habeo graece, cu magna dolorum sea. Quas dictas assueverit ad qui, cu duo harum fabulas apeirian, ullum gubergren et sit. Ne cetero recusabo adipiscing quo, cu harum quaestio neglegentur cum. Has tation aliquip ad, virtute volumus definitionem mel ne. Nobis audiam civibus ius at.\r\n\r\n            Ei eum hinc mutat inciderint. Cu maluisset assentior per, graecis ponderum no mel. Eum eu vitae quando gloriatur, cum graece percipitur no, sed errem maiestatis te. Sed porro epicuri te, ad nam malorum verterem. Ea zril aliquip euismod sed.\r\n\r\n            Eu ponderum comprehensam his, case antiopam pri te. Mel ne partem consequat instructior. Ad dicunt malorum sea, ex qui omnes invenire gubergren. Ius cu autem aliquando, pri vide ornatus perpetua an, no has epicuri verterem. Nam at animal pertinax efficiantur.\r\n\r\n            Per alienum torquatos eu. Sed saepe quodsi et, ullum choro definitionem sed et. Ullum elitr comprehensam sed at, sint illum propriae per eu. Eu enim laudem reformidans vel. Pro clita quando ad. Usu te virtute quaestio, ut eruditi tacimates volutpat per.\r\n\r\n            Affert accusamus duo ex, ea pri habeo graece, cu magna dolorum sea. Quas dictas assueverit ad qui, cu duo harum fabulas apeirian, ullum gubergren et sit. Ne cetero recusabo adipiscing quo, cu harum quaestio neglegentur cum. Has tation aliquip ad, virtute volumus definitionem mel ne. Nobis audiam civibus ius at.\r\n\r\n            Ei eum hinc mutat inciderint. Cu maluisset assentior per, graecis ponderum no mel. Eum eu vitae quando gloriatur, cum graece percipitur no, sed errem maiestatis te. Sed porro epicuri te, ad nam malorum verterem. Ea zril aliquip euismod sed.\r\n\r\n            Eu ponderum comprehensam his, case antiopam pri te. Mel ne partem consequat instructior. Ad dicunt malorum sea, ex qui omnes invenire gubergren. Ius cu autem aliquando, pri vide ornatus perpetua an, no has epicuri verterem. Nam at animal pertinax efficiantur.\r\n\r\n            Per alienum torquatos eu. Sed saepe quodsi et, ullum choro definitionem sed et. Ullum elitr comprehensam sed at, sint illum propriae per eu. Eu enim laudem reformidans vel. Pro clita quando ad. Usu te virtute quaestio, ut eruditi tacimates volutpat per.\r\n\r\n            Affert accusamus duo ex, ea pri habeo graece, cu magna dolorum sea. Quas dictas assueverit ad qui, cu duo harum fabulas apeirian, ullum gubergren et sit. Ne cetero recusabo adipiscing quo, cu harum quaestio neglegentur cum. Has tation aliquip ad, virtute volumus definitionem mel ne. Nobis audiam civibus ius at.\r\n\r\n            Ei eum hinc mutat inciderint. Cu maluisset assentior per, graecis ponderum no mel. Eum eu vitae quando gloriatur, cum graece percipitur no, sed errem maiestatis te. Sed porro epicuri te, ad nam malorum verterem. Ea zril aliquip euismod sed.\r\n\r\n        </p>\r\n    </div>\r\n\t<div class=\"section\">\r\n\t\t<h1>Section 2</h1>\r\n\t</div>\r\n\t<div class=\"section\">\r\n\t\t<div class=\"slide\">\r\n            <h1>Slide 3.1</h1>\r\n            <p>\r\n            Eu nec ferri molestie consequat, vel at alia dolore putant. Labore philosophia ut vix. In vis nostrud interesset appellantur, vis et tation feugiat scripserit. Te nec noster suavitate persecuti. Diceret erroribus cu vix, alii omnes ei sit. Sea an corrumpit patrioque, virtute accumsan nominavi et usu, ex mei dolore vocibus incorrupte.\r\n\r\n            Duo ea saperet tacimates. Sed possim prodesset no, per novum putent doctus ea. Eu mea magna aliquip graecis, pri corpora officiis complectitur ei, lorem saepe consetetur his ad. Meis consulatu ei vis, an altera ocurreret interesset qui.\r\n\r\n            Eu ponderum comprehensam his, case antiopam pri te. Mel ne partem consequat instructior. Ad dicunt malorum sea, ex qui omnes invenire gubergren. Ius cu autem aliquando, pri vide ornatus perpetua an, no has epicuri verterem. Nam at animal pertinax efficiantur.\r\n\r\n            Per alienum torquatos eu. Sed saepe quodsi et, ullum choro definitionem sed et. Ullum elitr comprehensam sed at, sint illum propriae per eu. Eu enim laudem reformidans vel. Pro clita quando ad. Usu te virtute quaestio, ut eruditi tacimates volutpat per.\r\n\r\n            Affert accusamus duo ex, ea pri habeo graece, cu magna dolorum sea. Quas dictas assueverit ad qui, cu duo harum fabulas apeirian, ullum gubergren et sit. Ne cetero recusabo adipiscing quo, cu harum quaestio neglegentur cum. Has tation aliquip ad, virtute volumus definitionem mel ne. Nobis audiam civibus ius at.\r\n\r\n            Ei eum hinc mutat inciderint. Cu maluisset assentior per, graecis ponderum no mel. Eum eu vitae quando gloriatur, cum graece percipitur no, sed errem maiestatis te. Sed porro epicuri te, ad nam malorum verterem. Ea zril aliquip euismod sed.\r\n\r\n            Eu ponderum comprehensam his, case antiopam pri te. Mel ne partem consequat instructior. Ad dicunt malorum sea, ex qui omnes invenire gubergren. Ius cu autem aliquando, pri vide ornatus perpetua an, no has epicuri verterem. Nam at animal pertinax efficiantur.\r\n\r\n            Per alienum torquatos eu. Sed saepe quodsi et, ullum choro definitionem sed et. Ullum elitr comprehensam sed at, sint illum propriae per eu. Eu enim laudem reformidans vel. Pro clita quando ad. Usu te virtute quaestio, ut eruditi tacimates volutpat per.\r\n\r\n            Affert accusamus duo ex, ea pri habeo graece, cu magna dolorum sea. Quas dictas assueverit ad qui, cu duo harum fabulas apeirian, ullum gubergren et sit. Ne cetero recusabo adipiscing quo, cu harum quaestio neglegentur cum. Has tation aliquip ad, virtute volumus definitionem mel ne. Nobis audiam civibus ius at.\r\n\r\n            Ei eum hinc mutat inciderint. Cu maluisset assentior per, graecis ponderum no mel. Eum eu vitae quando gloriatur, cum graece percipitur no, sed errem maiestatis te. Sed porro epicuri te, ad nam malorum verterem. Ea zril aliquip euismod sed.\r\n\r\n            Eu ponderum comprehensam his, case antiopam pri te. Mel ne partem consequat instructior. Ad dicunt malorum sea, ex qui omnes invenire gubergren. Ius cu autem aliquando, pri vide ornatus perpetua an, no has epicuri verterem. Nam at animal pertinax efficiantur.\r\n\r\n            Per alienum torquatos eu. Sed saepe quodsi et, ullum choro definitionem sed et. Ullum elitr comprehensam sed at, sint illum propriae per eu. Eu enim laudem reformidans vel. Pro clita quando ad. Usu te virtute quaestio, ut eruditi tacimates volutpat per.\r\n\r\n            Affert accusamus duo ex, ea pri habeo graece, cu magna dolorum sea. Quas dictas assueverit ad qui, cu duo harum fabulas apeirian, ullum gubergren et sit. Ne cetero recusabo adipiscing quo, cu harum quaestio neglegentur cum. Has tation aliquip ad, virtute volumus definitionem mel ne. Nobis audiam civibus ius at.\r\n\r\n            Ei eum hinc mutat inciderint. Cu maluisset assentior per, graecis ponderum no mel. Eum eu vitae quando gloriatur, cum graece percipitur no, sed errem maiestatis te. Sed porro epicuri te, ad nam malorum verterem. Ea zril aliquip euismod sed.\r\n\r\n        </p>\r\n        </div>\r\n\t\t<div class=\"slide\">\r\n            <h1>Slide 3.2</h1>\r\n            <p>\r\n            Eu nec ferri molestie consequat, vel at alia dolore putant. Labore philosophia ut vix. In vis nostrud interesset appellantur, vis et tation feugiat scripserit. Te nec noster suavitate persecuti. Diceret erroribus cu vix, alii omnes ei sit. Sea an corrumpit patrioque, virtute accumsan nominavi et usu, ex mei dolore vocibus incorrupte.\r\n\r\n            Duo ea saperet tacimates. Sed possim prodesset no, per novum putent doctus ea. Eu mea magna aliquip graecis, pri corpora officiis complectitur ei, lorem saepe consetetur his ad. Meis consulatu ei vis, an altera ocurreret interesset qui.\r\n\r\n            Eu ponderum comprehensam his, case antiopam pri te. Mel ne partem consequat instructior. Ad dicunt malorum sea, ex qui omnes invenire gubergren. Ius cu autem aliquando, pri vide ornatus perpetua an, no has epicuri verterem. Nam at animal pertinax efficiantur.\r\n\r\n            Per alienum torquatos eu. Sed saepe quodsi et, ullum choro definitionem sed et. Ullum elitr comprehensam sed at, sint illum propriae per eu. Eu enim laudem reformidans vel. Pro clita quando ad. Usu te virtute quaestio, ut eruditi tacimates volutpat per.\r\n\r\n            Affert accusamus duo ex, ea pri habeo graece, cu magna dolorum sea. Quas dictas assueverit ad qui, cu duo harum fabulas apeirian, ullum gubergren et sit. Ne cetero recusabo adipiscing quo, cu harum quaestio neglegentur cum. Has tation aliquip ad, virtute volumus definitionem mel ne. Nobis audiam civibus ius at.\r\n\r\n            Ei eum hinc mutat inciderint. Cu maluisset assentior per, graecis ponderum no mel. Eum eu vitae quando gloriatur, cum graece percipitur no, sed errem maiestatis te. Sed porro epicuri te, ad nam malorum verterem. Ea zril aliquip euismod sed.\r\n\r\n            Eu ponderum comprehensam his, case antiopam pri te. Mel ne partem consequat instructior. Ad dicunt malorum sea, ex qui omnes invenire gubergren. Ius cu autem aliquando, pri vide ornatus perpetua an, no has epicuri verterem. Nam at animal pertinax efficiantur.\r\n\r\n            Per alienum torquatos eu. Sed saepe quodsi et, ullum choro definitionem sed et. Ullum elitr comprehensam sed at, sint illum propriae per eu. Eu enim laudem reformidans vel. Pro clita quando ad. Usu te virtute quaestio, ut eruditi tacimates volutpat per.\r\n\r\n            Affert accusamus duo ex, ea pri habeo graece, cu magna dolorum sea. Quas dictas assueverit ad qui, cu duo harum fabulas apeirian, ullum gubergren et sit. Ne cetero recusabo adipiscing quo, cu harum quaestio neglegentur cum. Has tation aliquip ad, virtute volumus definitionem mel ne. Nobis audiam civibus ius at.\r\n\r\n            Ei eum hinc mutat inciderint. Cu maluisset assentior per, graecis ponderum no mel. Eum eu vitae quando gloriatur, cum graece percipitur no, sed errem maiestatis te. Sed porro epicuri te, ad nam malorum verterem. Ea zril aliquip euismod sed.\r\n\r\n            Eu ponderum comprehensam his, case antiopam pri te. Mel ne partem consequat instructior. Ad dicunt malorum sea, ex qui omnes invenire gubergren. Ius cu autem aliquando, pri vide ornatus perpetua an, no has epicuri verterem. Nam at animal pertinax efficiantur.\r\n\r\n            Per alienum torquatos eu. Sed saepe quodsi et, ullum choro definitionem sed et. Ullum elitr comprehensam sed at, sint illum propriae per eu. Eu enim laudem reformidans vel. Pro clita quando ad. Usu te virtute quaestio, ut eruditi tacimates volutpat per.\r\n\r\n            Affert accusamus duo ex, ea pri habeo graece, cu magna dolorum sea. Quas dictas assueverit ad qui, cu duo harum fabulas apeirian, ullum gubergren et sit. Ne cetero recusabo adipiscing quo, cu harum quaestio neglegentur cum. Has tation aliquip ad, virtute volumus definitionem mel ne. Nobis audiam civibus ius at.\r\n\r\n            Ei eum hinc mutat inciderint. Cu maluisset assentior per, graecis ponderum no mel. Eum eu vitae quando gloriatur, cum graece percipitur no, sed errem maiestatis te. Sed porro epicuri te, ad nam malorum verterem. Ea zril aliquip euismod sed.\r\n\r\n        </p>\r\n        </div>\r\n\t\t<div class=\"slide\">\r\n\t\t\tSlide 3.3\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"section\">\r\n\t\t<h1>Section 4</h1>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./demo/app/examples/scrolloverflow/scrolloverflow.component.scss":
/*!************************************************************************!*\
  !*** ./demo/app/examples/scrolloverflow/scrolloverflow.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".section {\n  text-align: center;\n  font-size: 3em; }\n\n.section p {\n  width: 600px;\n  margin: 0 auto; }\n\n#menu li {\n  display: inline-block;\n  margin: 10px;\n  color: #000;\n  background: #fff;\n  background: rgba(255, 255, 255, 0.5);\n  border-radius: 10px; }\n\n#menu li.active {\n  background: #666;\n  background: rgba(0, 0, 0, 0.5);\n  color: #fff; }\n\n#menu li a {\n  text-decoration: none;\n  color: #000; }\n\n#menu li.active a:hover {\n  color: #000; }\n\n#menu li:hover {\n  background: rgba(255, 255, 255, 0.8); }\n\n#menu li a,\n#menu li.active a {\n  padding: 9px 18px;\n  display: block; }\n\n#menu li.active a {\n  color: #fff; }\n\n#menu {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 40px;\n  z-index: 70;\n  width: 100%;\n  padding: 0;\n  margin: 0; }\n"

/***/ }),

/***/ "./demo/app/examples/scrolloverflow/scrolloverflow.component.ts":
/*!**********************************************************************!*\
  !*** ./demo/app/examples/scrolloverflow/scrolloverflow.component.ts ***!
  \**********************************************************************/
/*! exports provided: ScrollOverflowExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollOverflowExampleComponent", function() { return ScrollOverflowExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ScrollOverflowExampleComponent = /** @class */ (function () {
    function ScrollOverflowExampleComponent() {
        // this is just an example => for more details on config please visit fullPage.js docs
        this.config = {
            licenseKey: 'YOUR LICENSE KEY HERE',
            anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
            menu: '#menu',
            scrollOverflow: true,
            sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
            // events callback
            afterLoad: function (origin, destination, direction) {
                // console.log(destination);
            },
            afterRender: function () {
                // console.log('afterRender');
            },
            afterResize: function (width, height) {
                // console.log('afterResize' + width + ' ' + height);
            },
            afterSlideLoad: function (section, origin, destination, direction) {
                // console.log(destination);
            }
        };
    }
    ScrollOverflowExampleComponent.prototype.ngOnInit = function () {
    };
    ScrollOverflowExampleComponent.prototype.getRef = function (fullPageRef) {
        this.fullpage_api = fullPageRef;
    };
    ScrollOverflowExampleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-scrolloverflow',
            template: __webpack_require__(/*! ./scrolloverflow.component.html */ "./demo/app/examples/scrolloverflow/scrolloverflow.component.html"),
            styles: [__webpack_require__(/*! ./scrolloverflow.component.scss */ "./demo/app/examples/scrolloverflow/scrolloverflow.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ScrollOverflowExampleComponent);
    return ScrollOverflowExampleComponent;
}());



/***/ }),

/***/ "./demo/app/examples/type-definitions/type.component.html":
/*!****************************************************************!*\
  !*** ./demo/app/examples/type-definitions/type.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fullpage id=\"fullpage2\" [options]=\"config\" (ref)=\"getRef($event)\">\r\n    <div class=\"section\"><h1>Section 1</h1></div>\r\n\t<div class=\"section\">\r\n\t\t<h1>Section 2</h1>\r\n\t\t<button (click)=\"fullpage_api.moveSectionDown()\">Move down</button>\r\n\t</div>\r\n\t<div class=\"section\">\r\n\t\t<div class=\"slide\"><h1>Slide 2.1</h1></div>\r\n\t\t<div class=\"slide\"><h1>Slide 3.2</h1></div>\r\n\t\t<div class=\"slide\"><h1>Slide 3.3</h1></div>\r\n\t</div>\r\n\t<div class=\"section\">\r\n\t\t<h1>Section 4</h1>\r\n\t\t<button (click)=\"fullpage_api.moveSectionUp()\">Move up</button>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./demo/app/examples/type-definitions/type.component.scss":
/*!****************************************************************!*\
  !*** ./demo/app/examples/type-definitions/type.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".section {\n  text-align: center;\n  font-size: 3em; }\n"

/***/ }),

/***/ "./demo/app/examples/type-definitions/type.component.ts":
/*!**************************************************************!*\
  !*** ./demo/app/examples/type-definitions/type.component.ts ***!
  \**************************************************************/
/*! exports provided: TypeExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeExampleComponent", function() { return TypeExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TypeExampleComponent = /** @class */ (function () {
    function TypeExampleComponent() {
        // this is just an example => for more details on config please visit fullPage.js docs
        this.config = {
            licenseKey: 'YOUR LICENSE KEY HERE',
            anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
            menu: '#menu',
            scrollOverflow: true,
            sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
            // events callback
            afterLoad: function (origin, destination, direction) {
                console.log(destination);
            },
            afterRender: function () {
                console.log('afterRender');
            },
            afterResize: function (width, height) {
                console.log('afterResize' + width + ' ' + height);
            },
            afterSlideLoad: function (section, origin, destination, direction) {
                console.log(destination);
            }
        };
    }
    TypeExampleComponent.prototype.ngOnInit = function () {
    };
    TypeExampleComponent.prototype.getRef = function (fullPageRef) {
        this.fullpage_api = fullPageRef;
    };
    TypeExampleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-type',
            template: __webpack_require__(/*! ./type.component.html */ "./demo/app/examples/type-definitions/type.component.html"),
            styles: [__webpack_require__(/*! ./type.component.scss */ "./demo/app/examples/type-definitions/type.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TypeExampleComponent);
    return TypeExampleComponent;
}());



/***/ }),

/***/ "./demo/environments/environment.ts":
/*!******************************************!*\
  !*** ./demo/environments/environment.ts ***!
  \******************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./demo/main.ts":
/*!**********************!*\
  !*** ./demo/main.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./demo/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./demo/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./dist/@fullpage/angular-fullpage/fesm5/fullpage-angular-fullpage.js":
/*!****************************************************************************!*\
  !*** ./dist/@fullpage/angular-fullpage/fesm5/fullpage-angular-fullpage.js ***!
  \****************************************************************************/
/*! exports provided: AngularFullpageModule, ɵb, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularFullpageModule", function() { return AngularFullpageModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return AnchorLinkDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return FullpageDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var fullpage = null;
if (!fullpage && typeof window !== 'undefined') {
    fullpage = __webpack_require__(/*! fullpage.js/dist/fullpage.extensions.min */ "./node_modules/fullpage.js/dist/fullpage.extensions.min.js");
}
var FullpageDirective = /** @class */ (function () {
    function FullpageDirective(platformId, renderer) {
        this.platformId = platformId;
        this.renderer = renderer;
        this.ref = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    FullpageDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            this.initFullpage();
        }
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformServer"])(this.platformId)) ;
    };
    /**
     * @return {?}
     */
    FullpageDirective.prototype.initFullpage = /**
     * @return {?}
     */
    function () {
        this.fullpage_api = new fullpage('#' + this.id, this.options);
        this.addBuildFunction();
        this.ref.emit(this.fullpage_api);
    };
    /**
     * @return {?}
     */
    FullpageDirective.prototype.addBuildFunction = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.fullpage_api.build = function () {
            /** @type {?} */
            var activeSection = _this.fullpage_api.getActiveSection();
            /** @type {?} */
            var activeSlide = _this.fullpage_api.getActiveSlide();
            _this.destroyFullpage();
            if (activeSection) {
                _this.renderer.addClass(activeSection.item, 'active');
            }
            if (activeSlide) {
                _this.renderer.addClass(activeSlide.item, 'active');
            }
            _this.initFullpage();
        };
    };
    /**
     * @return {?}
     */
    FullpageDirective.prototype.destroyFullpage = /**
     * @return {?}
     */
    function () {
        if (typeof this.fullpage_api !== 'undefined' && typeof this.fullpage_api.destroy !== 'undefined') {
            this.fullpage_api.destroy('all');
        }
    };
    /**
     * @return {?}
     */
    FullpageDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroyFullpage();
    };
    FullpageDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    // tslint:disable-next-line:directive-selector
                    selector: '[fullpage]'
                },] }
    ];
    FullpageDirective.ctorParameters = function () { return [
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
    ]; };
    FullpageDirective.propDecorators = {
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        ref: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return FullpageDirective;
}());
var AnchorLinkDirective = /** @class */ (function () {
    function AnchorLinkDirective() {
    }
    /**
     * @param {?} event
     * @return {?}
     */
    AnchorLinkDirective.prototype.onClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.href.length > 0 && this.href[0] === '#') {
            event.preventDefault();
            window.location.hash = this.href;
        }
    };
    AnchorLinkDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    // tslint:disable-next-line:directive-selector
                    selector: '[href]'
                },] }
    ];
    AnchorLinkDirective.propDecorators = {
        href: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', ['$event'],] }]
    };
    return AnchorLinkDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var AngularFullpageModule = /** @class */ (function () {
    function AngularFullpageModule() {
    }
    AngularFullpageModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [],
                    declarations: [FullpageDirective, AnchorLinkDirective],
                    exports: [FullpageDirective, AnchorLinkDirective]
                },] }
    ];
    return AngularFullpageModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */



//# sourceMappingURL=fullpage-angular-fullpage.js.map

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./demo/main.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Wallst\Documents\Projects\angular-fullpage\demo\main.ts */"./demo/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map