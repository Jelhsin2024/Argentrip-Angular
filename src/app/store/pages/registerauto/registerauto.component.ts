import { Component, OnInit } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { IProduct } from 'src/app/models/product.model';
import { IonicModule } from '@ionic/angular'
import { RouterLink } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoreModule } from '../../store.module';
import { Geolocation, PermissionStatus } from '@capacitor/geolocation'
import { UrlSeguraPipe } from '../../../pipes/url-segura.pipe';

@Component({
  selector: 'app-registerauto',
  templateUrl: './registerauto.component.html',
  styleUrls: ['./registerauto.component.scss'],
  standalone:true,
  imports: [UrlSeguraPipe,CommonModule, FormsModule, IonicModule, RouterLink, SharedModule, StoreModule,ReactiveFormsModule,NgClass]
})
export class RegisterAutoComponent  implements OnInit {

 
// uso de apis
  // products:IProduct[]=[]
  // constructor(private _apiService: ApiService) { }

  // ngOnInit() {
  //   this._apiService.getAll().subscribe((data:IProduct[]) => {
  //     this.products = data
  //   })
  // }
  // fin uso apis

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
  
  

  // Formulario reactivo perra
    
  miFormulario: FormGroup;

  usuarioActivo = {
    nombre:'',
    apellido:'',
    edad:0,
    tipoDni:'',
    dni:''
  }

  constructor(private fb: FormBuilder){
    this.miFormulario = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido:['', [Validators.required, Validators.minLength(3)]],
      edad:['', [Validators.required, Validators.min(18)]],
      celular:['', [Validators.required, Validators.min(999999999)]],
      tipoDni:[],
      dni:['', [Validators.required, Validators.minLength(7)]],

    })
  }

  ngOnInit(): void {
    this.miFormulario.get('nombre')?.setValue(this.usuarioActivo.nombre);
    // this.miFormulario.get('nombre')?.disable();

    // this.miFormulario.get('nombre')?.clearValidators();
    // this.miFormulario.get('nombre')?.updateValueAndValidity();
    
    this.miFormulario.get('tipoDni')?.valueChanges.subscribe( valor => {
      this.usuarioActivo.tipoDni = valor
    })
  }
 ubicacionError?: string;
 
  showSuccess = false;
  enviar() {
    // 1) Verifico ubicación
    if (this.latitud === undefined || this.longitud === undefined) {
      this.ubicacionError = 'No se ha podido localizar la ubicación';
      return;
    }
    this.ubicacionError = undefined;

    // 2) Validación del formulario
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    // 3) Lógica de envío
    const payload = {
      ...this.miFormulario.value,
      lat: this.latitud,
      lng: this.longitud
    };
    console.log('Enviando datos:', payload);
    // Aquí llamarías a tu servicio API…
    // this._apiService.postRegistro(payload).subscribe( _ => { ... } );

    // 4) Si todo OK, muestro mensaje de éxito
    this.showSuccess = true;

    // (Opcional) limpio formulario o deshabilito inputs
    // this.miFormulario.reset();
    // this.latitud = this.longitud = undefined;
    
  }
  
    tieneErrores(control: string, validator: string){
      return this.miFormulario.get(control)?.hasError(validator) && this.miFormulario.get(control)?.touched;
    }



}

