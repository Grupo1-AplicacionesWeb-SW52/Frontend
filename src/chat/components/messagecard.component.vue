<template>
  <div :class="['message-item', { 'from-user': isUser }]">
    <div class="profile-placeholder" v-if="!isUser">
      <img :src="message.user.profileImage" alt="Profile" class="profile-image" />
    </div>
    <div class="message-content">
      <div class="message-header">
        <span class="user-name">{{ isUser ? 'You' : message.user.name }}</span>
        <span class="timestamp">{{ formattedDate }}</span>
      </div>
      <p class="text">{{ message.lastMessage }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MessageItem",
  props: {
    message: {
      type: Object,
      required: true
    },
    isUser: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    formattedDate() {
      return new Date(this.message.lastMessageDate).toLocaleString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
      });
    }
  }
}
</script>

<style scoped>
.message-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 15px;
  max-width: 70%;
}

.from-user {
  align-self: flex-end;
  text-align: right;
}

.from-user .message-content {
  background-color: #d1e7ff;
}

.message-content {
  background-color: #f1f1f1;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.profile-placeholder {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
}

.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.message-header {
  display: flex;
  justify-content: space-between;
  font-size: 0.9em;
  margin-bottom: 5px;
}

.user-name {
  font-weight: bold;
  color: #333;
}

.timestamp {
  font-size: 0.8em;
  color: gray;
}

.text {
  margin: 0;
}

@media (max-width: 768px) {
  .message-item {
    max-width: 100%;
    flex-direction: column;
  }
}

</style>

