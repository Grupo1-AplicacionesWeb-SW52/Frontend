// src/services/ServiceSearchService.js
import http from '../../shared/services/http-common';

class ServiceSearchService {
	constructor() {
		this.basePath = '/services';
	}

	// Método para obtener todos los servicios
	async getAll() {
		try {
			const response = await http.get(`${this.basePath}?_expand=caregiver`);
			return response.data;
		} catch (error) {
			this.handleError(error);
			return null;
		}
	}

	// Método para obtener un servicio por ID
	async getById(id) {
		try {
			const response = await http.get(
				`${this.basePath}/${id}?_expand=caregiver`,
			);
			return response.data;
		} catch (error) {
			this.handleError(error);
			return null;
		}
	}

	// Método para obtener servicios por ID de cuidador (caregiverId)
	async getByCaregiverId(id) {
		try {
			const response = await http.get(
				`${this.basePath}?caregiverId=${id}&_expand=caregiver`,
			);
			return response.data[0]; // Devuelve el primer servicio encontrado
		} catch (error) {
			this.handleError(error);
			return null;
		}
	}

	// Manejo de errores
	handleError(error) {
		console.error('Error en ServiceSearchService:', error);
		throw new Error('Error al obtener los datos del servicio.');
	}
}

// Exportamos una instancia del servicio
export default new ServiceSearchService();
