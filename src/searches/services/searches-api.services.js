import http from '../../shared/services/http-common';

/**
 * SearchesApiService class
 * @description Clase de servicio para realizar solicitudes HTTP relacionadas con cuidadores
 */
export class SearchesApiService {
	/**
	 * Obtener todos los cuidadores
	 * @returns {Promise<AxiosResponse<any>>}
	 */
	getAll() {
		return http.get('/caregivers');
	}

	/**
	 * Obtener un cuidador por ID
	 * @param id - ID del cuidador
	 * @returns {Promise<AxiosResponse<any>>}
	 */
	getById(id) {
		return http.get(`/caregivers/${id}`);
	}

	/**
	 * Crear un nuevo cuidador
	 * @param caregiverResource - objeto con los datos del cuidador
	 * @returns {Promise<AxiosResponse<any>>}
	 */
	create(caregiverResource) {
		return http.post('/caregivers', caregiverResource);
	}
}
