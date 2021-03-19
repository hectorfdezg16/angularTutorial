/*cuando importamos los diferentes componentes y oninit del nucleo de angular
también importaremos parámetros de entrada Input*/
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  //creamos una entrada (variable de entrada)
  @Input() nameUser;

  constructor() { }

  ngOnInit(): void {
  }

}
