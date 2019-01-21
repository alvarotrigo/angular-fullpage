/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
// tslint:disable-next-line:max-line-length
import { Directive, Input, Output, EventEmitter, Renderer2, HostListener, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import fullpage from 'fullpage.js/dist/fullpage.extensions.min';
export class FullpageDirective {
    /**
     * @param {?} platformId
     * @param {?} renderer
     */
    constructor(platformId, renderer) {
        this.platformId = platformId;
        this.renderer = renderer;
        this.ref = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (isPlatformBrowser(this.platformId)) {
            this.initFullpage();
        }
        if (isPlatformServer(this.platformId)) {
            // server side code
        }
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
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: Renderer2 }
];
FullpageDirective.propDecorators = {
    id: [{ type: Input }],
    options: [{ type: Input }],
    ref: [{ type: Output }]
};
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
export class AnchorLinkDirective {
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
if (false) {
    /** @type {?} */
    AnchorLinkDirective.prototype.href;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbHBhZ2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZ1bGxwYWdlL2FuZ3VsYXItZnVsbHBhZ2UvIiwic291cmNlcyI6WyJsaWIvZnVsbHBhZ2UuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQTRCLE1BQU0sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9JLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3RFLE9BQU8sUUFBUSxNQUFNLDBDQUEwQyxDQUFDO0FBTWhFLE1BQU07Ozs7O0lBTUosWUFDK0IsVUFBa0IsRUFDdkMsUUFBbUI7UUFERSxlQUFVLEdBQVYsVUFBVSxDQUFRO1FBQ3ZDLGFBQVEsR0FBUixRQUFRLENBQVc7UUFMbkIsUUFBRyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFNL0IsQ0FBQzs7OztJQUVMLGVBQWU7UUFDYixJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN0QyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDckI7UUFDRCxJQUFJLGdCQUFnQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUNyQyxtQkFBbUI7U0FDcEI7SUFDSCxDQUFDOzs7O0lBRUQsWUFBWTtRQUNWLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxRQUFRLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7O0lBRUQsZ0JBQWdCO1FBQ2QsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEdBQUcsR0FBRyxFQUFFOztrQkFDdkIsYUFBYSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLEVBQUU7O2tCQUNwRCxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLEVBQUU7WUFFdEQsaUVBQWlFO1lBQ2pFLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUV2QixJQUFJLGFBQWEsRUFBRTtnQkFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQzthQUN0RDtZQUVELElBQUksV0FBVyxFQUFFO2dCQUNmLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7YUFDcEQ7WUFFRCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDdEIsQ0FBQyxDQUFDO0lBQ0osQ0FBQzs7OztJQUVELGVBQWU7UUFDYixJQUFJLE9BQU8sSUFBSSxDQUFDLFlBQVksS0FBSyxXQUFXLElBQUksT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sS0FBSyxXQUFXLEVBQUU7WUFDaEcsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbEM7SUFDSCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7WUExREYsU0FBUyxTQUFDOztnQkFFVCxRQUFRLEVBQUUsWUFBWTthQUN2Qjs7O1lBUTRDLE1BQU0sdUJBQTlDLE1BQU0sU0FBQyxXQUFXO1lBZm9ELFNBQVM7OztpQkFTakYsS0FBSztzQkFDTCxLQUFLO2tCQUNMLE1BQU07Ozs7SUFGUCwrQkFBWTs7SUFDWixvQ0FBaUI7O0lBQ2pCLGdDQUFtQzs7SUFDbkMseUNBQWE7O0lBR1gsdUNBQStDOztJQUMvQyxxQ0FBMkI7O0FBcUQvQixNQUFNOzs7OztJQUcrQixPQUFPLENBQUMsS0FBSztRQUM5QyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRTtZQUNoRCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdkIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztTQUNsQztJQUNILENBQUM7OztZQVpGLFNBQVMsU0FBQzs7Z0JBRVQsUUFBUSxFQUFHLFFBQVE7YUFDcEI7OzttQkFFRSxLQUFLO3NCQUVMLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7SUFGakMsbUNBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgUmVuZGVyZXIyLCBIb3N0TGlzdGVuZXIsIFBMQVRGT1JNX0lELCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyLCBpc1BsYXRmb3JtU2VydmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCBmdWxscGFnZSBmcm9tICdmdWxscGFnZS5qcy9kaXN0L2Z1bGxwYWdlLmV4dGVuc2lvbnMubWluJztcblxuQERpcmVjdGl2ZSh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdbZnVsbHBhZ2VdJ1xufSlcbmV4cG9ydCBjbGFzcyBGdWxscGFnZURpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIGlkO1xuICBASW5wdXQoKSBvcHRpb25zO1xuICBAT3V0cHV0KCkgcmVmID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBmdWxscGFnZV9hcGk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBPYmplY3QsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyXG4gICkgeyB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICB0aGlzLmluaXRGdWxscGFnZSgpO1xuICAgIH1cbiAgICBpZiAoaXNQbGF0Zm9ybVNlcnZlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICAvLyBzZXJ2ZXIgc2lkZSBjb2RlXG4gICAgfVxuICB9XG5cbiAgaW5pdEZ1bGxwYWdlKCkge1xuICAgIHRoaXMuZnVsbHBhZ2VfYXBpID0gbmV3IGZ1bGxwYWdlKCcjJyArIHRoaXMuaWQsIHRoaXMub3B0aW9ucyk7XG4gICAgdGhpcy5hZGRCdWlsZEZ1bmN0aW9uKCk7XG4gICAgdGhpcy5yZWYuZW1pdCh0aGlzLmZ1bGxwYWdlX2FwaSk7XG4gIH1cblxuICBhZGRCdWlsZEZ1bmN0aW9uKCkge1xuICAgIHRoaXMuZnVsbHBhZ2VfYXBpLmJ1aWxkID0gKCkgPT4ge1xuICAgICAgY29uc3QgYWN0aXZlU2VjdGlvbiA9IHRoaXMuZnVsbHBhZ2VfYXBpLmdldEFjdGl2ZVNlY3Rpb24oKTtcbiAgICAgIGNvbnN0IGFjdGl2ZVNsaWRlID0gdGhpcy5mdWxscGFnZV9hcGkuZ2V0QWN0aXZlU2xpZGUoKTtcblxuICAgICAgLy8gYnVnIGRlc3Ryb3koYWxsKSBhbHNvIGRlc3Ryb3llZCBhbmd1bGFyIGV2ZW50cyBzdWNoIGFzIChjbGljaylcbiAgICAgIHRoaXMuZGVzdHJveUZ1bGxwYWdlKCk7XG5cbiAgICAgIGlmIChhY3RpdmVTZWN0aW9uKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoYWN0aXZlU2VjdGlvbi5pdGVtLCAnYWN0aXZlJyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChhY3RpdmVTbGlkZSkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGFjdGl2ZVNsaWRlLml0ZW0sICdhY3RpdmUnKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5pbml0RnVsbHBhZ2UoKTtcbiAgICB9O1xuICB9XG5cbiAgZGVzdHJveUZ1bGxwYWdlKCkge1xuICAgIGlmICh0eXBlb2YgdGhpcy5mdWxscGFnZV9hcGkgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB0aGlzLmZ1bGxwYWdlX2FwaS5kZXN0cm95ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5mdWxscGFnZV9hcGkuZGVzdHJveSgnYWxsJyk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5kZXN0cm95RnVsbHBhZ2UoKTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvciA6ICdbaHJlZl0nXG59KVxuZXhwb3J0IGNsYXNzIEFuY2hvckxpbmtEaXJlY3RpdmUge1xuICBASW5wdXQoKSBocmVmOiBzdHJpbmc7XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKSBvbkNsaWNrKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuaHJlZi5sZW5ndGggPiAwICYmIHRoaXMuaHJlZlswXSA9PT0gJyMnKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSB0aGlzLmhyZWY7XG4gICAgfVxuICB9XG59XG4iXX0=