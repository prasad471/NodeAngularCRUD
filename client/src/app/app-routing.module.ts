import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './user/add-user/add-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { ListUserComponent } from './user/list-user/list-user.component';


const routes: Routes = [
  {
    path: 'user/create',
    component: AddUserComponent
  },
  {
    path: 'user/edit/:id',
    component: EditUserComponent
  },
  {
    path: 'users',
    component: ListUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
