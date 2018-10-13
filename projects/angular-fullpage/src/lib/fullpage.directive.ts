import { Directive, ElementRef, Input, OnInit, Output, EventEmitter } from '@angular/core';

import fullpage from 'fullpage.js/dist/fullpage.extensions.min';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[fullpage]'
})
export class FullpageDirective implements OnInit {
  @Input() options;
  @Output() ref = new EventEmitter();

  constructor(el: ElementRef) {
    el.nativeElement.id = 'fullpage';
  }

  ngOnInit() {
    const fullPageRef = new fullpage('#fullpage', this.options);
    this.ref.emit(fullPageRef);
  }
}
