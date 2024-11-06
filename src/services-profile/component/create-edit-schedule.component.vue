<template>
  <pv-dialog
    :visible="true"
    :header="editMode ? 'Update your schedule' : 'Enter a new schedule'"
    :modal="true"
    :closable="false"
    @hide="handleCancel"
  >
    <form @submit.prevent="handleSubmit" class="card-form">
      <div>
        <pv-dropdown
          v-model="scheduleForm.day"
          :options="daySelectOptions"
          optionLabel="label"
          placeholder="Select a day"
          required
          class="w-full"
        />
      </div>

      <div>
        <div class="p-field">
          <label for="startTime">Start hour</label>
          <pv-input-text v-model="scheduleForm.startTime" id="startTime" required />
        </div>
      </div>

      <div>
        <div class="p-field">
          <label for="endTime">End hour</label>
          <pv-input-text v-model="scheduleForm.endTime" id="endTime" required />
        </div>
      </div>

      <div class="p-dialog-footer">
        <pv-button label="Cancel" class="p-button-secondary" @click="handleCancel" />
        <pv-button :label="editMode ? 'Update' : 'Add'" type="submit" class="p-button-primary" />
      </div>
    </form>
  </pv-dialog>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  name: "CreateEditScheduleComponent",
  components: {
    Dialog,
    Dropdown,
    InputText,
    Button,
  },
  props: {
    data: {
      type: Object,
      default: null,
    },
  },
  setup(props) {
    const editMode = ref(false);
    const scheduleForm = ref({
      day: "",
      startTime: "",
      endTime: "",
    });

    const daySelectOptions = [
      { value: "mon", label: "Monday" },
      { value: "tue", label: "Tuesday" },
      { value: "wed", label: "Wednesday" },
      { value: "thu", label: "Thursday" },
      { value: "fri", label: "Friday" },
      { value: "sat", label: "Saturday" },
      { value: "sun", label: "Sunday" },
    ];

    onMounted(() => {
      if (props.data) {
        editMode.value = true;
        scheduleForm.value = {
          day: props.data.day,
          startTime: props.data.workHours.startTime,
          endTime: props.data.workHours.endTime,
        };
      }
    });

    const handleSubmit = () => {
      const schedule = {
        day: scheduleForm.value.day,
        workHours: {
          startTime: scheduleForm.value.startTime,
          endTime: scheduleForm.value.endTime,
        },
      };
      emit("submit", { schedule, editMode: editMode.value });
      isVisible.value = false;
    };

    const handleCancel = () => {
      isVisible.value = false;
      emit("cancel");
    };

    watch(isVisible, (newVal) => {
      if (!newVal) emit("update:visible", false);
    });

    return {
      isVisible,
      editMode,
      scheduleForm,
      daySelectOptions,
      handleSubmit,
      handleCancel,
    };
  },
};
</script>

<style scoped>
.card-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.p-dialog-footer {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}
</style>
