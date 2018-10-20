import { Directive, Input, Output, EventEmitter, Renderer2, NgModule } from '@angular/core';
import fullpage from 'fullpage.js/dist/fullpage.extensions.min';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var FullpageDirective = /** @class */ (function () {
    function FullpageDirective(renderer) {
        this.renderer = renderer;
        this.ref = new EventEmitter();
    }
    /**
     * @return {?}
     */
    FullpageDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.initFullpage();
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
            // bug destroy(all) also destroyed angular events such as (click)
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
        { type: Renderer2 }
    ]; };
    FullpageDirective.propDecorators = {
        id: [{ type: Input }],
        options: [{ type: Input }],
        ref: [{ type: Output }]
    };
    return FullpageDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var AngularFullpageModule = /** @class */ (function () {
    function AngularFullpageModule() {
    }
    AngularFullpageModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    declarations: [FullpageDirective],
                    exports: [FullpageDirective]
                },] }
    ];
    return AngularFullpageModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { AngularFullpageModule, FullpageDirective as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1mdWxscGFnZS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vYW5ndWxhci1mdWxscGFnZS9saWIvZnVsbHBhZ2UuZGlyZWN0aXZlLnRzIiwibmc6Ly9hbmd1bGFyLWZ1bGxwYWdlL2xpYi9hbmd1bGFyLWZ1bGxwYWdlLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPbkluaXQsIE9uRGVzdHJveSwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IGZ1bGxwYWdlIGZyb20gJ2Z1bGxwYWdlLmpzL2Rpc3QvZnVsbHBhZ2UuZXh0ZW5zaW9ucy5taW4nO1xuXG5ARGlyZWN0aXZlKHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogJ1tmdWxscGFnZV0nXG59KVxuZXhwb3J0IGNsYXNzIEZ1bGxwYWdlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBpZDtcbiAgQElucHV0KCkgb3B0aW9ucztcbiAgQE91dHB1dCgpIHJlZiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgZnVsbHBhZ2VfYXBpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbml0RnVsbHBhZ2UoKTtcbiAgfVxuXG4gIGluaXRGdWxscGFnZSgpIHtcbiAgICB0aGlzLmZ1bGxwYWdlX2FwaSA9IG5ldyBmdWxscGFnZSgnIycgKyB0aGlzLmlkLCB0aGlzLm9wdGlvbnMpO1xuICAgIHRoaXMuYWRkQnVpbGRGdW5jdGlvbigpO1xuICAgIHRoaXMucmVmLmVtaXQodGhpcy5mdWxscGFnZV9hcGkpO1xuICB9XG5cbiAgYWRkQnVpbGRGdW5jdGlvbigpIHtcbiAgICB0aGlzLmZ1bGxwYWdlX2FwaS5idWlsZCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGFjdGl2ZVNlY3Rpb24gPSB0aGlzLmZ1bGxwYWdlX2FwaS5nZXRBY3RpdmVTZWN0aW9uKCk7XG4gICAgICBjb25zdCBhY3RpdmVTbGlkZSA9IHRoaXMuZnVsbHBhZ2VfYXBpLmdldEFjdGl2ZVNsaWRlKCk7XG5cbiAgICAgIC8vIGJ1ZyBkZXN0cm95KGFsbCkgYWxzbyBkZXN0cm95ZWQgYW5ndWxhciBldmVudHMgc3VjaCBhcyAoY2xpY2spXG4gICAgICB0aGlzLmRlc3Ryb3lGdWxscGFnZSgpO1xuXG4gICAgICBpZiAoYWN0aXZlU2VjdGlvbikge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGFjdGl2ZVNlY3Rpb24uaXRlbSwgJ2FjdGl2ZScpO1xuICAgICAgfVxuXG4gICAgICBpZiAoYWN0aXZlU2xpZGUpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhhY3RpdmVTbGlkZS5pdGVtLCAnYWN0aXZlJyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuaW5pdEZ1bGxwYWdlKCk7XG4gICAgfTtcbiAgfVxuXG4gIGRlc3Ryb3lGdWxscGFnZSgpIHtcbiAgICBpZiAodHlwZW9mIHRoaXMuZnVsbHBhZ2VfYXBpICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgdGhpcy5mdWxscGFnZV9hcGkuZGVzdHJveSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMuZnVsbHBhZ2VfYXBpLmRlc3Ryb3koJ2FsbCcpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZGVzdHJveUZ1bGxwYWdlKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGdWxscGFnZURpcmVjdGl2ZSB9IGZyb20gJy4vZnVsbHBhZ2UuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW10sXG4gIGRlY2xhcmF0aW9uczogW0Z1bGxwYWdlRGlyZWN0aXZlXSxcbiAgZXhwb3J0czogW0Z1bGxwYWdlRGlyZWN0aXZlXVxufSlcbmV4cG9ydCBjbGFzcyBBbmd1bGFyRnVsbHBhZ2VNb2R1bGUgeyB9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0lBYUUsMkJBQW9CLFFBQW1CO1FBQW5CLGFBQVEsR0FBUixRQUFRLENBQVc7UUFIN0IsUUFBRyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7S0FHUzs7OztJQUU1QyxvQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7S0FDckI7Ozs7SUFFRCx3Q0FBWTs7O0lBQVo7UUFDRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksUUFBUSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7S0FDbEM7Ozs7SUFFRCw0Q0FBZ0I7OztJQUFoQjtRQUFBLGlCQWtCQztRQWpCQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssR0FBRzs7Z0JBQ2xCLGFBQWEsR0FBRyxLQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixFQUFFOztnQkFDcEQsV0FBVyxHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxFQUFFOztZQUd0RCxLQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7WUFFdkIsSUFBSSxhQUFhLEVBQUU7Z0JBQ2pCLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7YUFDdEQ7WUFFRCxJQUFJLFdBQVcsRUFBRTtnQkFDZixLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2FBQ3BEO1lBRUQsS0FBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3JCLENBQUM7S0FDSDs7OztJQUVELDJDQUFlOzs7SUFBZjtRQUNFLElBQUksT0FBTyxJQUFJLENBQUMsWUFBWSxLQUFLLFdBQVcsSUFBSSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxLQUFLLFdBQVcsRUFBRTtZQUNoRyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNsQztLQUNGOzs7O0lBRUQsdUNBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0tBQ3hCOztnQkFsREYsU0FBUyxTQUFDOztvQkFFVCxRQUFRLEVBQUUsWUFBWTtpQkFDdkI7OztnQkFObUUsU0FBUzs7O3FCQVExRSxLQUFLOzBCQUNMLEtBQUs7c0JBQ0wsTUFBTTs7SUE0Q1Qsd0JBQUM7Q0FuREQ7Ozs7OztBQ0hBO0lBR0E7S0FLc0M7O2dCQUxyQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLEVBQUU7b0JBQ1gsWUFBWSxFQUFFLENBQUMsaUJBQWlCLENBQUM7b0JBQ2pDLE9BQU8sRUFBRSxDQUFDLGlCQUFpQixDQUFDO2lCQUM3Qjs7SUFDb0MsNEJBQUM7Q0FMdEM7Ozs7Ozs7Ozs7Ozs7OyJ9