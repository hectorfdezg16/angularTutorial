import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Comment } from '../../models/Comment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  //creamos array de comments
  comments: Comment[];

  /*declaro constructor para inicializar variables
  metodo constructor se ejecuta apenas mi aplicación es creada*/
  constructor(private dataService: DataService) {

    /*cuando se ejecute metodo getData haremos suscribe= nos traerá los datos
    eso sí tendremos que recorrer el array que nos devuelve*/
    this.dataService.getData().subscribe(data => {
      console.log(data);
      //selecciones array comments y lo rellenamos
      this.comments = data;
    });
   }

  ngOnInit(): void {
  }

}
