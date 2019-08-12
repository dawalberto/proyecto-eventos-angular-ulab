import { Component, OnInit } from '@angular/core';
import { IEvent } from 'interfaces/i-event';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-events-show',
  templateUrl: './events-show.component.html',
  styleUrls: ['./events-show.component.scss']
})
export class EventsShowComponent implements OnInit {

  constructor(private eventsService:EventsService) { }

  ngOnInit() {
    this.events = this.eventsService.getEvents()
  }

  events: IEvent[] = []

  filterSearch: string = ''

  orderBy:string = 'date'

  ascOrDesc:string = 'asc'

  newEvent: IEvent = {
    title: '',
    image: '',
    date: '',
    description: '',
    price: 0
  }

  showNewEvent:boolean = false

  addEvent(event) {
    this.events.push(event)
  }

  toggleShowNewEvent() {
    this.showNewEvent = !this.showNewEvent
  }

  orderByDate(ascOrDesc) {
    this.orderBy = 'date'
    this.ascOrDesc = ascOrDesc
  }

  orderByPrice(ascOrDesc) {
    this.orderBy = 'price'
    this.ascOrDesc = ascOrDesc
  }

  deleteEvent(index) {
    this.events = this.events.filter((event, i) => i != index)
  }

}
