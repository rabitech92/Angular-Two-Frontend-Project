import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { addProduct } from 'src/app/model/addProduct.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

 product !:addProduct[]
 formProduct!:FormGroup
 

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  

  
}
