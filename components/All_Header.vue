<template>
  <div class="header">

    <!-- 電腦版 -->
    <div class="header_inner">
      <a href="https://www.ftvnews.com.tw/" target="_blank">
        <img loading="lazy" srcset="../assets/民視新聞網.png" class="logo" alt="民視新聞網" title="民視新聞網">
      </a>
      <div class="share">
        <a target="_blank"
          href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.ftvnews.com.tw%2Ftopics%2FcheerforTaiwan%2Findex.html&amp%3Bsrc=sdkpreparse">
          <img loading="lazy" srcset="../assets/facebook.png" alt="分享民視新聞專題">
        </a>
        <a href="https://social-plugins.line.me/lineit/share?url=https://www.ftvnews.com.tw/topics/cheerforTaiwan"
          target="_blank">
          <img loading="lazy" srcset="../assets/line.png" alt="lineshare">
        </a>
        <div class="localurl-style" id="social_link" @click="getLocalUrl">
          <img loading="lazy" srcset="../assets/share.png" alt="social_link">
        </div>
      </div>
    </div>
    <!-- 手機版 -->
    <div>
      <div class="empty" @click="closeMenu" :style="{ display: isMobileMenuVisible ? 'flex' : 'none' }"></div>
      <div class="mobile_nav">
        <h3 class="bars" @click="toggleMobileMenu">
          <i :class="'fa-solid ' + (isMobileMenuVisible ? 'fa-xmark' : 'fa-bars')"></i>
        </h3>
      </div>
      <div class="mobile_menu" :style="{ display: isMobileMenuVisible ? 'flex' : 'none' }">
        <a href="https://www.ftvnews.com.tw/topics/cheerforTaiwan/" @click="closeMenu">
          <img src="../assets/tower.png" alt="">
          奧運首頁</a>
        <a href="https://www.ftvnews.com.tw/topics/cheerforTaiwan/Athlete" @click="closeMenu">
          <img src="../assets/HomePresi.png" alt="">
          台將資訊
        </a>
        <a href="https://www.ftvnews.com.tw/topics/cheerforTaiwan/Schedule" @click="closeMenu">
          <img src="../assets/Homelegis.png" alt="">
          台將賽程
        </a>
        <a href="https://www.ftvnews.com.tw/topics/cheerforTaiwan/Knowledge" @click="closeMenu">
          <img src="../assets/policy.png" alt="">
          奧運學堂
        </a>
        <a href="https://www.ftvnews.com.tw/topics/cheerforTaiwan/Video" @click="closeMenu">
          <img src="../assets/video.png" alt="">
          影音專區
        </a>
        <div class="mobile_share">
          <a
            href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.ftvnews.com.tw%2Ftopics%2FcheerforTaiwan%2F&amp;src=sdkpreparse">
            <img srcset="../assets/facebook.png" alt="fb" target="_blank">
            Facebook
          </a>
          <a href="https://social-plugins.line.me/lineit/share?url=https://www.ftvnews.com.tw/topics/cheerforTaiwan"
            target="_blank">
            <img src="../assets/line.png" alt="line">
            Line
          </a>
          <a target="_blank" @click="getLocalUrl" id="btn">
            <img loading="lazy" src="../assets/share.png" alt="link" class="game">
            分享給好友
          </a>
        </div>
      </div>
    </div>
    <div class="bottom bottom_inner">
      <div>
        <a href="https://www.ftvnews.com.tw/topics/cheerforTaiwan/"> 奧運首頁</a>
        <p>|</p>
        <a href="https://www.ftvnews.com.tw/topics/cheerforTaiwan/Athlete">台將資訊</a>
        <p>|</p>
        <a href="https://www.ftvnews.com.tw/topics/cheerforTaiwan/Schedule">台將賽程</a>
        <p>|</p>
        <a @click="toggleMobileMenu">
          更多資訊
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMobileMenuVisible: false,
    }
  },
  methods: {
    getLocalUrl() {
      let e = document.createElement('input'),
        t = window.location.href + '?utm_source=cheerforTaiwan&utm_medium=copybutton'
      document.body.appendChild(e),
        (e.value = t),
        e.select(),
        document.execCommand('copy'),
        document.body.removeChild(e),
        alert('網址複製成功，立刻分享給你的好友吧！')
    },
    toggleMobileMenu() {
      this.isMobileMenuVisible = !this.isMobileMenuVisible;
    },
    closeMenu() {
      if (this.isMobileMenuVisible) {
        this.isMobileMenuVisible = false;
      }
    },
    webShareAPI(header, description, link) {
      navigator
        .share({
          title: header,
          text: description,
          url: link,
        })
        .then(() => console.log("Successful share"))
        .catch((error) => console.log("Error sharing", error));
    },
    shareContent() {
      this.webShareAPI("'2024巴黎奧運最新動態一次看", "", "https://www.ftvnews.com.tw/topics/cheerforTaiwan");
    },
  }, mounted() {
    if (this.navigatorSupport) {
      this.showButton = true;
    } else {
      console.error("Your Browser doesn't support Web Share API");
    }
  },
}
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

@mixin big {
  @media (min-width: 1400px) {
    @content;
  }
}

// Colors
$orange: #f08308;
$black: #353434;
$white: #ffffff;
$Bg-white: #fffcf7;
$Bg-Shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
$orangeLiner: (
  linear-gradient(115deg, #f07708 30.73%, #ff9823 32.81%, #f04e08 100%)
);

// Typography
$letter: 0.1rem;
$font-sm: 1rem;
$font-md: 1.2rem;
$gap-sm: 0.5rem;
$gap-md: 1rem;

a {
  font-family: "Noto Sans TC";
}

.header {
  display: flex;
  position: fixed;
  width: 100%;
  margin: auto;
  box-shadow: $Bg-Shadow;
  background: $white;
  z-index: 99;

  .header_inner {
    display: flex;
    justify-content: space-between;
    margin: auto;
    max-width: 1330px;
    width: 90%;
    background: $white;
  }

  .logo {
    width: 13rem;
    margin: auto;
    margin-left: -1rem;
    display: flex;
    align-items: center;
    justify-content: center;

    @include pad {
      width: 12.5rem;
    }
  }

  .share {
    display: flex;
    gap: $gap-sm;
    width: 150px;
    margin: auto;
    margin-right: 0rem;
    max-width: 1200px;
    justify-content: center;

    img {
      display: none;

      @include pad {
        display: flex;
        width: 40px;
      }
    }
  }

  .empty {
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.9);
    position: fixed;
    z-index: 99;
    top: 0rem;
    right: 0rem;
  }

  .bars {
    z-index: 999;
    position: fixed;
    top: 0rem;
    right: 0rem;
    color: white;
    font-size: 1.5rem;

    @include pad {
      display: none;
    }

    .fa-bars {
      width: 100%;
      background: rgba(110, 74, 255, 0.548);
      width: 20px;
      padding: 1rem 0rem;
      padding: 1rem;
    }

    .fa-xmark {
      margin-right: 0.5rem;
      padding: 1rem 0.5rem;
      color: #50191966;
      font-weight: 350;

      &::after {
        font-size: $font-sm;
        position: relative;
        top: 1px;
        font-weight: 500;
      }
    }
  }

  .mobile_menu {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 80vw;
    position: fixed;
    padding: 1rem;
    top: 0rem;
    right: 0rem;
    z-index: 99;
    background: rgb(248, 245, 245, 0.2);
    transition: all 1s;

    a {
      font-size: $font-md;
      color: $black;
      text-align: start;
      letter-spacing: $letter;
      display: flex;
      align-items: center;

      &:hover {
        color: #7a74fc;
        transition: 0s all;
        width: fit-content;
      }
    }

    img {
      width: 2rem;
    }
  }

  .mobile_share {
    border-top: 2px solid rgb(203, 203, 203, 0.5);
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    a {
      display: flex;
      gap: $gap-sm;


      img {
        height: 1.5rem;
        width: 1.5rem;
      }
    }
  }
}
</style>