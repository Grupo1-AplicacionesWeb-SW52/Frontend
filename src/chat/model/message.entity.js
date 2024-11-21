export class Message {
    constructor({ id, user, lastMessage, lastMessageDate }) {
        this.id = id;
        this.user = user;
        this.lastMessage = lastMessage;
        this.lastMessageDate = lastMessageDate;
    }
}
