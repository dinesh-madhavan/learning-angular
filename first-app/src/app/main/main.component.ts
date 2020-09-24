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
    toggle:boolean;

    constructor(){
        this.name="Dinesh";
        this.age=22;
        this.image="../../assets/pokeball.png";
        this.w=150;
        this.h=150;
        this.toggle=false;
    
        }

    changeImage(){
                 this.image=!this.toggle?"../../assets/pikachu.webp":"../../assets/pokeball.png";
            this.toggle=!this.toggle;  
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