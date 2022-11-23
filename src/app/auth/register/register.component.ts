import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
response:any=""
log:boolean=false;
  formulario={
    name:"",
    lastname:"",
    email:"",
    password:""
  }
  constructor(private service:AuthService,private route:Router) { }

  ngOnInit(): void {
  }
  enviarData(){
    console.log(this.formulario)
    this.service.registrarUsuario(this.formulario).subscribe((resp:any)=>{
      console.log(resp)
      this.log=this.service.guardarToken(resp.respuesta.token)
      this.response=resp.respuesta.message;
      if(this.log){this.route.navigate(['main/pais'])}
    })
    this.response=""
  this.formulario={
    name:"",
    lastname:"",
    email:"",
    password:""
  }
  }

}
