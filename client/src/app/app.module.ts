import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user/add-user/user.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListUserComponent,
    AddUserComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
