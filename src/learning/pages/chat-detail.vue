<template>
  <ChatDetail :id="$route.params.id" />
</template>

<script>
import ChatDetail from '@/learning/components/chat-detail.vue';

export default {
  components: {
    ChatDetail,
  },
};
</script>
