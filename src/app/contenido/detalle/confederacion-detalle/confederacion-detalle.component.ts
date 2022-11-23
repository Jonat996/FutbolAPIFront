import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../pais.service';
import { Confederation } from '../../../contenido/interface/pais.interface';
import { Confederacion } from '../../interface/confedetaciones.interface';

@Component({
  selector: 'app-confederacion-detalle',
  templateUrl: './confederacion-detalle.component.html',
  styleUrls: ['./confederacion-detalle.component.css']
})
export class ConfederacionDetalleComponent implements OnInit {

  constructor(private route:ActivatedRoute,private service:PaisService) { }

  get resultado(){
    return this.service.confederacion;
  }
  ngOnInit(): void {
    this.route.params.subscribe(({id})=>{
      console.log(id)
      this.service.obtenerConfederacion(id)
    })
  }

}
