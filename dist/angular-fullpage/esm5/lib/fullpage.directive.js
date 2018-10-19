/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, Input, Output, EventEmitter } from '@angular/core';
import fullpage from 'fullpage.js/dist/fullpage.extensions.min';
var FullpageDirective = /** @class */ (function () {
    function FullpageDirective() {
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
            _this.destroyFullpage();
            // bug also destroyed angular events such as (click)
            // https://github.com/alvarotrigo/fullPage.js/blob/3f2a8ef9405d64a7d24460811435c561870f9259/dist/fullpage.js#L3035
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
            console.log('destoyred');
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
    FullpageDirective.ctorParameters = function () { return []; };
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbHBhZ2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1mdWxscGFnZS8iLCJzb3VyY2VzIjpbImxpYi9mdWxscGFnZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFGLE9BQU8sUUFBUSxNQUFNLDBDQUEwQyxDQUFDO0FBRWhFO0lBVUU7UUFIVSxRQUFHLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUduQixDQUFDOzs7O0lBRWpCLG9DQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsd0NBQVk7OztJQUFaO1FBQ0UsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLFFBQVEsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7SUFFRCw0Q0FBZ0I7OztJQUFoQjtRQUFBLGlCQU9DO1FBTkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEdBQUc7WUFDeEIsS0FBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3ZCLG9EQUFvRDtZQUNwRCxrSEFBa0g7WUFDbEgsS0FBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3RCLENBQUMsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCwyQ0FBZTs7O0lBQWY7UUFDRSxJQUFJLE9BQU8sSUFBSSxDQUFDLFlBQVksS0FBSyxXQUFXLElBQUksT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sS0FBSyxXQUFXLEVBQUU7WUFDaEcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNsQztJQUNILENBQUM7Ozs7SUFFRCx1Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDekIsQ0FBQzs7Z0JBeENGLFNBQVMsU0FBQzs7b0JBRVQsUUFBUSxFQUFFLFlBQVk7aUJBQ3ZCOzs7O3FCQUVFLEtBQUs7MEJBQ0wsS0FBSztzQkFDTCxNQUFNOztJQWtDVCx3QkFBQztDQUFBLEFBekNELElBeUNDO1NBckNZLGlCQUFpQjs7O0lBQzVCLCtCQUFZOztJQUNaLG9DQUFpQjs7SUFDakIsZ0NBQW1DOztJQUNuQyx5Q0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uSW5pdCwgT25EZXN0cm95LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IGZ1bGxwYWdlIGZyb20gJ2Z1bGxwYWdlLmpzL2Rpc3QvZnVsbHBhZ2UuZXh0ZW5zaW9ucy5taW4nO1xuXG5ARGlyZWN0aXZlKHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogJ1tmdWxscGFnZV0nXG59KVxuZXhwb3J0IGNsYXNzIEZ1bGxwYWdlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBpZDtcbiAgQElucHV0KCkgb3B0aW9ucztcbiAgQE91dHB1dCgpIHJlZiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgZnVsbHBhZ2VfYXBpO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbml0RnVsbHBhZ2UoKTtcbiAgfVxuXG4gIGluaXRGdWxscGFnZSgpIHtcbiAgICB0aGlzLmZ1bGxwYWdlX2FwaSA9IG5ldyBmdWxscGFnZSgnIycgKyB0aGlzLmlkLCB0aGlzLm9wdGlvbnMpO1xuICAgIHRoaXMuYWRkQnVpbGRGdW5jdGlvbigpO1xuICAgIHRoaXMucmVmLmVtaXQodGhpcy5mdWxscGFnZV9hcGkpO1xuICB9XG5cbiAgYWRkQnVpbGRGdW5jdGlvbigpIHtcbiAgICB0aGlzLmZ1bGxwYWdlX2FwaS5idWlsZCA9ICgpID0+IHtcbiAgICAgIHRoaXMuZGVzdHJveUZ1bGxwYWdlKCk7XG4gICAgICAvLyBidWcgYWxzbyBkZXN0cm95ZWQgYW5ndWxhciBldmVudHMgc3VjaCBhcyAoY2xpY2spXG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYWx2YXJvdHJpZ28vZnVsbFBhZ2UuanMvYmxvYi8zZjJhOGVmOTQwNWQ2NGE3ZDI0NDYwODExNDM1YzU2MTg3MGY5MjU5L2Rpc3QvZnVsbHBhZ2UuanMjTDMwMzVcbiAgICAgIHRoaXMuaW5pdEZ1bGxwYWdlKCk7XG4gICAgfTtcbiAgfVxuXG4gIGRlc3Ryb3lGdWxscGFnZSgpIHtcbiAgICBpZiAodHlwZW9mIHRoaXMuZnVsbHBhZ2VfYXBpICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgdGhpcy5mdWxscGFnZV9hcGkuZGVzdHJveSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdkZXN0b3lyZWQnKTtcbiAgICAgIHRoaXMuZnVsbHBhZ2VfYXBpLmRlc3Ryb3koJ2FsbCcpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZGVzdHJveUZ1bGxwYWdlKCk7XG4gIH1cbn1cbiJdfQ==