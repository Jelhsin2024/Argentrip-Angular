import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { IProduct } from 'src/app/models/product.model';
import { IonicModule } from '@ionic/angular'

import { SharedModule } from 'src/app/shared/shared.module';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, SharedModule, RouterLink,SharedModule]
})
export class RegisterPage implements OnInit {

  products:IProduct[]=[]
  constructor(private _apiService: ApiService) { }

  ngOnInit() {
    this._apiService.getAll().subscribe((data:IProduct[]) => {
      this.products = data
    })
  }
}
