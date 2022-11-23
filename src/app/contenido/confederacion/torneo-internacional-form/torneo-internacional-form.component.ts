import { Component, OnInit } from '@angular/core';
import { Confederacion, Country } from '../../interface/confedetaciones.interface';
import { PaisService } from '../../pais.service';

@Component({
  selector: 'app-torneo-internacional-form',
  templateUrl: './torneo-internacional-form.component.html',
  styleUrls: ['./torneo-internacional-form.component.css']
})
export class TorneoInternacionalFormComponent implements OnInit {
  confederacion:Confederacion=this.resultado;
  Nombre:string=this.confederacion.confederation_name
  response="";
  constructor(private service:PaisService) { }
  get resultado(){
    return this.service.confederacion;
  }
  formulario={
    "tournament_name":"",
    "division_id":"",
    "confederation_id": this.confederacion.id,
    "cup":"",
    "tournament_logo":""
  }
  enviarData(){
    this.service.enviarTorneoInternacional(this.formulario).subscribe((resp:any)=>{
      this.response=resp.respuesta;
      console.log(resp)
    })
    this.formulario={
      "tournament_name":"",
      "division_id":"",
      "confederation_id": this.confederacion.id,
      "cup":"",
      "tournament_logo":""
    }
    this.response=""
  }
  ngOnInit(): void {

  }

}
