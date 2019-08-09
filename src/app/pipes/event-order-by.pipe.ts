import { Pipe, PipeTransform } from '@angular/core';
import { IEvent } from '../../../interfaces/i-event';

@Pipe({
  name: 'eventOrderBy'
})

export class EventOrderByPipe implements PipeTransform {

  transform(events:IEvent[], orderBy:string, ascOrDesc:string) {

    if (orderBy === 'date') {
      if (ascOrDesc === 'desc') {
        return events.sort((a, b) => {
          return new Date(b.date).getTime() - new Date(a.date).getTime()
        })
      } else {
        return events.sort((a, b) => {
          return new Date(a.date).getTime() - new Date(b.date).getTime()
        })
      }
    } else if (orderBy === 'price') {
      if (ascOrDesc === 'desc') {
        return events.sort((a, b) => {
          return b.price - a.price
        })
      } else {
        return events.sort((a, b) => {
          return a.price - b.price
        })
      }
    }

  }

}
