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
        function FullpageDirective() {
            this.ref = new core.EventEmitter();
        }
        /**
         * @return {?}
         */
        FullpageDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.fullpage_api = new fullpage('#' + this.id, this.options);
                this.ref.emit(this.fullpage_api);
            };
        /**
         * @return {?}
         */
        FullpageDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (typeof this.fullpage_api !== 'undefined' && typeof this.fullpage_api.destroy !== 'undefined') {
                    this.fullpage_api.destroy('all');
                }
            };
        FullpageDirective.decorators = [
            { type: core.Directive, args: [{
                        // tslint:disable-next-line:directive-selector
                        selector: '[fullpage]'
                    },] }
        ];
        FullpageDirective.ctorParameters = function () { return []; };
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1mdWxscGFnZS51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL2FuZ3VsYXItZnVsbHBhZ2UvbGliL2Z1bGxwYWdlLmRpcmVjdGl2ZS50cyIsIm5nOi8vYW5ndWxhci1mdWxscGFnZS9saWIvYW5ndWxhci1mdWxscGFnZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT25Jbml0LCBPbkRlc3Ryb3kgLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IGZ1bGxwYWdlIGZyb20gJ2Z1bGxwYWdlLmpzL2Rpc3QvZnVsbHBhZ2UuZXh0ZW5zaW9ucy5taW4nO1xuXG5ARGlyZWN0aXZlKHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogJ1tmdWxscGFnZV0nXG59KVxuZXhwb3J0IGNsYXNzIEZ1bGxwYWdlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBpZDtcbiAgQElucHV0KCkgb3B0aW9ucztcbiAgQE91dHB1dCgpIHJlZiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgZnVsbHBhZ2VfYXBpO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5mdWxscGFnZV9hcGkgPSBuZXcgZnVsbHBhZ2UoJyMnICsgdGhpcy5pZCwgdGhpcy5vcHRpb25zKTtcbiAgICB0aGlzLnJlZi5lbWl0KHRoaXMuZnVsbHBhZ2VfYXBpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0eXBlb2YgdGhpcy5mdWxscGFnZV9hcGkgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB0aGlzLmZ1bGxwYWdlX2FwaS5kZXN0cm95ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5mdWxscGFnZV9hcGkuZGVzdHJveSgnYWxsJyk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRnVsbHBhZ2VEaXJlY3RpdmUgfSBmcm9tICcuL2Z1bGxwYWdlLmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtdLFxuICBkZWNsYXJhdGlvbnM6IFtGdWxscGFnZURpcmVjdGl2ZV0sXG4gIGV4cG9ydHM6IFtGdWxscGFnZURpcmVjdGl2ZV1cbn0pXG5leHBvcnQgY2xhc3MgQW5ndWxhckZ1bGxwYWdlTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIkV2ZW50RW1pdHRlciIsIkRpcmVjdGl2ZSIsIklucHV0IiwiT3V0cHV0IiwiTmdNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO1FBYUU7WUFIVSxRQUFHLEdBQUcsSUFBSUEsaUJBQVksRUFBRSxDQUFDO1NBR2xCOzs7O1FBRWpCLG9DQUFROzs7WUFBUjtnQkFDRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksUUFBUSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDOUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQ2xDOzs7O1FBRUQsdUNBQVc7OztZQUFYO2dCQUNFLElBQUksT0FBTyxJQUFJLENBQUMsWUFBWSxLQUFLLFdBQVcsSUFBSSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxLQUFLLFdBQVcsRUFBRTtvQkFDaEcsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ2xDO2FBQ0Y7O29CQXJCRkMsY0FBUyxTQUFDOzt3QkFFVCxRQUFRLEVBQUUsWUFBWTtxQkFDdkI7Ozs7eUJBRUVDLFVBQUs7OEJBQ0xBLFVBQUs7MEJBQ0xDLFdBQU07O1FBZVQsd0JBQUM7S0F0QkQ7Ozs7OztBQ0hBO1FBR0E7U0FLc0M7O29CQUxyQ0MsYUFBUSxTQUFDO3dCQUNSLE9BQU8sRUFBRSxFQUFFO3dCQUNYLFlBQVksRUFBRSxDQUFDLGlCQUFpQixDQUFDO3dCQUNqQyxPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztxQkFDN0I7O1FBQ29DLDRCQUFDO0tBTHRDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==