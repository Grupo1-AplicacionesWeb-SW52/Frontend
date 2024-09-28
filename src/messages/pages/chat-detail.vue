<template>
  <ChatDetail :id="$route.params.id" />
</template>

<script>
import ChatDetail from '../messages/components/chat-detail.vue';

export default {
  components: {
    ChatDetail,
  },
};
</script>
