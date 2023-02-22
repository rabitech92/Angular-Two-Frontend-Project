import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { addSeller } from 'src/app/model/addSeller.model';



import { SellerService } from 'src/app/service/seller.service';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {

  
   
      selle!:addSeller[]
      formHasError =true;
      addForm!:FormGroup;

      constructor(private sellerService:SellerService, private router : Router) { }
  
  ngOnInit(): void {
    this.addForm = new FormGroup({
      id : new FormControl(),
      userType: new FormControl('', [Validators.required]),
      userName: new FormControl('', Validators.required),
      fatherName: new FormControl('', Validators.required),
      motherName: new FormControl('', Validators.required),
      dOfBirth: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      salary: new FormControl('', Validators.required),
      branch: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
    });

    this.sellerService.getAllSell().subscribe((data:addSeller[])=>{
      this.selle= data;
      
    });


  }

  getallSeller(){
    this.sellerService.getAllSell().subscribe((data:addSeller[])=>{
      this.selle= data;
    });
  }

  addSeller(){

    if(this.addForm.value.id===null){    this.sellerService.createSell(this.addForm.value).subscribe(data=>{
      this.ngOnInit();
     
     });} else{
      this.sellerService.updateSell(this.addForm.value).subscribe(data =>{  
     
        this.ngOnInit();

      } );
     }
  }



  deleteSeller(addseller: addSeller): void {  
    this.sellerService.deleteSell(addseller.id)  
      .subscribe(data =>{  
        this.ngOnInit();
        
      })  
  }

  editSeller(addseller: addSeller): void {

    localStorage.removeItem('sellId');  
    // let proid = 0;
    localStorage.setItem('sellId', addseller.id.toString());
    let proid: any = localStorage.getItem('sellId'); 
    if (+proid > 0) {  
      this.sellerService.getByIdSell(+proid).subscribe(
        data => {this.addForm.patchValue(data);}
        )  
      
    }  


  } 

  updateSeller(){


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

    this.sellerService.updateSell(this.addForm.value).subscribe(data =>{  
     
       
    } );

  }


  
  editsell(posts: addSeller){


    this.addForm = new FormGroup({
      id: new FormControl(posts.id),
      userType: new FormControl(posts.userType),
      userName: new FormControl(posts.userName),
      fatherName: new FormControl(posts.fatherName),
      motherName: new FormControl(posts.motherName),
      dOfBirth: new FormControl(posts.dOfBirth),
      address: new FormControl(posts.address),
      salary: new FormControl(posts.salary),
      branch: new FormControl(posts.branch),
      phone: new FormControl(posts.phone),
    });


    // this.sellerService.update(this.addForm.value).subscribe(data =>{  
     
       
    // } )
   

  };




}
