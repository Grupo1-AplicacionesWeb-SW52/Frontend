// src/services/PaymentMethodsService.js
import http from '../../shared/services/http-common';
import Card from '../model/card.entity';

class PaymentMethodsService {
	constructor() {
		this.basePath = '/user-payment-methods';
	}

	// Método para obtener métodos de pago por ID de usuario y rol
	async getByUserId(id, role) {
		try {
			const roleKey = role === 'tutor' ? 'tutorId' : 'caregiverId';
			const response = await http.get(`${this.basePath}?${roleKey}=${id}`);
			return response.data.map(
				(card) =>
					new Card(
						card.id,
						card.cardHolder,
						card.cardNumber,
						card.expirationDate,
						card.cvv,
						card.tutorId,
						card.caregiverId,
					),
			);
		} catch (error) {
			this.handleError(error);
			return null;
		}
	}

	async create(card) {
		try {
			const response = await http.post(this.basePath, card);
			return response.data;
		} catch (error) {
			this.handleError(error);
			return null;
		}
	}

	// Manejo de errores
	handleError(error) {
		console.error('Error en PaymentMethodsService:', error);
		throw new Error('Error al obtener los métodos de pago.');
	}
}

// Exporta una instancia del servicio
export default new PaymentMethodsService();
