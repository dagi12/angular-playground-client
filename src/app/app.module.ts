import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DataTableModule, SharedModule} from 'primeng/primeng';
import {TableComponent} from './table/table.component';
import {NewJsonPipe} from './new-json.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    NewJsonPipe
  ],
  imports: [
    BrowserModule,
    DataTableModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
