import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../pais.service';
import { League } from '../../interface/pais.interface';
import { Ligas } from '../../interface/ligas.interface';

@Component({
  selector: 'app-ligas',
  templateUrl: './ligas.component.html',
  styleUrls: ['./ligas.component.css']
})
export class LigasComponent implements OnInit {
ligas:Ligas[]=[]
  constructor(private service:PaisService) { }

  ngOnInit(): void {
    this.service.obtenerLigas().subscribe((resp)=>{
      console.log(resp)
      this.ligas=resp
    })
  }
  obtenerLiga(termino:string){
    console.log(termino)
    this.service.obtenerLigaBuscada(termino).subscribe((resp)=>{
      console.log(resp)
      this.ligas=resp
    })
  }

}
