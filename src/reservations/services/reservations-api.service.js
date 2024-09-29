import http from "../../shared/services/http-common.js";

/**
 * ReservationsApiService class
 * @description Service class for making HTTP requests to the API
 */
export class ReservationsApiService {
    /**
     * Get all reservations
     * @returns {Axios.IPromise<Axios.AxiosXHR<unknown>>}
     */
    getAll() {
        return http.get('/reservations')
            .then(response => {
                console.log('API Response:', response.data);  // Verifica si los datos están siendo recibidos correctamente
                return response.data;  // Retorna solo los datos de la respuesta
            })
            .catch(error => {
                console.error('Error fetching reservations:', error);
                throw error;
            });
    }

    /**
     * Get reservation by id
     * @param id
     * @returns {Axios.IPromise<Axios.AxiosXHR<unknown>>}
     */
    getById(id) {
        return http.get(`/reservations/${id}`);
    }

    /**
     * Create a new reservation
     * @param reservationResource - reservation object to create
     * @returns {Axios.IPromise<Axios.AxiosXHR<unknown>>}
     */
    create(reservationResource) {
        return http.post('/reservations', reservationResource);
    }

    /**
     * Update a reservation
     * @param id - reservation id to update
     * @param reservationResource - reservation object with data
     * @returns {Axios.IPromise<Axios.AxiosXHR<unknown>>}
     */
    update(id, reservationResource) {
        return http.put(`/reservations/${id}`, reservationResource);
    }

    /**
     * Delete a reservation
     * @param id - reservation id to delete
     * @returns {Axios.IPromise<Axios.AxiosXHR<unknown>>}
     */
    delete(id) {
        return http.delete(`/reservations/${id}`);
    }

    /**
     * Find reservations by status
     * @param status - reservation status to apply as criteria
     * @returns {Axios.IPromise<Axios.AxiosXHR<unknown>>}
     */
    findByStatus(status) {
        return http.get(`/reservations?status=${status}`);
    }
    async fetchReservations() {
        const apiService = new ReservationsApiService();
        try {
            this.reservations = await apiService.getAll();
            console.log("Reservations fetched:", this.reservations);
        } catch (error) {
            console.error("Error fetching reservations:", error);
        }
    }
}
