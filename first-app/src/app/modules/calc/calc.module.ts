import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { CalcComponent } from './calc/calc.component';
import { FormsModule } from '@angular/forms';
import { SubComponent } from './sub/sub.component';
import { MulComponent } from './mul/mul.component';



@NgModule({
  declarations: [AddComponent, CalcComponent, SubComponent, MulComponent],
  imports: [
    CommonModule,
    FormsModule
  ],exports:[
        CalcComponent
  ]
})
export class CalcModule { }
