import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisitorHomeScreenComponent } from './visitor/screens/visitor-home-screen/visitor-home-screen.component';


const routes: Routes = [
  {path: 'usuario',
  loadChildren: () => import('./usuario/usuario.module').then(m => m.UsuarioModule)
  } ,

  {path: 'visitor',
  loadChildren: () => import('./visitor/visitor.module').then(m => m.VisitorModule)
  } ,

  {path: 'periodistas',
  loadChildren: () => import('./periodistas/periodistas.module').then(m => m.PeriodistasModule)
  } ,
  
  {
    path: '', redirectTo: 'visitor/home', pathMatch: 'full'
  }
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
