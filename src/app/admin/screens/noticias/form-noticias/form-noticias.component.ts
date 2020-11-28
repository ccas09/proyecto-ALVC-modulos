import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'form-noticias',
  templateUrl: './form-noticias.component.html',
  styleUrls: ['./form-noticias.component.less'],
})
export class FormNoticiasComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      titleCard: ['', Validators.required],
      body: ['', Validators.required],
      image: [''],
      date: ['', Validators.required],
      journalist: ['', Validators.required],
      category: ['', Validators.required],
    });
  }

  @Output() onSubmit: EventEmitter<number> = new EventEmitter();

  enviar(event) {
    event.preventDefault()
    //const noticia 
    console.log(this.form.value)
    //this.onSubmit.emit(noticia)
  }
}
