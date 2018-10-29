import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorsepowerPipe } from './horsepower.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HorsepowerPipe],
})
export class CustomPipeModule { }
