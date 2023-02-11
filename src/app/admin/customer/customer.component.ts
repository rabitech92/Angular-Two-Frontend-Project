import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { addCustomer } from 'src/app/model/addCustomer.model';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  custom !:addCustomer[]
  addCustom!:FormGroup;
  formHasError =true;
  constructor(private customerService : CustomerService,private router : Router){}
  
  ngOnInit(): void {
    this.addCustom = new FormGroup({
      id :new FormControl(),
      name :new FormControl('', [Validators.required]),
      address :new FormControl('', [Validators.required]),
      phone :new FormControl('', [Validators.required]),
      password:new FormControl('', [Validators.required]),
    });
    this.customerService.getAllCus().subscribe((data : addCustomer[])=>{
      this.custom=data;
      console.log('All Data --',this.custom)
    });
   }
    
   getAll(){
      this.customerService.getAllCus().subscribe((data :addCustomer[])=>{
        this.custom=data;
      });
    }
  

    addCus(){
      this.customerService.createCus(this.addCustom.value).subscribe(data=>{
        this.ngOnInit();
      })
    }

    DeleteCus(AddCustomer:addCustomer): void{
      this.customerService.deleteCus(AddCustomer.id)
      .subscribe(data=>{
        this.ngOnInit();
      });
    }
    
  editCustomer(AddCustomer:addCustomer): void{
    localStorage.removeItem('id');
    localStorage.setItem('id',AddCustomer.id.toString());
  let id:any = localStorage.getItem('id');
  if(+id>0){
    this.customerService.getByIdCus(AddCustomer.id).subscribe(
      data=>{        
        this.addCustom.patchValue(data);
      }
    );
  }


}
updateCus(){
  console.log('Update--',this.addCustom.value)

  this.customerService.updateCus(this.addCustom.value).subscribe(data=>{
  });
}
//  editcustom(cust:addCustomer){
//   this.addCustom = new FormGroup({
//     name :new FormControl('', [Validators.required]),
//     address :new FormControl('', [Validators.required]),
//     phone :new FormControl('', [Validators.required]),
//     password:new FormControl('', [Validators.required]),
//   });
  
//  }

}
