import { Directive, Input, Output, EventEmitter, Renderer2, HostListener, NgModule } from '@angular/core';
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
            /** @type {?} */
            const activeSection = this.fullpage_api.getActiveSection();
            /** @type {?} */
            const activeSlide = this.fullpage_api.getActiveSlide();
            // bug destroy(all) also destroyed angular events such as (click)
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
class AnchorLinkDirective {
    /**
     * @param {?} event
     * @return {?}
     */
    onClick(event) {
        if (this.href.length > 0 && this.href[0] === '#') {
            event.preventDefault();
            window.location.hash = this.href;
        }
    }
}
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class AngularFullpageModule {
}
AngularFullpageModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                declarations: [FullpageDirective, AnchorLinkDirective],
                exports: [FullpageDirective, AnchorLinkDirective]
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

export { AngularFullpageModule, AnchorLinkDirective as ɵb, FullpageDirective as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbHBhZ2UtYW5ndWxhci1mdWxscGFnZS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGZ1bGxwYWdlL2FuZ3VsYXItZnVsbHBhZ2UvbGliL2Z1bGxwYWdlLmRpcmVjdGl2ZS50cyIsIm5nOi8vQGZ1bGxwYWdlL2FuZ3VsYXItZnVsbHBhZ2UvbGliL2FuZ3VsYXItZnVsbHBhZ2UubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uSW5pdCwgT25EZXN0cm95LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgUmVuZGVyZXIyLCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBmdWxscGFnZSBmcm9tICdmdWxscGFnZS5qcy9kaXN0L2Z1bGxwYWdlLmV4dGVuc2lvbnMubWluJztcblxuQERpcmVjdGl2ZSh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdbZnVsbHBhZ2VdJ1xufSlcbmV4cG9ydCBjbGFzcyBGdWxscGFnZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgaWQ7XG4gIEBJbnB1dCgpIG9wdGlvbnM7XG4gIEBPdXRwdXQoKSByZWYgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGZ1bGxwYWdlX2FwaTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5pdEZ1bGxwYWdlKCk7XG4gIH1cblxuICBpbml0RnVsbHBhZ2UoKSB7XG4gICAgdGhpcy5mdWxscGFnZV9hcGkgPSBuZXcgZnVsbHBhZ2UoJyMnICsgdGhpcy5pZCwgdGhpcy5vcHRpb25zKTtcbiAgICB0aGlzLmFkZEJ1aWxkRnVuY3Rpb24oKTtcbiAgICB0aGlzLnJlZi5lbWl0KHRoaXMuZnVsbHBhZ2VfYXBpKTtcbiAgfVxuXG4gIGFkZEJ1aWxkRnVuY3Rpb24oKSB7XG4gICAgdGhpcy5mdWxscGFnZV9hcGkuYnVpbGQgPSAoKSA9PiB7XG4gICAgICBjb25zdCBhY3RpdmVTZWN0aW9uID0gdGhpcy5mdWxscGFnZV9hcGkuZ2V0QWN0aXZlU2VjdGlvbigpO1xuICAgICAgY29uc3QgYWN0aXZlU2xpZGUgPSB0aGlzLmZ1bGxwYWdlX2FwaS5nZXRBY3RpdmVTbGlkZSgpO1xuXG4gICAgICAvLyBidWcgZGVzdHJveShhbGwpIGFsc28gZGVzdHJveWVkIGFuZ3VsYXIgZXZlbnRzIHN1Y2ggYXMgKGNsaWNrKVxuICAgICAgdGhpcy5kZXN0cm95RnVsbHBhZ2UoKTtcblxuICAgICAgaWYgKGFjdGl2ZVNlY3Rpb24pIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhhY3RpdmVTZWN0aW9uLml0ZW0sICdhY3RpdmUnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGFjdGl2ZVNsaWRlKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoYWN0aXZlU2xpZGUuaXRlbSwgJ2FjdGl2ZScpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmluaXRGdWxscGFnZSgpO1xuICAgIH07XG4gIH1cblxuICBkZXN0cm95RnVsbHBhZ2UoKSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLmZ1bGxwYWdlX2FwaSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHRoaXMuZnVsbHBhZ2VfYXBpLmRlc3Ryb3kgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLmZ1bGxwYWdlX2FwaS5kZXN0cm95KCdhbGwnKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmRlc3Ryb3lGdWxscGFnZSgpO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yXG4gIHNlbGVjdG9yIDogJ1tocmVmXSdcbn0pXG5leHBvcnQgY2xhc3MgQW5jaG9yTGlua0RpcmVjdGl2ZSB7XG4gIEBJbnB1dCgpIGhyZWY6IHN0cmluZztcblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pIG9uQ2xpY2soZXZlbnQpIHtcbiAgICBpZiAodGhpcy5ocmVmLmxlbmd0aCA+IDAgJiYgdGhpcy5ocmVmWzBdID09PSAnIycpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IHRoaXMuaHJlZjtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGdWxscGFnZURpcmVjdGl2ZSwgQW5jaG9yTGlua0RpcmVjdGl2ZSB9IGZyb20gJy4vZnVsbHBhZ2UuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW10sXG4gIGRlY2xhcmF0aW9uczogW0Z1bGxwYWdlRGlyZWN0aXZlLCBBbmNob3JMaW5rRGlyZWN0aXZlXSxcbiAgZXhwb3J0czogW0Z1bGxwYWdlRGlyZWN0aXZlLCBBbmNob3JMaW5rRGlyZWN0aXZlXVxufSlcbmV4cG9ydCBjbGFzcyBBbmd1bGFyRnVsbHBhZ2VNb2R1bGUgeyB9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0lBYUUsWUFBb0IsUUFBbUI7UUFBbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUg3QixRQUFHLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztLQUdTOzs7O0lBRTVDLFFBQVE7UUFDTixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7S0FDckI7Ozs7SUFFRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLFFBQVEsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0tBQ2xDOzs7O0lBRUQsZ0JBQWdCO1FBQ2QsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEdBQUc7O2tCQUNsQixhQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRTs7a0JBQ3BELFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBRTs7WUFHdEQsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBRXZCLElBQUksYUFBYSxFQUFFO2dCQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2FBQ3REO1lBRUQsSUFBSSxXQUFXLEVBQUU7Z0JBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQzthQUNwRDtZQUVELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNyQixDQUFDO0tBQ0g7Ozs7SUFFRCxlQUFlO1FBQ2IsSUFBSSxPQUFPLElBQUksQ0FBQyxZQUFZLEtBQUssV0FBVyxJQUFJLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEtBQUssV0FBVyxFQUFFO1lBQ2hHLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2xDO0tBQ0Y7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0tBQ3hCOzs7WUFsREYsU0FBUyxTQUFDOztnQkFFVCxRQUFRLEVBQUUsWUFBWTthQUN2Qjs7O1lBTm1FLFNBQVM7OztpQkFRMUUsS0FBSztzQkFDTCxLQUFLO2tCQUNMLE1BQU07Ozs7Ozs7SUFxRDRCLE9BQU8sQ0FBQyxLQUFLO1FBQzlDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFO1lBQ2hELEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN2QixNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ2xDO0tBQ0Y7OztZQVpGLFNBQVMsU0FBQzs7Z0JBRVQsUUFBUSxFQUFHLFFBQVE7YUFDcEI7OzttQkFFRSxLQUFLO3NCQUVMLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7Ozs7QUMvRG5DOzs7WUFHQyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLEVBQUU7Z0JBQ1gsWUFBWSxFQUFFLENBQUMsaUJBQWlCLEVBQUUsbUJBQW1CLENBQUM7Z0JBQ3RELE9BQU8sRUFBRSxDQUFDLGlCQUFpQixFQUFFLG1CQUFtQixDQUFDO2FBQ2xEOzs7Ozs7Ozs7Ozs7Ozs7In0=