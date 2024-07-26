<template>
  <div>
    <div class="marquee_layout">
      <div class="marquee_title">
        <p>快訊</p>
      </div>
      <swiper :autoplay="{ delay: 2500, disableOnInteraction: false }" :modules="modules" class="mySwiper">
        <swiper-slide class="marquee" v-for="item in news" :key="item.id">
          <a :href="'https://www.ftvnews.com.tw/news/detail/' + item.ID + '?utm_source=cheerforTaiwan&utm_medium=homepage'"
            target="_blank" rel="noopener noreferrer" :title=item.Title>
            {{ item.Title.replace("快新聞／", "") }}</a>
        </swiper-slide>
      </swiper>
      <!-- <div class="count_mb">
        <p class="count-title">奧運倒數 </p>
        <p class="count-num">{{ day }}</p>
        <p class="count-text">天</p>
      </div> -->
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      modules: [Autoplay],
      countdown: "",
      news: [],
      day: "",
    }
  },
  methods: {
    fetchNews() {
      var myHeaders = new Headers();
      myHeaders.append("TokenKey", "z1x2c3v4b5n6m78i9o0pftv8859");
      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
      fetch("https://ftvapi2.ftvnews.com.tw/API/FtvGetNewsWebV2.aspx?sp=10&Cate=奧運", requestOptions)
        .then(response => response.json())  // Assuming the response is in JSON format
        .then(result => {
          this.news = result.ITEM;   // Set the data
        })
        .catch(error => console.log('error', error));
    },
    startCountdown() {
      const targetDate = new Date("2024/7/27 0:00").getTime();
      const countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const timeDifference = targetDate - now;

        if (timeDifference <= 0) {
          clearInterval(countdownInterval);
          this.countdown = "！現正開票中！";
        } else {
          const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
          const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
          this.day = days;
          this.hours = hours;
          this.mins = minutes;
          this.secs = seconds;
        }
      }, 1000);
    }
  },
  mounted() {
    this.fetchNews();
    this.startCountdown();
  },
};
</script>

<style lang="scss" scoped>
@mixin phone {
  @media (min-width: 500px) {
    @content;
  }
}

@mixin pad {
  @media (min-width: 768px) {
    @content;
  }
}

@mixin web {
  @media (min-width: 1000px) {
    @content;
  }
}

.marquee_layout {
  width: 100%;
  margin: 1rem auto;
  display: flex;
  max-width: 1400px;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;


  @include pad {
    width: 100%;
    margin: auto auto 1rem;
    background: #fff9ee;
  }

  .mySwiper {
    background: #FFDA92;
    background-image: url('../assets/marqueenews.png');
    background-size: cover;
    background-repeat: no-repeat;
    color: white;
    overflow: hidden;
    border-radius: 0px 10px 10px 0;

    @include pad {
      border-radius: 0px 10px 10px 0;
      padding: .6rem;
    }
  }
}



.marquee {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  overflow: hidden;


  @include pad {
    border-radius: 0px;
    font-size: 1.2rem;
    justify-content: start;

  }

  a {
    color: white;
    text-align: justify;
    line-height: 120%;
    text-overflow: ellipsis;
    display: -webkit-box;
    height: 38px;
    overflow: hidden;
    margin: .5rem;
    font-size: 1rem;

    @include phone {
      height: auto;
      padding: 0rem .8rem;
      margin: 0rem;
      font-size: 1.1rem;
    }

    @include pad {
      font-size: 1.2rem;
      padding: 0rem .8rem;
    }
  }


}

.marquee_title {
  color: #FFF;
  text-align: center;
  font-style: normal;
  font-weight: 400;
  border-radius: 15px 0 0 15px;
  font-size: 1rem;
  background: linear-gradient(115deg, #f07708 30.73%, #ff9823 32.81%, #f04e08 100%);
  background-image: url('../assets/marqueetitle.png');

  @include pad {
    width: 5rem;
    display: flex;
    flex-direction: row;
    font-size: 1.2rem;
  }

  p {
    padding: 0 .3rem;
    font-size: 1.1rem;
    font-weight: 400;

    @include pad {
      width: 100px;
      font-size: 1.2rem;
    }
  }
}
</style>