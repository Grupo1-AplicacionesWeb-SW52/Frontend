<script>
export default {
  name: 'CaregiveCardComponent',
  props: {
    caregiver: {
      'type': Object,
      required: true
    }
  },
  
};
</script>

<template>
  <div class="caregiver-card">
    <div class="caregiver-image-container">
      <img 
        :src="caregiver.profile_picture" 
        alt="Caregiver" 
        class="caregiver-image" 
      />
    </div>
    <div class="caregiver-content">
      <h3>{{ caregiver.name }}</h3>
      <p>{{ caregiver.location }}</p>
      <div class="caregiver-rating">
        <span>{{ caregiver.rating.toFixed(1) }}</span>
        <span class="star">★</span> 
      </div>

      <p><strong>Experience:</strong> {{ caregiver.additional_info.experience }}</p>
      <p>{{ caregiver.additional_info.bio }}</p>

      <pv-button class="see-more">See more</pv-button>
    </div>
  </div>
</template>

<style scoped>
.caregiver-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 100%;
  max-width: 300px;
  margin: 16px;
  padding: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #fff;
}

.caregiver-image-container {
  width: 100%;
}

.caregiver-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
}

.caregiver-content {
  padding: 15px;
}

.caregiver-rating {
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
}

.star {
  color: #ffba00;
  margin-left: 5px;
}

.see-more {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 15px;
  width: 100%;
}

.see-more:hover {
  background-color: #0056b3;
}
</style>