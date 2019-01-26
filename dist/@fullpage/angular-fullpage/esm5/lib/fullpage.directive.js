/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
// tslint:disable-next-line:max-line-length
import { Directive, Input, Output, EventEmitter, Renderer2, HostListener, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import fullpage from 'fullpage.js/dist/fullpage.extensions.min';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbHBhZ2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZ1bGxwYWdlL2FuZ3VsYXItZnVsbHBhZ2UvIiwic291cmNlcyI6WyJsaWIvZnVsbHBhZ2UuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQTRCLE1BQU0sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9JLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3RFLE9BQU8sUUFBUSxNQUFNLDBDQUEwQyxDQUFDO0FBRWhFO0lBVUUsMkJBQytCLFVBQWtCLEVBQ3ZDLFFBQW1CO1FBREUsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUN2QyxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBTG5CLFFBQUcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBTS9CLENBQUM7Ozs7SUFFTCwyQ0FBZTs7O0lBQWY7UUFDRSxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN0QyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDckI7UUFDRCxJQUFJLGdCQUFnQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUNyQyxtQkFBbUI7U0FDcEI7SUFDSCxDQUFDOzs7O0lBRUQsd0NBQVk7OztJQUFaO1FBQ0UsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLFFBQVEsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7SUFFRCw0Q0FBZ0I7OztJQUFoQjtRQUFBLGlCQWlCQztRQWhCQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssR0FBRzs7Z0JBQ2xCLGFBQWEsR0FBRyxLQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixFQUFFOztnQkFDcEQsV0FBVyxHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxFQUFFO1lBRXRELEtBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUV2QixJQUFJLGFBQWEsRUFBRTtnQkFDakIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQzthQUN0RDtZQUVELElBQUksV0FBVyxFQUFFO2dCQUNmLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7YUFDcEQ7WUFFRCxLQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDdEIsQ0FBQyxDQUFDO0lBQ0osQ0FBQzs7OztJQUVELDJDQUFlOzs7SUFBZjtRQUNFLElBQUksT0FBTyxJQUFJLENBQUMsWUFBWSxLQUFLLFdBQVcsSUFBSSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxLQUFLLFdBQVcsRUFBRTtZQUNoRyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNsQztJQUNILENBQUM7Ozs7SUFFRCx1Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDekIsQ0FBQzs7Z0JBekRGLFNBQVMsU0FBQzs7b0JBRVQsUUFBUSxFQUFFLFlBQVk7aUJBQ3ZCOzs7Z0JBUTRDLE1BQU0sdUJBQTlDLE1BQU0sU0FBQyxXQUFXO2dCQWZvRCxTQUFTOzs7cUJBU2pGLEtBQUs7MEJBQ0wsS0FBSztzQkFDTCxNQUFNOztJQW1EVCx3QkFBQztDQUFBLEFBMURELElBMERDO1NBdERZLGlCQUFpQjs7O0lBQzVCLCtCQUFZOztJQUNaLG9DQUFpQjs7SUFDakIsZ0NBQW1DOztJQUNuQyx5Q0FBYTs7SUFHWCx1Q0FBK0M7O0lBQy9DLHFDQUEyQjs7QUFnRC9CO0lBQUE7SUFhQSxDQUFDOzs7OztJQU5vQyxxQ0FBTzs7OztJQUExQyxVQUEyQyxLQUFLO1FBQzlDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFO1lBQ2hELEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN2QixNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ2xDO0lBQ0gsQ0FBQzs7Z0JBWkYsU0FBUyxTQUFDOztvQkFFVCxRQUFRLEVBQUcsUUFBUTtpQkFDcEI7Ozt1QkFFRSxLQUFLOzBCQUVMLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0lBTW5DLDBCQUFDO0NBQUEsQUFiRCxJQWFDO1NBVFksbUJBQW1COzs7SUFDOUIsbUNBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgUmVuZGVyZXIyLCBIb3N0TGlzdGVuZXIsIFBMQVRGT1JNX0lELCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyLCBpc1BsYXRmb3JtU2VydmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCBmdWxscGFnZSBmcm9tICdmdWxscGFnZS5qcy9kaXN0L2Z1bGxwYWdlLmV4dGVuc2lvbnMubWluJztcblxuQERpcmVjdGl2ZSh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdbZnVsbHBhZ2VdJ1xufSlcbmV4cG9ydCBjbGFzcyBGdWxscGFnZURpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIGlkO1xuICBASW5wdXQoKSBvcHRpb25zO1xuICBAT3V0cHV0KCkgcmVmID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBmdWxscGFnZV9hcGk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBPYmplY3QsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyXG4gICkgeyB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICB0aGlzLmluaXRGdWxscGFnZSgpO1xuICAgIH1cbiAgICBpZiAoaXNQbGF0Zm9ybVNlcnZlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICAvLyBzZXJ2ZXIgc2lkZSBjb2RlXG4gICAgfVxuICB9XG5cbiAgaW5pdEZ1bGxwYWdlKCkge1xuICAgIHRoaXMuZnVsbHBhZ2VfYXBpID0gbmV3IGZ1bGxwYWdlKCcjJyArIHRoaXMuaWQsIHRoaXMub3B0aW9ucyk7XG4gICAgdGhpcy5hZGRCdWlsZEZ1bmN0aW9uKCk7XG4gICAgdGhpcy5yZWYuZW1pdCh0aGlzLmZ1bGxwYWdlX2FwaSk7XG4gIH1cblxuICBhZGRCdWlsZEZ1bmN0aW9uKCkge1xuICAgIHRoaXMuZnVsbHBhZ2VfYXBpLmJ1aWxkID0gKCkgPT4ge1xuICAgICAgY29uc3QgYWN0aXZlU2VjdGlvbiA9IHRoaXMuZnVsbHBhZ2VfYXBpLmdldEFjdGl2ZVNlY3Rpb24oKTtcbiAgICAgIGNvbnN0IGFjdGl2ZVNsaWRlID0gdGhpcy5mdWxscGFnZV9hcGkuZ2V0QWN0aXZlU2xpZGUoKTtcblxuICAgICAgdGhpcy5kZXN0cm95RnVsbHBhZ2UoKTtcblxuICAgICAgaWYgKGFjdGl2ZVNlY3Rpb24pIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhhY3RpdmVTZWN0aW9uLml0ZW0sICdhY3RpdmUnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGFjdGl2ZVNsaWRlKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoYWN0aXZlU2xpZGUuaXRlbSwgJ2FjdGl2ZScpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmluaXRGdWxscGFnZSgpO1xuICAgIH07XG4gIH1cblxuICBkZXN0cm95RnVsbHBhZ2UoKSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLmZ1bGxwYWdlX2FwaSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHRoaXMuZnVsbHBhZ2VfYXBpLmRlc3Ryb3kgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLmZ1bGxwYWdlX2FwaS5kZXN0cm95KCdhbGwnKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmRlc3Ryb3lGdWxscGFnZSgpO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yXG4gIHNlbGVjdG9yIDogJ1tocmVmXSdcbn0pXG5leHBvcnQgY2xhc3MgQW5jaG9yTGlua0RpcmVjdGl2ZSB7XG4gIEBJbnB1dCgpIGhyZWY6IHN0cmluZztcblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pIG9uQ2xpY2soZXZlbnQpIHtcbiAgICBpZiAodGhpcy5ocmVmLmxlbmd0aCA+IDAgJiYgdGhpcy5ocmVmWzBdID09PSAnIycpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IHRoaXMuaHJlZjtcbiAgICB9XG4gIH1cbn1cbiJdfQ==