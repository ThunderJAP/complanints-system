import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserLoginComponent } from './pages/user/user-login/user-login.component';
import { AdminDashboardComponent } from './pages/dashboard/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './pages/dashboard/user-dashboard/user-dashboard.component';
import { ComplanintComponent } from './pages/complanint/complanint.component';
import { ComplanintViewComponent } from './pages/complanint/complanint-view/complanint-view.component';


@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    ComplanintComponent,
    ComplanintViewComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
