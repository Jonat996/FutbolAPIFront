import { Component, OnInit } from '@angular/core';
import { Paises } from '../../interface/pais.interface';
import { PaisService } from '../../pais.service';

@Component({
  selector: 'app-competencia-form',
  templateUrl: './competencia-form.component.html',
  styleUrls: ['./competencia-form.component.css']
})
export class CompetenciaFormComponent implements OnInit {
  pais:Paises[]=this.resultado
  response:any ="";
  country=this.pais[0].country_name
  formulario:any={
  league_name:"",
  country_id:this.pais[0].id,
  division_id:0,
  league_logo:""
 
  }
get resultado(){
  return this.pais=this.service.paises; 
}

enviarData(){
  this.service.enviarCompetencia(this.formulario).subscribe((resp:any)=>{
    this.response=resp.respuesta;
    console.log(resp)
   });

  this.formulario={
    league_name:"",
    country_id:this.pais[0].id,
    division_id:0,
    cup_:"",
    league_logo:""
  }
  this.response=""

}
  constructor(private service:PaisService) { }

  ngOnInit(): void {
  }

}
