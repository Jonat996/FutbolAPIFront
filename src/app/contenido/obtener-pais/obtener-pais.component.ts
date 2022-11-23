import { Component, Input, OnInit, Output } from '@angular/core';
import { PaisService } from '../pais.service';
import { Paises } from '../interface/pais.interface';

@Component({
  selector: 'app-obtener-pais',
  templateUrl: './obtener-pais.component.html',
  styleUrls: ['./obtener-pais.component.css']
})
export class ObtenerPaisComponent implements OnInit {


  constructor(private paisService:PaisService) { }

  get resultados(){
    return this.paisService.paises
  }
  ngOnInit(): void {
    this.paisService.obtenerPaises()
    console.log(this.resultados)
  }
  obtenerPais(param:string){
    console.log(param)
    this.paisService.obtenerPais(param)
  }

}
