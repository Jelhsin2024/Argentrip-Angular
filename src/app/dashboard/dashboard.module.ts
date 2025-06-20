import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { NavDashboardComponent } from './nav-dashboard/nav-dashboard.component';
import { IonContent } from '@ionic/angular/standalone';


@NgModule({
  declarations: [
    LoginComponent,
    NavDashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    IonContent
  ]
})
export class DashboardModule { }
