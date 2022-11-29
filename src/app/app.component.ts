import { Component } from '@angular/core';
import countryArray from '../utils/words';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'country-List';
  limit = 10;
  countryName = ''

  slideChanger(min:number, max:number, newLimit:number){
    this.limit = Math.floor(Math.random() * (max-min) + min);
    newLimit = this.limit;
    console.log('newLimit', newLimit);
  }

  generateCountry(){
  this.countryName = countryArray.slice(0, this.limit).join(" , ");
  }

}
