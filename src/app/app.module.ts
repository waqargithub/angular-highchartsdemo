import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//today: import * as Highcharts from 'highcharts';

import { AppComponent } from './app.component';
import { OutputGraphComponent } from './output-graph/output-graph.component';
import { MyFooterComponent } from './my-footer/my-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    OutputGraphComponent,
    MyFooterComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
