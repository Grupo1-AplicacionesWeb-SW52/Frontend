import { User } from './User';
import { Schedule } from './schedule';

export class ServiceSearch {
	constructor(
		id,
		caregiverId,
		description,
		schedules,
		workaround,
		farePerHour,
		caregiver,
		rating,
	) {
		this.id = id;
		this.caregiverId = caregiverId;
		this.description = description;
		this.schedules = schedules.map(
			(schedule) =>
				new Schedule(
					schedule.day,
					schedule.workHours.startTime,
					schedule.workHours.endTime,
				),
		);
		this.workaround = workaround;
		this.farePerHour = farePerHour;
		this.caregiver = new User(
			caregiver.id,
			caregiver.fullName,
			caregiver.email,
			caregiver.document,
			caregiver.password,
			caregiver.phone,
			caregiver.profileImg,
			caregiver.role,
		);
		this.rating = rating;
	}
}
