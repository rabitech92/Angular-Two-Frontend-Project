import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  adminbutton: boolean = true;
  warehousebutton: boolean = false;
  distributorbutton: boolean = false;


  loginObj :any;
constructor( private router : Router){
  this.loginObj ={
    userName:'',
    userType:'',
    password:''
  };
}

login(){
  if(this.loginObj.userName=='Admin' && this.loginObj.userType=='Admin' && this.loginObj.password=='123'){
  this.router.navigateByUrl('admin');
    
}else if(this.loginObj.userName=='Seller' && this.loginObj.userType=='Seller' && this.loginObj.password=='456'){
      this.router.navigateByUrl('home');

    }else if(this.loginObj.userName=='Manager' && this.loginObj.userType=='Manager' && this.loginObj.password=='789'){
      this.router.navigateByUrl('customer');

    }else{ alert('Wrong Password')}
  
}





admin(){
  this.router.navigateByUrl('home');

  // toppings = new FormControl('');
  // toppingList: string[] = ['Admin', 'Selles Man'];
  
 
}


}