import { Component } from '@angular/core';

@Component({
  selector: 'app-nopagefound',
  templateUrl: './nopagefound.component.html',
  styleUrls: ['./nopagefound.component.css']
})
export class NopagefoundComponent {

//ano: number = Date().now();

anoh = new Date().getFullYear();


 

 constructor() {
  console.log(this.anoh);
  }

 
  
}
