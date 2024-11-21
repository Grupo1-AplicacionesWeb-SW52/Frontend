<template>
  <div class="chat-card">
    <div class="profile-placeholder" :style="{ backgroundImage: 'url(' + chat.user.profileImage + ')' }"></div>
    <div class="chat-info">
      <div class="name">{{ chat.user.name }}</div>
      <div class="last-message">{{ chat.lastMessage }}</div>
    </div>
    <div class="chat-meta">
      <div class="date-time">{{ formattedDateTime }}</div>
      <button @click="openChat" class="chat-button">
        <i class="pi pi-headphones"></i> Chat
      </button>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useRouter } from 'vue-router';

export default {
  props: {
    chat: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const router = useRouter();

    const openChat = () => {
      router.push({ name: 'ChatDetail', params: { id: props.chat.id } });
    };

    const formattedDateTime = computed(() => {
      return new Date(props.chat.lastMessageDate).toLocaleString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
      });
    });

    return { openChat, formattedDateTime };
  }
};
</script>

<style scoped>
.chat-card {
  display: flex;
  align-items: center;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  margin-bottom: 15px;
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
}

.profile-placeholder {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  margin-right: 15px;
}

.chat-info {
  flex: 1;
}

.name {
  font-weight: bold;
  font-size: 1rem;
  color: #333;
}

.last-message {
  font-size: 0.9rem;
  color: #666;
}

.chat-meta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.date-time {
  font-size: 0.85rem;
  color: #666;
  margin-bottom: 5px;
}

.chat-button {
  font-size: 0.9em;
  background-color: #0D3A5A;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
}

@media (max-width: 768px) {
  .chat-card {
    max-width: 100%;
    flex-direction: column;
  }
}

</style>
