import { Component, OnInit } from '@angular/core';
import { Car } from '../cars/shared/car.model';
import { CarServiceService } from '../car-service/car-service.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css'],
})
export class CarListComponent implements OnInit 
{
  carList : Car[];

  constructor(private carService : CarServiceService) 
  { 

  }

  ngOnInit() 
  {
    this.convertFromObservableToArray(this.carService.getCarList());
  }

  convertFromObservableToArray(observable : Observable<Car[]>) : void
  {
    observable.subscribe((cars : Car[]) =>{
      this.carList = cars;
      this.carList.forEach((c : Car) => {
        console.log(c instanceof Car);
        console.log(typeof c);
        console.log("CAR LIST : "+c["brand"]);
      })
      }
    );
  }

}
