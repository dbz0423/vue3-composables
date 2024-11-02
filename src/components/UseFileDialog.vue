<template>
  <button
    type="button"
    @click="open()"
  >
    Choose file
  </button>
</template>

<script setup lang="ts">
import { useFileDialog } from "@vueuse/core";

const { files, open, reset, onCancel, onChange } = useFileDialog({
  accept: "image/*", // Set to accept only image files
  directory: true, // Select directories instead of files if set true
});

onChange((files) => {
  /** do something with files */
});

onCancel(() => {
  /** do something on cancel */
});
</script>

<style scoped>
</style>