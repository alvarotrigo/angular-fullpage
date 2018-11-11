import { NgModule } from '@angular/core';
import { FullpageDirective, AnchorLinkDirective } from './fullpage.directive';

@NgModule({
  imports: [],
  declarations: [FullpageDirective, AnchorLinkDirective],
  exports: [FullpageDirective, AnchorLinkDirective]
})
export class AngularFullpageModule { }
