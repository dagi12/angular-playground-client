import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {AlertComponent} from '../alert/alert.component';

@Component({
  selector: 'app-dom-binding',
  templateUrl: './dom-binding.component.html',
  styles: []
})
export class DomBindingComponent implements OnInit, AfterViewInit {

  // @ViewChildren(AlertComponent) alerts: QueryList<AlertComponent>;
  @ViewChild(AlertComponent) alertComponent: AlertComponent;

  constructor() {
  }

  ngAfterViewInit(): void {
    console.log(this.alertComponent);
  }

  ngOnInit() {
  }


}
