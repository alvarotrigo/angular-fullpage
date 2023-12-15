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
    /** @nocollapse */ static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: FullpageDirective, deps: [{ token: PLATFORM_ID }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive });
    /** @nocollapse */ static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.0.0", type: FullpageDirective, selector: "[fullpage]", inputs: { id: "id", options: "options" }, outputs: { ref: "ref" }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: FullpageDirective, decorators: [{
            type: Directive,
            args: [{
                    // tslint:disable-next-line:directive-selector
                    selector: '[fullpage]'
                }]
        }], ctorParameters: function () { return [{ type: Object, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }, { type: i0.Renderer2 }]; }, propDecorators: { id: [{
                type: Input
            }], options: [{
                type: Input
            }], ref: [{
                type: Output
            }] } });
class AnchorLinkDirective {
    href;
    onClick(event) {
        if (this.href.length > 0 && this.href[0] === '#') {
            event.preventDefault();
            window.location.hash = this.href;
        }
    }
    /** @nocollapse */ static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: AnchorLinkDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    /** @nocollapse */ static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.0.0", type: AnchorLinkDirective, selector: "[href]", inputs: { href: "href" }, host: { listeners: { "click": "onClick($event)" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: AnchorLinkDirective, decorators: [{
            type: Directive,
            args: [{
                    // tslint:disable-next-line:directive-selector
                    selector: '[href]'
                }]
        }], propDecorators: { href: [{
                type: Input
            }], onClick: [{
                type: HostListener,
                args: ['click', ['$event']]
            }] } });

class AngularFullpageModule {
    /** @nocollapse */ static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: AngularFullpageModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    /** @nocollapse */ static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.0", ngImport: i0, type: AngularFullpageModule, declarations: [FullpageDirective, AnchorLinkDirective], exports: [FullpageDirective, AnchorLinkDirective] });
    /** @nocollapse */ static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: AngularFullpageModule });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: AngularFullpageModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [],
                    declarations: [FullpageDirective, AnchorLinkDirective],
                    exports: [FullpageDirective, AnchorLinkDirective]
                }]
        }] });

/*
 * Public API Surface of angular-fullpage
 */
/// <reference path="./lib/fullpage.interface.ts" />

/**
 * Generated bundle index. Do not edit.
 */

export { AnchorLinkDirective, AngularFullpageModule, FullpageDirective };
//# sourceMappingURL=fullpage-angular-fullpage.mjs.map
