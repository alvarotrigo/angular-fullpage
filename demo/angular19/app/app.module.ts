import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BasicExampleComponent } from './examples/basic/basic.component';
import { DynamicChangesExampleComponent } from './examples/dynamic-changes/dynamic-changes.component';
import { ScrollOverflowExampleComponent } from './examples/scrolloverflow/scrolloverflow.component';
import { TypeExampleComponent } from './examples/type-definitions/type.component';
import { DynamicNgForComponent } from './examples/dynamic-ng-for/dynamic-ng-for.component';
import { UsingDirectiveComponent } from './examples/using-directive/using-directive';

import { AngularFullpageModule } from './@fullpage/angular-fullpage';

@NgModule({
  declarations: [
    AppComponent,
    BasicExampleComponent,
    DynamicChangesExampleComponent,
    ScrollOverflowExampleComponent,
    TypeExampleComponent,
    DynamicNgForComponent,
    UsingDirectiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFullpageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
