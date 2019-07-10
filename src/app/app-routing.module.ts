import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignOutComponent } from './sign-out/sign-out.component';
import { BlogComponent } from './blog/blog.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'signin', component:SignInComponent},
  {path:'signout', component:SignOutComponent},
  {path:'blog', component:BlogComponent},
  {path:'**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
