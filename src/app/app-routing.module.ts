import { NgModule } from '@angular/core';
import { PreloadAllModules,RouterModule, Routes } from '@angular/router';
import { NoIngresadoGuard } from './no-ingresado.guard';
import { IngresadoGuard } from './ingresado.guard';
import { AlumnoGuard } from './alumno.guard';
import { DocenteGuard } from './docente.guard';


const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    canActivate: [NoIngresadoGuard]
    
    
  },
  {
    path: 'registrar',
    loadChildren: () => import('./pages/registrar/registrar.module').then( m => m.RegistrarPageModule),
    canActivate: [NoIngresadoGuard]
    
  },
  
  {
    path: 'alumno',
    loadChildren: () => import('./pages/alumno/alumno.module').then( m => m.AlumnoPageModule),
    canActivate: [IngresadoGuard,AlumnoGuard]
    
  },
  {
    path: 'docente',
    loadChildren: () => import('./pages/docente/docente.module').then( m => m.DocentePageModule),
    canActivate: [IngresadoGuard,DocenteGuard]
  },
  {
    path: 'captura',
    loadChildren: () => import('./pages/captura/captura.module').then( m => m.CapturaPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'conocenos',
    loadChildren: () => import('./pages/conocenos/conocenos.module').then( m => m.ConocenosPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'feriados-api',
    loadChildren: () => import('./pages/feriados-api/feriados-api.module').then( m => m.FeriadosAPIPageModule)
  },
  {
    path: 'qr',
    loadChildren: () => import('./pages/qr/qr.module').then( m => m.QrPageModule)
  },
  {
    path: 'listar-clases',
    loadChildren: () => import('./pages/listar-clases/listar-clases.module').then( m => m.ListarClasesPageModule)
  },
  {
    path: 'agregar-clase',
    loadChildren: () => import('./pages/agregar-clase/agregar-clase.module').then( m => m.AgregarClasePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
