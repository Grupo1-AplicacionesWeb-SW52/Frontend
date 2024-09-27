/**
 * Reservation
 * @description Reservation entity
 */
export class Reservation {
    constructor(id, caregiverId, reservationDate, totalTime, status) {
        this.id = id;  // Identificador único de la reserva
        this.caregiverId = caregiverId;  // ID del cuidador asociado
        this.reservationDate = reservationDate;  // Fecha de la reserva
        this.totalTime = totalTime;  // Tiempo total de trabajo
        this.status = status;  // Estado de la reserva
    }

    /**
     * Create a new Reservation instance from a displayableReservation
     * @param displayableReservation - The displayableReservation to create the Reservation from
     * @returns {Reservation}
     */
    static fromDisplayableReservation(displayableReservation) {
        return new Reservation(
            displayableReservation.id,
            displayableReservation.caregiverId,
            displayableReservation.reservationDate,
            displayableReservation.totalTime,
            displayableReservation.status
        );
    }

    /**
     * Convert a reservation to a displayable reservation
     * @param reservation - The reservation to convert
     * @returns {{id, caregiverId, reservationDate, totalTime, status}}
     */
    static toDisplayableReservation(reservation) {
        return {
            id: reservation.id,
            caregiverId: reservation.caregiverId,
            reservationDate: reservation.reservationDate,
            totalTime: reservation.totalTime,
            status: reservation.status
        };
    }
}
