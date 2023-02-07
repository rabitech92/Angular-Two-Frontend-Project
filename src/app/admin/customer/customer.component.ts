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
  addForm !:FormGroup;
  formHasError =true;
  constructor(private customerService : CustomerService,private router : Router){}
  
  ngOnInit(): void {
    this.addForm = new FormGroup({
      name :new FormControl('', [Validators.required]),
      address :new FormControl('', [Validators.required]),
      phone :new FormControl('', [Validators.required]),
      password:new FormControl('', [Validators.required]),
    });
    this.customerService.getAll().subscribe((data : addCustomer[])=>{
      this.custom=data;
      console.log('All Data --',this.custom)
    });
   }
    
   getAll(){
      this.customerService.getAll().subscribe((data :addCustomer[])=>{
        this.custom=data;
      });
    }
  

    addCus(){
      this.customerService.create(this.addForm.value).subscribe(data=>{
        this.ngOnInit();
      })
    }

    DeleteCus(AddCustomer:addCustomer): void{
      this.customerService.delete(AddCustomer.id)
      .subscribe(data=>{
        this.ngOnInit();
      });
    }
  editCus(AddCustomer:addCustomer): void{
    localStorage.removeItem('id');
    localStorage.setItem('id',AddCustomer.id.toString());
  let id:any = localStorage.getItem('id');
  if(+id>0){
    this.customerService.getById(+id).subscribe(
      data=>{
        this.addForm.patchValue(data);
      }
    );
  }


}
updateCus(){
  this.customerService.update(this.addForm.value).subscribe(data=>{

  });
}
 edit(cust:addCustomer){
  this.addForm = new FormGroup({
    name :new FormControl('', [Validators.required]),
    address :new FormControl('', [Validators.required]),
    phone :new FormControl('', [Validators.required]),
    password:new FormControl('', [Validators.required]),
  });
  
 }

}
