import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less'],
})
export class RegisterComponent implements OnInit {
  formularioRegistrar: FormGroup;
  constructor(private fb: FormBuilder) {}
  //nombreDeUsuario: string;
  //contraseña: string;

  ngOnInit(): void {
    this.formularioRegistrar = this.fb.group({
      nombreYapellido: ['', Validators.required],
      correoElectronico: ['', Validators.required, Validators.email],
      nombreDeUsuario: ['', Validators.required],
      contraseña: [
        '',
        [
          Validators.compose([
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(10),
          ]),
        ],
      ],
    });
  }

  public Register() {
    const user = this.formularioRegistrar.value;
    console.log(user);
  }
}
