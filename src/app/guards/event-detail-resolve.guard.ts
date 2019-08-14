import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { EventsService } from '../services/events.service';
import { IEvent } from 'interfaces/i-event';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class EventDetailResolve implements Resolve<IEvent> {
  constructor(private eventsService:EventsService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IEvent | Observable<IEvent> | Promise<IEvent> {

    return this.eventsService.getEventById(route.params['id']).pipe(
      catchError(err => {
        this.router.navigate(['/products']);
        return new Observable<IEvent>(null);
      })
    )

  } //PAGINA 38
}
