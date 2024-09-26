// src/services/authService.js
import http from "../../shared/services/http-common.js";

class AuthService {
    signIn(user) {
        return http.post('/auth/signin', {
            email: user.email,
            password: user.password,
        });
    }

    signUp(user) {
        return http.post('/auth/signup', {
            name: user.name,
            surname: user.surname,
            email: user.email,
            document: user.document,
            phoneNumber: user.phoneNumber,
            password: user.password,
        });
    }
}

export default new AuthService();
