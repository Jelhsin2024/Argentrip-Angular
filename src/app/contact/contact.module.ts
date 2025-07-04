import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { IonContent } from '@ionic/angular/standalone';
import { ContactComponent } from './pages/contact/contact.component';
import { FormContactComponent } from './components/form-contact/form-contact.component';
import { SharedModule } from "../shared/shared.module";


@NgModule({
  declarations: [
    ContactComponent,
    FormContactComponent
  ],

  imports: [
    CommonModule,
    ContactRoutingModule,
    IonContent,
    SharedModule
]
})
export class ContactModule { }
