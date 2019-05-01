import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CooksComponent } from './cooks.component';
import { CookDetailComponent } from './cook-detail/cook-detail.component';
import { CookStartComponent } from './cook-start/cook-start.component';
import { CookEditComponent } from './cook-edit/cook-edit.component';

const cooksRoutes: Routes = [
  { path: '', component: CooksComponent, children: [
    { path: '', component: CookStartComponent },
    { path: 'new', component: CookEditComponent},
    { path: ':id', component: CookDetailComponent},
    { path: ':id/edit', component: CookEditComponent}
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
