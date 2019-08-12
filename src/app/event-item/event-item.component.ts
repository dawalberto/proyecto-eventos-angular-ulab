import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IEvent } from 'interfaces/i-event';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.scss']
})
export class EventItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() event:IEvent
  @Output() eventDeleteEvent = new EventEmitter<void>()

  deleteEvent() {
    this.eventDeleteEvent.emit()
  }

}
