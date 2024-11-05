<template>
  <div class="language-switcher">
    <pv-select-button v-model="$i18n.locale" :options="languages">
      <template #option="slotProps">
        {{ slotProps.option.toUpperCase() }}
      </template>
    </pv-select-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      languages: ['en', 'es'],
      language:"en"
    };
  }
};
</script>

<style scoped>
.language-switcher {
  display: flex;
  align-items: center;
}
</style>
