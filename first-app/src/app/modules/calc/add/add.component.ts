import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  a:number;
  b:number;
  sum:number;

  constructor() {

   }

   add(){
     this.sum=this.a+this.b;
   }

  ngOnInit(): void {
  }

}
