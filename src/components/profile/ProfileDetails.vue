<template>
  <div>
    <h1>{{ profile.name }}</h1>
    <p>Experience: {{ profile.experience }} years old</p>
    <p>Services Done: {{ profile.servicesDone }}</p>
    <button @click="startEditing">Edit</button>

    <div v-if="isEditing">
      <input v-model="profile.name" placeholder="Name" />
      <textarea v-model="profile.biography" placeholder="Biography"></textarea>
      <button @click="saveProfile">Save</button>
    </div>
  </div>
</template>

<script>
import { useProfile } from '@/composables/useProfile'

export default {
  setup() {
    const { profile, isEditing, startEditing, saveProfile } = useProfile()

    return {
      profile,
      isEditing,
      startEditing,
      saveProfile,
    }
  },
}
</script>
