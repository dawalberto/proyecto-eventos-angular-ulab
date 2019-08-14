import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EventsService } from '../services/events.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IEvent } from 'interfaces/i-event';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})

export class EventDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private eventsService: EventsService, private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.eventsService.getEventById(id)
    .subscribe(
      res => {console.log(res); this.event = res},
      err => console.log(err)
    )
  }

  event: IEvent;

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
