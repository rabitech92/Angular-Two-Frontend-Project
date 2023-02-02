import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit{

  post='';
  parentPost: any[] = []; 
  text: string = '';
  constructor(){}
  ngOnInit() {
  }

  addPost(post: any){
    console.log(post);
    this.parentPost.push(post);

  }

  childEvent(data:any){
    this.text = data;
    alert( this.text)
  }
}
