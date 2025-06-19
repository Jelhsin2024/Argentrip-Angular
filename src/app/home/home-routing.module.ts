import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaquetesComponent } from './paquetes/paquetes.component';
import { VuelosComponent } from './vuelos/vuelos.component';
import { AutosComponent } from './autos/autos.component';
import { OfertasComponent } from './ofertas/ofertas.component';

const routes: Routes = [
  { path: '', component: PaquetesComponent },
  { path: 'vuelos', component: VuelosComponent },
  { path: 'autos', component: AutosComponent },
  { path: 'ofertas', component: OfertasComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
