<template>
  <div class="chat-list-container p-p-4">
    <h1 class="p-text-center">Chat online</h1>
    <div v-for="chat in chats" :key="chat.id" class="chat-item p-d-flex p-ai-center p-p-3 p-mb-3 p-shadow-3" @click="openChat(chat.id)">
      <img :src="chat.avatar" alt="User Image" class="user-image p-mr-3">
      <div class="chat-details p-flex-1">
        <p><strong>{{ chat.name }}</strong></p>
        <p>{{ chat.lastMessage }}</p>
      </div>
      <div class="chat-timestamp">
        <p>{{ chat.timestamp }}</p>
      </div>
      <Button icon="pi pi-comments" label="Chat" class="p-button-rounded p-ml-3"/>
    </div>
  </div>
</template>

<script>
import { getChats } from '@/messages/services/user-care-child-api.services.js';

export default {
  data() {
    return {
      chats: [],
    };
  },
  created() {
    this.loadChats();
  },
  methods: {
    loadChats() {
      this.chats = getChats();  // Llamada al servicio que obtiene los chats
    },
    openChat(chatId) {
      this.$router.push({ name: 'ChatDetail', params: { id: chatId } });
    },
  },
};
</script>

<style scoped>
.chat-item {
  background-color: white;
  border-radius: 10px;
  cursor: pointer;
}

.user-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>
<template>
  <div class="chat-list-container p-p-4">
    <h1 class="p-text-center">Chat online</h1>
    <div v-for="chat in chats" :key="chat.id" class="chat-item p-d-flex p-ai-center p-p-3 p-mb-3 p-shadow-3" @click="openChat(chat.id)">
      <img :src="chat.avatar" alt="User Image" class="user-image p-mr-3">
      <div class="chat-details p-flex-1">
        <p><strong>{{ chat.name }}</strong></p>
        <p>{{ chat.lastMessage }}</p>
      </div>
      <div class="chat-timestamp">
        <p>{{ chat.timestamp }}</p>
      </div>
      <Button icon="pi pi-comments" label="Chat" class="p-button-rounded p-ml-3"/>
    </div>
  </div>
</template>

<script>
import { getChats } from '@/messages/services/user-care-child-api.services.js';

export default {
  data() {
    return {
      chats: [],
    };
  },
  created() {
    this.loadChats();
  },
  methods: {
    loadChats() {
      this.chats = getChats();  // Llamada al servicio que obtiene los chats
    },
    openChat(chatId) {
      this.$router.push({ name: 'ChatDetail', params: { id: chatId } });
    },
  },
};
</script>

<style scoped>
.chat-item {
  background-color: white;
  border-radius: 10px;
  cursor: pointer;
}

.user-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>
