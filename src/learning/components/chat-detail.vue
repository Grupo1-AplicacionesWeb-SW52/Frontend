<template>
  <div class="chat-detail-container p-p-4">
    <div class="chat-header p-d-flex p-ai-center p-jc-between">
      <Button icon="pi pi-arrow-left" label="Go back" @click="goBack" class="p-button-text"/>
      <h2>Chat online: {{ chat.name }}</h2>
    </div>

    <div class="chat-messages p-my-4">
      <div v-for="message in chat.messages" :key="message.timestamp" class="message-item p-d-flex p-ai-center p-mb-3">
        <img :src="chat.avatar" alt="User Image" class="user-image p-mr-3">
        <div class="message-content">
          <p><strong>{{ message.sender }}</strong></p>
          <p>{{ message.text }}</p>
        </div>
        <div class="message-timestamp p-ml-auto">
          <p>{{ message.timestamp }}</p>
        </div>
      </div>
    </div>

    <div class="chat-input p-d-flex p-ai-center">
      <InputText v-model="newMessage" placeholder="Send a message..." class="p-flex-1 p-mr-2"/>
      <Button icon="pi pi-send" label="Send" @click="sendMessage" />
    </div>
  </div>
</template>

<script>
import { getChatById } from '@/learning/services/user-care-child-api.services.js';

export default {
  props: ['id'],
  data() {
    return {
      chat: {
        id: this.id,
        name: 'Julio Cesar',
        avatar: '',
        messages: [],
      },
      newMessage: '',
    };
  },
  created() {
    this.loadChatDetails();
  },
  methods: {
    loadChatDetails() {
      this.chat = getChatById(this.id);  // Cargar los detalles del chat desde el servicio
    },
    goBack() {
      this.$router.go(-1);  // Volver a la lista de chats
    },
    sendMessage() {
      if (this.newMessage.trim() !== '') {
        this.chat.messages.push({
          sender: 'You',
          text: this.newMessage,
          timestamp: new Date().toLocaleString(),
        });
        this.newMessage = '';  // Limpiar el campo de entrada
      }
    },
  },
};
</script>

<style scoped>
.chat-detail-container {
  padding: 20px;
}

.message-item {
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 10px;
}

.user-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>
