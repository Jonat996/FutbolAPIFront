import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  HttpClientModule } from "@angular/common/http";
import { ObtenerPaisComponent } from './obtener-pais/obtener-pais.component';
import { InputComponent } from './input/input.component';
import { FormControl, FormsModule } from "@angular/forms";
import { ContinentesComponent } from './continentes/continentes.component';
import { ConfederacionesComponent } from './confederacion/confederaciones/confederaciones.component';
import { LigasComponent } from './liga/ligas/ligas.component';
import { ClubesComponent } from './club/clubes/clubes.component';
import { RouterModule } from '@angular/router';
import { PaisDetalleComponent } from './detalle/pais-detalle/pais-detalle.component';
import { CrearComponent } from './crear/crear.component';
import { ConfederacionDetalleComponent } from './detalle/confederacion-detalle/confederacion-detalle.component';
import { TorneoInternacionalFormComponent } from './confederacion/torneo-internacional-form/torneo-internacional-form.component';
import { CompetenciaFormComponent } from './liga/competencia-form/competencia-form.component';
import { LigaDetalleComponent } from './detalle/liga-detalle/liga-detalle.component';
import { ClubFormComponent } from './club/club-form/club-form.component';
import { ClubDetalleComponent } from './detalle/club-detalle/club-detalle.component';
import { AgregarComponent } from './Historial/agregar/agregar.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ObtenerPaisComponent,
    InputComponent,
    ContinentesComponent,
    ConfederacionesComponent,
    LigasComponent,
    ClubesComponent,
    PaisDetalleComponent,
    CrearComponent,
    ConfederacionDetalleComponent,
    TorneoInternacionalFormComponent,
    CompetenciaFormComponent,
    LigaDetalleComponent,
    ClubFormComponent,
    ClubDetalleComponent,
    AgregarComponent,

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    RouterModule
    
  ],
  exports:[
    ObtenerPaisComponent
  ]
})
export class PaisesModule { }
