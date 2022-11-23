import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-un-logged-page',
  templateUrl: './un-logged-page.component.html',
  styleUrls: ['./un-logged-page.component.css']
})
export class UnLoggedPageComponent implements OnInit {

  constructor(private ruote:Router) { }

  ngOnInit(): void {
  }
  main(){
    this.ruote.navigate(['pais']);
  }
  login(){
    this.ruote.navigate(['login']);
  }

}
