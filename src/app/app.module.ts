import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EventsShowComponent } from './events-show/events-show.component';
import { EventFilterPipe } from './pipes/event-filter.pipe';
import { EventOrderByPipe } from './pipes/event-order-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EventsShowComponent,
    EventFilterPipe,
    EventOrderByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
