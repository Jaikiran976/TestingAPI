import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getData(obj:any){
    return this.http.post('https://localhost:7275/WeatherForecast',obj);
  }
}
