import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DataTableModule, SharedModule} from 'primeng/primeng';
import {TableComponent} from './table/table.component';
import {NewJsonPipe} from './new-json.pipe';
import {DomBindingComponent} from './dom-binding/dom-binding.component';
import {AlertComponent} from './alert/alert.component';
import {Test1Component} from './test1/test1.component';
import {Test2Component} from './test2/test2.component';
import {TestInputComponent} from './test2/test-input/test-input.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    NewJsonPipe,
    DomBindingComponent,
    AlertComponent,
    Test1Component,
    Test2Component,
    TestInputComponent
  ],
  imports: [
    BrowserModule,
    DataTableModule,
    SharedModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
