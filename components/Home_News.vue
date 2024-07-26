<template>
    <div class="layout">
        <div class="icontitle">
            <img loading="lazy" srcset="../assets/HomePresi.png" alt="">
            <h2>巴黎奧運最新消息</h2>
        </div>
        <div class="dsd">
            <div class="swiper-imgnews">
                <swiper :autoplay="{ delay: 4000, disableOnInteraction: false }" :modules="modules" class="swiper-news">
                    <swiper-slide v-for="item in news" :key="item.id">
                        <img loading="lazy" :srcset="item.Image" :alt="item.Title">
                        <a class="link inner  newsssss"
                            :href="'https://www.ftvnews.com.tw/news/detail/' + item.ID + '?utm_source=cheerforTaiwan&utm_medium=homepage'"
                            target="_blank" rel="noopener noreferrer" :title=item.Title>
                            <i class="fa-duotone fa-play"></i> {{ item.Title.replace("快新聞／", "") }}</a>
                    </swiper-slide>
                </swiper>
            </div>

            <div class="news news_out">
                <a class="link"
                    :href="'https://www.ftvnews.com.tw/news/detail/' + item.ID + '?utm_source=cheerfortaiwan&utm_medium=president'"
                    target="_blank" v-for="(item, index) in news" :key="index">
                    <div class="inner">
                        <i class="fa-duotone fa-play"></i>
                        <h3 class="title">
                            {{ item.Title }}
                        </h3>
                    </div>

                </a>
            </div>

        </div>
        <div class="more">
            <a class="caption" href="https://www.ftvnews.com.tw/tag/奧運" target="_blank">看更多相關新聞<i
                    class="fa-solid fa-angles-right"></i></a>
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
            news: [],
            activeTab: 'main',
            selectedCandidateIndex: null,
        };
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

            fetch("https://ftvapi2.ftvnews.com.tw/API/FtvGetNewsWebV2.aspx?sp=5&Cate=奧運", requestOptions)
                .then(response => response.json())  // Assuming the response is in JSON format
                .then(result => {
                    console.log(result);  // Optional: log the result
                    this.news = result.ITEM;   // Set the data
                })
                .catch(error => console.log('error', error));
        },
    },
    mounted() {
        this.fetchNews()
    },
}

</script>

<style lang="scss" scoped>
@mixin phone {
    @media (min-width: 550px) {
        @content;
    }
}

@mixin pad {
    @media (min-width: 768px) {
        @content;
    }
}

.otter {
    display: grid;
    flex-direction: row;
    grid-template-columns: 1fr 1fr;
}

.dsd {
    display: flex;
    gap: .8rem;
    flex-direction: column;

    @include pad {
        flex-direction: row;
    }
}


.inner {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: .8rem;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
    padding: .5rem;
    margin: auto;
    border-radius: .5rem;
    line-height: 120%;
    color: black;
    background: white;
    font-size: 1.1rem;
}

.fa-play {}


.news {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}



.dsd {
    gap: 0rem;

    @include pad {
        gap: 1rem;
    }

    img {
        object-fit: cover;
        height: 180px;
        border-radius: .5rem;


        @include phone {
            height: 250px;
        }

        @include pad {
            height: 280px;
        }
    }
}

.news_out {
    border-radius: 0px 0px 10px 10px;

    @include pad {
        border-radius: 10px;
    }
}

.newsssss {
    color: white;
    text-align: justify;
    font-size: 1.1rem;
    letter-spacing: 1px;
    border-radius: 10px;
    background: linear-gradient(to right, #ff1a3c, #00008B);

    @include pad {
        font-size: 1.2rem;
    }
}

.swiper-news .news .link .inner .title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
    /* 确保元素是块级元素 */
    width: 100%;
    padding: 1rem;
}

.swiper-imgnews {
    width: 100%;
    margin: auto;

    @include pad {
        width: 50%;
    }
}
</style>