import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestOneComponent } from './test-one/test-one.component';
import { TestTwoComponent } from './test-two/test-two.component';

const routes: Routes = [
  { path: '', component: TestOneComponent, pathMatch: 'full' },
  { path: 'secondTest', component: TestTwoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
