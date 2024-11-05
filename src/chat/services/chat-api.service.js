import http from "../../shared/services/http-common.js";

export class ChatApiService {
    static getAllChats() {
        return http.get('/chats'); // La URL debe estar alineada con la configuración de json-server
    }

    static getChatById(id) {
        return http.get(`/chats/${id}`);
    }
}

