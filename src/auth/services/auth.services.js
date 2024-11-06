// services/AuthService.js
import http from '../../shared/services/http-common';
import { User } from '../model/user'; // Importa la clase User

class AuthService {
	constructor() {
		this.basePath = ''; // Define la base path si necesitas personalizarla
	}

	// Método de inicio de sesión para tutores
	async loginAsTutor(email, password) {
		try {
			const response = await http.get(`${this.basePath}/tutors`, {
				params: { email, password },
			});
			const userData = response.data[0]; // Obtenemos el primer tutor encontrado
			if (userData) {
				return new User(
					userData.id,
					userData.fullName,
					userData.email,
					userData.document,
					userData.password,
					userData.phone,
					userData.profileImg,
					userData.role,
				);
			}
			return null;
		} catch (error) {
			this.handleError(error);
			return null;
		}
	}

	// Método de inicio de sesión para cuidadores
	async loginAsCaregiver(email, password) {
		try {
			const response = await http.get(`${this.basePath}/caregivers`, {
				params: { email, password },
			});
			const userData = response.data[0]; // Obtenemos el primer cuidador encontrado
			if (userData) {
				return new User(
					userData.id,
					userData.fullName,
					userData.email,
					userData.document,
					userData.password,
					userData.phone,
					userData.profileImg,
					userData.role,
				);
			}
			return null;
		} catch (error) {
			this.handleError(error);
			return null;
		}
	}

	// Método de registro de un nuevo usuario
	async signUp(user) {
		try {
			const response = await http.post(this.basePath, user);
			const userData = response.data;
			return new User(
				userData.id,
				userData.fullName,
				userData.email,
				userData.document,
				userData.password,
				userData.phone,
				userData.profileImg,
				userData.role,
			);
		} catch (error) {
			this.handleError(error);
			return null;
		}
	}

	// Manejo de errores
	handleError(error) {
		console.error('Error en AuthService:', error);
		throw new Error('Ocurrió un error. Por favor, intenta de nuevo.');
	}
}

export default new AuthService();
