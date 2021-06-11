import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import {CreateUserComponent } from './create-user/create-user.component';
import { UpdateUserComponent } from './update-user/update-user.component'; 
import { FileuploaderComponent } from './fileuploader/fileuploader.component';


const routes: Routes = [
  {path:'users', component : UserListComponent},
  {path:'', redirectTo:'users',pathMatch:'full'},
  {path:'user-details/:id', component : UserDetailsComponent},
  {path:'create-user', component : CreateUserComponent},
  {path:'update-user/:id', component : UpdateUserComponent},
  {path:'aboutus', component :AboutusComponent},
  {path:'fileuploader',component:FileuploaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
