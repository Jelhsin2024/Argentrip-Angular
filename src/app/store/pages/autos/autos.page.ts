import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { IProduct } from 'src/app/models/product.model';
import { IonicModule } from '@ionic/angular'
import { RouterLink } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoreModule } from '../../store.module';
import { Geolocation, PermissionStatus } from '@capacitor/geolocation'
import { UrlSeguraPipe } from '../../../pipes/url-segura.pipe'; 

@Component({
  selector: 'app-autos',
  templateUrl: './autos.page.html',
  styleUrls: ['./autos.page.scss'],
  standalone: true,
  imports: [UrlSeguraPipe,CommonModule, FormsModule, IonicModule, RouterLink, SharedModule, StoreModule]
})
export class AutosPage implements OnInit {
// uso de apis
  products:IProduct[]=[]
  constructor(private _apiService: ApiService) { }

  ngOnInit() {
    this._apiService.getAll().subscribe((data:IProduct[]) => {
      this.products = data
    })
  }
  //fin uso apis

  //Variables que vamos a utilizar 
  latitud?: number;
  longitud?: number;
  error?: string;

  private async verificarPermisosDeUbicacion(): Promise<boolean> {
    //Consultar los permisos actuales
    const permisos = await Geolocation.checkPermissions();

    //Si está concedido devuelve true
    if (permisos.location === 'granted') return true;

    //Si no, pide permiso al usuario
    const solicitud: PermissionStatus = await Geolocation.requestPermissions();

    return solicitud.location === 'granted';
  }
    //Optenemos permisos:
    async obtenerPosicionActual() {
    try {
      //Primero chequeamos o solicitamos permisos
      const tienePermiso = await this.verificarPermisosDeUbicacion();

      //Si no tenemos permiso, mostramos error
      if (!tienePermiso) {
        this.error = 'Permiso de ubicacion denegado';
        this.latitud = undefined;
        this.longitud = undefined;
        return;
      }

      //Si tenemos permiso, pedimos la ubicacion

      const posicion = await Geolocation.getCurrentPosition();

      //Guardar la latitud y longitud para mostrarla en pantalla

      this.latitud = posicion.coords.latitude;
      this.longitud = posicion.coords.longitude;

      //Borrar mensaje de error

      this.error = undefined;


    } catch (err) {
      //Si ocurre algun error (permiso, hardware, etc etc), muestro mensaje
      this.error = "Error obteniendo ubicacion: " + (err as any).message
    }
  }

  get googleMapsUrl(): string | null {
    return this.latitud !== undefined && this.longitud !== undefined ? `https://www.google.com/maps?q=${this.latitud},${this.longitud}&hl=es&z=15&output=embed` : null;
  }
  
  

  // generando servicios para generar fotos yguardarlos en el dispositivo
  

}
