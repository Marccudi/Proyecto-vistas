import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/home/home.component';
import { LibrosComponent } from './Libros/libros/libros.component';
import { NuevoComponent } from './Libros/nuevo/nuevo.component';
import { PedirlibroComponent } from './Libros/pedirlibro/pedirlibro.component';
import { PerfillibroComponent } from './Libros/perfillibro/perfillibro.component';
import { VotoComponent } from './Libros/voto/voto.component';
import { ForgotComponent } from './Login/forgot/forgot.component';
import { LoginComponent } from './Login/login/login.component';
import { RegisterComponent } from './Login/register/register.component';
import { MainComponent } from './Main/main/main.component';
import { MislibrosComponent } from './Empleado/mislibros/mislibros.component';
import { PerfilComponent } from './Empleado/perfil/perfil.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'login'},
  {path:'login',component:LoginComponent},
  {path:'login/forgot',component:ForgotComponent},
  {path:'login/register',component:RegisterComponent},
  {path:'main',component:MainComponent},
  {path:'home',component:HomeComponent},
  {path:'libros',component:LibrosComponent},
  {path:'libros/nuevo',component:NuevoComponent},
  {path:'libros/pedirlibro',component:PedirlibroComponent},
  {path:'libros/voto',component:VotoComponent},
  {path:'libros/perfillibro',component:PerfillibroComponent},
  {path:'usuario/perfil',component:PerfilComponent},
  {path:'usuario/libros',component:MislibrosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
