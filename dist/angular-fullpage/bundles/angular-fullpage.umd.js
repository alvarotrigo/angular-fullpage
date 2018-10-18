(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('fullpage.js/dist/fullpage.extensions.min')) :
    typeof define === 'function' && define.amd ? define('angular-fullpage', ['exports', '@angular/core', 'fullpage.js/dist/fullpage.extensions.min'], factory) :
    (factory((global['angular-fullpage'] = {}),global.ng.core,global.fullpage.js));
}(this, (function (exports,core,fullpage) { 'use strict';

    fullpage = fullpage && fullpage.hasOwnProperty('default') ? fullpage['default'] : fullpage;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
                this.addBuildFunction();
            };
        /**
         * @return {?}
         */
        FullpageDirective.prototype.initFullpage = /**
         * @return {?}
         */
            function () {
                this.fullpage_api = new fullpage('#' + this.id, this.options);
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
                    // const activeSection = this.fullpage_api.getActiveSection().item;
                    _this.destroyFullpage();
                    // this.renderer.addClass(activeSection, 'active');
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var AngularFullpageModule = /** @class */ (function () {
        function AngularFullpageModule() {
        }
        AngularFullpageModule.decorators = [
            { type: core.NgModule, args: [{
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

    exports.AngularFullpageModule = AngularFullpageModule;
    exports.ɵa = FullpageDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1mdWxscGFnZS51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL2FuZ3VsYXItZnVsbHBhZ2UvbGliL2Z1bGxwYWdlLmRpcmVjdGl2ZS50cyIsIm5nOi8vYW5ndWxhci1mdWxscGFnZS9saWIvYW5ndWxhci1mdWxscGFnZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT25Jbml0LCBPbkRlc3Ryb3kgLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgZnVsbHBhZ2UgZnJvbSAnZnVsbHBhZ2UuanMvZGlzdC9mdWxscGFnZS5leHRlbnNpb25zLm1pbic7XG5cbkBEaXJlY3RpdmUoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnW2Z1bGxwYWdlXSdcbn0pXG5leHBvcnQgY2xhc3MgRnVsbHBhZ2VEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIGlkO1xuICBASW5wdXQoKSBvcHRpb25zO1xuICBAT3V0cHV0KCkgcmVmID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBmdWxscGFnZV9hcGk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluaXRGdWxscGFnZSgpO1xuICAgIHRoaXMuYWRkQnVpbGRGdW5jdGlvbigpO1xuICB9XG5cbiAgaW5pdEZ1bGxwYWdlKCkge1xuICAgIHRoaXMuZnVsbHBhZ2VfYXBpID0gbmV3IGZ1bGxwYWdlKCcjJyArIHRoaXMuaWQsIHRoaXMub3B0aW9ucyk7XG4gICAgdGhpcy5yZWYuZW1pdCh0aGlzLmZ1bGxwYWdlX2FwaSk7XG4gIH1cblxuICBhZGRCdWlsZEZ1bmN0aW9uKCkge1xuICAgIHRoaXMuZnVsbHBhZ2VfYXBpLmJ1aWxkID0gKCkgPT4ge1xuICAgICAgLy8gY29uc3QgYWN0aXZlU2VjdGlvbiA9IHRoaXMuZnVsbHBhZ2VfYXBpLmdldEFjdGl2ZVNlY3Rpb24oKS5pdGVtO1xuXG4gICAgICB0aGlzLmRlc3Ryb3lGdWxscGFnZSgpO1xuXG4gICAgICAvLyB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGFjdGl2ZVNlY3Rpb24sICdhY3RpdmUnKTtcblxuICAgICAgdGhpcy5pbml0RnVsbHBhZ2UoKTtcblxuICAgIH07XG4gIH1cblxuICBkZXN0cm95RnVsbHBhZ2UoKSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLmZ1bGxwYWdlX2FwaSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHRoaXMuZnVsbHBhZ2VfYXBpLmRlc3Ryb3kgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLmZ1bGxwYWdlX2FwaS5kZXN0cm95KCdhbGwnKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmRlc3Ryb3lGdWxscGFnZSgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRnVsbHBhZ2VEaXJlY3RpdmUgfSBmcm9tICcuL2Z1bGxwYWdlLmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtdLFxuICBkZWNsYXJhdGlvbnM6IFtGdWxscGFnZURpcmVjdGl2ZV0sXG4gIGV4cG9ydHM6IFtGdWxscGFnZURpcmVjdGl2ZV1cbn0pXG5leHBvcnQgY2xhc3MgQW5ndWxhckZ1bGxwYWdlTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIkV2ZW50RW1pdHRlciIsIkRpcmVjdGl2ZSIsIlJlbmRlcmVyMiIsIklucHV0IiwiT3V0cHV0IiwiTmdNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO1FBYUUsMkJBQW9CLFFBQW1CO1lBQW5CLGFBQVEsR0FBUixRQUFRLENBQVc7WUFIN0IsUUFBRyxHQUFHLElBQUlBLGlCQUFZLEVBQUUsQ0FBQztTQUdTOzs7O1FBRTVDLG9DQUFROzs7WUFBUjtnQkFDRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2FBQ3pCOzs7O1FBRUQsd0NBQVk7OztZQUFaO2dCQUNFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxRQUFRLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM5RCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDbEM7Ozs7UUFFRCw0Q0FBZ0I7OztZQUFoQjtnQkFBQSxpQkFXQztnQkFWQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssR0FBRzs7b0JBR3hCLEtBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQzs7b0JBSXZCLEtBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztpQkFFckIsQ0FBQzthQUNIOzs7O1FBRUQsMkNBQWU7OztZQUFmO2dCQUNFLElBQUksT0FBTyxJQUFJLENBQUMsWUFBWSxLQUFLLFdBQVcsSUFBSSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxLQUFLLFdBQVcsRUFBRTtvQkFDaEcsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ2xDO2FBQ0Y7Ozs7UUFFRCx1Q0FBVzs7O1lBQVg7Z0JBQ0UsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2FBQ3hCOztvQkEzQ0ZDLGNBQVMsU0FBQzs7d0JBRVQsUUFBUSxFQUFFLFlBQVk7cUJBQ3ZCOzs7O3dCQU5vRUMsY0FBUzs7Ozt5QkFRM0VDLFVBQUs7OEJBQ0xBLFVBQUs7MEJBQ0xDLFdBQU07O1FBcUNULHdCQUFDO0tBNUNEOzs7Ozs7QUNIQTtRQUdBO1NBS3NDOztvQkFMckNDLGFBQVEsU0FBQzt3QkFDUixPQUFPLEVBQUUsRUFBRTt3QkFDWCxZQUFZLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQzt3QkFDakMsT0FBTyxFQUFFLENBQUMsaUJBQWlCLENBQUM7cUJBQzdCOztRQUNvQyw0QkFBQztLQUx0Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=