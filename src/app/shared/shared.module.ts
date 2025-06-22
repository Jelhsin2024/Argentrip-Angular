import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { NotificationsModule } from '../notifications/notifications.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FooterComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    NotificationsModule,
    RouterModule
  ],
  exports:[
    FooterComponent,
    NavComponent
  ]
})
export class SharedModule { }
