import { User } from '../../auth/model/user';
import Card from './card.entity';

class Payment {
	constructor(
		tutorId,
		caregiverId,
		serviceId,
		tutorPaymentMethodId,
		caregiverPaymentMethodId = null,
		totalAmount,
		date,
	) {
		this.id = null; // Opcional, asignado como null por defecto
		this.tutorId = tutorId;
		this.caregiverId = caregiverId;
		this.serviceId = serviceId;
		this.tutorPaymentMethodId = tutorPaymentMethodId;
		this.caregiverPaymentMethodId = caregiverPaymentMethodId;
		this.totalAmount = totalAmount;
		this.date = date;

		this.tutor = null; // Instancia de `User` asignada más tarde
		this.caregiver = null; // Instancia de `User` asignada más tarde
		this.tutorPaymentMethod = null; // Instancia de `Card` asignada más tarde
		this.caregiverPaymentMethod = null; // Instancia de `Card` asignada más tarde
	}
}

export default Payment;
