import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ShareModule } from './share/share.module';
import { AppRoutingModule } from './app-routing.module';
import { CooksModule } from './cooks/cooks.module';


@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    CoreModule,
    ShareModule,
    AppRoutingModule,
    CooksModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
