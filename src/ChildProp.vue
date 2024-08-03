<script setup>
import { defineProps } from 'vue' // 非必要

const props = defineProps({
  message1: Number, // 錯誤型別
  message2: { // 詳細定義
    type: String,
    required: true
  },
  'my-message1': {
    type: String,
    required: true
  },
})

// console.log(message1) // 會出錯
console.log(props.message1)
// props.message1 = 'new value' // 不允許

</script>

<template>
  <div class="children">
    <h2>子元件</h2>
    <p>{{ message1 }}</p><!-- 在 template 允許省略 props -->
    <p>{{ props.message1 }}</p>
    <p>{{ message2 }}</p>
    <p>{{ myMessage1 }}</p>
  </div>
</template>
