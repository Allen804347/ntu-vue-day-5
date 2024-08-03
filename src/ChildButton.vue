<script setup>
import { ref, defineProps, defineEmits } from 'vue'

const props = defineProps({
  count: {
    type: Number,
    required: true
  }
})

const emit = defineEmits(['childEvent'])

const add = () => {
  emit('childEvent');
}
</script>

<template>
  <button @click="add">{{ props.count }}</button>
</template>

<style scoped>
button {
  margin: 5px;
}
</style>