import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { UnLoggedPageComponent } from './un-logged-page/un-logged-page.component';
import { SharedModule } from '../shared/shared.module';
import { PaisesModule } from '../contenido/contenido.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../routing.module';


 

@NgModule({
  declarations: [
    MainPageComponent,
    UnLoggedPageComponent, 
  ],
  imports: [
    CommonModule,
    SharedModule,
    PaisesModule,
    AppRoutingModule,
    

  ],
  exports:[
    MainPageComponent,
    UnLoggedPageComponent

  ],
  
})
export class MainModule { }
