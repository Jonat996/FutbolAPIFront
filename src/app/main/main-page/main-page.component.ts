import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
box:boolean=false;
  constructor(private auth:AuthService) { }
 
  @ViewChild('check') check!:ElementRef;

  activar(){
    this.box=this.check.nativeElement.checked
  console.log(this.box)
  }
  get log(){
    return this.auth.log;
  }
  ngOnInit(): void {
  }

}
