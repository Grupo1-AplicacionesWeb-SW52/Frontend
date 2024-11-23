import http from "../../shared/services/http-common.js";

/**
 * ReservationsApiService class
 * @description Service class for making HTTP requests to the API
 */
export class ReservationsApiService {
    /**
     * Get all reservations along with caregiver information
     * @returns {Promise<Array>} Array of reservations with caregiver details
     */
    async getAll() {
        try {
            const reservationsResponse = await http.get('/reservations');
            const caregiversResponse = await http.get('/caregivers');

            const reservations = reservationsResponse.data;
            const caregivers = caregiversResponse.data;

            // Asocia los datos del cuidador con cada reserva
            const reservationsWithCaregiver = reservations.map(reservation => {
                const caregiver = caregivers.find(c => c.id === reservation.caregiverId);
                return {
                    ...reservation,
                    caregiver: caregiver ? { fullName: caregiver.fullName, profileImg: caregiver.profileImg } : null
                };
            });

            console.log(reservationsWithCaregiver);  // Verifica los datos de las reservas con el cuidador asociado
            return reservationsWithCaregiver;
        } catch (error) {
            console.error('Error fetching reservations:', error);
            throw error;
        }
    }


    // Método para obtener una reserva por ID (sin cambios)
    async getById(id) {
        try {
            const response = await http.get(`/reservations/${id}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching reservation by ID:', error);
            throw error;
        }
    }

    // Método para crear una nueva reserva (sin cambios)
    async create(data) {
        try {
            const response = await http.post('/reservations', data);
            return response.data;
        } catch (error) {
            console.error('Error creating reservation:', error);
            throw error;
        }
    }


    // Método para actualizar una reserva (sin cambios)
    async update(id, reservationResource) {
        try {
            const response = await http.put(`/reservations/${id}`, reservationResource);
            return response.data;
        } catch (error) {
            console.error('Error updating reservation:', error);
            throw error;
        }
    }

    // Método para eliminar una reserva (sin cambios)
    async delete(id) {
        try {
            await http.delete(`/reservations/${id}`);
        } catch (error) {
            console.error('Error deleting reservation:', error);
            throw error;
        }
    }

    // Método para encontrar reservas por estado (sin cambios)
    async findByStatus(status) {
        try {
            const response = await http.get(`/reservations?status=${status}`);
            return response.data;
        } catch (error) {
            console.error('Error finding reservations by status:', error);
            throw error;
        }
    }
}
