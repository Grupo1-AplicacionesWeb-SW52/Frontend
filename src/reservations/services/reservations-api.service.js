import http from '../../shared/services/http-common';

class ReservationsApiService {
    getAll() {
        return http.get('/reservations');
    }

    update(id, data) {
        return http.put(`/reservations/${id}`, data);
    }

    cancel(id) {
        return http.delete(`/reservations/${id}`);
    }
}

export default new ReservationsApiService();
