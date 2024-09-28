// Simulación de datos obtenidos de la API

const chats = [
    {
        id: 1,
        name: 'Julio Cesar',
        lastMessage: 'Hi Pepito Flores, thank you for contacting me! How can I help you?',
        timestamp: 'March 22th 2024, 10:32AM',
        avatar: 'https://example.com/user-image.jpg',
        messages: [
            {
                sender: 'Julio Cesar',
                text: 'Hi Pepito Flores, thank you for contacting me! How can I help you?',
                timestamp: 'March 22th 2024, 10:32AM',
            },
            {
                sender: 'You',
                text: 'Hi Julio Cesar. I\'m interested about your service and rating.',
                timestamp: 'March 22th 2024, 11:23AM',
            },
            {
                sender: 'Julio Cesar',
                text: 'Yes, of course. Send me an email with more info.',
                timestamp: 'March 22th 2024, 10:32AM',
            },
        ],
    },
    // Otros chats pueden añadirse aquí
];

// Obtener la lista de chats
export function getChats() {
    return chats;
}

// Obtener los detalles de un chat por su ID
export function getChatById(id) {
    return chats.find(chat => chat.id === Number(id));
}
