import * as i0 from '@angular/core';
import { EventEmitter, PLATFORM_ID, Directive, Inject, Input, Output, HostListener, NgModule } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

class FullpageDirective {
    constructor(platformId, renderer) {
        this.platformId = platformId;
        this.renderer = renderer;
        this.ref = new EventEmitter();
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
}
/** @nocollapse */ FullpageDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.0", ngImport: i0, type: FullpageDirective, deps: [{ token: PLATFORM_ID }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive });
/** @nocollapse */ FullpageDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.0.0", type: FullpageDirective, selector: "[fullpage]", inputs: { id: "id", options: "options" }, outputs: { ref: "ref" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.0", ngImport: i0, type: FullpageDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[fullpage]',
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
    onClick(event) {
        if (this.href.length > 0 && this.href[0] === '#') {
            event.preventDefault();
            window.location.hash = this.href;
        }
    }
}
/** @nocollapse */ AnchorLinkDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.0", ngImport: i0, type: AnchorLinkDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
/** @nocollapse */ AnchorLinkDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.0.0", type: AnchorLinkDirective, selector: "[href]", inputs: { href: "href" }, host: { listeners: { "click": "onClick($event)" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.0", ngImport: i0, type: AnchorLinkDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[href]'
                }]
        }], propDecorators: { href: [{
                type: Input
            }], onClick: [{
                type: HostListener,
                args: ['click', ['$event']]
            }] } });

class AngularFullpageModule {
}
/** @nocollapse */ AngularFullpageModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.0", ngImport: i0, type: AngularFullpageModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
/** @nocollapse */ AngularFullpageModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.0.0", ngImport: i0, type: AngularFullpageModule, declarations: [FullpageDirective, AnchorLinkDirective], exports: [FullpageDirective, AnchorLinkDirective] });
/** @nocollapse */ AngularFullpageModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.0.0", ngImport: i0, type: AngularFullpageModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.0", ngImport: i0, type: AngularFullpageModule, decorators: [{
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

/**
 * Generated bundle index. Do not edit.
 */

export { AnchorLinkDirective, AngularFullpageModule, FullpageDirective };
//# sourceMappingURL=fullpage-angular-fullpage.js.map
