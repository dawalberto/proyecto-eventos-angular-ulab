import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IEvent } from 'interfaces/i-event';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.scss']
})
export class EventAddComponent implements OnInit {

  constructor(private eventsService:EventsService) { }

  ngOnInit() {
  }

  @Output() eventAddEvent = new EventEmitter<IEvent>();

  newEvent: IEvent = {
    title: '',
    image: '',
    date: '',
    description: '',
    price: 0
  }

  addEvent() {
    if (this.newEvent.title !== '' && this.newEvent.image !== '' && this.newEvent.date !== '' && this.newEvent.description !== '') {
      this.eventAddEvent.emit(this.newEvent)
      this.eventsService.postEvents(this.newEvent)
        .subscribe(
          res => console.log('res', res),
          err => console.log('err', err)
        )
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

}
