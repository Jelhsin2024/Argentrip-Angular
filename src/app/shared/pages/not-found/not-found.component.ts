import { Component, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
  standalone:true,
  imports:[IonContent]
})
export class NotFoundComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
