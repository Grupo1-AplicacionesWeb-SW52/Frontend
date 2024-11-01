<template>
  <section>
    <header class="section-header">
      <h1 class="header-title">
        {{ canEdit ? 'Your offer description' : `Detail of ${serviceDetail.caregiver.fullName}'s caregiver service` }}
      </h1>
      <a v-if="!canEdit" class="go-back-btn" @click="goBack">
        <span class="material-icons">arrow_back</span>
        <span>Go back</span>
      </a>
    </header>

    <div class="caregiver-section" v-if="serviceDetail">
      <div class="caregiver-preview-card">
        <img :src="caregiverImage" alt="Caregiver Image" class="caregiver-img" />
        <div class="caregiver-card">
          <div class="caregiver-card-name">{{ serviceDetail.caregiver.fullName }}</div>
          <div class="caregiver-card-item">
            <span class="label">Age:</span>
            <span>26 years old</span>
          </div>
          <div class="caregiver-card-item">
            <span class="label">Location:</span>
            <span>{{ serviceDetail.caregiver.address }}, {{ serviceDetail.caregiver.district }}</span>
          </div>
          <div class="caregiver-card-item">
            <span class="label">Registration:</span>
            <span>2 years in SafeChild</span>
          </div>
          <div class="caregiver-card-item">
            <span class="label">Work:</span>
            <span>42 services realized</span>
          </div>
        </div>
      </div>

      <div class="caregiver-content">
        <div class="caregiver-biography">
          <h2>Biography</h2>
          <p>See more about {{ serviceDetail.caregiver.fullName }}</p>
          <div v-if="isEditingBiography">
            <textarea v-model="serviceDetail.description"></textarea>
            <button @click="saveBiography">Save</button>
            <button @click="cancelEditBiography">Cancel</button>
          </div>
          <div v-else>
            <p>{{ serviceDetail.description }}</p>
            <div class="edit-icon" @click="editBiography">
              <span class="material-icons">edit</span>
            </div>
          </div>
        </div>

        <div class="caregiver-schedule">
          <h2>Schedule</h2>
          <p>See your options</p>
          <table>
            <thead>
            <tr>
              <th>Days</th>
              <th>Start hour</th>
              <th>End hour</th>
              <th v-if="canEdit">Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(schedule, index) in serviceDetail.schedules" :key="index">
              <td v-if="isEditingSchedule">
                <select v-model="schedule.day">
                  <option v-for="day in daysOfWeek" :key="day" :value="day">{{ day }}</option>
                </select>
              </td>
              <td v-else>{{ schedule.day }}</td>
              <td v-if="isEditingSchedule">
                <input v-model="schedule.workHours.startTime" type="time" />
              </td>
              <td v-else>{{ schedule.workHours.startTime }}</td>
              <td v-if="isEditingSchedule">
                <input v-model="schedule.workHours.endTime" type="time" />
              </td>
              <td v-else>{{ schedule.workHours.endTime }}</td>
              <td v-if="canEdit">
                <button @click="deleteSchedule(index)">Delete</button>
              </td>
            </tr>
            </tbody>
          </table>
          <div class="edit-icon" @click="toggleEditSchedule">
            <span class="material-icons">edit</span>
          </div>
          <div v-if="isEditingSchedule" class="schedule-actions">
            <button @click="addSchedule">+ Add</button>
            <button @click="saveSchedule">Save</button>
            <button @click="cancelEditSchedule">Cancel</button>
          </div>
        </div>

        <div class="caregiver-places-fare">
          <h2>Places & Fare</h2>
          <p>See more options</p>
          <div v-if="isEditingPlacesFare">
            <ul>
              <li v-for="(place, index) in serviceDetail.workaround" :key="index">
                <input v-model="serviceDetail.workaround[index]" type="text" />
              </li>
              <li>
                <input v-model="newPlace" type="text" placeholder="Add new place" />
                <button @click="addPlace">Add</button>
              </li>
            </ul>
            <input v-model="serviceDetail.farePerHour" type="number" />
            <button @click="savePlacesFare">Save</button>
            <button @click="cancelEditPlacesFare">Cancel</button>
          </div>
          <div v-else>
            <ul>
              <li v-for="place in serviceDetail.workaround" :key="place">{{ place }}</li>
            </ul>
            <p>Fare per hour: S/ {{ serviceDetail.farePerHour.toFixed(2) }}</p>
            <div class="edit-icon" @click="editPlacesFare">
              <span class="material-icons">edit</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ServiceDetail } from "../model/ServiceDetail.entity";
import caregiverImage from './caregiver-image.jpg';

export default {
  name: "ServiceDetailPage",
  data() {
    return {
      serviceDetail: new ServiceDetail(
          "Default Name",
          "I will care for your loved one with dedication and attentiveness, understanding the importance of providing a safe and nurturing environment. My commitment is to ensure they always feel comfortable and well taken care of. My approach is rooted in empathy, patience, and a genuine passion for caregiving. I strive to create a positive and supportive atmosphere where your loved one can thrive and feel valued. Whether through engaging activities, attentive care, or simply being a comforting presence, I am here to provide the best possible care.",
          100,
          "Consulting",
          [
            { day: "Monday", workHours: { startTime: "09:00", endTime: "17:00" } },
            { day: "Tuesday", workHours: { startTime: "09:00", endTime: "17:00" } }
          ],
          ["San Miguel", "Magdalena", "Surquillo", "San Isidro"],
          5,
          { fullName: "Elizabeth Sabino", address: "Av. Marina Calle 123", district: "San Miguel" }
      ),
      caregiverImage,
      canEdit: true, // Set this based on your logic
      isEditingBiography: false,
      isEditingSchedule: false,
      isEditingPlacesFare: false,
      newPlace: "",
      daysOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    };
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    editBiography() {
      this.isEditingBiography = true;
    },
    saveBiography() {
      this.isEditingBiography = false;
    },
    cancelEditBiography() {
      this.isEditingBiography = false;
    },
    toggleEditSchedule() {
      this.isEditingSchedule = !this.isEditingSchedule;
    },
    saveSchedule() {
      this.isEditingSchedule = false;
    },
    cancelEditSchedule() {
      this.isEditingSchedule = false;
    },
    addSchedule() {
      this.serviceDetail.schedules.push({ day: "Monday", workHours: { startTime: "", endTime: "" } });
    },
    deleteSchedule(index) {
      this.serviceDetail.schedules.splice(index, 1);
    },
    editPlacesFare() {
      this.isEditingPlacesFare = true;
    },
    savePlacesFare() {
      this.isEditingPlacesFare = false;
    },
    cancelEditPlacesFare() {
      this.isEditingPlacesFare = false;
    },
    addPlace() {
      if (this.newPlace) {
        this.serviceDetail.workaround.push(this.newPlace);
        this.newPlace = "";
      }
    }
  },
};
</script>

<style scoped>
.section-header {
  margin-bottom: 24px;
}

.header-title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 12px;
  color: #0d3a5a;
}

.go-back-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #0d3a5a;
  text-decoration: none;
  font-weight: 600;
}

.caregiver-section {
  display: flex;
  gap: 24px;
}

.caregiver-preview-card {
  width: 340px;
  flex-shrink: 0;
  align-self: flex-start;
  background: #fff;
  border-radius: 10px;
  padding: 16px;
  border: 1px solid black;
}

.offer-description {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 12px;
  color: #0d3a5a;
}

.caregiver-img {
  width: 100%;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  border-radius: 10px;
}

.caregiver-card {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 12px;
}

.caregiver-card-name {
  font-size: 20px;
  font-weight: 600;
  color: #0d3a5a;
}

.caregiver-card-item {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #0d3a5a;
}

.caregiver-card-item .label {
  font-weight: bold;
  color: #0d3a5a;
}

.caregiver-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
}

.caregiver-biography,
.caregiver-schedule,
.caregiver-places-fare {
  background: #fff;
  border-radius: 10px;
  padding: 16px;
  position: relative;
  border: 1px solid black;
}

.caregiver-biography h2,
.caregiver-schedule h2,
.caregiver-places-fare h2 {
  margin-top: 0;
  color: black;
}

.edit-icon {
  position: absolute;
  top: 16px;
  right: 16px;
  background: #e0e0e0;
  border-radius: 50%;
  padding: 8px;
  cursor: pointer;
}

.edit-icon .material-icons {
  color: #0d3a5a;
}

.schedule-actions {
  display: flex;
  gap: 12px;
  margin-top: 12px;
}

.schedule-actions button {
  border-radius: 5px;
  padding: 8px 16px;
  cursor: pointer;
}

.schedule-actions button:first-child {
  background: #0d3a5a;
  color: #fff;
}

.schedule-actions button:last-child {
  background: #fff;
  color: #0d3a5a;
  border: 1px solid #0d3a5a;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid black;
  padding: 8px;
  text-align: left;
}
</style>
