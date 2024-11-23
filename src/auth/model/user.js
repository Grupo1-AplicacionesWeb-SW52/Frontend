
export class User {
	constructor(
		id,
		fullName,
		email,
		document,
		password,
		phone,
		profileImg,
		role,
	) {
		this.id = id;
		this.fullName = fullName;
		this.email = email;
		this.document = document;
		this.password = password;
		this.phone = phone;
		this.profileImg = profileImg;
		this.role = role; // 'tutor' o 'caregiver'
	}

	// Método opcional para validar si es tutor
	isTutor() {
		return this.role === 'tutor';
	}

	// Método opcional para validar si es cuidador
	isCaregiver() {
		return this.role === 'caregiver';
	}

	// Método para obtener información del usuario
	getInfo() {
		return `${this.fullName} (${this.role}) - ${this.email}`;
	}
}
