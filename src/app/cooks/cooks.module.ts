import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CooksComponent } from './cooks.component';
import { CookDetailComponent } from './cook-detail/cook-detail.component';
import { CookListComponent } from './cook-list/cook-list.component';
import { CookItemComponent } from './cook-list/cook-item/cook-item.component';
import { CooksRoutingModule } from './cooks-routing.module';
import { CookEditComponent } from './cook-edit/cook-edit.component';
import { CookStartComponent } from './cook-start/cook-start.component';

@NgModule({
  declarations: [
    CooksComponent,
    CookDetailComponent,
    CookListComponent,
    CookItemComponent,
    CookEditComponent,
    CookStartComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CooksRoutingModule
  ]
})
export class CooksModule { }
