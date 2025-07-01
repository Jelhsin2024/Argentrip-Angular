import { Component, OnInit } from '@angular/core';
import { IonContent } from "@ionic/angular/standalone";
import { LocalNotifications, PermissionStatus } from '@capacitor/local-notifications';
import { Haptics, ImpactStyle } from '@capacitor/haptics';


@Component({
  selector: 'app-paquetes',
  templateUrl: './paquetes.component.html',
  styleUrls: ['./paquetes.component.scss'],
  standalone: false,
})
export class PaquetesComponent  implements OnInit {

  constructor() { }


  async ngOnInit(): Promise<void> {
    // 1) Solicitar permiso al usuario
    const perm: PermissionStatus = await LocalNotifications.requestPermissions();
    if (perm.display !== 'granted'){
      console.warn('Permiso de norificaciones denegado');
      return;
    }
    // 2) Programar notificacion de bienvenida 1s despues de iniciar el Home
    await LocalNotifications.schedule({
      notifications: [{
        id: 1,
        title: 'Bienvenido a Argentrip!',
        body: 'Descubri tus proximas aventuras.',
        schedule: {at: new Date(Date.now() + 1000)},
        smallIcon: 'ic_stat_icon_app'  // sólo Android, crear este recurso en res/drawable
      }]
    });

  }
async sendTestNotification(): Promise<void> {
  await LocalNotifications.schedule({
    notifications: [{
      id:2,
      title: 'Notificacion de prueba',
      body: 'Funciona Correctamente!'
    }]
  });
}
async vibrate(): Promise<void>{
  await Haptics.impact({ style: ImpactStyle.Heavy});
}
}
