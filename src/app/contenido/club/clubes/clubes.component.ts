import { Component, OnInit } from '@angular/core';
import { Team } from '../../interface/ligas.interface';
import { PaisService } from '../../pais.service';

@Component({
  selector: 'app-clubes',
  templateUrl: './clubes.component.html',
  styleUrls: ['./clubes.component.css']
})
export class ClubesComponent implements OnInit {
  Equipos:Team[]=[]
  constructor(private service:PaisService) { }

  obtenerClub(termino:string){
    this.service.obtenerEquipoBuscado(termino).subscribe((resp)=>{
      this.Equipos=resp;
    })
  }
  ngOnInit(): void {
    this.service.obtenerEquipos().subscribe((resp)=>{
      this.Equipos=resp
    })
  } 

}
