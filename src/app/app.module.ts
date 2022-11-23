import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { authModule } from './auth/auth.module';
import { MainModule } from './main/main.module';
import { AppRoutingModule } from './routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    authModule,
    FormsModule,
    MainModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
