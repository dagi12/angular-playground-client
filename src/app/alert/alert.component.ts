import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-alert',
  template: `<h1 (click)="alert()">{{type}}</h1>`,
})
export class AlertComponent {
  @Input() type = 'success';

  alert() {
    console.log('alert');
  }
}
