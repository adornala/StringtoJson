import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  tooltip = 'above';
  obj: any;
  createArray: any;
  createComArray: any;
  seperator: string;
  custom: any;

  dataIs(data,  sepe) {
    console.log('sep ' + sepe);
    if ( sepe === 'New Line' ) {
      console.log('new Line');
      this.obj = data.split(/\n/g);
    } else {
      this.obj = data.split(sepe);
    }

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

  nlineChecked(checked) {
    console.log('Checked..' + checked);
  }

}
