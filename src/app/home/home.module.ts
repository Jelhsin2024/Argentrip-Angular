import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { PaquetesComponent } from './paquetes/paquetes.component';
import { IonContent } from '@ionic/angular/standalone';
import { SharedModule } from '../shared/shared.module';
import { ArticleComponent } from './component/article/article.component';
import { PruebaComponent } from './component/prueba/prueba.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations:[
  PaquetesComponent,
  ArticleComponent,
  PruebaComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    IonicModule,
    
    SharedModule
  ]
})
export class HomeModule { }
