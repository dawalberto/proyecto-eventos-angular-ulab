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
    },
    {
      title: 'Fiesta playera',
      image: 'assets/img3.jpg',
      date: new Date(2019, 7, 8).toDateString(),
      description: 'Fiesta playera en Alicante',
      price: 3
    },
    {
      title: 'Noche vieja en Londres',
      image: 'assets/img4.jpg',
      date: new Date(2019, 11, 31).toDateString(),
      description: 'Noche vieja en Londres',
      price: 70
    },
    {
      title: 'Encuentro malabares Petrer',
      image: 'assets/img5.jpg',
      date: new Date(2020, 3, 6).toDateString(),
      description: 'Encuentro ArtenBitrir',
      price: 0
    }
  ]

  filterSearch: string = ''
  
  orderBy:string = 'date'

  orderByDate() {
    this.orderBy = 'date'
  }

  orderByPrice() {
    this.orderBy = 'price'
  }

}
