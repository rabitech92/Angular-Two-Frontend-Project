import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { addProduct } from 'src/app/model/addProduct.model';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

 product !:addProduct[]
 formProduct!:FormGroup;
 formHasError =true;
 constructor(private productService: ProductService, private router : Router) { }
  
 

  ngOnInit(): void {
   this.formProduct = new FormGroup({
    id : new FormControl('', [Validators.required]),
    pId : new FormControl('', [Validators.required]),
    pName :  new FormControl('', [Validators.required]),
    pType : new FormControl('', [Validators.required]),
    pBrand : new FormControl('', [Validators.required]),
    pQty : new FormControl('', [Validators.required]),
    pInvPrice :  new FormControl('', [Validators.required]),
    pSelPrice : new FormControl('', [Validators.required]),
    suppliarName : new FormControl('', [Validators.required]),
    suppliarAddress : new FormControl('', [Validators.required]),

   });
   this.productService.getAllProd().subscribe((data:addProduct[])=>{
    this.product= data;
    
  });

  }
  getallproduct(){
    this.productService.getAllProd().subscribe((data:addProduct[])=>{
      this.product= data;
    });
  }
  addProduct(){
    this.productService.createProd(this.formProduct.value).subscribe(data=>{
      this.ngOnInit();     
     });
  }

  deleteProduct(addproduct: addProduct): void {  
    this.productService.deleteProd(addproduct.id)  
      .subscribe(data =>{  
        this.ngOnInit();
        
      })  
  }
  editProduct(addproduct: addProduct): void {
    localStorage.removeItem('proid');  
    // let proid = 0;
    localStorage.setItem('proid', addproduct.id.toString());
    let proid: any = localStorage.getItem('proid'); 
    if (+proid > 0) {  
      this.productService.getByIdProd(+proid).subscribe(
        data => {this.formProduct.patchValue(data);}
        )  
      
    }  


  }

  updateProduct(){


    // this.addForm = new FormGroup({
    //   id: new FormControl(posts.id),
    //   userType: new FormControl(posts.userType),
    //   userName: new FormControl(posts.userName),
    //   fatherName: new FormControl(posts.fatherName),
    //   motherName: new FormControl(posts.motherName),
    //   dOfBirth: new FormControl(posts.dOfBirth),
    //   address: new FormControl(posts.address),
    //   salary: new FormControl(posts.salary),
    //   branch: new FormControl(posts.branch),
    //   phone: new FormControl(posts.phone),
    // });

    this.productService.updateProd(this.formProduct.value).subscribe(data =>{  
     
       
    } );

  }

  editProducts(product :addProduct){
    this.formProduct = new FormGroup({
      id : new FormControl('', [Validators.required]),
      pId : new FormControl('', [Validators.required]),
      pName :  new FormControl('', [Validators.required]),
      pType : new FormControl('', [Validators.required]),
      pBrand : new FormControl('', [Validators.required]),
      pQty : new FormControl('', [Validators.required]),
      pInvPrice :  new FormControl('', [Validators.required]),
      pSellPrice : new FormControl('', [Validators.required]),
      suppName : new FormControl('', [Validators.required]),
      suppAddress : new FormControl('', [Validators.required]),
  
     });
    
    
  }
  

  
}
