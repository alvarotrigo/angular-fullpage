import * as i0 from '@angular/core';
import { EventEmitter, PLATFORM_ID, Directive, Inject, Input, Output, HostListener, NgModule } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

// tslint:disable-next-line:max-line-length
class FullpageDirective {
    platformId;
    renderer;
    id;
    options;
    ref = new EventEmitter();
    fullpageApi;
    constructor(platformId, renderer) {
        this.platformId = platformId;
        this.renderer = renderer;
    }
    ngAfterViewInit() {
        if (isPlatformBrowser(this.platformId)) {
            this.initFullpage();
        }
        if (isPlatformServer(this.platformId)) {
            // server side code
        }
    }
    initFullpage() {
        console.log("fullpage", fullpage);
        this.fullpageApi = new fullpage('#' + this.id, this.options);
        this.addBuildFunction();
        this.ref.emit(this.fullpageApi);
    }
    addBuildFunction() {
        this.fullpageApi.build = () => {
            const activeSection = this.fullpageApi.getActiveSection();
            const activeSlide = this.fullpageApi.getActiveSlide();
            this.destroyFullpage();
            if (activeSection) {
                this.renderer.addClass(activeSection.item, 'active');
            }
            if (activeSlide) {
                this.renderer.addClass(activeSlide.item, 'active');
            }
            this.initFullpage();
        };
    }
    destroyFullpage() {
        if (typeof this.fullpageApi !== 'undefined' && typeof this.fullpageApi.destroy !== 'undefined') {
            this.fullpageApi.destroy('all');
        }
    }
    ngOnDestroy() {
        this.destroyFullpage();
    }
    /** @nocollapse */ static ɵfac = function FullpageDirective_Factory(t) { return new (t || FullpageDirective)(i0.ɵɵdirectiveInject(PLATFORM_ID), i0.ɵɵdirectiveInject(i0.Renderer2)); };
    /** @nocollapse */ static ɵdir = /** @pureOrBreakMyCode */ i0.ɵɵdefineDirective({ type: FullpageDirective, selectors: [["", "fullpage", ""]], inputs: { id: "id", options: "options" }, outputs: { ref: "ref" } });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FullpageDirective, [{
        type: Directive,
        args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[fullpage]'
            }]
    }], function () { return [{ type: Object, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: i0.Renderer2 }]; }, { id: [{
            type: Input
        }], options: [{
            type: Input
        }], ref: [{
            type: Output
        }] }); })();
class AnchorLinkDirective {
    href;
    onClick(event) {
        if (this.href.length > 0 && this.href[0] === '#') {
            event.preventDefault();
            window.location.hash = this.href;
        }
    }
    /** @nocollapse */ static ɵfac = function AnchorLinkDirective_Factory(t) { return new (t || AnchorLinkDirective)(); };
    /** @nocollapse */ static ɵdir = /** @pureOrBreakMyCode */ i0.ɵɵdefineDirective({ type: AnchorLinkDirective, selectors: [["", "href", ""]], hostBindings: function AnchorLinkDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function AnchorLinkDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
        } }, inputs: { href: "href" } });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AnchorLinkDirective, [{
        type: Directive,
        args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[href]'
            }]
    }], null, { href: [{
            type: Input
        }], onClick: [{
            type: HostListener,
            args: ['click', ['$event']]
        }] }); })();

class AngularFullpageModule {
    /** @nocollapse */ static ɵfac = function AngularFullpageModule_Factory(t) { return new (t || AngularFullpageModule)(); };
    /** @nocollapse */ static ɵmod = /** @pureOrBreakMyCode */ i0.ɵɵdefineNgModule({ type: AngularFullpageModule });
    /** @nocollapse */ static ɵinj = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjector({});
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AngularFullpageModule, [{
        type: NgModule,
        args: [{
                imports: [],
                declarations: [FullpageDirective, AnchorLinkDirective],
                exports: [FullpageDirective, AnchorLinkDirective]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AngularFullpageModule, { declarations: [FullpageDirective, AnchorLinkDirective], exports: [FullpageDirective, AnchorLinkDirective] }); })();

/*
 * Public API Surface of angular-fullpage
 */
/// <reference path="./lib/fullpage.interface.ts" />

/**
 * Generated bundle index. Do not edit.
 */

export { AnchorLinkDirective, AngularFullpageModule, FullpageDirective };
//# sourceMappingURL=fullpage-angular-fullpage.mjs.map
