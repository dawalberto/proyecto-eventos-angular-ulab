import { Component, OnInit } from '@angular/core';
import { IEvent } from 'interfaces/i-event';

@Component({
  selector: 'app-events-show',
  templateUrl: './events-show.component.html',
  styleUrls: ['./events-show.component.scss']
})
export class EventsShowComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  events: IEvent[] = [
    {
      title: 'Fiesta del comic',
      image: 'assets/img1.jpg',
      date: new Date(2019, 10, 9).toDateString(),
      description: 'Fiesta para todos los fans de los comics',
      price: 9
    },
    {
      title: 'Encuentro de malabares',
      image: 'assets/img2.jpg',
      date: new Date(2019, 11, 15).toDateString(),
      description: 'Encuentro de malabaristas y artes cirquenses',
      price: 7
    }
  ]
  filterSearch: string = ''


}
