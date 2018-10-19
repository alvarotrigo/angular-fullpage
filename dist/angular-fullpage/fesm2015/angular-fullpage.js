import { Directive, Input, Output, EventEmitter, NgModule } from '@angular/core';
import fullpage from 'fullpage.js/dist/fullpage.extensions.min';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class FullpageDirective {
    constructor() {
        this.ref = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initFullpage();
    }
    /**
     * @return {?}
     */
    initFullpage() {
        this.fullpage_api = new fullpage('#' + this.id, this.options);
        this.addBuildFunction();
        this.ref.emit(this.fullpage_api);
    }
    /**
     * @return {?}
     */
    addBuildFunction() {
        this.fullpage_api.build = () => {
            this.destroyFullpage();
            // bug also destroyed angular events such as (click)
            // https://github.com/alvarotrigo/fullPage.js/blob/3f2a8ef9405d64a7d24460811435c561870f9259/dist/fullpage.js#L3035
            this.initFullpage();
        };
    }
    /**
     * @return {?}
     */
    destroyFullpage() {
        if (typeof this.fullpage_api !== 'undefined' && typeof this.fullpage_api.destroy !== 'undefined') {
            console.log('destoyred');
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
FullpageDirective.ctorParameters = () => [];
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1mdWxscGFnZS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vYW5ndWxhci1mdWxscGFnZS9saWIvZnVsbHBhZ2UuZGlyZWN0aXZlLnRzIiwibmc6Ly9hbmd1bGFyLWZ1bGxwYWdlL2xpYi9hbmd1bGFyLWZ1bGxwYWdlLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPbkluaXQsIE9uRGVzdHJveSwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBmdWxscGFnZSBmcm9tICdmdWxscGFnZS5qcy9kaXN0L2Z1bGxwYWdlLmV4dGVuc2lvbnMubWluJztcblxuQERpcmVjdGl2ZSh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdbZnVsbHBhZ2VdJ1xufSlcbmV4cG9ydCBjbGFzcyBGdWxscGFnZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgaWQ7XG4gIEBJbnB1dCgpIG9wdGlvbnM7XG4gIEBPdXRwdXQoKSByZWYgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGZ1bGxwYWdlX2FwaTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5pdEZ1bGxwYWdlKCk7XG4gIH1cblxuICBpbml0RnVsbHBhZ2UoKSB7XG4gICAgdGhpcy5mdWxscGFnZV9hcGkgPSBuZXcgZnVsbHBhZ2UoJyMnICsgdGhpcy5pZCwgdGhpcy5vcHRpb25zKTtcbiAgICB0aGlzLmFkZEJ1aWxkRnVuY3Rpb24oKTtcbiAgICB0aGlzLnJlZi5lbWl0KHRoaXMuZnVsbHBhZ2VfYXBpKTtcbiAgfVxuXG4gIGFkZEJ1aWxkRnVuY3Rpb24oKSB7XG4gICAgdGhpcy5mdWxscGFnZV9hcGkuYnVpbGQgPSAoKSA9PiB7XG4gICAgICB0aGlzLmRlc3Ryb3lGdWxscGFnZSgpO1xuICAgICAgLy8gYnVnIGFsc28gZGVzdHJveWVkIGFuZ3VsYXIgZXZlbnRzIHN1Y2ggYXMgKGNsaWNrKVxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FsdmFyb3RyaWdvL2Z1bGxQYWdlLmpzL2Jsb2IvM2YyYThlZjk0MDVkNjRhN2QyNDQ2MDgxMTQzNWM1NjE4NzBmOTI1OS9kaXN0L2Z1bGxwYWdlLmpzI0wzMDM1XG4gICAgICB0aGlzLmluaXRGdWxscGFnZSgpO1xuICAgIH07XG4gIH1cblxuICBkZXN0cm95RnVsbHBhZ2UoKSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLmZ1bGxwYWdlX2FwaSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHRoaXMuZnVsbHBhZ2VfYXBpLmRlc3Ryb3kgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmxvZygnZGVzdG95cmVkJyk7XG4gICAgICB0aGlzLmZ1bGxwYWdlX2FwaS5kZXN0cm95KCdhbGwnKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmRlc3Ryb3lGdWxscGFnZSgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRnVsbHBhZ2VEaXJlY3RpdmUgfSBmcm9tICcuL2Z1bGxwYWdlLmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtdLFxuICBkZWNsYXJhdGlvbnM6IFtGdWxscGFnZURpcmVjdGl2ZV0sXG4gIGV4cG9ydHM6IFtGdWxscGFnZURpcmVjdGl2ZV1cbn0pXG5leHBvcnQgY2xhc3MgQW5ndWxhckZ1bGxwYWdlTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtJQWFFO1FBSFUsUUFBRyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7S0FHbEI7Ozs7SUFFakIsUUFBUTtRQUNOLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQUNyQjs7OztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksUUFBUSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7S0FDbEM7Ozs7SUFFRCxnQkFBZ0I7UUFDZCxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssR0FBRztZQUN4QixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7OztZQUd2QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDckIsQ0FBQztLQUNIOzs7O0lBRUQsZUFBZTtRQUNiLElBQUksT0FBTyxJQUFJLENBQUMsWUFBWSxLQUFLLFdBQVcsSUFBSSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxLQUFLLFdBQVcsRUFBRTtZQUNoRyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2xDO0tBQ0Y7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0tBQ3hCOzs7WUF4Q0YsU0FBUyxTQUFDOztnQkFFVCxRQUFRLEVBQUUsWUFBWTthQUN2Qjs7OztpQkFFRSxLQUFLO3NCQUNMLEtBQUs7a0JBQ0wsTUFBTTs7Ozs7OztBQ1ZUOzs7WUFHQyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLEVBQUU7Z0JBQ1gsWUFBWSxFQUFFLENBQUMsaUJBQWlCLENBQUM7Z0JBQ2pDLE9BQU8sRUFBRSxDQUFDLGlCQUFpQixDQUFDO2FBQzdCOzs7Ozs7Ozs7Ozs7Ozs7In0=