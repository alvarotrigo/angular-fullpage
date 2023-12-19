// tslint:disable-next-line:max-line-length
import { Directive, Input, AfterViewInit, OnDestroy, Output, EventEmitter, Renderer2, HostListener, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

declare let fullpage: any;

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[fullpage]'
})
export class FullpageDirective implements AfterViewInit, OnDestroy {
  @Input() id;
  @Input() options;
  @Output() ref = new EventEmitter();
  fullpageApi;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private renderer: Renderer2
  ) { }

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
    this.fullpageApi = new fullpage('#' + this.id, this.options);
    this.addBuildFunction();
    this.ref.emit(this.fullpageApi);
  }

  addBuildFunction() {
    this.fullpageApi.build = () => {
      const activeSection = this.fullpageApi.getActiveSection();
      const activeSlide = this.fullpageApi.getActiveSlide();

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
    if (typeof this.fullpageApi !== 'undefined' && typeof this.fullpageApi.destroy !== 'undefined') {
      this.fullpageApi.destroy('all');
    }
  }

  ngOnDestroy() {
    this.destroyFullpage();
  }
}

@Directive({
  // tslint:disable-next-line:directive-selector
  selector : '[href]'
})
export class AnchorLinkDirective {
  @Input() href: string;

  @HostListener('click', ['$event']) onClick(event) {
    if (this.href.length > 0 && this.href[0] === '#') {
      event.preventDefault();
      window.location.hash = this.href;
    }
  }
}
