<template>
  <div class="layout">
    <div class="icontitle">
      <img loading="lazy" srcset="../assets/HomePresi.png" alt="台將資訊">
      <h2>巴黎奧運台灣選手資訊</h2>
    </div>
    <div class="swiper_arrow">
      <div class="swiper-button-next arrow"> <font-awesome-icon icon="fa-duotone fa-play" style="width: 15px;" />
      </div>
      <swiper :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }" :breakpoints="{
        '10': {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        '350': {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        '1024': {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }" :centeredSlides="true" :Pagination="true" :autoplay="{ delay: 2000, disableOnInteraction: false }" :loop="true"
        :modules="modules" class="swiper_layout">
        <swiper-slide class="img_layout" v-for="(item, index) in news" :key="index">
          <img :src="'https://www.ftvnews.com.tw/topics/cheerfortaiwan/image/' + item.Title + '.jpg'"
            class="players_img" alt="" srcset="">
          <a :href="'/topics/cheerforTaiwan/Athlete?name=' + encodeURIComponent(item.Title)" target="blank">
            <div class="mask" v-bind:class="'img' + index">
              <p class="mask_title">{{ item.Title }}</p>
            </div>
          </a>
        </swiper-slide>
      </swiper>
      <div class="swiper-button-prev arrow"> <font-awesome-icon icon="fa-duotone fa-play " style="width: 15px;" />
      </div>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  name: 'App',
  data() {
    return {
      modules: [Autoplay, Navigation, Pagination],
      countdown: "",
      countdown2: "",
      news: [
        { Title: '戴資穎', ID: '/topics/cheerforTaiwan/Athlete' },
        { Title: '李洋', ID: '/topics/cheerforTaiwan/Athlete' },
        { Title: '王齊麟', ID: '/topics/cheerforTaiwan/Athlete' },
        { Title: '林郁婷', ID: '/topics/cheerforTaiwan/Athlete' },
        { Title: '羅嘉翎', ID: '/topics/cheerforTaiwan/Athlete' },
        { Title: '郭婞淳', ID: '/topics/cheerforTaiwan/Athlete' },
        { Title: '雷千瑩', ID: '/topics/cheerforTaiwan/Athlete' },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
@mixin pad {
  @media (min-width: 768px) {
    @content;
  }
}

.layout {
  font-family: "Zen Maru Gothic", "Noto Sans TC";

  .swiper_layout {
    width: 100%;


    @include pad {
      width: 100%;
    }

  }

  .swiper_arrow {
    display: flex;
    position: relative;

    .swiper-button-prev:after,
    .swiper-rtl .swiper-button-next:after {
      content: "\f0d9";
      font-family: "FontAwesome";
      color: rgb(183, 146, 247)
    }

    .swiper-button-next:after,
    .swiper-rtl .swiper-button-prev:after {
      content: "\f0da";
      font-family: "FontAwesome";
      color: rgb(199, 166, 255)
    }
  }

}

.mask {
  position: absolute;
  bottom: 0px;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(173, 149, 92, 0.2) 0%, rgb(0, 0, 0, .3) 33.6%);

  @include pad {
    background: linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, #7A74FC 100%);
    opacity: .1;
  }


  p {
    position: absolute;
    font-weight: 600;
    font-size: 2.3rem;
    padding: 1rem;
    letter-spacing: 0.3em;
    color: #FFFFFF;
    justify-content: center;
    letter-spacing: .5rem;
    align-items: center;
    text-align: center;
    letter-spacing: 0.1em;
    text-shadow: 1px 4px 5px rgba(0, 0, 0, 0.4);
    z-index: 77;

  }
}

.img_layout {
  position: relative;
  width: 100%;
  height: 200px;

  @include pad {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 200px;

  }

  a {
    @include pad {

      &:hover {
        .mask {
          opacity: 1;
          transition: .3s all;

          p {
            opacity: 1;
          }
        }
      }
    }


  }
}









.mask_title {
  position: absolute;
  font-weight: 500;
  font-size: 1.6rem;
  padding: 1rem;
  color: #FFFFFF;
  justify-content: center;
  align-items: center;
  text-align: justify;
  letter-spacing: 0.1em;
  color: #FFFFFF;
  text-shadow: 1px 4px 5px rgba(0, 0, 0, 0.4);
  z-index: 999;
  font-weight: 600;

  @include pad {
    text-align: center;
    font-size: 2.5rem;
  }
}




.players_img {
  height: 200px;
  object-fit: cover;
}


.layout {
  border-radius: 1rem;
  margin: 0rem auto 1rem;
  background: #fff;
  padding: 0rem;
  padding-bottom: 1rem;
  padding-top: .5rem;

  @include pad {
    padding: 1rem;
  }

}

.arrow {
  display: none;

  @include pad {
    display: block;
  }
}
</style>
