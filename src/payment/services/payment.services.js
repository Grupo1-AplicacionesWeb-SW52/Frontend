// src/services/PaymentService.js
import http from '../../shared/services/http-common';
import Payment from '../model/payment.entity';

class PaymentService {
	constructor() {
		this.basePath = '/payments';
	}

	// Método para obtener pagos por ID de tutor
	async getByTutorId(id) {
		try {
			const response = await http.get(
				`${this.basePath}?tutorId=${id}&_expand=service&_expand=tutor&_expand=caregiver`,
			);
			return response.data.map(
				(payment) =>
					new Payment(
						payment.tutorId,
						payment.caregiverId,
						payment.serviceId,
						payment.tutorPaymentMethodId,
						payment.caregiverPaymentMethodId,
						payment.totalAmount,
						payment.date,
					),
			);
		} catch (error) {
			this.handleError(error);
			return null;
		}
	}

	// Método para obtener pagos por ID de cuidador
	async getByCaregiverId(id) {
		try {
			const response = await http.get(
				`${this.basePath}?caregiverId=${id}&_expand=service&_expand=tutor&_expand=caregiver`,
			);
			return response.data.map(
				(payment) =>
					new Payment(
						payment.tutorId,
						payment.caregiverId,
						payment.serviceId,
						payment.tutorPaymentMethodId,
						payment.caregiverPaymentMethodId,
						payment.totalAmount,
						payment.date,
					),
			);
		} catch (error) {
			this.handleError(error);
			return null;
		}
	}

	// Manejo de errores
	handleError(error) {
		console.error('Error en PaymentService:', error);
		throw new Error('Error al obtener los datos de pago.');
	}
}

// Exporta una instancia del servicio
export default new PaymentService();
