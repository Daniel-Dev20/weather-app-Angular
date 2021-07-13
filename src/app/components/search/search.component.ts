import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  data:any;
  loading:any;
  constructor( private service:WeatherService) { 

  }

  ngOnInit(): void {
  }

  //Función que llama al servicio con un parametro que es pais y este devuelve la infomación
 searchWeather = async(country:string) => {
   
  this.loading = true;
  
  //Obtenemos la la información que envia el servicio
   this.service.getweather( await country).subscribe((pais) => {
  
    //Guardamos es info en la variable data
     this.data = pais;

     this.loading = false;
   })
 
 }

}
