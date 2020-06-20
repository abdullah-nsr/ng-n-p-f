import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SingupComponent } from './auth/singup/singup.component';
import { ContentComponent } from './content/content.component';


const routes: Routes = [
  { path : '', component: AppComponent },
  { path: 'login', component: LoginComponent },
  { path: 'singup', component: SingupComponent },
  { path: 'content', component: ContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
