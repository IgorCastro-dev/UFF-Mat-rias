import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {path:"",pathMatch:"full",redirectTo:'login'},
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)},
  { path: 'area-logada-inicial', loadChildren: () => import('./pages/area-logada-inicial/area-logada-inicial.module').then(m => m.AreaLogadaInicialModule) },
  { path: 'usuario-edit', loadChildren: () => import('./pages/usuario-edit/usuario-edit.module').then(m => m.UsuarioEditModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
