import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  a:number;
  b:number;
  sum:number;
  sub:number;
  mul:number;
  
  displayaddResult(result:number) {
    this.sum=result;
}

  displaysubResult(result:number)
  {
    this.sub=result;
  }

  displaymulResult(result:number)
  {
    this.mul=result;
  }
   constructor() {
     
    }

  ngOnInit(): void {
  }

}
