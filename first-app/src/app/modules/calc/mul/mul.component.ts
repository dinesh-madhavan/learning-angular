import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mul',
  templateUrl: './mul.component.html',
  styleUrls: ['./mul.component.css']
})
export class MulComponent implements OnInit {
a:number;
b:number;
c:number;

  constructor() { }
  
mul(){
  this.c=this.a*this.b;
}
  ngOnInit(): void {
  }

}
