<script setup>
import { ref } from 'vue'
import ChildComponent from './ChildProp.vue';

const myDate = ref(new Date())
setInterval(() => {
  myDate.value = new Date()
}, 500)
</script>

<template>
  <div class="parent">
    <h1>首頁</h1>
    <ChildComponent
      :myMessage1="myDate"
    />
  </div>
</template>
