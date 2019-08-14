import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EventsShowComponent } from './events-show/events-show.component';
import { EventFilterPipe } from './pipes/event-filter.pipe';
import { EventOrderByPipe } from './pipes/event-order-by.pipe';
import { EventItemComponent } from './event-item/event-item.component';
import { EventAddComponent } from './event-add/event-add.component';
import { APP_ROUTES } from '../../app.routes';
import { EventDetailComponent } from './event-detail/event-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsShowComponent,
    EventFilterPipe,
    EventOrderByPipe,
    EventItemComponent,
    EventAddComponent,
    EventDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
