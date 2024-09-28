<template>
  <div class="profile-biography">
    <h2>Biography</h2>
    <textarea
        v-model="bio"
        :readonly="!isEditing"
        @input="updateBio"
    ></textarea>
    <button @click="toggleEditing">{{ isEditing ? 'Save' : 'Edit' }}</button>
  </div>
</template>

<script>
export default {
  name: 'ProfileBiography',
  props: {
    biography: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      bio: this.biography,
      isEditing: false,
    };
  },
  methods: {
    toggleEditing() {
      this.isEditing = !this.isEditing;
      if (!this.isEditing) {
        this.$emit('updateBiography', this.bio);
      }
    },
    updateBio(event) {
      this.bio = event.target.value;
    },
  },
};
</script>

<style scoped>
.profile-biography {
  padding: 1rem;
}

textarea {
  width: 100%;
  height: 100px;
}
</style>
