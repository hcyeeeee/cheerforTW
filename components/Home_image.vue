<template>
  <div class=" layout">
    <div class="icontitle">
      <img loading="lazy" srcset="../assets/HomePresi.png" alt="">
      <h2>巴黎奧運最新圖輯</h2>
    </div>
    <div class="photo-gallery">
      <div class="galleryinner">
        <i @click="prevSlide" class="fa-solid fa-caret-right fa-3x rotate"></i>
        <div class="main-slider">
          <div class="slide" v-for="(slide, index) in slides" :key="index" :class="{ active: index === currentIndex }">

            <template v-if="index === 0">
              <a href="https://www.ftvmall.com.tw/link/796/" target="_blank">
                <img :srcset="'https://www.ftvnews.com.tw/topics/cheerforTaiwan/img/' + slide.ID + '.jpg'"
                  alt="Slide image" />
                <div class="gallery_title">{{ slide.Title }}</div>
              </a>
            </template>
            <template v-else>
              <img :srcset="'https://www.ftvnews.com.tw/topics/cheerforTaiwan/img/' + slide.ID + '.jpg'"
                alt="Slide image" />
              <div class="gallery_title">{{ slide.Title }}</div>
            </template>

          </div>

        </div>
        <i @click="nextSlide" class="fa-solid fa-caret-right fa-3x "></i>
      </div>
      <div class="thumbnails">
        <div target="_blank" v-for="(slide, index) in slides" :key="index">
          <img :srcset="'https://www.ftvnews.com.tw/topics/cheerforTaiwan/img/' + slide.ID + '.jpg'"
            :class="{ active: index === currentIndex }" @click="goToSlide(index)" alt="Thumbnail image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        { Title: '娘家挺小戴，巴黎奪金！', ID: 'AD1', A: 'https://www.ftvmall.com.tw/link/796/' },
        { Title: '賴清德總統與選手丁華恬。（圖／體育署）', ID: 'f8' },
        { Title: '賴清德總統（左）致贈奧運圓滿御守，由霹靂舞選手孫振代表接受並開心合影。（圖／體育署）', ID: 'f5' },
        { Title: '我國參加2024年第33屆巴黎奧林匹克運動會代表團授旗典禮全體合影。（圖／體育署）', ID: 'f4' },
        { Title: '行政院卓榮泰院長（第2排右7）、教育部張廖萬堅政務次長（第2排右5）、體育署鄭世忠署長（第2排右4）與代表團成員合影。', ID: 'f3' },
        { Title: '行政院卓榮泰院長(中)親赴桃園機場為巴黎奧運代表團送機，並與代表隊選手及教練合影。', ID: 'f2' },
        { Title: '賴清德總統為我國參加第33屆巴黎奧運代表團授旗時(左為教育部張廖萬堅政務次長，右為中華奧會林鴻道主席）。（圖／體育署）', ID: 'f1' },
        { Title: '射擊好手楊昆弼、拳擊選手吳詩儀為奧運進場服走秀。（圖／民視新聞）', ID: 'd1' },
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
@mixin small {
  @media (min-width: 400px) {
    @content;
  }
}

@mixin phone {
  @media (min-width: 500px) {
    @content;
  }
}

@mixin six {
  @media (min-width: 600px) {
    @content;
  }
}

@mixin pad {
  @media (min-width: 768px) {
    @content;
  }
}

@mixin eig {
  @media (min-width: 800px) {
    @content;
  }
}

@mixin nin {
  @media (min-width: 900px) {
    @content;
  }
}

@mixin web {
  @media (min-width: 1000px) {
    @content;
  }
}

@mixin big {
  @media (min-width: 1200px) {
    @content;
  }
}

.photo-gallery {
  display: grid;
  grid-template-columns: 1fr;

  @include pad {
    grid-template-columns: 1fr;
    gap: .5rem;
  }

  @include web {
    grid-template-columns: 1fr;
    gap: 1rem
  }

  @include big {
    grid-template-columns: 8fr 3fr;
    gap: 1rem
  }
}

.main-slider {
  position: relative;
  object-fit: cover;
  overflow: hidden;
  width: 100%;
  margin: auto;
  height: 200px;
  padding-bottom: 2rem;

  @include small {
    height: 250px;
    padding-bottom: 0rem;
  }

  @include phone {
    height: 280px;
  }

  @include six {
    height: 300px;

  }


  @include pad {
    height: 200px;

  }

  @include eig {
    height: 260px;
    padding-bottom: 0rem;
  }

  @include nin {
    height: 280px;
    padding-bottom: 0rem;
  }

  @include web {
    height: 330px;
    width: 90%;
    object-fit: cover;

  }

  @include big {
    height: 320px;
    width: 90%;
    object-fit: cover;

  }
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  /* 確保 slide 覆蓋整個容器寬度 */
  height: 100%;
  /* 確保 slide 覆蓋整個容器高度 */
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  object-fit: cover;

  img {
    object-fit: cover;
    aspect-ratio: 2 / 1;
    height: 100%;
    max-height: 170px;

    @include small {
      max-height: 200px;
    }

    @include phone {
      max-height: 230px;
    }

    @include six {
      max-height: 250px;
    }

    @include pad {
      max-height: 160px;
    }

    @include eig {

      max-height: 200px;
    }

    @include nin {
      max-height: 220px;
      padding-bottom: 0rem;
    }

    @include web {
      max-height: 290px;
      margin: auto;
      justify-content: center;
      display: flex;
    }

    @include big {
      max-height: 280px;
    }
  }
}

.slide.active {
  opacity: 1;
}

.thumbnails {
  display: grid;
  width: 100%;
  overflow: wrap;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: space-around;
  gap: 10px;


  @include pad {

    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @include big {
    margin-top: 0rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}

.thumbnails img {
  cursor: pointer;
  opacity: 0.6;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
  transition: opacity 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  overflow: wrap;
  aspect-ratio: 2 / 1;
  max-height: 80px;
  object-fit: cover;

  @include phone {
    display: flex;
  }

  @include pad {
    display: flex;
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

  @include phone {
    display: block;
  }

  @include pad {

    display: none;
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
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;

  @include web {
    max-width: 600px;
    margin: auto;
  }
}

a {
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;

}
</style>
