import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  @Input("number1") num1:number;
  @Input() num2:number;
  sum:number;
  @Output() addResult=new EventEmitter<number>();

  constructor() {

   }

   add(){
     this.sum=this.num1+this.num2;
     this.addResult.emit(this.sum);
   }

  ngOnInit(): void {
  }

}
