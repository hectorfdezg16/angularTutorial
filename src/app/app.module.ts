//archivo principal de nuestra aplicación

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//importamos funcionalidad para ngModel / funcionalidad de doble enlace de datos
import { FormsModule } from '@angular/forms';

//también necesitamos importar aquí el modulo del servicio debido a que es la aplicación entera
import { HttpClientModule } from '@angular/common/http'

//importa el AppComponent a través del archivo
import { AppComponent } from './app.component';

//importamos enrutador =

/*
es hora de importar nuestro primer component, el . indica que está en este mismo directorio de la carpeta
es importante decir que siempre importo clase
*/
import { HelloWorld } from './first-component/first.component';
import { SecondComponent } from './second/second.component';
import { UserComponent } from './user/user.component';

/*importamos el servicio Data, desde este archivo implemento la clase DataService
pero DataService no es ningún componente (declarations), ni modulo (imports), declaro en providers*/
import { DataService } from './data.service';

/*
este el modulo principal de Angular
de momento solo conoce el AppComponent
*/

//app.module no conoce nuestro servicio API, primero importaremos 

@NgModule({
  declarations: [
    //en declarations añado las clases que he importado previamente
    AppComponent,
    HelloWorld,
    //se nos ha añadido el último componente que hemos creado con ng generate component
    SecondComponent,
    UserComponent
  ],
  //este apartado es para agregar nuevas funcionalidades de Angular
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
