import { Directive, Input, OnInit, Output, EventEmitter } from '@angular/core';

import fullpage from 'fullpage.js/dist/fullpage.extensions.min';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[fullpage]'
})
export class FullpageDirective implements OnInit {
  @Input() fullPageConfig;
  @Input() id: string;

  @Output() fullPageCreated = new EventEmitter();

  constructor() { }

  ngOnInit() {
    const fullPageRef = new fullpage('#' + this.id, this.fullPageConfig);
    this.fullPageCreated.emit(fullPageRef);
  }
}
