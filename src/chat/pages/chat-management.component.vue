<template>
  <div class="chat-management">
    <main class="chat-content">
      <h1 class="title">Chat Online</h1>
      <ChatCard v-for="chat in chats" :key="chat.id" :chat="chat" />
    </main>
  </div>
</template>

<script>
import ChatCard from '../components/chatcard.component.vue';
import { ChatApiService } from '../services/chat-api.service.js';

export default {
  components: { ChatCard },
  data() {
    return {
      chats: []
    };
  },
  created() {
    ChatApiService.getAllChats()
        .then(response => {
          console.log("Datos de chats:", response.data); // Verifica que los datos sean correctos
          this.chats = response.data;
        })
        .catch(error => {
          console.error("Error al cargar chats:", error);
        });
  }
};
</script>

<style scoped>
.chat-management {
  display: flex;
}

.chat-content {
  flex: 1;
  padding: 20px;
  margin-left: 70px;
  margin-top: 40px;
}

.title {
  font-size: 1.5em;
  color: #0D3A5A;
  font-weight: bold;
  margin-bottom: 20px;
}
@media (max-width: 768px) {
  .sidebar {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 10;
  }

  .chat-card, .message-item {
    max-width: 100%;
    flex-direction: column;
  }

  .chat-management, .chat-detail {
    margin-left: 0;
    padding: 10px;
  }

  .message-input {
    flex-direction: column;
    gap: 5px;
  }
}

@media (max-width: 768px) {
  .chat-management {
    margin-left: 0;
    padding: 10px;
  }
}

</style>
