import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
  standalone:true,
  imports:[IonContent,RouterLink]
})
export class NotFoundComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
