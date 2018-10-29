import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { API_CONFIG_BASE_URL } from './app.config';
// import { CarsComponent } from './cars/cars.component';
import { CarsModule } from './cars/cars.module';

@NgModule({
  declarations: [
    AppComponent,
    //CarsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CarsModule,
  ],
  providers: [{ provide: API_CONFIG_BASE_URL, useValue : API_CONFIG_BASE_URL.API_BASE_URL }],
  bootstrap: [AppComponent]
})
export class AppModule { }
