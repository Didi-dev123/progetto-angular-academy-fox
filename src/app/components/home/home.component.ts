import { Component } from '@angular/core';
import { FoxService } from '../../service/fox.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  foxImage : string = ""
  foxUrl : string = ""

  constructor(private foxService : FoxService){}


  onClickFoxRetriver(){
    this.foxService.getFox().subscribe((data) => {

      this.foxImage = data.image
      this.foxUrl = data.link
    });
  }

}
