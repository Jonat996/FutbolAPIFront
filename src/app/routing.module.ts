import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main/main-page/main-page.component';
import { UnLoggedPageComponent } from './main/un-logged-page/un-logged-page.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ConfederacionesComponent } from './contenido/confederacion/confederaciones/confederaciones.component';
import { ConfederacionDetalleComponent } from './contenido/detalle/confederacion-detalle/confederacion-detalle.component';
import { LigasComponent } from './contenido/liga/ligas/ligas.component';
import { LigaDetalleComponent } from './contenido/detalle/liga-detalle/liga-detalle.component';
import { ClubesComponent } from './contenido/club/clubes/clubes.component';
import { ClubFormComponent } from './contenido/club/club-form/club-form.component';
import { ClubDetalleComponent } from './contenido/detalle/club-detalle/club-detalle.component';
import { AgregarComponent } from './contenido/Historial/agregar/agregar.component';
import { CrearComponent } from './contenido/crear/crear.component';
import { PaisDetalleComponent } from './contenido/detalle/pais-detalle/pais-detalle.component';
import { ObtenerPaisComponent } from './contenido/obtener-pais/obtener-pais.component';
import { GuardsGuard } from './auth/guards/guards.guard';

const routes: Routes = [
  {
    path: 'main',
    component: MainPageComponent,
    children: [
        {
            path:'pais',
            component:ObtenerPaisComponent,
        },
        {
            path:'pais/:id',
            component:PaisDetalleComponent,
        },
        {
            path:'crear/competencia/liga/:id',
            component:CrearComponent,
            canActivate:[GuardsGuard]
        },
        {
            path:'crear/competencia/internacional/:conf_id',
            component:CrearComponent,
            canActivate:[GuardsGuard]
        },
      {
        path: 'confederaciones',
        component: ConfederacionesComponent,
      },
      {
        path: 'confederacion/:id',
        component: ConfederacionDetalleComponent,
      },
      {
        path: 'ligas',
        component: LigasComponent,
      },
      {
        path: 'liga/:id',
        component: LigaDetalleComponent,
      },
      {
        path: 'clubes',
        component: ClubesComponent,
      },
      {
        path: 'crear/club/:liga_id',
        component: ClubFormComponent,
        canActivate:[GuardsGuard]
      },
      {
        path: 'club/:id',
        component: ClubDetalleComponent,
      },
      {
        path: 'agregar/historial/:nivel',
        component: AgregarComponent,
        canActivate:[GuardsGuard]
      },
    ],
  },
  {
    path: '',
    component: UnLoggedPageComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
