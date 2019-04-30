import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CooksComponent } from './cooks.component';
import { CookDetailComponent } from './cook-detail/cook-detail.component';

const cooksRoutes: Routes = [
  { path: '', component: CooksComponent, children: [
    { path: ':id', component: CookDetailComponent}
  ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(cooksRoutes)
  ],
  exports: [ RouterModule ],
  providers: [

  ]
})
export class CooksRoutingModule { }
