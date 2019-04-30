import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CooksComponent } from './cooks.component';
import { CookDetailComponent } from './cook-detail/cook-detail.component';
import { CookListComponent } from './cook-list/cook-list.component';
import { CookItemComponent } from './cook-list/cook-item/cook-item.component';
import { CooksRoutingModule } from './cooks-routing.module';

@NgModule({
  declarations: [
    CooksComponent,
    CookDetailComponent,
    CookListComponent,
    CookItemComponent
  ],
  imports: [
    CommonModule,
    CooksRoutingModule
  ]
})
export class CooksModule { }
