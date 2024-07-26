<template>
  <div class="views">
    <All_Marquee />
    <All_Banner />

    <div class="layout">
      <div class="icontitle">
        <img loading="lazy" srcset="../assets/Homelegis.png" alt="">
        <h2>台將賽程表</h2>
        <span class="caption"><i class="fa-solid fa-right"></i>巴黎奧運台灣選手最新完整賽程不斷更新</span>
      </div>
      <div>
        <div class="infogram-embed" data-id="8a214fc9-3d0a-43fd-9cbc-9cde8a11fba1" data-type="interactive"
          data-title="巴黎奧運賽程表">
        </div>
      </div>
    </div>
    <All_ad />
    <Player_News />
  </div>
</template>

<script setup>
useHead({
  title: "2024巴黎奧運｜台灣選手奧運賽程一次看",
  meta: [
    { property: "og:title", content: "2024巴黎奧運｜台灣選手奧運賽程一次看" },
    { name: "description", content: "2024巴黎奧運，民視每天帶大家看最關心的台灣選手奧運賽程 : 羽球、田徑、游泳、體操、射擊、舉重、擊劍、柔道、高爾夫、跆拳道、霹靂舞、網球、桌球、射箭..等賽程資訊" },
    {
      property: "og:description",
      content: "2024巴黎奧運，民視每天帶大家看最關心的台灣選手奧運賽程 : 羽球、田徑、游泳、體操、射擊、舉重、擊劍、柔道、高爾夫、跆拳道、霹靂舞、網球、桌球、射箭..等賽程資訊",
    },
  ],
});
</script>
<style lang="scss" scoped>
.list {
  display: grid;
  grid-template-columns: 1fr;

}

ul {
  flex-direction: row;
  width: fit-content;
  justify-content: start;
  gap: 1rem;
  margin: auto;
  display: flex;
  cursor: pointer;
  flex-wrap: nowrap;
  overflow-x: scroll;
  width: 90%;


  li {
    font-size: 1.2rem;
    font-weight: 500;
    letter-spacing: 0.1rem;
    padding: 0.2rem;
    border-bottom: 2px solid #d9d9d9;

    &:hover,
    &:active,
    &:focus {
      border-bottom: 2px solid #ffa500;
    }
  }
}

.active {
  background: rgba(255, 122, 0, 0.20);
  border-bottom: 2px solid #f08308 !important;
}

.layout {
  overflow: hidden;
}

.scroll {
  display: flex;
}

.beforbtn,
.afterbtn {
  cursor: pointer;
  margin: .5rem
}


.time {
  border-radius: 100px;
  width: 80%;
  margin: auto;
  padding: .5rem 1rem;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
  background: rgba(244, 244, 244, 1);
  ;

}

thead {
  tr {
    background: linear-gradient(to right, #1E3CFF, #E387FF);
    color: white;
  }
}

hr.gradient {
  border: 0;
  height: 2px;
  background: linear-gradient(to right, #00008B, #FFB6C1);
}

tr {
  margin: .5rem 0;
}
</style>
