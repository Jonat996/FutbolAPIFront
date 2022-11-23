import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../pais.service';
import { ActivatedRoute } from '@angular/router';
import { Team } from '../../interface/Team.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  Equipo:Team=this.resultado;
  Torneos:any=[]
  public nacional:boolean=false;
  Clubes!:Team[]
  response="";
  constructor(private service:PaisService,private route:ActivatedRoute) { }
  formulario={
    "continental_tournament_id":"",
    "national_tournament_id":"",
    "champion_id":this.Equipo.id,
    "oponent_id": "",
    "year":""
  } 

  get resultado(){
    return this.service.Equipo
  }

  buscarEquipo(palabra:any){
    console.log(palabra)
  }
  ngOnInit(): void {
    this.route.params.subscribe(({nivel})=>{
    console.log(nivel)
    
    nivel=="internacional"?this.nacional=false:this.nacional=true; 

    })
    if(this.nacional){
      this.service.obtenerLigasPais(this.Equipo.league.country_id).subscribe((resp)=>{
        this.Torneos=resp;
        console.log(resp)
      })
    }else{
      this.service.obtenerTorneosInternacionales(this.Equipo.international.confederation_id)
      .subscribe((resp)=>{
        this.Torneos=resp;
        console.log(resp)
      })
    }
    this.service.obtenerEquipos().subscribe(resp=>{
      this.Clubes=resp
    })
    
  }
  enviarData(){
    console.log(this.formulario)
    this.service.enviarHistorialEquipo(this.formulario).subscribe((resp:any)=>{
      console.log(resp);
      this.response=resp.respuesta;
    })
    this.formulario={
      "continental_tournament_id":"",
      "national_tournament_id":"",
      "champion_id":this.Equipo.id,
      "oponent_id": "",
      "year":""
    } 
    this.response=""

  }

}
