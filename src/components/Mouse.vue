<template>
    <div>
        <p>鼠标魏智：x：{{ x }}，y：{{ y }}</p>
    </div>
</template>

<script setup lang="ts">
import { useMouse} from '@vueuse/core'

const { x , y} = useMouse()

</script>

<style scoped>

</style>