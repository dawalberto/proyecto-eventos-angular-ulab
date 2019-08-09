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

  ascOrDesc:string = 'asc'

  newEvent: IEvent = {
    title: '',
    image: '',
    date: '',
    description: '',
    price: 0
  }

  showNewEvent:boolean = false

  addEvent() {
    if (this.newEvent.title !== '' && this.newEvent.image !== '' && this.newEvent.date !== '' && this.newEvent.description !== '') {
      this.events.push(this.newEvent)
      this.newEvent = {
        title: '',
        image: '',
        date: '',
        description: '',
        price: 0
      }
    } else {
      alert('Rellene todos los campos')
    }
  }

  changeImage(fileInput: HTMLInputElement) {
    if (!fileInput.files || fileInput.files.length === 0) { return }
    const reader:FileReader = new FileReader()
    reader.readAsDataURL(fileInput.files[0])
    reader.addEventListener('loadend', e => {
      this.newEvent.image = reader.result.toString()
    })
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

}
