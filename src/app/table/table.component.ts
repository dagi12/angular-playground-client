import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() columns: any[];
  items: any[] = [{dupa: 'dupa', name: 'dupa'}];
  rowData = {dupa: 'dupa2'};

  constructor() {
  }

  ngOnInit() {
  }

}
