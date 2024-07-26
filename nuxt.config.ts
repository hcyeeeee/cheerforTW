export default defineNuxtConfig({
  css: ['~/assets/css/reset.scss'],
  modules: ['nuxt-gtag'],
  gtag: {
    id: 'G-TG5GXFRX62'
  },
  app: {
    baseURL: "/topics/cheerforTaiwan",
    head: {
      title: '2024巴黎奧運最新動態｜奧運賽程、選手資訊、賽程影音、獲獎獎牌一次看',
      meta: [
        {
          name: "description",
          content:
            "2024巴黎奧運熱鬧登場，大家最關心的巴黎奧運每日賽程、台灣選手出賽名單、運動項目、奧運門票售價都在這裡，民視新聞為您不斷更新奧運資訊。",
        },
        {
          property: "og:description",
          content:
            "2024巴黎奧運熱鬧登場，大家最關心的巴黎奧運每日賽程、台灣選手出賽名單、運動項目、奧運門票售價都在這裡，民視新聞為您不斷更新奧運資訊。",
        },
        {
          property: "og:title",
          content:
            "2024巴黎奧運最新動態｜奧運賽程、選手資訊、賽程影音、獲獎獎牌一次看",
        },
        {
          property: "og:url",
          content: "https://www.ftvnews.com.tw/topics/cheerforTaiwan",
        },
        {
          property: "og:locale",
          content: "zh_TW",
        },
        {
          property: "og:image",
          content: "https://www.ftvnews.com.tw/topics/cheerforTaiwan/img/metaimg.png",
        },
        {
          property: "fb:app_id",
          content: "157389381527660",
        },
        {
          property: "og:image:width",
          content: "1200",
        },
        {
          property: "og:image:height",
          content: "640",
        },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://kit.fontawesome.com/745a06c6e1.css',
          crossorigin: "anonymous",
        },
        {
          rel: "icon",
          href: "https://cdn.ftvnews.com.tw/client/images/favicons/favicon.ico",
        }, 
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: "anonymous",
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100..900&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@300;400;500;700;900&display=swap',
        }
      ],
      script: [
        {
          src: "https://unpkg.com/aos@2.3.1/dist/aos.js",
          async: true, 
        },
        {
          id: "infogram_0_9d51da7f-afa0-43ef-8d96-c407c4b96433",
          src: "https://e.infogram.com/js/dist/embed.js?yCD",
          type: "text/javascript",
        },
        {
          src: "https://kit.fontawesome.com/745a06c6e1.js",
          crossorigin: "anonymous",
        },
      ],
    }
  }
})