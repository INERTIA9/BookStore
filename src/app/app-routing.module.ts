import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { GetallbooksComponent } from './Components/getallbooks/getallbooks.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { LoginSignupComponent } from './Components/login-signup/login-signup.component';
import { QuickviewComponent } from './Components/quickview/quickview.component';
import { AuthGuard } from './Services/AuthorisationServices/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login-signup', pathMatch: 'full' },
  { path: 'login-signup', component: LoginSignupComponent },
  { path: 'forgotpassword', component: ForgotPasswordComponent },
  {
    path: 'homepage', component: HomepageComponent,
    children: [
      { path: 'getallbooks', component: GetallbooksComponent },
      
    ]
  },
  {path: 'quickview',component:QuickviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
