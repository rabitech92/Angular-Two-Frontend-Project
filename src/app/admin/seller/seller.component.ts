import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Seller } from 'src/app/model/Seller.model';

import { SellerService } from 'src/app/service/seller.service';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {

  UserType =['Managrer','Admin','Seller','Stuff'];
   selle!:Seller[];
   formHasError =true;
      

      constructor(private sellerService:SellerService, private router : Router) { }
  
  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.router.navigateByUrl('/seller')
  }
  }

}
