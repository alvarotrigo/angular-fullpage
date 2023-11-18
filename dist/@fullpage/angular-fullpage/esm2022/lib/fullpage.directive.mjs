// tslint:disable-next-line:max-line-length
import { Directive, Input, Output, EventEmitter, Renderer2, HostListener, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import * as i0 from "@angular/core";
// declare var require;
// let fullpage = null;
// if (!fullpage && typeof window !== 'undefined') {
//   fullpage = require('fullpage.js/dist/fullpage.extensions.min');
// }
// import { fullpage } from 'node_modules/fullpage.js/dist/fullpage.extensions.min';
// import { fullpage } from 'fullpage.js/dist/fullpage.extensions.min';
class FullpageDirective {
    platformId;
    renderer;
    id;
    options;
    ref = new EventEmitter();
    fullpage_api;
    constructor(platformId, renderer) {
        this.platformId = platformId;
        this.renderer = renderer;
    }
    ngAfterViewInit() {
        if (isPlatformBrowser(this.platformId)) {
            this.initFullpage();
        }
        if (isPlatformServer(this.platformId)) {
            // server side code
        }
    }
    initFullpage() {
        console.log("fullpage", fullpage);
        this.fullpage_api = new fullpage('#' + this.id, this.options);
        this.addBuildFunction();
        this.ref.emit(this.fullpage_api);
    }
    addBuildFunction() {
        this.fullpage_api.build = () => {
            const activeSection = this.fullpage_api.getActiveSection();
            const activeSlide = this.fullpage_api.getActiveSlide();
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
    destroyFullpage() {
        if (typeof this.fullpage_api !== 'undefined' && typeof this.fullpage_api.destroy !== 'undefined') {
            this.fullpage_api.destroy('all');
        }
    }
    ngOnDestroy() {
        this.destroyFullpage();
    }
    /** @nocollapse */ static ɵfac = function FullpageDirective_Factory(t) { return new (t || FullpageDirective)(i0.ɵɵdirectiveInject(PLATFORM_ID), i0.ɵɵdirectiveInject(i0.Renderer2)); };
    /** @nocollapse */ static ɵdir = /** @pureOrBreakMyCode */ i0.ɵɵdefineDirective({ type: FullpageDirective, selectors: [["", "fullpage", ""]], inputs: { id: "id", options: "options" }, outputs: { ref: "ref" } });
}
export { FullpageDirective };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FullpageDirective, [{
        type: Directive,
        args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[fullpage]'
            }]
    }], function () { return [{ type: Object, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: i0.Renderer2 }]; }, { id: [{
            type: Input
        }], options: [{
            type: Input
        }], ref: [{
            type: Output
        }] }); })();
class AnchorLinkDirective {
    href;
    onClick(event) {
        if (this.href.length > 0 && this.href[0] === '#') {
            event.preventDefault();
            window.location.hash = this.href;
        }
    }
    /** @nocollapse */ static ɵfac = function AnchorLinkDirective_Factory(t) { return new (t || AnchorLinkDirective)(); };
    /** @nocollapse */ static ɵdir = /** @pureOrBreakMyCode */ i0.ɵɵdefineDirective({ type: AnchorLinkDirective, selectors: [["", "href", ""]], hostBindings: function AnchorLinkDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function AnchorLinkDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
        } }, inputs: { href: "href" } });
}
export { AnchorLinkDirective };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AnchorLinkDirective, [{
        type: Directive,
        args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[href]'
            }]
    }], null, { href: [{
            type: Input
        }], onClick: [{
            type: HostListener,
            args: ['click', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbHBhZ2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2FuZ3VsYXItZnVsbHBhZ2UvbGliL2Z1bGxwYWdlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQ0FBMkM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQTRCLE1BQU0sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9JLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUl0RSx1QkFBdUI7QUFDdkIsdUJBQXVCO0FBQ3ZCLG9EQUFvRDtBQUNwRCxvRUFBb0U7QUFDcEUsSUFBSTtBQUNKLG9GQUFvRjtBQUNwRix1RUFBdUU7QUFFdkUsTUFJYSxpQkFBaUI7SUFPRztJQUNyQjtJQVBELEVBQUUsQ0FBQztJQUNILE9BQU8sQ0FBQztJQUNQLEdBQUcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBQ25DLFlBQVksQ0FBQztJQUViLFlBQytCLFVBQWtCLEVBQ3ZDLFFBQW1CO1FBREUsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUN2QyxhQUFRLEdBQVIsUUFBUSxDQUFXO0lBQ3pCLENBQUM7SUFFTCxlQUFlO1FBQ2IsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdEMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3JCO1FBQ0QsSUFBSSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDckMsbUJBQW1CO1NBQ3BCO0lBQ0gsQ0FBQztJQUVELFlBQVk7UUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksUUFBUSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELGdCQUFnQjtRQUNkLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxHQUFHLEdBQUcsRUFBRTtZQUM3QixNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDM0QsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUV2RCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7WUFFdkIsSUFBSSxhQUFhLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7YUFDdEQ7WUFFRCxJQUFJLFdBQVcsRUFBRTtnQkFDZixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2FBQ3BEO1lBRUQsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3RCLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxPQUFPLElBQUksQ0FBQyxZQUFZLEtBQUssV0FBVyxJQUFJLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEtBQUssV0FBVyxFQUFFO1lBQ2hHLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2xDO0lBQ0gsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDekIsQ0FBQzs4RkF0RFUsaUJBQWlCLHVCQU9sQixXQUFXOzRGQVBWLGlCQUFpQjs7U0FBakIsaUJBQWlCO3VGQUFqQixpQkFBaUI7Y0FKN0IsU0FBUztlQUFDO2dCQUNULDhDQUE4QztnQkFDOUMsUUFBUSxFQUFFLFlBQVk7YUFDdkI7O3NCQVFJLE1BQU07dUJBQUMsV0FBVztnREFOWixFQUFFO2tCQUFWLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFDSSxHQUFHO2tCQUFaLE1BQU07O0FBc0RULE1BSWEsbUJBQW1CO0lBQ3JCLElBQUksQ0FBUztJQUVhLE9BQU8sQ0FBQyxLQUFLO1FBQzlDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFO1lBQ2hELEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN2QixNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ2xDO0lBQ0gsQ0FBQztnR0FSVSxtQkFBbUI7NEZBQW5CLG1CQUFtQjswR0FBbkIsbUJBQWU7OztTQUFmLG1CQUFtQjt1RkFBbkIsbUJBQW1CO2NBSi9CLFNBQVM7ZUFBQztnQkFDVCw4Q0FBOEM7Z0JBQzlDLFFBQVEsRUFBRyxRQUFRO2FBQ3BCO2dCQUVVLElBQUk7a0JBQVosS0FBSztZQUU2QixPQUFPO2tCQUF6QyxZQUFZO21CQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbmltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFJlbmRlcmVyMiwgSG9zdExpc3RlbmVyLCBQTEFURk9STV9JRCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciwgaXNQbGF0Zm9ybVNlcnZlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cblxuZGVjbGFyZSBsZXQgZnVsbHBhZ2U6IGFueTtcbi8vIGRlY2xhcmUgdmFyIHJlcXVpcmU7XG4vLyBsZXQgZnVsbHBhZ2UgPSBudWxsO1xuLy8gaWYgKCFmdWxscGFnZSAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuLy8gICBmdWxscGFnZSA9IHJlcXVpcmUoJ2Z1bGxwYWdlLmpzL2Rpc3QvZnVsbHBhZ2UuZXh0ZW5zaW9ucy5taW4nKTtcbi8vIH1cbi8vIGltcG9ydCB7IGZ1bGxwYWdlIH0gZnJvbSAnbm9kZV9tb2R1bGVzL2Z1bGxwYWdlLmpzL2Rpc3QvZnVsbHBhZ2UuZXh0ZW5zaW9ucy5taW4nO1xuLy8gaW1wb3J0IHsgZnVsbHBhZ2UgfSBmcm9tICdmdWxscGFnZS5qcy9kaXN0L2Z1bGxwYWdlLmV4dGVuc2lvbnMubWluJztcblxuQERpcmVjdGl2ZSh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdbZnVsbHBhZ2VdJ1xufSlcbmV4cG9ydCBjbGFzcyBGdWxscGFnZURpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIGlkO1xuICBASW5wdXQoKSBvcHRpb25zO1xuICBAT3V0cHV0KCkgcmVmID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBmdWxscGFnZV9hcGk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBPYmplY3QsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyXG4gICkgeyB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICB0aGlzLmluaXRGdWxscGFnZSgpO1xuICAgIH1cbiAgICBpZiAoaXNQbGF0Zm9ybVNlcnZlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICAvLyBzZXJ2ZXIgc2lkZSBjb2RlXG4gICAgfVxuICB9XG5cbiAgaW5pdEZ1bGxwYWdlKCkge1xuICAgIGNvbnNvbGUubG9nKFwiZnVsbHBhZ2VcIiwgZnVsbHBhZ2UpO1xuICAgIHRoaXMuZnVsbHBhZ2VfYXBpID0gbmV3IGZ1bGxwYWdlKCcjJyArIHRoaXMuaWQsIHRoaXMub3B0aW9ucyk7XG4gICAgdGhpcy5hZGRCdWlsZEZ1bmN0aW9uKCk7XG4gICAgdGhpcy5yZWYuZW1pdCh0aGlzLmZ1bGxwYWdlX2FwaSk7XG4gIH1cblxuICBhZGRCdWlsZEZ1bmN0aW9uKCkge1xuICAgIHRoaXMuZnVsbHBhZ2VfYXBpLmJ1aWxkID0gKCkgPT4ge1xuICAgICAgY29uc3QgYWN0aXZlU2VjdGlvbiA9IHRoaXMuZnVsbHBhZ2VfYXBpLmdldEFjdGl2ZVNlY3Rpb24oKTtcbiAgICAgIGNvbnN0IGFjdGl2ZVNsaWRlID0gdGhpcy5mdWxscGFnZV9hcGkuZ2V0QWN0aXZlU2xpZGUoKTtcblxuICAgICAgdGhpcy5kZXN0cm95RnVsbHBhZ2UoKTtcblxuICAgICAgaWYgKGFjdGl2ZVNlY3Rpb24pIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhhY3RpdmVTZWN0aW9uLml0ZW0sICdhY3RpdmUnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGFjdGl2ZVNsaWRlKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoYWN0aXZlU2xpZGUuaXRlbSwgJ2FjdGl2ZScpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmluaXRGdWxscGFnZSgpO1xuICAgIH07XG4gIH1cblxuICBkZXN0cm95RnVsbHBhZ2UoKSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLmZ1bGxwYWdlX2FwaSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHRoaXMuZnVsbHBhZ2VfYXBpLmRlc3Ryb3kgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLmZ1bGxwYWdlX2FwaS5kZXN0cm95KCdhbGwnKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmRlc3Ryb3lGdWxscGFnZSgpO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yXG4gIHNlbGVjdG9yIDogJ1tocmVmXSdcbn0pXG5leHBvcnQgY2xhc3MgQW5jaG9yTGlua0RpcmVjdGl2ZSB7XG4gIEBJbnB1dCgpIGhyZWY6IHN0cmluZztcblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pIG9uQ2xpY2soZXZlbnQpIHtcbiAgICBpZiAodGhpcy5ocmVmLmxlbmd0aCA+IDAgJiYgdGhpcy5ocmVmWzBdID09PSAnIycpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IHRoaXMuaHJlZjtcbiAgICB9XG4gIH1cbn1cbiJdfQ==