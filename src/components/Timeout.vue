<template>
  <div>
    <h1>倒计时：{{ timeLeft }}秒</h1>
    <button @click="start">开始</button>
    <button @click="stop">结束</button>
    <button @click="reset">重置为{{ duration }}</button>
  </div>
</template>

<script setup lang="ts">
import { useCountdown } from "../composables/timeOut";

const duration = 45;

const { timeLeft, start, stop, reset } = useCountdown(duration);
</script>

<style scoped>
</style>