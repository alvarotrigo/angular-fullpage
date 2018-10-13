import { Directive, Input, OnInit, Output, EventEmitter } from '@angular/core';
import fullpage from 'fullpage.js/dist/fullpage.extensions.min';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[fullpage]'
})
export class FullpageDirective implements OnInit {
  @Input() id;
  @Input() options;
  @Output() ref = new EventEmitter();

  constructor() { }

  ngOnInit() {
    const fullPageRef = new fullpage('#' + this.id, this.options);
    this.ref.emit(fullPageRef);
  }
}
