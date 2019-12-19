declare module 'calendars' {
	export interface Source {
		readonly id: string;
		readonly title: string;
	}
	export interface Calendar {
		readonly id: string;
		readonly sourceId: string;
		readonly title: string;
	}

	export type UserStatus = any;
	// AttendeeStatus.Unknown | AttendeeStatus.Tentative | AttendeeStatus.Accepted | AttendeeStatus.Decl...
	export type EventStatus = any;

	export interface Event {
		readonly alarms: Alarm[];
		readonly attendees: Attendee[];
		readonly calendarId: string;
		readonly description: string | undefined;
		readonly endDate: Date;
		readonly id: string;
		readonly isAllDay: boolean;
		readonly location: string | undefined;
		readonly organizer: Attendee | undefined;
		readonly recurrenceRule: string | undefined;
		readonly sourceId: string;
		readonly startDate: Date;
		readonly status: EventStatus;
		readonly title: string;
		readonly userStatus: UserStatus;
	}
	export type AndroidAlarmTypes = string;
	export type AppleAlarmTypes = string;
	export interface Alarm {
		trigger: RelativeAlarmTrigger | AbsoluteAlarmTrigger;
		type: string;
	}
	export interface RelativeAlarmTrigger {
		offset: number;
		related: 'start' | 'end';
	}
	export interface AbsoluteAlarmTrigger {
		date: Date;
	}
	export interface Attendee {
		readonly name: string;
		readonly status: AttendeeStatus;
	}
	export interface EventsQuery {
		calendarIds: readonly string[] | void;
		endDate: Date;
		startDate: Date;
	}
	export interface CalendarsQuery {
		sourceIds: readonly string[] | undefined;
	}
	export interface CalendarProvider {
		searchCalendars(query?: CalendarsQuery): Promise<Calendar[]>;
		searchEvents(query: EventsQuery): Promise<Event[]>;
		searchSources(): Promise<Source[]>;
	}

	const calendar: CalendarProvider;

	export default calendar;
}
