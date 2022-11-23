import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DialogComponent } from './dialog/dialog.component';
import { AppRoutingModule } from '../routing.module';




@NgModule({
  declarations: [
    SidebarComponent,
    DialogComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    SidebarComponent,
    DialogComponent
  ]
})
export class SharedModule { }
