import http from "../../shared/services/http-common.js";

export class ReservationsApiService {
    async getAll() {
        try {
            const response = await http.get('/reservations');
            console.log('API Response:', response.data);
            return response.data;
        } catch (error) {
            console.error('Error fetching reservations:', error);
            throw error;
        }
    }

    async getById(id) {
        try {
            const response = await http.get(`/reservations/${id}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching reservation by ID:', error);
            throw error;
        }
    }

    async create(reservationResource) {
        try {
            const response = await http.post('/reservations', reservationResource);
            return response.data;
        } catch (error) {
            console.error('Error creating reservation:', error);
            throw error;
        }
    }

    async update(id, reservationResource) {
        try {
            const response = await http.put(`/reservations/${id}`, reservationResource);
            return response.data;
        } catch (error) {
            console.error('Error updating reservation:', error);
            throw error;
        }
    }

    async delete(id) {
        try {
            await http.delete(`/reservations/${id}`);
        } catch (error) {
            console.error('Error deleting reservation:', error);
            throw error;
        }
    }

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
