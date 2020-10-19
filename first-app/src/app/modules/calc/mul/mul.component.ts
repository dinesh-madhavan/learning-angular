import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-mul',
  templateUrl: './mul.component.html',
  styleUrls: ['./mul.component.css']
})
export class MulComponent implements OnInit {
@Input("number1") num1:number;
@Input() num2:number;
c:number;
@Output() mulResult=new EventEmitter<number>();
  constructor() { }
  
mul(){
  this.c=this.num1*this.num2;
  this.mulResult.emit(this.c);
}
  ngOnInit(): void {
  }

}
