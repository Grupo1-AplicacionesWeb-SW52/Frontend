<template>
  <Sidebar />
  <div class="main-content">
    <ProfileHeader />
    <ProfileDetails />
    <ProfileServiceInfo />
    <ProfileBiography />
    <button @click="startEditing">Edit Profile</button>
  </div>
</template>

<script setup>
import Sidebar from '@/layouts/Sidebar.vue'
import ProfileHeader from '@/components/profile/ProfileHeader.vue'
import ProfileDetails from '@/components/profile/ProfileDetails.vue'
import ProfileServiceInfo from '@/components/profile/ProfileServiceInfo.vue'
import ProfileBiography from '@/components/profile/ProfileBiography.vue'
import { useProfile } from '@/composables/useProfile'

const { startEditing } = useProfile()
</script>
