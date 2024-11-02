<template>
    <div>
        <p>当前计数器的值：{{ count }}</p>
        <button @click="increament">增加</button>
        <button @click="descreament">减少</button>
        <button @click="deleteActive">清空</button>
    </div>
</template>

<script setup lang="ts">
import {useCounter} from '../composables/useCounter'

const { count,increament,descreament,deleteActive} = useCounter(10)

</script>

<style scoped>

</style>