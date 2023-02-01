import { Component, OnInit } from '@angular/core';
import { Seller } from 'src/app/model/seller.model';
import { SellerService } from 'src/app/service/seller.service';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit{

  seller :Seller[]=[];
    
  
  ngOnInit(): void {
      this.sellerService.getAll(data:Seller[])
    }
  
    
    constructor(public sellerService :SellerService){}

  }



