import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './core/home/home.component';
import { CooksComponent } from './cooks/cooks.component';
import { CookEditComponent } from './cooks/cook-edit/cook-edit.component';
import { CookDetailComponent } from './cooks/cook-detail/cook-detail.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },  
  { path: 'cooks', component: CooksComponent},
  { path: 'cooks/new', component: CookEditComponent},
  { path: 'cooks/:id', component: CookDetailComponent},
  { path: 'cooks/:id/edit', component: CookEditComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
