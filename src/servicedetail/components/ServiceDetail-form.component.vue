<template>
  <div>
    <h2>Service Detail Form</h2>
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
            type="text"
            v-model="localServiceDetail.name"
            id="name"
            required
        />
      </div>

      <div class="form-group">
        <label for="description">Description</label>
        <input
            type="text"
            v-model="localServiceDetail.description"
            id="description"
            required
        />
      </div>

      <div class="form-group">
        <label for="price">Price</label>
        <input
            type="number"
            v-model="localServiceDetail.price"
            id="price"
            min="0"
            required
        />
      </div>

      <div class="form-group">
        <label for="category">Category</label>
        <select v-model="localServiceDetail.category" id="category">
          <option disabled value="">Please select one</option>
          <option>Consulting</option>
          <option>Development</option>
          <option>Support</option>
        </select>
      </div>

      <button type="submit">Save</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "ServiceDetailForm",
  props: {
    serviceDetail: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      localServiceDetail: { ...this.serviceDetail }, // Clone to avoid direct mutation
    };
  },
  methods: {
    onSubmit() {
      if (this.validateForm()) {
        this.$emit("saveServiceDetail", this.localServiceDetail);
      }
    },
    validateForm() {
      // Add custom validation logic if needed
      if (!this.localServiceDetail.name || !this.localServiceDetail.description) {
        alert("Please fill in all required fields.");
        return false;
      }
      return true;
    },
  },
  watch: {
    serviceDetail(newVal) {
      this.localServiceDetail = { ...newVal };
    },
  },
};
</script>

<style scoped>
.form-group {
  margin-bottom: 1rem;
}
</style>
