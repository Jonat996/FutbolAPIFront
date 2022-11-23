import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../pais.service';
import { ActivatedRoute } from '@angular/router';
import { Team } from '../../interface/Team.interface';

@Component({
  selector: 'app-club-detalle',
  templateUrl: './club-detalle.component.html',
  styleUrls: ['./club-detalle.component.css']
})
export class ClubDetalleComponent implements OnInit {
  Equipo:Team = {}as Team;
  
  constructor(private service:PaisService,private route:ActivatedRoute) { 
  }

get resultado(){
  return this.service.Equipo;
}

  ngOnInit(): void {
  this.Equipo= this.resultado
    this.route.params.subscribe(({id})=>{
      this.service.obtenerEquipo(id);
      console.log(this.Equipo)

    })

  }

}
