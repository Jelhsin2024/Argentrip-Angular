import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IProduct } from 'src/app/models/product.model';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, RouterLink]
})
export class DetailsPage implements OnInit {
  product?: IProduct

  constructor(private _apiService:ApiService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe({
      next: param => {
        this._apiService.getById(param['productId']).subscribe({
          next: data => {
            this.product = data
          }, error(error){
            console.log(error)
          }
        })
      }, error(error) {
        console.log(error)
      }
    })
  }

}
