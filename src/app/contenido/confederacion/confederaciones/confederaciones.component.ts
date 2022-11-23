import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../pais.service';

@Component({
  selector: 'app-confederaciones',
  templateUrl: './confederaciones.component.html',
  styleUrls: ['./confederaciones.component.css']
})
export class ConfederacionesComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute, private service:PaisService) { }
  
  get resultado(){
    return this.service.confederations;
  }
  ngOnInit(): void {
    this.service.obtenerConfederaciones()
    this.activatedRoute.params.subscribe(({id})=>{
      console.log(id)
    })
  }

}
