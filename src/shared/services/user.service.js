// services/UserService.js
import http from '../http-common';

class UserService {
	// Obtener todos los usuarios
	getAll() {
		return http.get('/users');
	}

	// Obtener un usuario por ID
	getById(id) {
		return http.get(`/users/${id}`);
	}

	// Crear un nuevo usuario
	create(data) {
		return http.post('/users', data);
	}

	// Actualizar un usuario existente
	update(id, data) {
		return http.put(`/users/${id}`, data);
	}

	// Eliminar un usuario por ID
	delete(id) {
		return http.delete(`/users/${id}`);
	}

	// Obtener la lista de tutores
	getTutors() {
		return http.get('/tutors');
	}

	// Obtener la lista de cuidadores
	getCaregivers() {
		return http.get('/caregivers');
	}
}

export default new UserService();
