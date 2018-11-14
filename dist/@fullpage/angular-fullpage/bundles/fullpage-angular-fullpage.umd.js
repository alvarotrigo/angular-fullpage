(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('fullpage.js/dist/fullpage.extensions.min')) :
    typeof define === 'function' && define.amd ? define('@fullpage/angular-fullpage', ['exports', '@angular/core', 'fullpage.js/dist/fullpage.extensions.min'], factory) :
    (factory((global.fullpage = global.fullpage || {}, global.fullpage['angular-fullpage'] = {}),global.ng.core,global.fullpage.js));
}(this, (function (exports,core,fullpage) { 'use strict';

    fullpage = fullpage && fullpage.hasOwnProperty('default') ? fullpage['default'] : fullpage;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var FullpageDirective = /** @class */ (function () {
        function FullpageDirective(renderer) {
            this.renderer = renderer;
            this.ref = new core.EventEmitter();
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
            { type: core.Directive, args: [{
                        // tslint:disable-next-line:directive-selector
                        selector: '[fullpage]'
                    },] }
        ];
        FullpageDirective.ctorParameters = function () {
            return [
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbHBhZ2UtYW5ndWxhci1mdWxscGFnZS51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BmdWxscGFnZS9hbmd1bGFyLWZ1bGxwYWdlL2xpYi9mdWxscGFnZS5kaXJlY3RpdmUudHMiLCJuZzovL0BmdWxscGFnZS9hbmd1bGFyLWZ1bGxwYWdlL2xpYi9hbmd1bGFyLWZ1bGxwYWdlLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPbkluaXQsIE9uRGVzdHJveSwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFJlbmRlcmVyMiwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCBmdWxscGFnZSBmcm9tICdmdWxscGFnZS5qcy9kaXN0L2Z1bGxwYWdlLmV4dGVuc2lvbnMubWluJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ1tmdWxscGFnZV0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGdWxscGFnZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBASW5wdXQoKSBpZDtcclxuICBASW5wdXQoKSBvcHRpb25zO1xyXG4gIEBPdXRwdXQoKSByZWYgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgZnVsbHBhZ2VfYXBpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5pdEZ1bGxwYWdlKCk7XHJcbiAgfVxyXG5cclxuICBpbml0RnVsbHBhZ2UoKSB7XHJcbiAgICB0aGlzLmZ1bGxwYWdlX2FwaSA9IG5ldyBmdWxscGFnZSgnIycgKyB0aGlzLmlkLCB0aGlzLm9wdGlvbnMpO1xyXG4gICAgdGhpcy5hZGRCdWlsZEZ1bmN0aW9uKCk7XHJcbiAgICB0aGlzLnJlZi5lbWl0KHRoaXMuZnVsbHBhZ2VfYXBpKTtcclxuICB9XHJcblxyXG4gIGFkZEJ1aWxkRnVuY3Rpb24oKSB7XHJcbiAgICB0aGlzLmZ1bGxwYWdlX2FwaS5idWlsZCA9ICgpID0+IHtcclxuICAgICAgY29uc3QgYWN0aXZlU2VjdGlvbiA9IHRoaXMuZnVsbHBhZ2VfYXBpLmdldEFjdGl2ZVNlY3Rpb24oKTtcclxuICAgICAgY29uc3QgYWN0aXZlU2xpZGUgPSB0aGlzLmZ1bGxwYWdlX2FwaS5nZXRBY3RpdmVTbGlkZSgpO1xyXG5cclxuICAgICAgLy8gYnVnIGRlc3Ryb3koYWxsKSBhbHNvIGRlc3Ryb3llZCBhbmd1bGFyIGV2ZW50cyBzdWNoIGFzIChjbGljaylcclxuICAgICAgdGhpcy5kZXN0cm95RnVsbHBhZ2UoKTtcclxuXHJcbiAgICAgIGlmIChhY3RpdmVTZWN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhhY3RpdmVTZWN0aW9uLml0ZW0sICdhY3RpdmUnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGFjdGl2ZVNsaWRlKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhhY3RpdmVTbGlkZS5pdGVtLCAnYWN0aXZlJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuaW5pdEZ1bGxwYWdlKCk7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZGVzdHJveUZ1bGxwYWdlKCkge1xyXG4gICAgaWYgKHR5cGVvZiB0aGlzLmZ1bGxwYWdlX2FwaSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHRoaXMuZnVsbHBhZ2VfYXBpLmRlc3Ryb3kgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIHRoaXMuZnVsbHBhZ2VfYXBpLmRlc3Ryb3koJ2FsbCcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmRlc3Ryb3lGdWxscGFnZSgpO1xyXG4gIH1cclxufVxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvclxyXG4gIHNlbGVjdG9yIDogJ1tocmVmXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIEFuY2hvckxpbmtEaXJlY3RpdmUge1xyXG4gIEBJbnB1dCgpIGhyZWY6IHN0cmluZztcclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKSBvbkNsaWNrKGV2ZW50KSB7XHJcbiAgICBpZiAodGhpcy5ocmVmLmxlbmd0aCA+IDAgJiYgdGhpcy5ocmVmWzBdID09PSAnIycpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSB0aGlzLmhyZWY7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZ1bGxwYWdlRGlyZWN0aXZlLCBBbmNob3JMaW5rRGlyZWN0aXZlIH0gZnJvbSAnLi9mdWxscGFnZS5kaXJlY3RpdmUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXSxcclxuICBkZWNsYXJhdGlvbnM6IFtGdWxscGFnZURpcmVjdGl2ZSwgQW5jaG9yTGlua0RpcmVjdGl2ZV0sXHJcbiAgZXhwb3J0czogW0Z1bGxwYWdlRGlyZWN0aXZlLCBBbmNob3JMaW5rRGlyZWN0aXZlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQW5ndWxhckZ1bGxwYWdlTW9kdWxlIHsgfVxyXG4iXSwibmFtZXMiOlsiRXZlbnRFbWl0dGVyIiwiRGlyZWN0aXZlIiwiUmVuZGVyZXIyIiwiSW5wdXQiLCJPdXRwdXQiLCJIb3N0TGlzdGVuZXIiLCJOZ01vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7UUFhRSwyQkFBb0IsUUFBbUI7WUFBbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztZQUg3QixRQUFHLEdBQUcsSUFBSUEsaUJBQVksRUFBRSxDQUFDO1NBR1M7Ozs7UUFFNUMsb0NBQVE7OztZQUFSO2dCQUNFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUNyQjs7OztRQUVELHdDQUFZOzs7WUFBWjtnQkFDRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksUUFBUSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDOUQsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUNsQzs7OztRQUVELDRDQUFnQjs7O1lBQWhCO2dCQUFBLGlCQWtCQztnQkFqQkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEdBQUc7O3dCQUNsQixhQUFhLEdBQUcsS0FBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRTs7d0JBQ3BELFdBQVcsR0FBRyxLQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBRTs7b0JBR3RELEtBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztvQkFFdkIsSUFBSSxhQUFhLEVBQUU7d0JBQ2pCLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7cUJBQ3REO29CQUVELElBQUksV0FBVyxFQUFFO3dCQUNmLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7cUJBQ3BEO29CQUVELEtBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztpQkFDckIsQ0FBQzthQUNIOzs7O1FBRUQsMkNBQWU7OztZQUFmO2dCQUNFLElBQUksT0FBTyxJQUFJLENBQUMsWUFBWSxLQUFLLFdBQVcsSUFBSSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxLQUFLLFdBQVcsRUFBRTtvQkFDaEcsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ2xDO2FBQ0Y7Ozs7UUFFRCx1Q0FBVzs7O1lBQVg7Z0JBQ0UsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2FBQ3hCOztvQkFsREZDLGNBQVMsU0FBQzs7d0JBRVQsUUFBUSxFQUFFLFlBQVk7cUJBQ3ZCOzs7O3dCQU5tRUMsY0FBUzs7Ozt5QkFRMUVDLFVBQUs7OEJBQ0xBLFVBQUs7MEJBQ0xDLFdBQU07O1FBNENULHdCQUFDO0tBbkRELElBbURDOztRQUVEO1NBYUM7Ozs7O1FBTm9DLHFDQUFPOzs7O1lBQTFDLFVBQTJDLEtBQUs7Z0JBQzlDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFO29CQUNoRCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBQ3ZCLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7aUJBQ2xDO2FBQ0Y7O29CQVpGSCxjQUFTLFNBQUM7O3dCQUVULFFBQVEsRUFBRyxRQUFRO3FCQUNwQjs7OzJCQUVFRSxVQUFLOzhCQUVMRSxpQkFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzs7UUFNbkMsMEJBQUM7S0FiRDs7Ozs7O0FDeERBO1FBR0E7U0FLc0M7O29CQUxyQ0MsYUFBUSxTQUFDO3dCQUNSLE9BQU8sRUFBRSxFQUFFO3dCQUNYLFlBQVksRUFBRSxDQUFDLGlCQUFpQixFQUFFLG1CQUFtQixDQUFDO3dCQUN0RCxPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxtQkFBbUIsQ0FBQztxQkFDbEQ7O1FBQ29DLDRCQUFDO0tBTHRDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=