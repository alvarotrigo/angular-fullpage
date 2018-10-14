import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestOneComponent } from './test-one/test-one.component';
import { TestTwoComponent } from './test-two/test-two.component';

// added
import { AngularFullpageModule } from 'angular-fullpage';

@NgModule({
  declarations: [
    AppComponent,
    TestOneComponent,
    TestTwoComponent
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
