// models/User.js
export class User {
	constructor(
		id,
		fullName,
		email,
		phone,
		document,
		password,
		profileImg,
		address,
		district,
	) {
		this.id = id;
		this.fullName = fullName;
		this.email = email;
		this.phone = phone;
		this.document = document;
		this.password = password;
		this.profileImg = profileImg;
		this.address = address;
		this.district = district;
	}

	getFullName() {
		return this.fullName;
	}

	getProfileImg() {
		return this.profileImg;
	}
}
