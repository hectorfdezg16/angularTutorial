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
    title = 'Welcome to Angular';
}

