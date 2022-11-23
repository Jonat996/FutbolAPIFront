import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:AuthService,private route:Router) { }
  response:any=""
  log:boolean=false;
  formulario={
    "email":"" ,
    "password":""
  }

  enviarData(){
    console.log(this.formulario)
    this.service.iniciarSesion(this.formulario).subscribe((resp:any)=>{
      console.log(resp)
      this.response=resp.respuesta.message
      this.log=this.service.guardarToken(resp.respuesta.token)
      if(this.log){this.route.navigate(['main/pais'])}
    })
    this.response=""
    this.formulario={
      "email":"" ,
      "password":""
    }
  }

  ngOnInit(): void {
  }

}
