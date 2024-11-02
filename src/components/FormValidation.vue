<template>
  <div>
    <form @submit.prevent="validateForm">
      <div
        v-for="field in Object.keys(rules)"
        :key="field"
        class="form-group"
      >
        <label :for="field">{{ field }}</label>
        <input
          :id="field"
          v-model="formState.form[field]"
          type="text"
        />
        <p
          v-if="formState.errors[field]"
          class="error"
        >{{ formState.errors[field] }}</p>
      </div>
      <button
        type="submit"
        :disabled="!formState.isValid"
      >提交验证</button>
    </form>
  </div>
</template>
  
  <script setup lang="ts">
import { useFormValidation } from "../composables/formValidation";

const rules = {
  username: (value: string) => value.length > 3,
  password: (value: string) => value.length > 5,
  email: (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
};

const { formState, validateForm, setFieldValue } = useFormValidation(rules);
</script>
  
  <style scoped>
.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.error {
  color: red;
  font-size: 0.8em;
}
</style>