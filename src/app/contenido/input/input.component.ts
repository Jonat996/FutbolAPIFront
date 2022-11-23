import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

@Input() placeholder:string=""; 
@Output() palabra:EventEmitter <string> = new EventEmitter();
  termino:string="";
  constructor() { }

  ngOnInit(): void {
  }
  buscarPais(){
    this.palabra.emit(this.termino);
  }
}
