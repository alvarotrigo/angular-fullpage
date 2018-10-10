import { Directive, Input, OnInit } from '@angular/core';
import fullpage from 'fullpage.js/dist/fullpage.extensions.min.js';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[fullpage]'
})
export class FullpageDirective implements OnInit {
  @Input() fullPageConfig: any;
  @Input() id: string;

  constructor() { }

  ngOnInit() {
    const fullPageRef = new fullpage('#' + this.id, this.fullPageConfig);
  }
}
