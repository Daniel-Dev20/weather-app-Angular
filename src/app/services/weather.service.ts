import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  //Clave del API de open weather map
  apiKey:string = 'f8c90b1bfc43f56616034cf49ac3de81';

  constructor(private http:HttpClient) { }


  //Función para centralizar las peticiones al API
  getQuery = (country:any) => {

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${this.apiKey}`;

    return this.http.get(url);
  }

  //Función de peticion al API pero los parametros son en arreglos se solcitan mas de un pais
  getWeathers = (country:string[]) => {

    return this.getQuery(country);
    
}

  //Función de petición pero solo de un pais en especifico que el usuario escribe
  getweather =  (countrySearch:Object) => {

  return this.getQuery(countrySearch);
    
  }

}
