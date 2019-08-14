import { Route } from '@angular/router';
import { EventsShowComponent } from 'src/app/events-show/events-show.component';
import { EventAddComponent } from 'src/app/event-add/event-add.component';
import { EventDetailComponent } from 'src/app/event-detail/event-detail.component';
import { LeavePageGuard } from './src/app/guards/leave-page.guard'
import { EventDetailGuard } from 'src/app/guards/event-detail.guard';
import { EventDetailResolve } from 'src/app/guards/event-detail-resolve.guard'

export const APP_ROUTES:Route[] = [
    { path: 'events', component: EventsShowComponent },
    { path: 'events/add', component: EventAddComponent, canDeactivate: [LeavePageGuard] },
    { path: 'events/:id', component: EventDetailComponent, canActivate: [EventDetailGuard], resolve: { component: EventDetailResolve } },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: '**', redirectTo: '/events', pathMatch: 'full' }
]