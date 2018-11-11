(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('fullpage.js/dist/fullpage.extensions.min')) :
    typeof define === 'function' && define.amd ? define('angular-fullpage', ['exports', '@angular/core', 'fullpage.js/dist/fullpage.extensions.min'], factory) :
    (factory((global['angular-fullpage'] = {}),global.ng.core,global.fullpage.js));
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1mdWxscGFnZS51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL2FuZ3VsYXItZnVsbHBhZ2UvbGliL2Z1bGxwYWdlLmRpcmVjdGl2ZS50cyIsIm5nOi8vYW5ndWxhci1mdWxscGFnZS9saWIvYW5ndWxhci1mdWxscGFnZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT25Jbml0LCBPbkRlc3Ryb3ksIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBSZW5kZXJlcjIsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IGZ1bGxwYWdlIGZyb20gJ2Z1bGxwYWdlLmpzL2Rpc3QvZnVsbHBhZ2UuZXh0ZW5zaW9ucy5taW4nO1xuXG5ARGlyZWN0aXZlKHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogJ1tmdWxscGFnZV0nXG59KVxuZXhwb3J0IGNsYXNzIEZ1bGxwYWdlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBpZDtcbiAgQElucHV0KCkgb3B0aW9ucztcbiAgQE91dHB1dCgpIHJlZiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgZnVsbHBhZ2VfYXBpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbml0RnVsbHBhZ2UoKTtcbiAgfVxuXG4gIGluaXRGdWxscGFnZSgpIHtcbiAgICB0aGlzLmZ1bGxwYWdlX2FwaSA9IG5ldyBmdWxscGFnZSgnIycgKyB0aGlzLmlkLCB0aGlzLm9wdGlvbnMpO1xuICAgIHRoaXMuYWRkQnVpbGRGdW5jdGlvbigpO1xuICAgIHRoaXMucmVmLmVtaXQodGhpcy5mdWxscGFnZV9hcGkpO1xuICB9XG5cbiAgYWRkQnVpbGRGdW5jdGlvbigpIHtcbiAgICB0aGlzLmZ1bGxwYWdlX2FwaS5idWlsZCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGFjdGl2ZVNlY3Rpb24gPSB0aGlzLmZ1bGxwYWdlX2FwaS5nZXRBY3RpdmVTZWN0aW9uKCk7XG4gICAgICBjb25zdCBhY3RpdmVTbGlkZSA9IHRoaXMuZnVsbHBhZ2VfYXBpLmdldEFjdGl2ZVNsaWRlKCk7XG5cbiAgICAgIC8vIGJ1ZyBkZXN0cm95KGFsbCkgYWxzbyBkZXN0cm95ZWQgYW5ndWxhciBldmVudHMgc3VjaCBhcyAoY2xpY2spXG4gICAgICB0aGlzLmRlc3Ryb3lGdWxscGFnZSgpO1xuXG4gICAgICBpZiAoYWN0aXZlU2VjdGlvbikge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGFjdGl2ZVNlY3Rpb24uaXRlbSwgJ2FjdGl2ZScpO1xuICAgICAgfVxuXG4gICAgICBpZiAoYWN0aXZlU2xpZGUpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhhY3RpdmVTbGlkZS5pdGVtLCAnYWN0aXZlJyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuaW5pdEZ1bGxwYWdlKCk7XG4gICAgfTtcbiAgfVxuXG4gIGRlc3Ryb3lGdWxscGFnZSgpIHtcbiAgICBpZiAodHlwZW9mIHRoaXMuZnVsbHBhZ2VfYXBpICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgdGhpcy5mdWxscGFnZV9hcGkuZGVzdHJveSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMuZnVsbHBhZ2VfYXBpLmRlc3Ryb3koJ2FsbCcpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZGVzdHJveUZ1bGxwYWdlKCk7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcbiAgc2VsZWN0b3IgOiAnW2hyZWZdJ1xufSlcbmV4cG9ydCBjbGFzcyBBbmNob3JMaW5rRGlyZWN0aXZlIHtcbiAgQElucHV0KCkgaHJlZjogc3RyaW5nO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSkgb25DbGljayhldmVudCkge1xuICAgIGlmICh0aGlzLmhyZWYubGVuZ3RoID4gMCAmJiB0aGlzLmhyZWZbMF0gPT09ICcjJykge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gdGhpcy5ocmVmO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZ1bGxwYWdlRGlyZWN0aXZlLCBBbmNob3JMaW5rRGlyZWN0aXZlIH0gZnJvbSAnLi9mdWxscGFnZS5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXSxcbiAgZGVjbGFyYXRpb25zOiBbRnVsbHBhZ2VEaXJlY3RpdmUsIEFuY2hvckxpbmtEaXJlY3RpdmVdLFxuICBleHBvcnRzOiBbRnVsbHBhZ2VEaXJlY3RpdmUsIEFuY2hvckxpbmtEaXJlY3RpdmVdXG59KVxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJGdWxscGFnZU1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJFdmVudEVtaXR0ZXIiLCJEaXJlY3RpdmUiLCJSZW5kZXJlcjIiLCJJbnB1dCIsIk91dHB1dCIsIkhvc3RMaXN0ZW5lciIsIk5nTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtRQWFFLDJCQUFvQixRQUFtQjtZQUFuQixhQUFRLEdBQVIsUUFBUSxDQUFXO1lBSDdCLFFBQUcsR0FBRyxJQUFJQSxpQkFBWSxFQUFFLENBQUM7U0FHUzs7OztRQUU1QyxvQ0FBUTs7O1lBQVI7Z0JBQ0UsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2FBQ3JCOzs7O1FBRUQsd0NBQVk7OztZQUFaO2dCQUNFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxRQUFRLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUs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