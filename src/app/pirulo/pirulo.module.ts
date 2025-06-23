import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponenteComponent } from './componente/componente.component';
import { SharedModule } from '../shared/shared.module';
import { IonContent } from '@ionic/angular/standalone';
import { PiruloRoutingModule } from './pirulo-routing.module';



@NgModule({
  declarations: [
    ComponenteComponent,
  ],
  imports: [
    CommonModule,
    PiruloRoutingModule,
    IonContent,
    SharedModule,
  ]
})
export class PiruloModule { }
