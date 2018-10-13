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
        /** @type {?} */
        const fullPageRef = new fullpage('#' + this.id, this.options);
        this.ref.emit(fullPageRef);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1mdWxscGFnZS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vYW5ndWxhci1mdWxscGFnZS9saWIvZnVsbHBhZ2UuZGlyZWN0aXZlLnRzIiwibmc6Ly9hbmd1bGFyLWZ1bGxwYWdlL2xpYi9hbmd1bGFyLWZ1bGxwYWdlLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgZnVsbHBhZ2UgZnJvbSAnZnVsbHBhZ2UuanMvZGlzdC9mdWxscGFnZS5leHRlbnNpb25zLm1pbic7XG5cbkBEaXJlY3RpdmUoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnW2Z1bGxwYWdlXSdcbn0pXG5leHBvcnQgY2xhc3MgRnVsbHBhZ2VEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBpZDtcbiAgQElucHV0KCkgb3B0aW9ucztcbiAgQE91dHB1dCgpIHJlZiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IGZ1bGxQYWdlUmVmID0gbmV3IGZ1bGxwYWdlKCcjJyArIHRoaXMuaWQsIHRoaXMub3B0aW9ucyk7XG4gICAgdGhpcy5yZWYuZW1pdChmdWxsUGFnZVJlZik7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGdWxscGFnZURpcmVjdGl2ZSB9IGZyb20gJy4vZnVsbHBhZ2UuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtGdWxscGFnZURpcmVjdGl2ZV0sXG4gIGV4cG9ydHM6IFtGdWxscGFnZURpcmVjdGl2ZV1cbn0pXG5leHBvcnQgY2xhc3MgQW5ndWxhckZ1bGxwYWdlTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtJQVlFO1FBRlUsUUFBRyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7S0FFbEI7Ozs7SUFFakIsUUFBUTs7Y0FDQSxXQUFXLEdBQUcsSUFBSSxRQUFRLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM3RCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztLQUM1Qjs7O1lBZEYsU0FBUyxTQUFDOztnQkFFVCxRQUFRLEVBQUUsWUFBWTthQUN2Qjs7OztpQkFFRSxLQUFLO3NCQUNMLEtBQUs7a0JBQ0wsTUFBTTs7Ozs7OztBQ1ZUOzs7WUFHQyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLEVBQ1I7Z0JBQ0QsWUFBWSxFQUFFLENBQUMsaUJBQWlCLENBQUM7Z0JBQ2pDLE9BQU8sRUFBRSxDQUFDLGlCQUFpQixDQUFDO2FBQzdCOzs7Ozs7Ozs7Ozs7Ozs7In0=