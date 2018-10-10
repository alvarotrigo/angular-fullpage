import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// added
import { AngularFullpageModule } from 'angular-fullpage';

@NgModule({
  declarations: [
    AppComponent
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
