import { Component, Input, OnInit } from '@angular/core';
import { Paises } from '../interface/pais.interface';
import { PaisService } from '../pais.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {
 param:string=""
  constructor(private route:ActivatedRoute){

 }
  ngOnInit(): void {
    this.route.paramMap.subscribe((param)=>{
      console.log(param.keys[0])
      this.param=param.keys[0]
    })
  }

}
