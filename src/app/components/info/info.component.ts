import { Component } from '@angular/core';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent {


  numero1 : number = 10
  numero2 : number = 30

  ris : number = 0 ;


  message = "ciao a tutti"
  cont = 0;
  flag : boolean = true


  changeMe(){

    if(this.cont % 2 == 0 )
      this.message = "che bella giornata"
    else
      this.message = "ciao a tutti"

    this.cont++
  }

  changeMe2(){
    if(this.flag)
      this.message = "che bella giornata"
    else
      this.message = "ciao a tutti"

    this.flag = !this.flag
  }



}
