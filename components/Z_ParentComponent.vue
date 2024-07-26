<template>
  <div>
    <!-- 傳遞參數給子組件 -->
    <ChildComponent :message="parentMessage"/>
  </div>
</template>

<script>
import ChildComponent from './Z_ChildComponent.vue'; // 引入子組件

export default {
  components: {
    ChildComponent // 註冊子組件
  },
  data() {
    return {
      parentMessage: 'Hello from Parent' // 父組件中的數據
    }
  }
}
</script>