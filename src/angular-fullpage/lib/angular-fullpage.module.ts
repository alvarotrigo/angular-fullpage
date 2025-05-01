import { NgModule } from '@angular/core';
import { FullpageDirective, AnchorLinkDirective } from './fullpage.directive';

@NgModule({
  imports: [FullpageDirective, AnchorLinkDirective],
  exports: [FullpageDirective, AnchorLinkDirective]
})
export class AngularFullpageModule { }
