import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditProfileComponent } from './autentication/edit-profile/edit-profile.component';
import { LoginComponent } from './autentication/login/login.component';
import { RegisterComponent } from './autentication/register/register.component';
import { UserDetailsComponent } from './autentication/user-details/user-details.component';
import { AuthGuard } from './core/guards/auth.guard';
import { AuthenticatedRoute } from './core/guards/authenticated-route.service';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    canActivateChild: [AuthGuard],
    children: [
  { path: '',pathMatch:'full', redirectTo:'home' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: UserDetailsComponent, canActivate: [AuthenticatedRoute]  },
  { path: 'editProfile', component: EditProfileComponent, canActivate: [AuthenticatedRoute]  },
  { path: 'register', component: RegisterComponent },
]
 }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
