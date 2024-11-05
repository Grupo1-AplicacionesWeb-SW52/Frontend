<template>
  <div class="chat-detail">
    <div class="header">
      <button @click="goBack" class="go-back-button">
        ← Go Back
      </button>
      <h1 class="title">Chat Online: {{ chat?.user?.name }}</h1>
    </div>

    <div class="messages" v-if="chatMessages.length">
      <message-item v-for="message in chatMessages" :key="message.id" :message="message"  is-user/>
    </div>

    <div v-else class="no-messages">
      <p>No messages found.</p>
    </div>

    <div class="message-input">
      <input type="text" v-model="newMessage" placeholder="Type a message..." class="text-input" />
      <button @click="sendMessage" class="send-button">
        Send ↗
      </button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { ChatApiService } from '../services/chat-api.service.js';
import MessageItem from "@/chat/components/messagecard.component.vue";
import { Message } from '../model/message.entity.js'; // Asegúrate de usar correctamente el modelo de Message

export default {
  name: 'ChatDetail',
  components: {
    MessageItem
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const chat = ref(null);
    const chatMessages = ref([]);
    const newMessage = ref('');

    onMounted(() => {
      const chatId = route.params.id;
      ChatApiService.getChatById(chatId)
          .then(response => {
            if (response.data) {
              chat.value = response.data;
              chatMessages.value = response.data.messages ? response.data.messages.map(msg => new Message({
                id: msg.id,
                user: msg.user,
                lastMessage: msg.lastMessage,
                lastMessageDate: msg.lastMessageDate
              })) : [];
            } else {
              console.error("Chat not found");
              chat.value = { user: { name: 'Chat not found' } };
              chatMessages.value = [];
            }
          })
          .catch(error => {
            console.error("Error loading chat:", error);
            chat.value = { user: { name: 'Chat not found' } };
            chatMessages.value = [];
          });
    });

    const goBack = () => {
      router.push({name: 'Chat'});
    };

    const sendMessage = () => {
      if (newMessage.value.trim()) {
        const message = new Message({
          id: chatMessages.value.length + 1,
          user: {name: 'You'},
          lastMessageDate: new Date().toISOString(),
          lastMessage: newMessage.value
        });
        chatMessages.value.push(message);
        newMessage.value = '';
      }
    };

    return {chat, chatMessages, newMessage, goBack, sendMessage};
  }
};
</script>

<style scoped>
.chat-detail {
  padding: 20px;
}

.header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.go-back-button {
  background: none;
  border: none;
  color: #0D3A5A;
  font-size: 1em;
  margin-right: 10px;
  cursor: pointer;
}

.title {
  font-size: 1.5em;
  color: #0D3A5A;
}

.messages {
  max-height: 60vh;
  overflow-y: auto;
  margin-bottom: 20px;
}

.no-messages {
  font-size: 1em;
  color: gray;
  text-align: center;
}

.message-input {
  display: flex;
  align-items: center;
  gap: 10px;
  border-top: 1px solid #e0e0e0;
  padding-top: 10px;
}

.text-input {
  flex: 1;
  padding: 10px;
  border: 2px solid #0D3A5A;
  border-radius: 5px;
}

.send-button {
  background-color: #0D3A5A;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

@media (max-width: 768px) {
  .chat-detail {
    margin-left: 0;
    padding: 10px;
  }

  .message-input {
    flex-direction: column;
    gap: 5px;
  }
}

</style>

