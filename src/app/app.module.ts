import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SingupComponent } from './auth/singup/singup.component';
import { ContentComponent } from './content/content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgMatModule } from './material/ng-mat/ng-mat.module'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SingupComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgMatModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
