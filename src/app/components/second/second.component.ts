import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  //añadimos también la variable título
  title = 'Welcome to another component!'

  constructor() { }

  ngOnInit(): void {
  }

}
