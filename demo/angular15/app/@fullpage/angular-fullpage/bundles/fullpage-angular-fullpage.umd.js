(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@fullpage/angular-fullpage', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.fullpage = global.fullpage || {}, global.fullpage["angular-fullpage"] = {}), global.ng.core, global.ng.common));
})(this, (function (exports, i0, common) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);

    var FullpageDirective = /** @class */ (function () {
        function FullpageDirective(platformId, renderer) {
            this.platformId = platformId;
            this.renderer = renderer;
            this.ref = new i0.EventEmitter();
        }
        FullpageDirective.prototype.ngAfterViewInit = function () {
            if (common.isPlatformBrowser(this.platformId)) {
                this.initFullpage();
            }
            if (common.isPlatformServer(this.platformId)) {
                // server side code
            }
        };
        FullpageDirective.prototype.initFullpage = function () {
            console.log("fullpage", fullpage);
            this.fullpageApi = new fullpage('#' + this.id, this.options);
            this.addBuildFunction();
            this.ref.emit(this.fullpageApi);
        };
        FullpageDirective.prototype.addBuildFunction = function () {
            var _this = this;
            this.fullpageApi.build = function () {
                var activeSection = _this.fullpageApi.getActiveSection();
                var activeSlide = _this.fullpageApi.getActiveSlide();
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
        FullpageDirective.prototype.destroyFullpage = function () {
            if (typeof this.fullpageApi !== 'undefined' && typeof this.fullpageApi.destroy !== 'undefined') {
                this.fullpageApi.destroy('all');
            }
        };
        FullpageDirective.prototype.ngOnDestroy = function () {
            this.destroyFullpage();
        };
        return FullpageDirective;
    }());
    /** @nocollapse */ FullpageDirective.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.0", ngImport: i0__namespace, type: FullpageDirective, deps: [{ token: i0.PLATFORM_ID }, { token: i0__namespace.Renderer2 }], target: i0__namespace.ɵɵFactoryTarget.Directive });
    /** @nocollapse */ FullpageDirective.ɵdir = i0__namespace.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.0.0", type: FullpageDirective, selector: "[fullpage]", inputs: { id: "id", options: "options" }, outputs: { ref: "ref" }, ngImport: i0__namespace });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.0", ngImport: i0__namespace, type: FullpageDirective, decorators: [{
                type: i0.Directive,
                args: [{
                        selector: '[fullpage]',
                    }]
            }], ctorParameters: function () {
            return [{ type: Object, decorators: [{
                            type: i0.Inject,
                            args: [i0.PLATFORM_ID]
                        }] }, { type: i0__namespace.Renderer2 }];
        }, propDecorators: { id: [{
                    type: i0.Input
                }], options: [{
                    type: i0.Input
                }], ref: [{
                    type: i0.Output
                }] } });
    var AnchorLinkDirective = /** @class */ (function () {
        function AnchorLinkDirective() {
        }
        AnchorLinkDirective.prototype.onClick = function (event) {
            if (this.href.length > 0 && this.href[0] === '#') {
                event.preventDefault();
                window.location.hash = this.href;
            }
        };
        return AnchorLinkDirective;
    }());
    /** @nocollapse */ AnchorLinkDirective.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.0", ngImport: i0__namespace, type: AnchorLinkDirective, deps: [], target: i0__namespace.ɵɵFactoryTarget.Directive });
    /** @nocollapse */ AnchorLinkDirective.ɵdir = i0__namespace.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.0.0", type: AnchorLinkDirective, selector: "[href]", inputs: { href: "href" }, host: { listeners: { "click": "onClick($event)" } }, ngImport: i0__namespace });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.0", ngImport: i0__namespace, type: AnchorLinkDirective, decorators: [{
                type: i0.Directive,
                args: [{
                        selector: '[href]'
                    }]
            }], propDecorators: { href: [{
                    type: i0.Input
                }], onClick: [{
                    type: i0.HostListener,
                    args: ['click', ['$event']]
                }] } });

    var AngularFullpageModule = /** @class */ (function () {
        function AngularFullpageModule() {
        }
        return AngularFullpageModule;
    }());
    /** @nocollapse */ AngularFullpageModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.0", ngImport: i0__namespace, type: AngularFullpageModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    /** @nocollapse */ AngularFullpageModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.0.0", ngImport: i0__namespace, type: AngularFullpageModule, declarations: [FullpageDirective, AnchorLinkDirective], exports: [FullpageDirective, AnchorLinkDirective] });
    /** @nocollapse */ AngularFullpageModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.0.0", ngImport: i0__namespace, type: AngularFullpageModule, imports: [[]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.0", ngImport: i0__namespace, type: AngularFullpageModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [],
                        declarations: [FullpageDirective, AnchorLinkDirective],
                        exports: [FullpageDirective, AnchorLinkDirective]
                    }]
            }] });

    /*
     * Public API Surface of angular-fullpage
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.AnchorLinkDirective = AnchorLinkDirective;
    exports.AngularFullpageModule = AngularFullpageModule;
    exports.FullpageDirective = FullpageDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=fullpage-angular-fullpage.umd.js.map
