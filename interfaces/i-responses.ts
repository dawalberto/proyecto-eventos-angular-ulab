import { IEvent } from './i-event';

export interface IResponses {
}

export interface EventsResponse {
    ok: boolean;
    events?: IEvent[];
    error?: string;
}

export interface PostEventResponse {
    ok: boolean;
    event: IEvent;
    error?: string;
    errors?: string[];
}

export interface DeleteEventResponse {
    ok: boolean;
    error?: string;
}
