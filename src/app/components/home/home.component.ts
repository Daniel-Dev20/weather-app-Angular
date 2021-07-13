import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  weathers:any[] = [];
  icon:string = 'fas fa-cloud fa-5x ico';
  loading:any;
  countries:any[] = ['El Salvador', 'Estados Unidos', 'Mexico', 'London', 'Nicaragua', 'Alemania', 'Costa Rica', 'Portugal'];
  
  constructor(private weatherService: WeatherService) { 
   
    
    //Recorremos cada item del arreglo a ser mandado a la funcion que realiza la petición al servicio
      for(let country of this.countries){
       
        //LLamamos la funcion que realiza la petición al servicio y le enviamos el paramatro con cada item del arreglo
        this.getWeather(country);
      }
  }

  ngOnInit(): void {
  }

  //Función que realiza la petición al servicio
  getWeather = async(pais:any) => {

    this.loading = true;

     this.weatherService.getWeathers( await pais).subscribe( data => {
      
      //Agregamos cada info de cada pais que viene desde el servicio a la variable weathers
      this.weathers.push(data);

      this.loading = false;

    })
     
  }

}
