import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  @Input() respuesta = "";
  @ViewChild('dialog') dialogo!:ElementRef;
  constructor() { }

  ngOnInit(): void {
    this.dialogo.nativeElement.showModal();
  }

  cerrarDialog(){
console.log(this.dialogo)
this.dialogo.nativeElement.close();
this.respuesta=""
  }
}
