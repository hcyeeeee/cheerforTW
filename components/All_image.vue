<template>
  <div class="layout  All_image">
    <div class="icontitle">
      <img loading="lazy" srcset="../assets/HomePresi.png" alt="">
      <h2>精彩圖輯</h2>
    </div>
    <div class="photo-gallery">
      <div class="galleryinner">
        <i @click="prevSlide" class="fa-solid fa-caret-right fa-3x rotate"></i>
        <div class="main-slider">

          <div class="slide" v-for="(slide, index) in slides" :key="index" :class="{ active: index === currentIndex }">
            <img :srcset="'https://www.ftvnews.com.tw/topics/cheerforTaiwan/img/' + slide.ID + '.jpg'"
              alt="Slide image" />
            <div class="gallery_title"> {{ slide.Title }}</div>
          </div>

        </div>
        <i @click="nextSlide" class="fa-solid fa-caret-right fa-3x "></i>
      </div>
      <div class="thumbnails">
        <img v-for="(slide, index) in slides" :key="index"
          :srcset="'https://www.ftvnews.com.tw/topics/cheerforTaiwan/img/' + slide.ID + '.jpg'"
          :class="{ active: index === currentIndex }" @click="goToSlide(index)" alt="Thumbnail image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        { Title: '賴清德總統與選手丁華恬。（圖／體育署）', ID: 'f8' },
        { Title: '賴清德總統（左）致贈奧運圓滿御守，由霹靂舞選手孫振代表接受並開心合影。（圖／體育署）', ID: 'f5' },
        { Title: '我國參加2024年第33屆巴黎奧林匹克運動會代表團授旗典禮全體合影。（圖／體育署）', ID: 'f4' },
        { Title: '行政院卓榮泰院長（第2排右7）、教育部張廖萬堅政務次長（第2排右5）、體育署鄭世忠署長（第2排右4）與代表團成員合影。', ID: 'f3' },
        { Title: '行政院卓榮泰院長(中)親赴桃園機場為巴黎奧運代表團送機，並與代表隊選手及教練合影。', ID: 'f2' },
        { Title: '賴清德總統為我國參加第33屆巴黎奧運代表團授旗（左為教育部張廖萬堅政務次長，右為中華奧會林鴻道主席）。（圖／體育署）', ID: 'f1' },
        { Title: '射擊好手楊昆弼、拳擊選手吳詩儀為奧運進場服走秀。（圖／民視新聞）', ID: 'd1' },
        { Title: '奧運進場服走秀。（圖／民視新聞）', ID: 'd2' },
        // { Title: '行政院卓榮泰院長視察選手休息空間並小試身手。（圖／體育署）', ID: 'c1' },
        { Title: '行政院院長卓榮泰（前排左2）在國訓中心選手餐廳給巴黎奧運舉重選手郭婞淳（前排右）加油打氣。（圖／體育署）', ID: 'c2' },
        { Title: '巴黎奧運及帕運轉播記者會，選手齊聚鼓勵大家收看精彩賽事（圖／體育署）', ID: 'c4' },
        // { Title: '行政院卓榮泰院長視察選手休息空間並小試身手（圖／體育署）', ID: 'c5' },
        { Title: '選手們宣示前進巴黎的決心，也和可愛的吉祥物合影。（圖／國訓中心）', ID: 'a1' },
        { Title: '陳念琴貼上最後一塊拼圖，完成奧運金牌的宣誓儀式。（圖／國訓中心）', ID: 'a2' },
        { Title: '選手們和貴賓完成「灌溉」金牌的儀式後合影。（圖／國訓中心）', ID: 'a5' },
        { Title: '農業部藉著活動，宣布臺灣農業支持臺灣選手的方案（圖／國訓中心）', ID: 'a6' },
      ],
      currentIndex: 0,
      interval: null,
    };
  }, mounted() {
    this.startAutoSlide();
  },
  beforeDestroy() {
    this.stopAutoSlide();
  },
  methods: {
    startAutoSlide() {
      this.interval = setInterval(this.nextSlide, 5000); // 每3秒切换一次幻灯片
    },
    stopAutoSlide() {
      clearInterval(this.interval);
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    },
    prevSlide() {
      this.currentIndex =
        (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    },
    goToSlide(index) {
      this.currentIndex = index;
    },
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

.photo-gallery {
  display: grid;
  grid-template-columns: 1fr;
}

.main-slider {
  position: relative;
  height: 260px;
  object-fit: cover;
  overflow: hidden;
  width: 100%;
  margin: auto;

  @include phone {
    height: 280px;
    width: 100%;

  }

  @include web {
    width: 90%;
    height: 350px;
    object-fit: cover;

  }
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  object-fit: cover;

  img {
    height: 200px;
    object-fit: cover;

    @include phone {
      height: 230px;
      width: 100%;
      margin: auto;
      object-fit: cover;
      display: flex;

    }


    @include pad {
      height: 200px;
      width: 90%;
      margin: auto;
      object-fit: cover;
      display: flex;

    }

    @include web {
      width: 100%;
      height: 300px;
      object-fit: cover;
      display: flex;
    }

  }
}

.slide.active {
  opacity: 1;
}

.thumbnails {
  display: flex;
  justify-content: start;
  width: 100%;
  overflow: wrap;
  display: flex;

  justify-content: space-around;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: .5rem;

  @include web {
    margin-top: 0;
    justify-content: center;
  }
}

.thumbnails img {
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 22%;
  overflow: wrap;
  height: 55px;
  object-fit: cover;



  @include web {
    height: 100px;
    border-radius: 5px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
  }
}

.thumbnails img.active,
.thumbnails img:hover {
  opacity: 1;
}

.fa-caret-right {
  display: none;
  cursor: pointer;
  margin: auto;
  color: rgb(183, 146, 247);

  @include pad {
    display: block;
  }

  @include web {
    display: block;
  }
}

.rotate {
  transform: rotate(180deg);
}

.galleryinner {
  display: flex;
  flex-direction: row;
}

.gallery_title {

  display: flex;
  justify-content: center;
  color: rgb(2, 2, 2);
  position: relative;
  z-index: 9;
  padding: .3rem;
  font-size: 1rem;
  text-align: justify;
  border-radius: 0 0 10px 10px;
  color: rgb(68, 68, 68);
}



.All_image {
  margin-bottom: 4rem;
}
</style>
