import { Component } from '@angular/core';
import { MdButtonModule } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  data: any;
  obj: any;
  createArray: any;
  createComArray: any;

  dataIs(data) {
    console.log(data);
    this.obj = data.split(/\n/g);

    this.createArray = this.obj.map(element => {
      return '{ "label":"' + element + '" ,  "value":"' + element.toString().replace(/ /g, '').toLowerCase() + '"}';
    });
    this.createComArray = '[' + this.createArray + ']';
  }

  reset() {
    this.obj = '';
    this.createArray = '';
    this.createComArray = '';
  }
}
