import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../pais.service';
import { Ligas } from '../../interface/ligas.interface';

@Component({
  selector: 'app-club-form',
  templateUrl: './club-form.component.html',
  styleUrls: ['./club-form.component.css']
})
export class ClubFormComponent implements OnInit {
  liga:Ligas=this.resultado;
  nombreLiga=this.resultado.league_name
  torneos:any[]=[]
  response:any="";
formulario={
  'team_name':"",
  'international_id':"",
  "league_id":this.liga.id,
  "team_logo":""

}

  constructor(private service:PaisService) { }
get resultado(){
  return this.service.liga
}
enviarData(){
  console.log(this.formulario)
  this.service.enviarEquipo(this.formulario).subscribe((resp:any)=>{
    console.log(resp);
    this.response=resp.respuesta;
  })
  this.formulario={
    'team_name':"",
    'international_id':"",
    "league_id":this.liga.id,
    "team_logo":""
  
  }
  this.response=""
}
  ngOnInit(): void {
    this.service.obtenerTorneosInternacionales(this.liga.country.confederation_id).subscribe((resp)=>{
      console.log(resp)
      this.torneos=resp
    })
  }

}
