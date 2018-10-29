import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'horsePower',
  // pure : false
})
export class HorsepowerPipe implements PipeTransform 
{

  transform(value: any, unit: string ="ch"): any 
  {
    return unit.toLowerCase() == "kw" ? Math.floor(value * 0.7457) + "kW" : value + "ch." ;
  }

}
