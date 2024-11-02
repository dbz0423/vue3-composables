<template>
  <div>
    <div class="phone-input-container">
      <label for="phone-number">手机号码：</label>
      <input
        id="phone-number"
        v-model="phoneNumber"
        type="tel"
        placeholder="请输入手机号码"
      />
    </div>
    <div class="phone-input-container">
      <label for="phone-content">发送内容：</label>
      <input
        id="phone-content"
        v-model="phoneContent"
        type="tel"
        placeholder="请输入发送内容"
      />
    </div>
    <div>
      <button @click="handleSendSms">发送</button>
      <p
        v-if="smsSent"
        style="color: green; margin-left: 20px;"
      >{{ smsStatus }}</p>
      <p
        v-if="!smsSent"
        style="color: brown; margin-left: 20px;"
      >{{ smsStatus }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useSmsSender } from "../composables/messageSend";

const phoneNumber = ref();
const phoneContent = ref();
const { sendSms, smsSent, smsStatus } = useSmsSender();

function handleSendSms() {
  sendSms(phoneNumber.value, phoneContent.value);
}
</script>

<style scoped>
.phone-input-container {
  margin: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  display: flex;
  align-items: center;
}

label {
  margin-right: 10px;
  font-weight: bold;
}

input[type="tel"] {
  flex-grow: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
  font-size: 16px;
}

input[type="tel"]:focus {
  outline: none;
  border-color: #007bff;
}

button {
  margin-left: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}

button:active {
  background-color: #004494;
}

button:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.5);
}
</style>