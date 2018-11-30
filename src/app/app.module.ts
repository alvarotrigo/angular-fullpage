import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicExampleComponent } from './examples/basic/basic.component';
import { DynamicChangesExampleComponent } from './examples/dynamic-changes/dynamic-changes.component';
import { ScrollOverflowExampleComponent } from './examples/scrolloverflow/scrolloverflow.component';
import { TypeExampleComponent } from './examples/type-definitions/type.component';


// added
import { AngularFullpageModule } from '@fullpage/angular-fullpage';

@NgModule({
  declarations: [
    AppComponent,
    BasicExampleComponent,
    DynamicChangesExampleComponent,
    ScrollOverflowExampleComponent,
    TypeExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFullpageModule // added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
