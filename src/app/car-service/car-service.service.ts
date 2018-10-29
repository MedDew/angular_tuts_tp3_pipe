import { Injectable, Inject, Testability } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_CONFIG_BASE_URL } from '../app.config';
import { Observable } from 'rxjs';
import { Car } from '../cars/shared/car.model';

@Injectable({
  providedIn: 'root'
})
export class CarServiceService 
{

  constructor(private httpClient : HttpClient, @Inject(API_CONFIG_BASE_URL) private apiURL : string) 
  {
    
  }

  getCarList() : Observable<Car[]>//Promise<void>
  {
    let httpOtions = {
      headers : new HttpHeaders({"Accept":"application/json", "Content-Type": "application/json"})
    };
    let test = this.httpClient.get<Car[]>(`${this.apiURL}/cars`,httpOtions);
    /*.forEach((car : Car[]) => {
      car.forEach(function(c : Car){
        console.log("c : ");
        console.log(typeof c);
        for(let p in c)
        {
          console.log("p : "+p+" => "+c[p]);
        }
      });
    }       
    );*/
    return test;
  }
}
