declare module 'calendars' {
	export const enum AttendeeStatus {
		/** The participant’s attendance status is unknown. */
		Unknown = 'unknown',

		/** The participant has yet to respond to the event. */
		Pending = 'pending',

		/** The participant’s attendance status is tentative. */
		Tentative = 'tentative',

		/** The participant has accepted the event. */
		Accepted = 'accepted',

		/** The participant has declined the event. */
		Declined = 'declined',

		/** The participant has delegated attendance to another participant. */
		Delegated = 'delegated',
	}
	export interface Source {
		readonly id: string;
		readonly title: string;
	}
	export interface Calendar {
		readonly id: string;
		readonly sourceId: string;
		readonly title: string;
	}

	export type UserStatus = AttendeeStatus;
	export enum EventStatus {
		/** The event has unknown status. */
		Unknown = 'unknown',

		/** The event is confirmed. */
		Confirmed = 'confirmed',

		/** The event is tentative. */
		Tentative = 'tentative',

		/** The event is canceled. */
		Canceled = 'canceled',
	}

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
		calendarIds?: readonly string[];
		endDate: Date;
		startDate: Date;
	}
	export interface CalendarsQuery {
		sourceIds?: readonly string[] | undefined;
	}
	export interface CalendarProvider {
		searchCalendars(query?: CalendarsQuery): Promise<Calendar[]>;
		searchEvents(query: EventsQuery): Promise<Event[]>;
		searchSources(): Promise<Source[]>;
	}

	const calendar: CalendarProvider;

	export default calendar;
}
