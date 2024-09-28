import { ref } from 'vue'
import profileData from '@/server/db.json'

export function useProfile() {
    const profile = ref(profileData.profile)
    const isEditing = ref(false)

    const startEditing = () => {
        isEditing.value = true
    }

    const saveProfile = () => {
        isEditing.value = false
        console.log('Profile saved:', profile.value)
    }

    const handleChange = (field, value) => {
        profile.value[field] = value
    }

    return {
        profile,
        isEditing,
        startEditing,
        saveProfile,
        handleChange,
    }
}
