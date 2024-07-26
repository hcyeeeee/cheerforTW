<template>
  <div class="views">
    <All_Marquee />
    <All_Banner />
    <Home_image />
    <All_ad />
    <Video_Video />
    <All_image />
  </div>
</template>
<script setup>
useHead({
  title: "2024巴黎奧運｜奧運賽程影音、精彩圖輯",
  meta: [
    { property: "og:title", content: "2024巴黎奧運｜奧運賽程影音、精彩圖輯" },
    { name: "description", content: "民視新聞網提供 2024 巴黎奧運的精采賽程影音及圖輯，讓你不會錯過巴黎奧運任何一場精采瞬間，欣賞每位台灣選手在巴黎奧運的精彩表現。" },
    {
      property: "og:description",
      content: "民視新聞網提供 2024 巴黎奧運的精采賽程影音及圖輯，讓你不會錯過巴黎奧運任何一場精采瞬間，欣賞每位台灣選手在巴黎奧運的精彩表現。",
    },
  ],
});
</script>
<style lang="scss" scoped>
@mixin phone {
  @media (min-width: 500px) {
    @content;
  }
}

ul {
  flex-direction: row;
  width: 90%;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10%;
  margin: auto;
  display: flex;
  cursor: pointer;

  @include phone {
    width: 90%;
    gap: 1rem;
  }

  li {
    font-size: 1.2rem;
    white-space: nowrap;
    font-weight: 500;
    letter-spacing: 0.1rem;
    border-bottom: 2px solid #d9d9d9;
    padding: 0.1rem 0;

    &:hover,
    &:active,
    &:focus {
      border-bottom: 2px solid #ffa500;
    }
  }
}

.video-container {
  position: relative;
  padding-bottom: 56.25%;
  /* 16:9 */
  height: 0;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
}

// s</style>
