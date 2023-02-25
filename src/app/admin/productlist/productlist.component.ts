import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  foodQuantity:number=0;


  ngOnInit(): void {
   
  }
  
  handleQuantity(val:string){
    if(this.foodQuantity<20 && val==='plus'){
      this.foodQuantity+=1;
    }else if(this.foodQuantity>1 && val==='min'){
      this.foodQuantity-=1;
    }
  }
}