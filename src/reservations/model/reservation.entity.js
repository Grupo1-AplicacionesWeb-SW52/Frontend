export class Reservation {
    constructor(id, caregiverId, caregiver, reservationDate, totalTime, status) {
        this.id = id;
        this.caregiverId = caregiverId;
        this.caregiver = caregiver; // Ahora guardará un objeto con el nombre y la imagen
        this.reservationDate = reservationDate;
        this.totalTime = totalTime;
        this.status = status;
    }

    static fromDisplayableReservation(displayableReservation) {
        return new Reservation(
            displayableReservation.id,
            displayableReservation.caregiverId,
            displayableReservation.caregiver, // Aquí llega el objeto con el nombre y la imagen
            displayableReservation.reservationDate,
            displayableReservation.totalTime,
            displayableReservation.status
        );
    }

    static toDisplayableReservation(reservation) {
        return {
            id: reservation.id,
            caregiverId: reservation.caregiverId,
            caregiver: reservation.caregiver,  // Aquí se devuelve el objeto con los datos del cuidador
            reservationDate: reservation.reservationDate,
            totalTime: reservation.totalTime,
            status: reservation.status
        };
    }
}
