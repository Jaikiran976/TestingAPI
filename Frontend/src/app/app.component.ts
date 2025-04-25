import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherForecast } from './Models/weather.module';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Frontend';
  private http = inject(HttpClient);

  weatherlist:any;

  constructor(){
    this.getList().subscribe({
      next:(params)=>{
        this.weatherlist = params;
      }
    })
  }

  getList():Observable<WeatherForecast[]>{
    return this.http.get<WeatherForecast[]>('https://testingapi-akm0.onrender.com/WeatherForecast');
  }
}
