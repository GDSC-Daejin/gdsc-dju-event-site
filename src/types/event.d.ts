export type EventsType = 'event' | 'session';

export interface EventType {
  title: string;
  description: string;
  date: string;
  time: string;
  applyLink: string;
  googleCalender: string;
}
export interface SessionEventType extends EventType {
  sessions: SessionType[];
}
export interface SessionType {
  title: string;
  time: string;
  profileImage: string;
  name: string;
  position: string;
}
