import http from '../../shared/services/http-common.js';

export class ReservationsApiService {
    async getAll() {
        try {
            const response = await http.get('/reservations');
            console.log("API Response:", response.data);
            return response.data;
        } catch (error) {
            console.error("Error fetching reservations:", error);
            throw error;
        }
    }

    async getAllCaregivers() {
        try {
            const response = await http.get('/caregivers');
            console.log("Caregivers Response:", response.data);
            return response.data;
        } catch (error) {
            console.error("Error fetching caregivers:", error);
            throw error;
        }
    }
}
