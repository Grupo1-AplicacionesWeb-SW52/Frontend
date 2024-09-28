<template>
  <div class="flex items-start space-x-6">
    <img :src="imageSrc" alt="Profile image" class="w-32 h-32 rounded-full" />
    <div class="flex-1">
      <h3 class="text-xl font-semibold mb-2">
        <input
            v-if="isEditing"
            type="text"
            v-model="profile.name"
            class="border rounded px-2 py-1 w-full"
        />
        <span v-else>{{ profile.name }}</span>
      </h3>
      <ul>
        <li>{{ profile.age }} years old</li>
        <li>{{ profile.location }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useProfile } from 'src/composables/useProfile'
const { profile, isEditing } = useProfile()
const imageSrc = '/public/placeholder.svg'
</script>
