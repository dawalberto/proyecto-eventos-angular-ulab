import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IEvent } from 'interfaces/i-event';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.scss']
})
export class EventItemComponent implements OnInit {

  constructor(private eventsService:EventsService) { }

  ngOnInit() {
  }

  @Input() event:IEvent
  @Output() eventDeleteEvent = new EventEmitter<void>()

  deleteEvent() {
    this.eventDeleteEvent.emit()
    this.eventsService.deleteEvent(this.event.id)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      )
  }

}
