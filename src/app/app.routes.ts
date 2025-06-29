import { Routes } from '@angular/router';
import { StoreComponent } from './store/pages/store/store.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
    {
    path: 'store',
    loadChildren: () => import('./store/store.module').then((m) => m.StoreModule),
  },
    {
      path: 'register',
    loadComponent: () => import('./login/register/register.page').then( m => m.RegisterPage)
  },
      {
    path: 'login',
    loadChildren: () => import('./login/login.module').then((m) => m.LoginModule),
  },
    {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then((m) => m.ContactModule),
  },
      {
    path: 'notifications',
    loadChildren: () => import('./notifications/notifications.module').then((m) => m.NotificationsModule),
  },

          {
    path: 'pirulo',
    loadChildren: () => import('./pirulo/pirulo.module').then((m) => m.PiruloModule),
  },
          {
    path: 'not-found',
    loadComponent: () => import('./shared/pages/not-found/not-found.component').then((m) => m.NotFoundComponent),
  },
  {
    path: 'store/list',
    loadComponent: () => import('./store/pages/list/list.page').then( m => m.ListPage)
  },
    {
    path: 'store/vuelos',
    loadComponent: () => import('./store/pages/vuelos/vuelos.page').then( m => m.VuelosPage)
  },
    {
    path: 'store/alojamiento',
    loadComponent: () => import('./store/pages/alojamientos/alojamientos.page').then( m => m.AlojamientosPage)
  },
    {
    path: 'store/ofertas',
    loadComponent: () => import('./store/pages/ofertas/ofertas.page').then( m => m.OfertasPage)
  },
    {
    path: 'store/autos',
    loadComponent: () => import('./store/pages/autos/autos.page').then( m => m.AutosPage)
  },

  {
    path: 'details/:productId',
    loadComponent: () => import('./store/details/details/details.page').then( m => m.DetailsPage)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
    {
    path: '**',
    redirectTo: 'not-found',
    pathMatch: 'full',
  },
];
