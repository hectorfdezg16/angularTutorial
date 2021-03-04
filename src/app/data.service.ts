/*este será nuestro servicio principal
necesitaremos importar biblioteca HTTP para coger datos de la API de JSONPlaceHolder*/
import { Injectable } from '@angular/core';

//este cliente me permitirá hacer peticiones HTTP desde Angular
import { HttpClient } from '@angular/common/http';

//vamos a importar estructura/contrato objeto
import { Comment } from './Comment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  /*vamos a utilizar metodo HTTPClient para ello crearemos propiedad tipo HttpClient
  voy a utilizar modulo dentro de esta clase*/
  constructor(private httpClient: HttpClient) {
    //comprobamos que funciona el modulo a través de un mensaje en consola
    console.log('Serice is working!!!');
   }

   //función obtener datos de la API
   getData(){

     /*petición http que obtiene los datos en la url que le pasamos de la API en formato JSON
     esto me va a retornar un array de comentarios*/
     return this.httpClient.get<Comment[]>('http://jsonplaceholder.typicode.com/comments');
   }
}
