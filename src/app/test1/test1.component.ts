import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styles: []
})
export class Test1Component implements OnInit {

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
