export class Reservation {
    constructor(id, caregiverId, caregiver, reservationDate, totalTime, status) {
        this.id = id;
        this.caregiverId = caregiverId;
        this.caregiver = caregiver;
        this.reservationDate = reservationDate;
        this.totalTime = totalTime;
        this.status = status;
    }

    static fromDisplayableReservation(displayableReservation) {
        return new Reservation(
            displayableReservation.id,
            displayableReservation.caregiverId,
            displayableReservation.caregiver,
            displayableReservation.reservationDate,
            displayableReservation.totalTime,
            displayableReservation.status
        );
    }

    static toDisplayableReservation(reservation) {
        return {
            id: reservation.id,
            caregiverId: reservation.caregiverId,
            caregiver: reservation.caregiver,
            reservationDate: reservation.reservationDate,
            totalTime: reservation.totalTime,
            status: reservation.status
        };
    }
}
