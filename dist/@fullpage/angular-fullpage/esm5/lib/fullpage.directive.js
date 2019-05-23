/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
// tslint:disable-next-line:max-line-length
import { Directive, Input, Output, EventEmitter, Renderer2, HostListener, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
/** @type {?} */
var fullpage = null;
if (!fullpage && typeof window !== 'undefined') {
    fullpage = require('fullpage.js/dist/fullpage.extensions.min');
}
var FullpageDirective = /** @class */ (function () {
    function FullpageDirective(platformId, renderer) {
        this.platformId = platformId;
        this.renderer = renderer;
        this.ref = new EventEmitter();
    }
    /**
     * @return {?}
     */
    FullpageDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (isPlatformBrowser(this.platformId)) {
            this.initFullpage();
        }
        if (isPlatformServer(this.platformId)) {
            // server side code
        }
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
        { type: Directive, args: [{
                    // tslint:disable-next-line:directive-selector
                    selector: '[fullpage]'
                },] }
    ];
    FullpageDirective.ctorParameters = function () { return [
        { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: Renderer2 }
    ]; };
    FullpageDirective.propDecorators = {
        id: [{ type: Input }],
        options: [{ type: Input }],
        ref: [{ type: Output }]
    };
    return FullpageDirective;
}());
export { FullpageDirective };
if (false) {
    /** @type {?} */
    FullpageDirective.prototype.id;
    /** @type {?} */
    FullpageDirective.prototype.options;
    /** @type {?} */
    FullpageDirective.prototype.ref;
    /** @type {?} */
    FullpageDirective.prototype.fullpage_api;
    /** @type {?} */
    FullpageDirective.prototype.platformId;
    /** @type {?} */
    FullpageDirective.prototype.renderer;
}
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
        { type: Directive, args: [{
                    // tslint:disable-next-line:directive-selector
                    selector: '[href]'
                },] }
    ];
    AnchorLinkDirective.propDecorators = {
        href: [{ type: Input }],
        onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return AnchorLinkDirective;
}());
export { AnchorLinkDirective };
if (false) {
    /** @type {?} */
    AnchorLinkDirective.prototype.href;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbHBhZ2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZ1bGxwYWdlL2FuZ3VsYXItZnVsbHBhZ2UvIiwic291cmNlcyI6WyJsaWIvZnVsbHBhZ2UuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQTRCLE1BQU0sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9JLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztJQUdsRSxRQUFRLEdBQUcsSUFBSTtBQUNuQixJQUFJLENBQUMsUUFBUSxJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsRUFBRTtJQUM5QyxRQUFRLEdBQUcsT0FBTyxDQUFDLDBDQUEwQyxDQUFDLENBQUM7Q0FDaEU7QUFFRDtJQVVFLDJCQUMrQixVQUFrQixFQUN2QyxRQUFtQjtRQURFLGVBQVUsR0FBVixVQUFVLENBQVE7UUFDdkMsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUxuQixRQUFHLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQU0vQixDQUFDOzs7O0lBRUwsMkNBQWU7OztJQUFmO1FBQ0UsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdEMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3JCO1FBQ0QsSUFBSSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDckMsbUJBQW1CO1NBQ3BCO0lBQ0gsQ0FBQzs7OztJQUVELHdDQUFZOzs7SUFBWjtRQUNFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxRQUFRLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7O0lBRUQsNENBQWdCOzs7SUFBaEI7UUFBQSxpQkFpQkM7UUFoQkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEdBQUc7O2dCQUNsQixhQUFhLEdBQUcsS0FBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRTs7Z0JBQ3BELFdBQVcsR0FBRyxLQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBRTtZQUV0RCxLQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7WUFFdkIsSUFBSSxhQUFhLEVBQUU7Z0JBQ2pCLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7YUFDdEQ7WUFFRCxJQUFJLFdBQVcsRUFBRTtnQkFDZixLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2FBQ3BEO1lBRUQsS0FBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3RCLENBQUMsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCwyQ0FBZTs7O0lBQWY7UUFDRSxJQUFJLE9BQU8sSUFBSSxDQUFDLFlBQVksS0FBSyxXQUFXLElBQUksT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sS0FBSyxXQUFXLEVBQUU7WUFDaEcsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbEM7SUFDSCxDQUFDOzs7O0lBRUQsdUNBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3pCLENBQUM7O2dCQXpERixTQUFTLFNBQUM7O29CQUVULFFBQVEsRUFBRSxZQUFZO2lCQUN2Qjs7O2dCQVE0QyxNQUFNLHVCQUE5QyxNQUFNLFNBQUMsV0FBVztnQkFwQm9ELFNBQVM7OztxQkFjakYsS0FBSzswQkFDTCxLQUFLO3NCQUNMLE1BQU07O0lBbURULHdCQUFDO0NBQUEsQUExREQsSUEwREM7U0F0RFksaUJBQWlCOzs7SUFDNUIsK0JBQVk7O0lBQ1osb0NBQWlCOztJQUNqQixnQ0FBbUM7O0lBQ25DLHlDQUFhOztJQUdYLHVDQUErQzs7SUFDL0MscUNBQTJCOztBQWdEL0I7SUFBQTtJQWFBLENBQUM7Ozs7O0lBTm9DLHFDQUFPOzs7O0lBQTFDLFVBQTJDLEtBQUs7UUFDOUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUU7WUFDaEQsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3ZCLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDbEM7SUFDSCxDQUFDOztnQkFaRixTQUFTLFNBQUM7O29CQUVULFFBQVEsRUFBRyxRQUFRO2lCQUNwQjs7O3VCQUVFLEtBQUs7MEJBRUwsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzs7SUFNbkMsMEJBQUM7Q0FBQSxBQWJELElBYUM7U0FUWSxtQkFBbUI7OztJQUM5QixtQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG5pbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBSZW5kZXJlcjIsIEhvc3RMaXN0ZW5lciwgUExBVEZPUk1fSUQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIsIGlzUGxhdGZvcm1TZXJ2ZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5kZWNsYXJlIHZhciByZXF1aXJlO1xubGV0IGZ1bGxwYWdlID0gbnVsbDtcbmlmICghZnVsbHBhZ2UgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgZnVsbHBhZ2UgPSByZXF1aXJlKCdmdWxscGFnZS5qcy9kaXN0L2Z1bGxwYWdlLmV4dGVuc2lvbnMubWluJyk7XG59XG5cbkBEaXJlY3RpdmUoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnW2Z1bGxwYWdlXSdcbn0pXG5leHBvcnQgY2xhc3MgRnVsbHBhZ2VEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBpZDtcbiAgQElucHV0KCkgb3B0aW9ucztcbiAgQE91dHB1dCgpIHJlZiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgZnVsbHBhZ2VfYXBpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogT2JqZWN0LFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHsgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgICAgdGhpcy5pbml0RnVsbHBhZ2UoKTtcbiAgICB9XG4gICAgaWYgKGlzUGxhdGZvcm1TZXJ2ZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgICAgLy8gc2VydmVyIHNpZGUgY29kZVxuICAgIH1cbiAgfVxuXG4gIGluaXRGdWxscGFnZSgpIHtcbiAgICB0aGlzLmZ1bGxwYWdlX2FwaSA9IG5ldyBmdWxscGFnZSgnIycgKyB0aGlzLmlkLCB0aGlzLm9wdGlvbnMpO1xuICAgIHRoaXMuYWRkQnVpbGRGdW5jdGlvbigpO1xuICAgIHRoaXMucmVmLmVtaXQodGhpcy5mdWxscGFnZV9hcGkpO1xuICB9XG5cbiAgYWRkQnVpbGRGdW5jdGlvbigpIHtcbiAgICB0aGlzLmZ1bGxwYWdlX2FwaS5idWlsZCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGFjdGl2ZVNlY3Rpb24gPSB0aGlzLmZ1bGxwYWdlX2FwaS5nZXRBY3RpdmVTZWN0aW9uKCk7XG4gICAgICBjb25zdCBhY3RpdmVTbGlkZSA9IHRoaXMuZnVsbHBhZ2VfYXBpLmdldEFjdGl2ZVNsaWRlKCk7XG5cbiAgICAgIHRoaXMuZGVzdHJveUZ1bGxwYWdlKCk7XG5cbiAgICAgIGlmIChhY3RpdmVTZWN0aW9uKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoYWN0aXZlU2VjdGlvbi5pdGVtLCAnYWN0aXZlJyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChhY3RpdmVTbGlkZSkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGFjdGl2ZVNsaWRlLml0ZW0sICdhY3RpdmUnKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5pbml0RnVsbHBhZ2UoKTtcbiAgICB9O1xuICB9XG5cbiAgZGVzdHJveUZ1bGxwYWdlKCkge1xuICAgIGlmICh0eXBlb2YgdGhpcy5mdWxscGFnZV9hcGkgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB0aGlzLmZ1bGxwYWdlX2FwaS5kZXN0cm95ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5mdWxscGFnZV9hcGkuZGVzdHJveSgnYWxsJyk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5kZXN0cm95RnVsbHBhZ2UoKTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvciA6ICdbaHJlZl0nXG59KVxuZXhwb3J0IGNsYXNzIEFuY2hvckxpbmtEaXJlY3RpdmUge1xuICBASW5wdXQoKSBocmVmOiBzdHJpbmc7XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKSBvbkNsaWNrKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuaHJlZi5sZW5ndGggPiAwICYmIHRoaXMuaHJlZlswXSA9PT0gJyMnKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSB0aGlzLmhyZWY7XG4gICAgfVxuICB9XG59XG4iXX0=