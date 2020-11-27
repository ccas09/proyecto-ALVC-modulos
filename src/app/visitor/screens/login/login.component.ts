import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  Correo: string;
  Clave: string;

  constructor() { }

  login(){
    console.log(this.Correo);
    console.log(this.Clave);
  }
  ngOnInit(): void {
  }
  
}
