<script setup>
import ChildComponent from './ChildEmit.vue';
import { ref } from 'vue';

const receivedMessage = ref('父元件的內容');

const testFunction = (message) => {
  receivedMessage.value = message;
  return message
};

</script>

<template>
  <div>
    <h1>父元件</h1>
    <ChildComponent v-on:customEvent1="testFunction"></ChildComponent>
    <ChildComponent @customEvent1="testFunction"></ChildComponent>
    <p>接收到的消息：{{ receivedMessage }}</p>
  </div>
</template>
