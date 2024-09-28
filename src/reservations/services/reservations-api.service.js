import http from "../../shared/services/http-common.js";

/**
 * ReservationsApiService class
 * @description Service class for making HTTP requests to the API
 */
export class ReservationsApiService {
    /**
     * Get all reservations
     * @returns {Promise<AxiosResponse<any>>}
     */
    getAll() {
        return http.get('/reservations');
    }

    /**
     * Get reservation by id
     * @param id
     * @returns {Promise<AxiosResponse<any>>}
     */
    getById(id) {
        return http.get(`/reservations/${id}`);
    }

    /**
     * Create a new reservation
     * @param reservationResource - reservation object to create
     * @returns {Promise<AxiosResponse<any>>}
     */
    create(reservationResource) {
        return http.post('/reservations', reservationResource);
    }

    /**
     * Update a reservation
     * @param id - reservation id to update
     * @param reservationResource - reservation object with data
     * @returns {Promise<AxiosResponse<any>>}
     */
    update(id, reservationResource) {
        return http.put(`/reservations/${id}`, reservationResource);
    }

    /**
     * Delete a reservation
     * @param id - reservation id to delete
     * @returns {Promise<AxiosResponse<any>>}
     */
    delete(id) {
        return http.delete(`/reservations/${id}`);
    }

    /**
     * Find reservations by status
     * @param status - reservation status to apply as criteria
     * @returns {Promise<AxiosResponse<any>>}
     */
    findByStatus(status) {
        return http.get(`/reservations?status=${status}`);
    }
}
