export class Reservation {
    constructor(id, caregiverId, caregiver, reservationDate, totalTime, status) {
        this.id = id;
        this.caregiverId = caregiverId;  // ID del cuidador asociado
        this.caregiver = caregiver; // Nombre del cuidador (ajusta el nombre aquí)
        this.reservationDate = reservationDate;  // Fecha de la reserva
        this.totalTime = totalTime;  // Tiempo total de trabajo
        this.status = status;  // Estado de la reserva
    }

    static fromDisplayableReservation(displayableReservation) {
        return new Reservation(
            displayableReservation.id,
            displayableReservation.caregiverId,
            displayableReservation.caregiver, // Cambia esto a 'caregiver'
            displayableReservation.reservationDate,
            displayableReservation.totalTime,
            displayableReservation.status
        );
    }

    static toDisplayableReservation(reservation) {
        return {
            id: reservation.id,
            caregiverId: reservation.caregiverId,
            caregiver: reservation.caregiver,  // Cambia esto a 'caregiver'
            reservationDate: reservation.reservationDate,
            totalTime: reservation.totalTime,
            status: reservation.status
        };
    }
}
