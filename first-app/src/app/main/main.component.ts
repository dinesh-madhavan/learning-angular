import { Component } from "@angular/core";
import { mainModule } from 'process';

@Component({
    selector:"main-app",
    templateUrl:"./main.component.html",
    styleUrls:["./main.component.css"]
})

export class MainComponent{

    name:string;
    age:number;
    image:string;
    w:number;
    h:number;
    count:number;

    constructor(){
        this.name="Dinesh";
        this.age=22;
        this.image="../../assets/heart.png";
        this.w=150;
        this.h=150;
        this.count=0;
    
        }

    changeImage(){
        if(this.count==0)
    {
        this.count=1;
        this.image="../../assets/pikachu.webp";
    }
        else
        {
          this.image="../../assets/heart.png";
          this.count=0;
        }
               
}
 plus()
 {
     this.w=this.w+10;
     this.h=this.h+10;
 }

minus()
{
    this.w=this.w-10;
    this.h=this.h-10;
}
}