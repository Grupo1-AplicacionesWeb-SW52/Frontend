import axios from 'axios';

export class UserChildCareService {
    constructor() {
        this.apiUrl = 'http://localhost:3000/user-child-care';
    }

    async signUp(name, surname, email, document, phoneNumber, password) {
        const user = {
            name,
            surname,
            email,
            document,
            phoneNumber,
            password
        };
        try {
            const response = await axios.post(this.apiUrl, user);
            return response.data;  // Asegúrate de que 'data' sea correctamente accedido
        } catch (error) {
            console.error('Error during sign-up:', error);
            throw error;
        }
    }

    async signIn(email, password) {
        try {
            const response = await axios.get(this.apiUrl, {
                params: { email, password }
            });

            const users = response.data;  // Aquí también 'data' debe ser accedido correctamente
            if (users.length === 0) {
                throw new Error('Invalid credentials');
            }

            return users[0]; // Retornar el primer usuario encontrado
        } catch (error) {
            console.error('Error during sign-in:', error);
            throw error;
        }
    }
}
