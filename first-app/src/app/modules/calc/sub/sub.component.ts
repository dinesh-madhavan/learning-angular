import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css']
})
export class SubComponent implements OnInit {
  @Input("number1") num1:number;
  @Input() num2:number;
  c:number;
  @Output() subResult=new EventEmitter<number>();
 
  constructor() { 

  }

  sub(){
    this.c=this.num1-this.num2;
    this.subResult.emit(this.c);
  }
  ngOnInit(): void {
  }

}
