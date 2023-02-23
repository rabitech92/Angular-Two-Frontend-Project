import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
