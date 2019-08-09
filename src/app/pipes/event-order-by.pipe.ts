import { Pipe, PipeTransform } from '@angular/core';
import { IEvent } from '../../../interfaces/i-event';

@Pipe({
  name: 'eventOrderBy'
})

export class EventOrderByPipe implements PipeTransform {

  transform(events:IEvent[], orderBy:string) {

    if (orderBy === 'date') {
      return events.sort((a, b) => {
        return new Date(a.date).getTime() - new Date(b.date).getTime()
      })
    } else if (orderBy === 'price') {
      return events.sort((a, b) => {
        return a.price - b.price
      })
    }

  }

}
