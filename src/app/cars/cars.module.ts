import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsComponent } from './cars.component';
import { CarListComponent } from '../car-list/car-list.component';
import { HorsepowerPipe } from '../custom-pipe/horsepower.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CarsComponent, CarListComponent, HorsepowerPipe],
  exports: [CarsComponent, CarListComponent]
})
export class CarsModule { }
