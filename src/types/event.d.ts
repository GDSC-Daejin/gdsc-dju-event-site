export type EventsType = 'event' | 'session';

export interface EventType {
  title: string;
  description: string;
  start: string;
  end: string;
  applyLink: string;
  type: EventsType;
}
export interface SessionEventType extends EventType {
  sessions?: SessionType[];
}
export interface SessionType {
  title: string;
  time: string;
  profileImage: string;
  name: string;
  position: string;
}
export type EventsDataType = SessionEventType[];
