<script setup>
import { reactive, ref } from 'vue'
import Child from './ChildButton.vue'

const l3Values = reactive([1, 1, 1])
const l2Values = ref([])
const l1Values = ref([])

const calLv2 = () => {
  l2Values.value = [0]
  for (let i = 1; i < l3Values.length - 1; i++) {
    l2Values.value[i - 1] = l2Values.value[i - 1] || 0
    l2Values.value[i] = l2Values.value[i] || 0
    l2Values.value[i - 1] += l3Values[i]
    l2Values.value[i] += l3Values[i]
  }
  l2Values.value[0] += l3Values[0]
  l2Values.value[l3Values.length - 2] += l3Values[l3Values.length - 1]
}
calLv2()

const calLv1 = () => {
  l1Values.value = [0]
  for (let i = 1; i < l2Values.value.length - 1; i++) {
    l1Values.value[i - 1] = l1Values.value[i - 1] || 0
    l1Values.value[i] = l1Values.value[i] || 0
    l1Values.value[i - 1] += l2Values.value[i]
    l1Values.value[i] += l2Values.value[i]
  }
  l1Values.value[0] += l2Values.value[0]
  l1Values.value[l2Values.value.length - 2] += l2Values.value[l2Values.value.length - 1]
}
calLv1()

const l3Event = (index) => {
  l3Values[index] += 1
  calLv2()
  calLv1()
}
</script>

<template>
  <div style="padding-left: 32px;">
    <Child v-for="value, index in l1Values" :key="index" :count="value"/>
  </div>
  <div style="padding-left: 16px;">
    <Child v-for="value, index in l2Values" :key="index" :count="value"/>
  </div>
  <div>
    <Child v-for="value, index in l3Values" :key="index" :count="value" @childEvent="l3Event(index)"/>
  </div>
  <div>
    <p>1. 只有第三層的按鈕點了會增加數字，一二層點了不會變動數字</p>
    <p>2. 每一層的按鈕的數字，取決於自己下層，左下和右下的數字。但最小不會小於 1</p>
    <p>3. 使用 vue component 完成，並妥善運用 prop 和 emit 達到資料的一致性</p>
    <p>4. 排版僅供參考，作業只需要表現出階層關係即可</p>
  </div>
</template>
