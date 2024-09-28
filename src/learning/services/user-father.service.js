import axios from 'axios';

export class UserFatherService {
    constructor() {
        this.apiUrl = 'http://localhost:3000/user-father'; // La URL base del db.json
    }

    // Método para el sign-up (creación de un nuevo usuario)
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

    // Método para el sign-in (autenticación de usuario)
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

    // Método para obtener un usuario por ID (opcional)
    async getUserById(id) {
        try {
            const response = await axios.get(`${this.apiUrl}/${id}`);
            return response.data;  // 'data' accedido correctamente
        } catch (error) {
            console.error('Error fetching user by ID:', error);
            throw error;
        }
    }
}
