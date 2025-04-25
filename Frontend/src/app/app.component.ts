import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { WeatherForecast } from './Models/weather.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'FrontEnd';
  private http = inject(HttpClient);

  weatherlist:any;

  constructor(){
    this.getList().subscribe({
      next:(params: any)=>{
        this.weatherlist = params;
      }
    })
  }

  getList():Observable<WeatherForecast[]>{
    return this.http.get<WeatherForecast[]>('https://testingapi-akm0.onrender.com/WeatherForecast');
  }
}
