import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { IProduct } from 'src/app/models/product.model';
import { IonicModule } from '@ionic/angular'
import { RouterLink } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoreModule } from '../../store.module';


@Component({
  selector: 'app-autos',
  templateUrl: './autos.page.html',
  styleUrls: ['./autos.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, RouterLink, SharedModule, StoreModule]
})
export class AutosPage implements OnInit {

  products:IProduct[]=[]
  constructor(private _apiService: ApiService) { }

  ngOnInit() {
    this._apiService.getAll().subscribe((data:IProduct[]) => {
      this.products = data
    })
  }
}
