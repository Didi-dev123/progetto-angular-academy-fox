import { Component, OnInit } from '@angular/core';
import { Fox } from '../../models/fox.model';
import { FoxService } from '../../service/fox.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  foxImage : string = ""
  foxUrl : string = ""

  myFox : Fox ;


  constructor(private foxService : FoxService){
    this.myFox = new Fox();
  }
  
  
  ngOnInit(): void {
    console.log("la pagina è stata caricata !!!!")
    this.onClickGetSomeFox();
  }


  onClickFoxRetriver(){
    this.foxService.getFox().subscribe((data) => {

      this.foxImage = data.image
      this.foxUrl = data.link
    });
  }


  onClickGetSomeFox(){
    this.foxService.getSomeFox().subscribe((data) => {
      console.log(data)
      this.myFox.image = data.image
      this.myFox.link = data.link
    })
  }



}
