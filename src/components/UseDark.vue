<template>
  <button @click="toggleDark()">切换</button>
</template>

<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<style >
.light {
  background-color: #ffffff;
  color: #000;
}

.dark {
  background-color: #000;
  color: #fff;
}
</style>