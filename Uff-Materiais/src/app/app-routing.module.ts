import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {path:"",pathMatch:"full",redirectTo:'login'},
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)},
  { path: 'area-logada-inicial', loadChildren: () => import('./pages/area-logada-inicial/area-logada-inicial.module').then(m => m.AreaLogadaInicialModule) },
  { path: 'usuario-edit', loadChildren: () => import('./pages/usuario-edit/usuario-edit.module').then(m => m.UsuarioEditModule)},
  { path: 'atualiza-usuario/:id', loadChildren: () => import('./pages/atualiza-usuario/atualiza-usuario.module').then(m => m.AtualizaUsuarioModule)},
  { path: 'materias-edit', loadChildren: () => import('./pages/materias-edit/materias-edit.module').then(m => m.MateriasEditModule)},
  { path: 'atualiza-materia/:id', loadChildren: () => import('./pages/atualiza-materia/atualiza-materia.module').then(m => m.AtualizaMateriaModule)},
  { path: 'salva-materia', loadChildren: () => import('./pages/salva-materia/salva-materia.module').then(m => m.SalvaMateriaModule)},
  { path: 'topico-edit/:materiaId', loadChildren: () => import('./pages/topico-edit/topico-edit.module').then(m => m.TopicoEditModule)},
  { path: 'topico-edit/:materia-id/atualiza-topico/:topico-id', loadChildren: () => import('./pages/atualiza-topico/atualiza-topico.module').then(m => m.AtualizaTopicoModule)},
  { path: 'topico-edit/salva-topico/:materia-id', loadChildren: () => import('./pages/salva-topico/salva-topico.module').then(m => m.SalvaTopicoModule)},
  { path: 'conteudo-edit/:topico-id', loadChildren: () => import('./pages/conteudo-edit/conteudo-edit.module').then(m => m.ConteudoEditModule)},
  { path: 'conteudo-edit/salva-conteudo/:topico-id', loadChildren: () => import('./pages/salva-conteudo/salva-conteudo.module').then(m => m.SalvaConteudoModule)},
  { path: 'conteudo-edit/:topico-id/atualiza-conteudo/:conteudo-id', loadChildren: () => import('./pages/atualiza-conteudo/atualiza-conteudo.module').then(m => m.AtualizaConteudoModule)}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
