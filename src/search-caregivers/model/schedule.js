export class Schedule {
	constructor(day, startTime, endTime) {
		this.day = day;
		this.workHours = {
			startTime,
			endTime,
		};
	}
}
