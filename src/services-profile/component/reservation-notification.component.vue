<template>
  <section class="reservation-notification">
    <i class="pi pi-check-circle notification-icon"></i>
    <article>
      <h3 class="notification-title">Reservation requested</h3>
      <p>
        Your reservation has been requested.
        <br />
        Check your reservation list in the menu.
      </p>
    </article>
  </section>
</template>

<script>
export default {
  name: "ReservationNotificationComponent",
};
</script>

<style scoped>
.reservation-notification {
  display: flex;
  align-items: center;
  background-color: #e8f5e9;
  padding: 16px;
  border-radius: 8px;
}

.notification-icon {
  color: #4caf50;
  font-size: 20px;
  margin-right: 16px;
}

.notification-title {
  color: #4caf50;
  margin: 0;
  font-size: 18px;
  font-weight: bold;
}

p {
  margin: 0;
  font-size: 14px;
  color: #4caf50;
}
</style>
