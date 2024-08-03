<script setup>
import { defineEmits } from 'vue'
const emits = defineEmits(['customEvent1', 'myEmit2']); // 回傳 Function

// emits('myEmit2', 1, 1) // Function
// emits('customEvent1', 1, 1) // Function

// 如果今天可以透過 parent 呼叫函數
// parent.myEmit2(1, 1)

const sendMessage = () => {
  const res = emits("customEvent1", '透過子元件更新的內容')
}
</script>

<template>
  <div>
    <h2>子元件</h2>
    <button @click="sendMessage">發送消息到父元件</button>
  </div>
</template>
