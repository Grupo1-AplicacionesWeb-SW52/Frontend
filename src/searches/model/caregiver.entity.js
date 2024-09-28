export class Caregiver {
	constructor(
		id,
		name,
		email,
		password,
		image,
		role,
		rating,
		phone,
		location,
		address,
		date_of_birth,
		gender,
		experience,
		bio,
		profile_picture,
		availability,
	) {
		this.id = id;
		this.name = name;
		this.email = email;
		this.password = password;
		this.image = image;
		this.role = role;
		this.rating = rating;
		this.phone = phone;
		this.location = location;
		this.address = address;

		this.additional_info = {
			date_of_birth: date_of_birth,
			gender: gender,
			experience: experience,
			bio: bio,
			profile_picture: profile_picture,
		};

		this.availability = availability;
	}
}
