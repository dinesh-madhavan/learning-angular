import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css']
})
export class SubComponent implements OnInit {
  a:number;
  b:number;
  c:number;
  constructor() { }

  sub(){
    this.c=this.a-this.b;
  }
  ngOnInit(): void {
  }

}
