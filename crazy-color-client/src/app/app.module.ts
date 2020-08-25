import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';
import { ReactiveFormsModule }from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DressComponent } from './dress/dress.component';
import { DressService } from './services/dress.service';
import { DressFormComponent } from './dress/dress-form/dress-form/dress-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DressComponent,
    DressFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
