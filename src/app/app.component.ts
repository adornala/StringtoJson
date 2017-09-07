import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  tooltip = 'above';
  obj: any;
  dataObj: any;
  valObj: any;
  createArray: any;
  createComArray: any;
  seperator: string;
  notEqualWarning: boolean;
  data1 = '';
  value1 = '';
  // custom: any;
  // initial: any;
  // final: any;
  // condition: string;
  // operation: string;
  // result: any;

  // generate() {
  //   this.result = '{ " ' + this.condition + ' " : [ { "' + this.operation + '" : [ ' + this.initial + ' , ' + this.final + ' ] }] }';
  // }

  dataIs(data, value,  sepe) {
    if ( sepe === 'New Line' ) {
      this.dataObj = data.split(/\n/g);
      this.valObj = value.split(/\n/g);
      if ( this.valObj.length !== this.dataObj.length ) {
        this.notEqualWarning = true;
      } else {
        for (let i = 0; i < this.dataObj.length; i++ ) {
          this.obj = (i !== 0 ? this.obj : '') + ( (i === 0 ? '[' : '') + '{"label":"' + this.dataObj[i] + '","value":"'
            + this.valObj[i] + '"}' + (i === (this.dataObj.length - 1) ? ']' : ',' ));
        }
      }
    } else {
      this.dataObj = data.split(sepe);
      this.valObj = value.split(sepe);
      if (this.valObj.length !== this.dataObj.length) {
        this.notEqualWarning = true;
      } else {
        for (let i = 0; i < this.dataObj.length; i++) {
          this.obj = (i !== 0 ? this.obj : '') + ( (i === 0 ? '[' : '') + '{"label":"' + this.dataObj[i] + '", "value":"'
            + this.valObj[i] + '"}' + (i === (this.dataObj.length - 1) ? ']' : ',' ));
        }
      }

      // this.createArray = this.dataObj.map(element => {
      //   return '{ "label":"' + element + '" ,  "value":"' + element.toString().replace(/ /g, '').toLowerCase() + '"}';
      //   // return '{ "label":"' + element + '" ,  "value":"' + element.toString().replace(/ /g, '').toLowerCase() + '"}';
      // });
    }

    this.createComArray = this.obj;
  }

  reset() {
    this.data1 = '';
    this.value1 = '';
    this.dataObj = '';
    this.valObj = '';
    this.obj = '';
    this.createArray = '';
    this.createComArray = '';
    this.notEqualWarning = false;
  }

}
