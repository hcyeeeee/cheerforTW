<template>
  <all-header />
  <div class="views gift_all">
    <div class="banner">
      <div>
        <div class="gift_banner">
          <picture>
            <source media="(max-width:650px)" srcset="../assets/gift.png">
            <img src="../assets/gift.png" style="width:100%;">
          </picture>
          <!-- <div class="text">
            <p class="vote-date">即日起至2024.08.11</p>
            <h1>巴黎奧運 人氣票選</h1>
            <h2 class="vote-intro">為選手加油即可抽獎</h2>
          </div> -->
        </div>
        <div class="">
          <div class="gift">
            <h2 id="one">超人氣選手</h2>
            <div class="swiper_arrow">
              <div class="swiper-button-next arrow"> <font-awesome-icon icon="fa-duotone fa-play"
                  style="width: 15px;" />
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
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                '1024': {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }" :centeredSlides="true" :Pagination="true" :autoplay="{ delay: 4000, disableOnInteraction: false }"
                :loop="true" :modules="modules" class="swiper_layout">
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
              <div class="swiper-button-prev arrow"> <font-awesome-icon icon="fa-duotone fa-play "
                  style="width: 15px;" />
              </div>
            </div>

            <h2 id="one">活動辦法</h2>
            <h3>
              每日一組手機號碼限投一次，天天參加，中獎機率越高!
              完成指定步驟『每日最高獲得三次中獎機會』
            </h3>
            <ul v-for="item in step" :key="index">
              <li :id="item.index" class="step">
                <div class="step_inner1"> STEP:{{ item.index }} &nbsp;
                  <div class="step_inner1_title border"><img src="../assets/gift-arrow.png" alt="">{{ item.title }}
                  </div>
                </div>
                <div class="step_inner2">{{ item.content }}
                </div>
              </li>
              <div class="shape-ex6"></div>
            </ul>
            <h2 id="one">人氣大獎</h2>
            <img src="../assets/realgift.png" alt="" style=" box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);">

            <!-- 開獎 -->
            <!-- <ul v-for="item of name">
              <li>
                <div class="name-title">姓名</div>
                <div class="name">{{ item }}</div>
              </li>
            </ul> -->
            <h3>- 將於2024年8月16日（週五）本網站上進行公告-</h3>
            <h2 id="one">注意事項</h2>
            <ul>
              <li>1.活動採隨機方式抽出參與者，主辦單位就本活動參加者之資格，保有審查之權利。</li>
              <li>2.網路人氣投票期間，任何不正當或利用電腦程式灌票，若經查出惡意灌票行為，將取消本獎項參賽資格。</li>
              <li>3. 本活動因故無法進行時，執行單位保有決定取消、終止、修改或暫停本活動之權利，詳情請密切注意官網之最新訊息票選規則。</li>
              <li>4. 本活動蒐集的個人資料(姓名、聯絡電話、電子郵件及其他任何可辨識資料本人者等)僅限本次活動使用，並於活動結束後三個月內銷毀。</li>
              <li>5.主辦單位保有變更獎品之權利。</li>
              <li>6.每一得獎者限獲得一項獎品(依寄送地址為依據)。</li>
              <li>7.中獎名單將在活動結束後於本活動網頁公告，中獎通知將會以「E-mail」形式進行通知，請確認您的會員資料是否填寫正確，若因資料有誤無法聯繫即喪失中獎資格。</li>
              <li>8.本活動獎品寄送地區僅限台灣地區(包含本島、金門、澎湖、馬祖及台灣政府行政權所及之其他地區)，恕無法寄送至海外。</li>
            </ul>
            <h2 id="one">加油應援團</h2>
            <img src="../assets/ftvmall.logo" alt="">
          </div>
        </div>
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
  data() {
    return {
      modules: [Autoplay, Navigation, Pagination],
      isVisible: false,
      step: [
        {
          index: '1',
          title: '分享貼文',
          content: "至FB或Threads分享活動貼文至個人專頁後，複製該貼文連結",
          small: "(下載完成後截圖手機桌布畫面)"
        },
        {
          index: '2',
          title: '進行投票及預測',
          content: "[ 團結挺台灣 ]為你最愛的台將投下神聖的一票預測[ 台將人氣王]、或成為[ 奪牌預言家 ]可在獲得兩次投票機會，並完成表單填寫",
          small: "(需將本活動貼文分享至個人FB或IG貼文，並設定公開截圖該畫面)"
        },
        {
          index: '3',
          title: '進行投票及預測',
          content: "為你喜愛的選手投一票，並完成表單填寫",
          small: "(至表單進行投票，並上傳STEP1及STEP2之截圖)"
        },
      ],
      news: [
        { Title: '戴資穎', ID: '/topics/cheerforTaiwan/Athlete' },
        { Title: '李洋', ID: '/topics/cheerforTaiwan/Athlete' },
        { Title: '王齊麟', ID: '/topics/cheerforTaiwan/Athlete' },
        { Title: '林郁婷', ID: '/topics/cheerforTaiwan/Athlete' },
        { Title: '羅嘉翎', ID: '/topics/cheerforTaiwan/Athlete' },
        { Title: '郭婞淳', ID: '/topics/cheerforTaiwan/Athlete' },
        { Title: '雷千瑩', ID: '/topics/cheerforTaiwan/Athlete' },
      ],
      name: ["黃心意", "黃心意1", "黃心意2"],
      Q1zone: [
        {
          question: "本屆巴黎奧運，如何將景點與賽事互相結合呢？",
          answer: "開幕式就在塞納河上！P.S.馬克宏還答應在裡面游泳",
          link: "/"
        },
        {
          question: "巴黎奧運門票售價多少?",
          answer: "根據官網最便宜為24歐元（相當於841.75台幣），價格最高者為2700歐元（相當於台幣94,696元）",
          link: "/time"
        },
        {
          question: "比完奧運後，會場會淪為蚊子館嗎？",
          answer: "巴黎奧運95%為現有場館和臨時場館，像是會在凡爾賽宮花園舉行馬術比賽等。",
          link: "/time"
        }
      ],
      Q2zone: [
        {
          question: "首見紫色跑道！為何今年是用紫色？",
          answer: "奧運組委會表示，目的是呈現出強烈的視覺效果，並讓運動員脫穎而出。",
          link: "/player"
        },
        {
          question: "那些你不知道的吉祥物小知識",
          answer: "以法國的弗里吉亞帽為靈感而誕生，是革命、法蘭西與自由的象徵。",
          link: "/time"
        },
        {
          question: "今年奧運，新增/減少了哪些比賽項目？",
          answer: "今年奧運新增了霹靂舞、攀岩、滑板、衝浪，取消空手道、棒球及壘球等項目。",
          link: "/time"
        },
      ],
    }
  },
  setup() {
    return {
      modules: [Pagination, Navigation, Autoplay],
    };
  },
}

</script>

<style lang="scss" scoped>
@mixin pad {
  @media (min-width: 768px) {
    @content;
  }
}

$pureple: rgba(203, 108, 230, 1);
$dark-purple: rgba(175, 74, 204, 1);
$border: 2px solid white;

.gift {
  margin: auto;
  width: 90%;
}

.border {
  border: $border;
  border-radius: 2rem;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

h2 {
  text-align: center;
  color: $dark-purple;
  border-bottom: 3px solid rgba(160, 227, 236, 0.8);
  width: fit-content;
  margin: 1rem auto;
}

.gift_banner {
  position: relative;
  margin-top: 5rem;

  h1 {
    color: #ca6ce6;
    font-size: 2.5rem;
    width: 100%;
    font-weight: 600;
    text-shadow:
      1px 1px 0 #00FFFF, // Cyan shadow
      -1px -1px 0 #ff5dff, // Pink shadow
      // Adjust shadows according to your needs
  }
}

.text {
  position: absolute;
  top: 40%;
  left: 5%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .vote-intro {
    text-align: end;
  }

  .vote-date {
    font-size: 1.2rem;
    color: #00FFFF; // Cyan color
    justify-content: end !important;
    margin-left: 0;
  }
}


h3 {
  color: rgba(9, 130, 138, 1);
  text-align: center;
  text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin: 1rem auto;
}

.step {
  display: flex;
  flex-direction: row;
  border: 2px solid rgba(203, 108, 230, 1);
  border-radius: 100px;

  div {
    color: white;
    display: flex;
    flex-direction: row;

  }

  .step_inner1 {
    width: 100%;
    background: rgba(203, 108, 230, 1);
    border: 2px solid rgba(203, 108, 230, 1);
    border-radius: 75px;
    display: flex;
    justify-content: center;
    align-items: center;

    div {
      color: white;
      display: flex;
      flex-direction: row;
      padding: 10px;
    }

    .step_inner1_title {
      img {
        width: 30px;
        height: 30px;
      }
    }

  }

  .step_inner2 {
    width: 100%;
    padding: 2%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    color: rgba(203, 108, 230, 1);

    .step_inner2_small {
      position: absolute;
      color: white;
      font-size: .8rem;
      top: 90%;
      z-index: 999;
    }
  }
}




li {
  color: rgba(74, 68, 68, 1);

}

.shape-ex6 {
  height: 50px;
  width: 20vw;
  background-color: rgba(175, 74, 204, 1);
  display: block;
  margin: 0 75px;
  position: relative;
  margin: auto;

  @include pad {
    width: 30vw;
  }
}

.shape-ex6::before {
  content: '';
  width: 0;
  height: 0;
  display: block;
  border-left: 75px solid rgba(175, 74, 204, 1);
  border-bottom: 50px solid transparent;
  position: absolute;
  top: 0;
  left: 100%;
}

.shape-ex6::after {
  content: '';
  width: 0;
  height: 0;
  display: block;
  border-bottom: 50px solid transparent;
  border-right: 75px solid rgba(175, 74, 204, 1);
  position: absolute;
  top: 0;
  right: 100%;
}
</style>
