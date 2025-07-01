import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { IProduct } from 'src/app/models/product.model';
import { IonicModule } from '@ionic/angular';

import { SharedModule } from 'src/app/shared/shared.module';
import { RouterLink } from '@angular/router';
import { StoreModule } from 'src/app/store/store.module';
import { Geolocation, PermissionStatus } from '@capacitor/geolocation';

import { UrlSeguraPipe } from '../../pipes/url-segura.pipe';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [
    UrlSeguraPipe,
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterLink,
    StoreModule
  ]
})
export class RegisterPage implements OnInit {
  // Formulario
  email: string = '';
  password: string = '';
  fotoDni: string | null = null;

  // API
  products: IProduct[] = [];

  // Geolocalización
  latitud?: number;
  longitud?: number;
  error?: string;

  constructor(private _apiService: ApiService) {}

  ngOnInit() {
    // Obtener productos (API simulada)
    this._apiService.getAll().subscribe((data: IProduct[]) => {
      this.products = data;
    });
  }

  // --- GEOLOCALIZACIÓN ---
  private async verificarPermisosDeUbicacion(): Promise<boolean> {
    const permisos = await Geolocation.checkPermissions();
    if (permisos.location === 'granted') return true;

    const solicitud: PermissionStatus = await Geolocation.requestPermissions();
    return solicitud.location === 'granted';
  }

  async obtenerPosicionActual() {
    try {
      const tienePermiso = await this.verificarPermisosDeUbicacion();
      if (!tienePermiso) {
        this.error = 'Permiso de ubicación denegado';
        return;
      }

      const posicion = await Geolocation.getCurrentPosition();
      this.latitud = posicion.coords.latitude;
      this.longitud = posicion.coords.longitude;
      this.error = undefined;
    } catch (err) {
      this.error = 'Error obteniendo ubicación: ' + (err as any).message;
    }
  }

  get googleMapsUrl(): string | null {
    return this.latitud !== undefined && this.longitud !== undefined
      ? `https://www.google.com/maps?q=${this.latitud},${this.longitud}&hl=es&z=15&output=embed`
      : null;
  }

  // --- FOTO DEL DNI ---
  async sacarFoto() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera,
      });

      this.fotoDni = image.dataUrl!;
    } catch (error) {
      console.error('Error al tomar la foto:', error);
    }
  }

  // --- FORMULARIO SIMULADO ---
  enviarRegistro() {
    console.log('Email:', this.email);
    console.log('Contraseña:', this.password);
    console.log('Foto del DNI:', this.fotoDni);
    alert('Registro simulado enviado.');
  }
}

