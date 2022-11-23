import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Confederation, Paises } from './interface/pais.interface';
import { Observable } from 'rxjs';
import { Confederacion } from './interface/confedetaciones.interface';
import { Ligas } from './interface/ligas.interface';
import { Team } from './interface/Team.interface';


@Injectable({
  providedIn: 'root'
})
export class PaisService {

  url:string="http://129.151.97.168:8080/api";
  urlLigas:string="http://129.151.97.168:8080/api/leagues"

  public paises:Paises[]=[];
  public confederations:Confederacion[]=[]
  public confederacion!:Confederacion;
  public liga!:Ligas;
  public Equipo!:Team;
  public Token:string = localStorage.getItem('token')||"";
   httpOptions = {
    headers: new HttpHeaders({
      Authorization: `Bearer ${this.Token}` 
    })
  };

  constructor(private http:HttpClient) { }

   obtenerPaises(){
 this.http.get<Paises[]>(this.url+"/country").subscribe((resp)=>{
  console.log(resp)
  this.paises=resp;
});
  }
  obtenerPais(name:string){
    this.http.get<Paises[]>(this.url+"/country"+"/"+name).subscribe((resp)=>{
      console.log(resp)
      this.paises=resp;
    })
  }
  detallePais(id:number){
    this.http.get<Paises[]>(this.url+"/country"+"/id/"+id).subscribe((resp)=>{
      console.log(resp)
      this.paises=resp;
    })
  }

  obtenerConfederaciones(){
    return this.http.get<Confederacion[]>(this.url+"/confederations").subscribe((resp)=>{
      console.log(resp)
      this.confederations=resp;
    })
  }
  obtenerConfederacion(id:Number){
return this.http.get<Confederacion>(this.url+"/confederation/"+id).subscribe((resp)=>{
  this.confederacion=resp
  console.log(this.confederacion)
});
  }

  obtenerLigas(){
    return this.http.get<Ligas[]>(this.url+"/leagues")
  }
  obtenerLigaBuscada(name:string){
    return this.http.get<Ligas[]>(this.url+"/leagues/busqueda/"+name)
  }
  obtenerLiga(id:number){
    return this.http.get<Ligas>(this.url+"/league/"+id).subscribe((resp)=>{
      this.liga=resp
      console.log(resp)

    })
  }
  obtenerTorneosInternacionales(id:number){
    return this.http.get<any[]>(this.url+"/continentalTournament/confederation/"+id)
  }

  obtenerEquipos(){
    return this.http.get<Team[]>(this.url+"/teams")
  }
  obtenerEquipoBuscado(termino:string){
    return this.http.get<Team[]>(this.url+"/teams/name/"+termino)
  }
  obtenerEquipo(id:number){
    this.Equipo={} as Team;
    return this.http.get<Team>(this.url+"/team/"+id).subscribe((resp)=>{
      console.log(resp)
    this.Equipo=resp;
    })
  }
  obtenerLigasPais(id:number){
    return this.http.get<Ligas>(this.url+"/league/country/"+id);
  }
  enviarHistorialEquipo(obj:object){
    return this.http.post(this.url+"/championsHistorial",obj,this.httpOptions)
  }
  enviarCompetencia(obj:object){
    return this.http.post(this.urlLigas,obj, this.httpOptions)
  }
  enviarEquipo(obj:object){
    console.log(this.httpOptions)
    console.log(this.Token)
    return this.http.post(this.url+"/teams",obj,this.httpOptions)
  }
  enviarTorneoInternacional(obj:object){
    return this.http.post(this.url+"/continentaltournament",obj,this.httpOptions)
  }
}
