import { Directive, Input, Output, EventEmitter, Renderer2, NgModule } from '@angular/core';
import fullpage from 'fullpage.js/dist/fullpage.extensions.min';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class FullpageDirective {
    /**
     * @param {?} renderer
     */
    constructor(renderer) {
        this.renderer = renderer;
        this.ref = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initFullpage();
        this.addBuildFunction();
    }
    /**
     * @return {?}
     */
    initFullpage() {
        this.fullpage_api = new fullpage('#' + this.id, this.options);
        this.ref.emit(this.fullpage_api);
    }
    /**
     * @return {?}
     */
    addBuildFunction() {
        this.fullpage_api.build = () => {
            // const activeSection = this.fullpage_api.getActiveSection().item;
            this.destroyFullpage();
            // this.renderer.addClass(activeSection, 'active');
            this.initFullpage();
        };
    }
    /**
     * @return {?}
     */
    destroyFullpage() {
        if (typeof this.fullpage_api !== 'undefined' && typeof this.fullpage_api.destroy !== 'undefined') {
            this.fullpage_api.destroy('all');
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroyFullpage();
    }
}
FullpageDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[fullpage]'
            },] }
];
FullpageDirective.ctorParameters = () => [
    { type: Renderer2 }
];
FullpageDirective.propDecorators = {
    id: [{ type: Input }],
    options: [{ type: Input }],
    ref: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class AngularFullpageModule {
}
AngularFullpageModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                declarations: [FullpageDirective],
                exports: [FullpageDirective]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { AngularFullpageModule, FullpageDirective as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1mdWxscGFnZS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vYW5ndWxhci1mdWxscGFnZS9saWIvZnVsbHBhZ2UuZGlyZWN0aXZlLnRzIiwibmc6Ly9hbmd1bGFyLWZ1bGxwYWdlL2xpYi9hbmd1bGFyLWZ1bGxwYWdlLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPbkluaXQsIE9uRGVzdHJveSAsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBmdWxscGFnZSBmcm9tICdmdWxscGFnZS5qcy9kaXN0L2Z1bGxwYWdlLmV4dGVuc2lvbnMubWluJztcblxuQERpcmVjdGl2ZSh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdbZnVsbHBhZ2VdJ1xufSlcbmV4cG9ydCBjbGFzcyBGdWxscGFnZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgaWQ7XG4gIEBJbnB1dCgpIG9wdGlvbnM7XG4gIEBPdXRwdXQoKSByZWYgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGZ1bGxwYWdlX2FwaTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5pdEZ1bGxwYWdlKCk7XG4gICAgdGhpcy5hZGRCdWlsZEZ1bmN0aW9uKCk7XG4gIH1cblxuICBpbml0RnVsbHBhZ2UoKSB7XG4gICAgdGhpcy5mdWxscGFnZV9hcGkgPSBuZXcgZnVsbHBhZ2UoJyMnICsgdGhpcy5pZCwgdGhpcy5vcHRpb25zKTtcbiAgICB0aGlzLnJlZi5lbWl0KHRoaXMuZnVsbHBhZ2VfYXBpKTtcbiAgfVxuXG4gIGFkZEJ1aWxkRnVuY3Rpb24oKSB7XG4gICAgdGhpcy5mdWxscGFnZV9hcGkuYnVpbGQgPSAoKSA9PiB7XG4gICAgICAvLyBjb25zdCBhY3RpdmVTZWN0aW9uID0gdGhpcy5mdWxscGFnZV9hcGkuZ2V0QWN0aXZlU2VjdGlvbigpLml0ZW07XG5cbiAgICAgIHRoaXMuZGVzdHJveUZ1bGxwYWdlKCk7XG5cbiAgICAgIC8vIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoYWN0aXZlU2VjdGlvbiwgJ2FjdGl2ZScpO1xuXG4gICAgICB0aGlzLmluaXRGdWxscGFnZSgpO1xuXG4gICAgfTtcbiAgfVxuXG4gIGRlc3Ryb3lGdWxscGFnZSgpIHtcbiAgICBpZiAodHlwZW9mIHRoaXMuZnVsbHBhZ2VfYXBpICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgdGhpcy5mdWxscGFnZV9hcGkuZGVzdHJveSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMuZnVsbHBhZ2VfYXBpLmRlc3Ryb3koJ2FsbCcpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZGVzdHJveUZ1bGxwYWdlKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGdWxscGFnZURpcmVjdGl2ZSB9IGZyb20gJy4vZnVsbHBhZ2UuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW10sXG4gIGRlY2xhcmF0aW9uczogW0Z1bGxwYWdlRGlyZWN0aXZlXSxcbiAgZXhwb3J0czogW0Z1bGxwYWdlRGlyZWN0aXZlXVxufSlcbmV4cG9ydCBjbGFzcyBBbmd1bGFyRnVsbHBhZ2VNb2R1bGUgeyB9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0lBYUUsWUFBb0IsUUFBbUI7UUFBbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUg3QixRQUFHLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztLQUdTOzs7O0lBRTVDLFFBQVE7UUFDTixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7S0FDekI7Ozs7SUFFRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLFFBQVEsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0tBQ2xDOzs7O0lBRUQsZ0JBQWdCO1FBQ2QsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEdBQUc7O1lBR3hCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQzs7WUFJdkIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBRXJCLENBQUM7S0FDSDs7OztJQUVELGVBQWU7UUFDYixJQUFJLE9BQU8sSUFBSSxDQUFDLFlBQVksS0FBSyxXQUFXLElBQUksT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sS0FBSyxXQUFXLEVBQUU7WUFDaEcsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbEM7S0FDRjs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7S0FDeEI7OztZQTNDRixTQUFTLFNBQUM7O2dCQUVULFFBQVEsRUFBRSxZQUFZO2FBQ3ZCOzs7WUFOb0UsU0FBUzs7O2lCQVEzRSxLQUFLO3NCQUNMLEtBQUs7a0JBQ0wsTUFBTTs7Ozs7OztBQ1ZUOzs7WUFHQyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLEVBQUU7Z0JBQ1gsWUFBWSxFQUFFLENBQUMsaUJBQWlCLENBQUM7Z0JBQ2pDLE9BQU8sRUFBRSxDQUFDLGlCQUFpQixDQUFDO2FBQzdCOzs7Ozs7Ozs7Ozs7Ozs7In0=