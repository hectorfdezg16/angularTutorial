import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//importa el AppComponent a través del archivo
import { AppComponent } from './app.component';
/*
es hora de importar nuestro primer component, el . indica que está en este mismo directorio de la carpeta
es importante decir que siempre importo clase
*/
import { HelloWorld } from './first-component/first.component';
import { SecondComponent } from './second/second.component';

/*
este el modulo principal de Angular
de momento solo conoce el AppComponent
*/
@NgModule({
  declarations: [
    //en declarations añado las clases que he importado previamente
    AppComponent,
    HelloWorld,
    //se nos ha añadido el último componente que hemos creado con ng generate component
    SecondComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
