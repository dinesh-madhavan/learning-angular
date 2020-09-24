import { CalcModule } from './modules/calc/calc.module';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    HeaderComponent,
    MainComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CalcModule

  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
