import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { ComprarComponent } from './views/comprar/comprar.component';
import { DeleteUserComponent } from './views/delete-user/delete-user.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { UpdateComponent } from './views/update/update.component';
import { UsuariosComponent } from './views/usuarios/usuarios.component';

const routes: Routes = 
[
  { path: '', component: HomeComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'update/:id', component: UpdateComponent },
  { path: 'delete-user/:id', component: DeleteUserComponent },
  { path: 'comprar/:id', component: ComprarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
