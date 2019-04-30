import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './core/home/home.component';
import { CooksComponent } from './cooks/cooks.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cooks', component: CooksComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
