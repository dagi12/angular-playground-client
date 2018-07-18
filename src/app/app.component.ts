import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('dupaTemplate') dupaTemplate: ElementRef;
  columns: any[];


  constructor() {
  }

  ngOnInit(): void {
    this.columns = [{
      field: 'dupa',
      header: 'dupa',
      template: this.dupaTemplate
    }];
  }

}
