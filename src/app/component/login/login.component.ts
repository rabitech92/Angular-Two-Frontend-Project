import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  toppings = new FormControl('');
  toppingList: string[] = ['Admin', 'Selles Man'];
  
  if(){
    return RouterOutlet;
  }
}


