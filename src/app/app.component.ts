import { Component } from '@angular/core';

//necesitaremos también importar servicio de la API
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //constante para comments de la API
  comments = [];

  title = 'variable contra testing';

  //cremos un array de usuarios
  users = ['Jonatan', 'Eric', 'Marie', 'Javier', 'Carlos'];

  //creamos una variable/propieda booleana para if, en caso que fuese falso no se mostraría contenido en el html
  activated: boolean = true;

  /*con estos cambios le digo de manera explícita que la variable es de un tipo*
  esto nos asegura cuando asignemos variable dará error*/
  name: string = 'Pepe Rodríguez';
  name2: string = 'Carlos Menendez';
  age2; number = 24;

  age: number;

  //declaro un objeto address con ciertas propiedades que aseguran que todos mis objetos serán así
  address: {
    street: string;
    city: string;
  }

  //array
  hobbies: string[];

  /*declaro constructor para inicializar variables
  metodo constructor se ejecuta apenas mi aplicación es creada*/
  constructor(private dataService: DataService){

    /*cuando se ejecute metodo getData haremos suscribe= nos traerá los datos
    eso sí tendremos que recorrer el array que nos devuelve*/
    this.dataService.getData().subscribe(data =>{
      console.log(data);
      //selecciones array comments y lo rellenamos
      this.comments = data;
      
    });
  }

  //vamos a aprender a trabajar con eventos
  users2: string[] = ['Jonatan', 'Eric', 'Marie', 'Javier', 'Carlos'];

  //función evento click
  sayHello(){
    alert('Hello!');
  }

  deleteUser(user){
    for(let i=0; i<this.users2.length; i++){
      if(user == this.users2[i]){
        this.users2.splice(i,1);
      }
    }
  }

  addUser(newUser){
    
    //solo con newUser.value nos da el valor de dentro del input sino nos da todo el input entero
    console.log(newUser.value);

    //lo añadimos a la lista users2
    this.users2.push(newUser.value);

    //borramos valor input para que no se muestre el nombre después de añadirse
    newUser.value = '';

    //aplicamos focus para que cursor se quede en el input del formulario después de añadir usuario
    newUser.focus();

    return false;
  }

}
