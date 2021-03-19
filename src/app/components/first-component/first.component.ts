/*
TODO ESTO SERÁ UNA NUEVA ETIQUETA QUE LLAMAREMOS DESDE HTML
vamos a empezar comentando un poco el codigo
como vemos importamos (traemos) un componente desde el nucleo de angular
instrucción tenue significa que todavía no lo estamos utilizando 
*/
import { Component } from '@angular/core';

/*
utilizamos componente, para ello creamos clase (clase de typescript o javascript)
con @Component convertimos función en un componente
*/
@Component({
    //el selector es el nombre (etiqueta que llamaremos desde html)
    selector: 'hello-world',
    /*codigo html que va mostrar cada vez que llamemos a esa etiqueta 
    para una cadena larga utilizamos accentos cerrados
    también podemos llamar a otro archivo a través de una ruta a través de templateUrl*/
    templateUrl: './first.component.html',
    //en styles colocamos un array con string que los h1's tengan color de fondo negro y un color de letra blanco
    styleUrls: ['./first.component.css']
})
//si queremos utilizar este componente en otras partes de nuestra aplicación necesitaremos exportarlo (exportar clase)
export class HelloWorld{
    
    title = 'Welcome to the First Component!';

    //title = 'Welcome to Angular';
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

