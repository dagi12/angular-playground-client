import {Component, OnInit} from '@angular/core';
import {DropzoneConfigInterface} from 'ngx-dropzone-wrapper';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styles: []
})
export class Test2Component implements OnInit {

  value = 'dupa';

  public config: DropzoneConfigInterface = {
    url: 'https://localhost/',
    clickable: true,
    maxFiles: 1,
    autoReset: null,
    errorReset: null,
    cancelReset: null
  };

  constructor() {
  }

  ngOnInit() {
  }

}
