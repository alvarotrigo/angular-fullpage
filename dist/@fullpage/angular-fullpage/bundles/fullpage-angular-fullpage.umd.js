(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('fullpage.js/dist/fullpage.extensions.min')) :
    typeof define === 'function' && define.amd ? define('@fullpage/angular-fullpage', ['exports', '@angular/core', '@angular/common', 'fullpage.js/dist/fullpage.extensions.min'], factory) :
    (factory((global.fullpage = global.fullpage || {}, global.fullpage['angular-fullpage'] = {}),global.ng.core,global.ng.common,global.fullpage.js));
}(this, (function (exports,core,common,fullpage) { 'use strict';

    fullpage = fullpage && fullpage.hasOwnProperty('default') ? fullpage['default'] : fullpage;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var FullpageDirective = /** @class */ (function () {
        function FullpageDirective(platformId, renderer) {
            this.platformId = platformId;
            this.renderer = renderer;
            this.ref = new core.EventEmitter();
        }
        /**
         * @return {?}
         */
        FullpageDirective.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                if (common.isPlatformBrowser(this.platformId)) {
                    this.initFullpage();
                }
                if (common.isPlatformServer(this.platformId)) ;
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
            { type: core.Directive, args: [{
                        // tslint:disable-next-line:directive-selector
                        selector: '[fullpage]'
                    },] }
        ];
        FullpageDirective.ctorParameters = function () {
            return [
                { type: Object, decorators: [{ type: core.Inject, args: [core.PLATFORM_ID,] }] },
                { type: core.Renderer2 }
            ];
        };
        FullpageDirective.propDecorators = {
            id: [{ type: core.Input }],
            options: [{ type: core.Input }],
            ref: [{ type: core.Output }]
        };
        return FullpageDirective;
    }());
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
            { type: core.Directive, args: [{
                        // tslint:disable-next-line:directive-selector
                        selector: '[href]'
                    },] }
        ];
        AnchorLinkDirective.propDecorators = {
            href: [{ type: core.Input }],
            onClick: [{ type: core.HostListener, args: ['click', ['$event'],] }]
        };
        return AnchorLinkDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var AngularFullpageModule = /** @class */ (function () {
        function AngularFullpageModule() {
        }
        AngularFullpageModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [],
                        declarations: [FullpageDirective, AnchorLinkDirective],
                        exports: [FullpageDirective, AnchorLinkDirective]
                    },] }
        ];
        return AngularFullpageModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    exports.AngularFullpageModule = AngularFullpageModule;
    exports.ɵb = AnchorLinkDirective;
    exports.ɵa = FullpageDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbHBhZ2UtYW5ndWxhci1mdWxscGFnZS51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BmdWxscGFnZS9hbmd1bGFyLWZ1bGxwYWdlL2xpYi9mdWxscGFnZS5kaXJlY3RpdmUudHMiLCJuZzovL0BmdWxscGFnZS9hbmd1bGFyLWZ1bGxwYWdlL2xpYi9hbmd1bGFyLWZ1bGxwYWdlLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG5pbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBSZW5kZXJlcjIsIEhvc3RMaXN0ZW5lciwgUExBVEZPUk1fSUQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIsIGlzUGxhdGZvcm1TZXJ2ZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IGZ1bGxwYWdlIGZyb20gJ2Z1bGxwYWdlLmpzL2Rpc3QvZnVsbHBhZ2UuZXh0ZW5zaW9ucy5taW4nO1xuXG5ARGlyZWN0aXZlKHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogJ1tmdWxscGFnZV0nXG59KVxuZXhwb3J0IGNsYXNzIEZ1bGxwYWdlRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgaWQ7XG4gIEBJbnB1dCgpIG9wdGlvbnM7XG4gIEBPdXRwdXQoKSByZWYgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGZ1bGxwYWdlX2FwaTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IE9iamVjdCxcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7IH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgIHRoaXMuaW5pdEZ1bGxwYWdlKCk7XG4gICAgfVxuICAgIGlmIChpc1BsYXRmb3JtU2VydmVyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgIC8vIHNlcnZlciBzaWRlIGNvZGVcbiAgICB9XG4gIH1cblxuICBpbml0RnVsbHBhZ2UoKSB7XG4gICAgdGhpcy5mdWxscGFnZV9hcGkgPSBuZXcgZnVsbHBhZ2UoJyMnICsgdGhpcy5pZCwgdGhpcy5vcHRpb25zKTtcbiAgICB0aGlzLmFkZEJ1aWxkRnVuY3Rpb24oKTtcbiAgICB0aGlzLnJlZi5lbWl0KHRoaXMuZnVsbHBhZ2VfYXBpKTtcbiAgfVxuXG4gIGFkZEJ1aWxkRnVuY3Rpb24oKSB7XG4gICAgdGhpcy5mdWxscGFnZV9hcGkuYnVpbGQgPSAoKSA9PiB7XG4gICAgICBjb25zdCBhY3RpdmVTZWN0aW9uID0gdGhpcy5mdWxscGFnZV9hcGkuZ2V0QWN0aXZlU2VjdGlvbigpO1xuICAgICAgY29uc3QgYWN0aXZlU2xpZGUgPSB0aGlzLmZ1bGxwYWdlX2FwaS5nZXRBY3RpdmVTbGlkZSgpO1xuXG4gICAgICAvLyBidWcgZGVzdHJveShhbGwpIGFsc28gZGVzdHJveWVkIGFuZ3VsYXIgZXZlbnRzIHN1Y2ggYXMgKGNsaWNrKVxuICAgICAgdGhpcy5kZXN0cm95RnVsbHBhZ2UoKTtcblxuICAgICAgaWYgKGFjdGl2ZVNlY3Rpb24pIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhhY3RpdmVTZWN0aW9uLml0ZW0sICdhY3RpdmUnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGFjdGl2ZVNsaWRlKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoYWN0aXZlU2xpZGUuaXRlbSwgJ2FjdGl2ZScpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmluaXRGdWxscGFnZSgpO1xuICAgIH07XG4gIH1cblxuICBkZXN0cm95RnVsbHBhZ2UoKSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLmZ1bGxwYWdlX2FwaSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHRoaXMuZnVsbHBhZ2VfYXBpLmRlc3Ryb3kgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLmZ1bGxwYWdlX2FwaS5kZXN0cm95KCdhbGwnKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmRlc3Ryb3lGdWxscGFnZSgpO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yXG4gIHNlbGVjdG9yIDogJ1tocmVmXSdcbn0pXG5leHBvcnQgY2xhc3MgQW5jaG9yTGlua0RpcmVjdGl2ZSB7XG4gIEBJbnB1dCgpIGhyZWY6IHN0cmluZztcblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pIG9uQ2xpY2soZXZlbnQpIHtcbiAgICBpZiAodGhpcy5ocmVmLmxlbmd0aCA+IDAgJiYgdGhpcy5ocmVmWzBdID09PSAnIycpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IHRoaXMuaHJlZjtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGdWxscGFnZURpcmVjdGl2ZSwgQW5jaG9yTGlua0RpcmVjdGl2ZSB9IGZyb20gJy4vZnVsbHBhZ2UuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW10sXG4gIGRlY2xhcmF0aW9uczogW0Z1bGxwYWdlRGlyZWN0aXZlLCBBbmNob3JMaW5rRGlyZWN0aXZlXSxcbiAgZXhwb3J0czogW0Z1bGxwYWdlRGlyZWN0aXZlLCBBbmNob3JMaW5rRGlyZWN0aXZlXVxufSlcbmV4cG9ydCBjbGFzcyBBbmd1bGFyRnVsbHBhZ2VNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsiRXZlbnRFbWl0dGVyIiwiaXNQbGF0Zm9ybUJyb3dzZXIiLCJpc1BsYXRmb3JtU2VydmVyIiwiRGlyZWN0aXZlIiwiSW5qZWN0IiwiUExBVEZPUk1fSUQiLCJSZW5kZXJlcjIiLCJJbnB1dCIsIk91dHB1dCIsIkhvc3RMaXN0ZW5lciIsIk5nTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O1FBZUUsMkJBQytCLFVBQWtCLEVBQ3ZDLFFBQW1CO1lBREUsZUFBVSxHQUFWLFVBQVUsQ0FBUTtZQUN2QyxhQUFRLEdBQVIsUUFBUSxDQUFXO1lBTG5CLFFBQUcsR0FBRyxJQUFJQSxpQkFBWSxFQUFFLENBQUM7U0FNOUI7Ozs7UUFFTCwyQ0FBZTs7O1lBQWY7Z0JBQ0UsSUFBSUMsd0JBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO29CQUN0QyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7aUJBQ3JCO2dCQUNELElBQUlDLHVCQUFnQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUV0QzthQUNGOzs7O1FBRUQsd0NBQVk7OztZQUFaO2dCQUNFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxRQUFRLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM5RCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztnQkFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQ2xDOzs7O1FBRUQsNENBQWdCOzs7WUFBaEI7Z0JBQUEsaUJBa0JDO2dCQWpCQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssR0FBRzs7d0JBQ2xCLGFBQWEsR0FBRyxLQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixFQUFFOzt3QkFDcEQsV0FBVyxHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxFQUFFOztvQkFHdEQsS0FBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUV2QixJQUFJLGFBQWEsRUFBRTt3QkFDakIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztxQkFDdEQ7b0JBRUQsSUFBSSxXQUFXLEVBQUU7d0JBQ2YsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztxQkFDcEQ7b0JBRUQsS0FBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2lCQUNyQixDQUFDO2FBQ0g7Ozs7UUFFRCwyQ0FBZTs7O1lBQWY7Z0JBQ0UsSUFBSSxPQUFPLElBQUksQ0FBQyxZQUFZLEtBQUssV0FBVyxJQUFJLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEtBQUssV0FBVyxFQUFFO29CQUNoRyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDbEM7YUFDRjs7OztRQUVELHVDQUFXOzs7WUFBWDtnQkFDRSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7YUFDeEI7O29CQTFERkMsY0FBUyxTQUFDOzt3QkFFVCxRQUFRLEVBQUUsWUFBWTtxQkFDdkI7Ozs7d0JBUTRDLE1BQU0sdUJBQTlDQyxXQUFNLFNBQUNDLGdCQUFXO3dCQWZvREMsY0FBUzs7Ozt5QkFTakZDLFVBQUs7OEJBQ0xBLFVBQUs7MEJBQ0xDLFdBQU07O1FBb0RULHdCQUFDO0tBM0RELElBMkRDOztRQUVEO1NBYUM7Ozs7O1FBTm9DLHFDQUFPOzs7O1lBQTFDLFVBQTJDLEtBQUs7Z0JBQzlDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFO29CQUNoRCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBQ3ZCLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7aUJBQ2xDO2FBQ0Y7O29CQVpGTCxjQUFTLFNBQUM7O3dCQUVULFFBQVEsRUFBRyxRQUFRO3FCQUNwQjs7OzJCQUVFSSxVQUFLOzhCQUVMRSxpQkFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzs7UUFNbkMsMEJBQUM7S0FiRDs7Ozs7O0FDbEVBO1FBR0E7U0FLc0M7O29CQUxyQ0MsYUFBUSxTQUFDO3dCQUNSLE9BQU8sRUFBRSxFQUFFO3dCQUNYLFlBQVksRUFBRSxDQUFDLGlCQUFpQixFQUFFLG1CQUFtQixDQUFDO3dCQUN0RCxPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxtQkFBbUIsQ0FBQztxQkFDbEQ7O1FBQ29DLDRCQUFDO0tBTHRDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=