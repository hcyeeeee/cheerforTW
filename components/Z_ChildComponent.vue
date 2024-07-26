<template>
  <div>
    <!-- 顯示傳遞過來的消息 -->
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  props: {
    message: { // 定義一個名為 message 的 prop
      type: String, // prop 的類型
      required: true // 這個 prop 是必需的
    }
  }
}
</script>