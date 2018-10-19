import { Directive, Input, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import fullpage from 'fullpage.js/dist/fullpage.extensions.min';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[fullpage]'
})
export class FullpageDirective implements OnInit, OnDestroy {
  @Input() id;
  @Input() options;
  @Output() ref = new EventEmitter();
  fullpage_api;

  constructor() { }

  ngOnInit() {
    this.initFullpage();
  }

  initFullpage() {
    this.fullpage_api = new fullpage('#' + this.id, this.options);
    this.addBuildFunction();
    this.ref.emit(this.fullpage_api);
  }

  addBuildFunction() {
    this.fullpage_api.build = () => {
      this.destroyFullpage();
      // bug destroy(all) also destroyed angular events such as (click)
      // https://github.com/alvarotrigo/fullPage.js/blob/3f2a8ef9405d64a7d24460811435c561870f9259/dist/fullpage.js#L3035
      this.initFullpage();
    };
  }

  destroyFullpage() {
    if (typeof this.fullpage_api !== 'undefined' && typeof this.fullpage_api.destroy !== 'undefined') {
      console.log('destoyred');
      this.fullpage_api.destroy('all');
    }
  }

  ngOnDestroy() {
    this.destroyFullpage();
  }
}
