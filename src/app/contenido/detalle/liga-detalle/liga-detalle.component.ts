import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../pais.service';

@Component({
  selector: 'app-liga-detalle',
  templateUrl: './liga-detalle.component.html',
  styleUrls: ['./liga-detalle.component.css']
})
export class LigaDetalleComponent implements OnInit {

  constructor(private route:ActivatedRoute,private service:PaisService) { }
  get resultado(){
    return this.service.liga
  }
  ngOnInit(): void {
    this.route.params.subscribe(({id})=>{
      console.log(id)
      this.service.obtenerLiga(id)
    })
  }

}
