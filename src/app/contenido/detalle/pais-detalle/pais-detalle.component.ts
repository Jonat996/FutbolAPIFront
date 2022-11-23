import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../pais.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pais-detalle',
  templateUrl: './pais-detalle.component.html',
  styleUrls: ['./pais-detalle.component.css']
})
export class PaisDetalleComponent implements OnInit {

  constructor(private service:PaisService,private route:ActivatedRoute) { }

    get resultado(){
      return this.service.paises[0];
    }
  ngOnInit(): void {

    this.route.params.subscribe(({id})=>{
      console.log(id);
      this.service.detallePais(id);
    })
  }

}
