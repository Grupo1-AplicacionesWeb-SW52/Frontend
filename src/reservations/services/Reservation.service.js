// src/services/ReservationService.js
import axios from 'axios';

const API_URL = 'http://localhost:3000'; // Cambia este URL si tu json-server está en otro puerto

export default {
    getReservations() {
        return axios.get(`${API_URL}/reservations`);
    }
};
