<template>
  <div class="biography-section">
    <h3>Biography</h3>
    <p v-if="!biographyEditMode">{{ serviceSearch.description }}</p>
    <form v-else @submit.prevent="updateDescription">
      <textarea v-model="biographyForm.description" rows="6"></textarea>
      <button type="button" @click="cancelEdit">Cancel</button>
      <button type="submit">Update</button>
    </form>
  </div>
</template>

<script>
import { ref, watch } from "vue";

export default {
  name: "BiographySection",
  props: {
    serviceSearch: {
      type: Object,
      required: true,
    },
    canEdit: {
      type: Boolean,
      required: true,
    },
  },
  setup(props) {
    const biographyEditMode = ref(false);
    const biographyForm = ref({ description: props.serviceSearch.description });

    const updateDescription = () => {
      biographyEditMode.value = false;
      console.log("Description updated:", biographyForm.value.description);
    };

    const cancelEdit = () => {
      biographyEditMode.value = false;
    };

    watch(
      () => props.serviceSearch.description,
      (newDescription) => {
        biographyForm.value.description = newDescription;
      }
    );

    return { biographyEditMode, biographyForm, updateDescription, cancelEdit };
  },
};
</script>

<style scoped>
.biography-section {
  background: #f5f5f5;
  padding: 16px;
  border-radius: 8px;
}
</style>
