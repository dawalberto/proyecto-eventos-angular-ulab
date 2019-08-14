import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { IEvent } from 'interfaces/i-event';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { IResponses, EventsResponse, PostEventResponse, DeleteEventResponse } from 'interfaces/i-responses';
import { SERVICES } from '../../../app.constants';


@Injectable({
  providedIn: 'root'
})

export class EventsService {

  constructor(private http:HttpClient) { }

  getEvents():Observable<IEvent[]> {

    return this.http.get<{ events:IEvent[] }>(SERVICES + '/events').pipe(
      map(res => res.events),
      catchError((err:HttpErrorResponse) => throwError(`Error. Estado: ${ err.status }. Mensaje: ${ err.message }`))
    )

  }

  getEventById(id:number):Observable<IEvent> {

    return this.http.get<{ event:IEvent }>(SERVICES + '/events/' + id).pipe(
      map(res => res.event),
      catchError((err:HttpErrorResponse) => throwError(`Error. Estado: ${ err.status }. Mensaje: ${ err.message }`))
    )

  }

  postEvents(event:IEvent):Observable<IEvent> {

    return this.http.post<PostEventResponse>(SERVICES + '/events', event).pipe(
      map(res => { if (!res.ok) { throw res.error } return res.event }),
      catchError((err:HttpErrorResponse) => throwError(`Error. Estado: ${ err.status }. Mensaje: ${ err.message }`))
      )

  }

  deleteEvent(id:number):Observable<boolean> {

    return this.http.delete<DeleteEventResponse>(SERVICES + '/events/' + id).pipe(
      map(res => { if (!res.ok) { throw res.error } return true }),
      catchError((err:HttpErrorResponse) => throwError(`Error. Estado: ${ err.status }. Mensaje: ${ err.message }`))
    )

  }

  // getEvents():IEvent[] {

  //   return [
  //     {
  //       title: 'Fiesta del comic',
  //       image: 'assets/img1.jpg',
  //       date: new Date(2019, 10, 9).toDateString(),
  //       description: 'Fiesta para todos los fans de los comics',
  //       price: 9
  //     },
  //     {
  //       title: 'Encuentro de malabares',
  //       image: 'assets/img2.jpg',
  //       date: new Date(2019, 11, 15).toDateString(),
  //       description: 'Encuentro de malabaristas y artes cirquenses',
  //       price: 7
  //     },
  //     {
  //       title: 'Fiesta playera',
  //       image: 'assets/img3.jpg',
  //       date: new Date(2019, 7, 8).toDateString(),
  //       description: 'Fiesta playera en Alicante',
  //       price: 3
  //     },
  //     {
  //       title: 'Noche vieja en Londres',
  //       image: 'assets/img4.jpg',
  //       date: new Date(2019, 11, 31).toDateString(),
  //       description: 'Noche vieja en Londres',
  //       price: 70
  //     },
  //     {
  //       title: 'Encuentro malabares Petrer',
  //       image: 'assets/img5.jpg',
  //       date: new Date(2020, 3, 6).toDateString(),
  //       description: 'Encuentro ArtenBitrir',
  //       price: 0
  //     }
  //   ]

  // }

}
