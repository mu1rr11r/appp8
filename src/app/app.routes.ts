import { Routes } from '@angular/router';
import path from 'node:path';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { TerifyComponent } from './terify/terify.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';

export const routes: Routes = [
  {path : 'register', component:RegisterComponent},
  {path : 'login', component:LoginComponent},
  {path : 'forget',component:ForgetpasswordComponent},
  {path : 'terify', component: TerifyComponent},
];

