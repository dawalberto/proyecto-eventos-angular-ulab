import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { EventAddComponent } from '../event-add/event-add.component';

@Injectable({
  providedIn: 'root'
})
export class LeavePageGuard implements CanDeactivate<EventAddComponent> {
  canDeactivate (
    component: EventAddComponent,
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return confirm('¿Quieres abandonar la página?. Los cambios no se guardarán');
  }
  
}
