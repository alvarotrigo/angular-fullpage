import { Directive, Input, OnInit, OnDestroy , Output, EventEmitter } from '@angular/core';
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
    this.fullpage_api = new fullpage('#' + this.id, this.options);
    this.ref.emit(this.fullpage_api);
  }

  ngOnDestroy() {
    if (typeof this.fullpage_api !== 'undefined' && typeof this.fullpage_api.destroy !== 'undefined') {
      this.fullpage_api.destroy('all');
    }
  }
}
