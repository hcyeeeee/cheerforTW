<template>
    <div class="layout flip pc">
        <div class="icontitle">
            <img loading="lazy" srcset="../assets/HomePresi.png" alt="">
            <h2>巴黎奧運學堂
            </h2>
            <span class="caption"><i class="fa-solid fa-right"></i>隨時更新奧運小知識，記得持續關注喔！
            </span>
        </div>

        <div class="flipbigzone">
            <div class="card-container " v-for="item in Q1zone" :key="item.label">
                <div class="card-container1-title">
                    觀賽小問答
                </div>
                <div class="cover bg-blue zone">
                    <div class="cover_inner">
                        <div class="Qicon">?</div>
                        <p> {{ item.question }}</p>
                    </div>
                    <div class="seeA">
                        看答案
                    </div>
                </div>
                <div class="back bg-blueA zone">
                    <div class="back_inner back-blue">
                        <div class="Aicon"><i class="fa-solid fa-lightbulb-on"></i></div>
                        <p> {{ item.answer }}</p>
                    </div>
                    <a href="https://www.ftvnews.com.tw/news/detail/2024628W0231" class="seeA" target="_blank">
                        看更多
                    </a>
                </div>
            </div>
            <div class="card-container" v-for="item in Q2zone" :key="item.label">
                <div class="card-container1-title">
                    知識補給站
                </div>
                <div class="cover bg-green zone">
                    <div class="cover_inner ">
                        <div class="Qicon">?</div>
                        <p> {{ item.question }}</p>
                    </div>
                    <div class="seeA">
                        看答案
                    </div>
                </div>
                <div class="back bg-greenA zone">
                    <div class="back_inner back-green">
                        <div class="Aicon"><i class="fa-solid fa-lightbulb-on"></i></div>
                        <p> {{ item.answer }}</p>
                    </div>
                    <a href="https://www.ftvnews.com.tw/news/detail/2024628W0232" class="seeA" target="_blank">
                        看更多
                    </a>
                </div>
            </div>
            <div class="card-container " v-for="item in Q3zone" :key="item.label">
                <div class="card-container1-title">
                    台將一點通
                </div>
                <div class="cover bg-purple zone">
                    <div class="cover_inner">
                        <div class="Qicon">?</div>
                        <p> {{ item.question }}</p>
                    </div>
                    <div class="seeA">
                        看答案
                    </div>
                </div>
                <div class="back bg-purpleA zone">
                    <div class="back_inner back-pruple">
                        <div class="Aicon"><i class="fa-solid fa-lightbulb-on"></i></div>
                        <p> {{ item.answer }}</p>
                    </div>
                    <a href="https://www.ftvnews.com.tw/news/detail/2024628W0233" class="seeA" target="_blank">
                        看更多
                    </a>
                </div>
            </div>
        </div>
        <div class="more">
            <a class="caption" href="https://www.ftvnews.com.tw/tag/奧運小學堂" target="_blank">看更多奧運小知識<i
                    class="fa-solid fa-angles-right"></i></a>
        </div>
        <div v-for="item in Question" data-aos="fade-right" :key="item.id" class="Question" @click="closeMenu(item)">
            <div class="qatitle" @click="toggle(item)">
                <img loading="lazy" srcset="https://www.ftvnews.com.tw/topics/cheerforTaiwan/img/Q.png" alt="">
                <h3> {{ item.Q }}</h3>
                <i :class="'fa-solid ' + (item.isVisible ? ' fa-angle-up' : ' fa-angle-down')"></i>
            </div>
            <div class="qatitle" :style="{ display: item.isVisible ? 'flex' : 'none' }">
                <br>
                <img loading="lazy" srcset="https://www.ftvnews.com.tw/topics/cheerforTaiwan/img/A.png" alt="">
                <a :href="item.link" target="_blank">
                    <h3>{{ item.A }}</h3>
                </a>
            </div>
        </div>

    </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectFlip, Pagination, Navigation, Autoplay } from 'swiper/modules';


export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            isVisible: false,
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
            Q3zone: [
                {
                    question: "總計有幾位選手參賽？參加了哪幾個項目？",
                    answer: "總計有60位選手，參賽項目總計16大項。",
                    link: "/"
                },
                {
                    question: "最後的舞台！巴黎奧運將是哪些台將的最後一戰？",
                    answer: "戴資穎、李洋已宣布此行為生涯最終戰。",
                    link: "/player"
                },
                {
                    question: "你該關注！新生代台將有哪些人?",
                    answer: "射箭台灣隊的李彩綺，桌球台灣隊的簡彤娟、高承睿，擊劍台灣隊的陳弈通等人，均首次進入奧運殿堂。",
                    link: "/time"
                },
            ],
            Question: [
                {
                    Q: '最環保的奧運會？帶你一次看今年一系列措施！',
                    A: '使用既有場館、大量使用可回收素材、降低碳排放，以創造一個不同的永續模式。詳細資訊看這邊！',
                    link: "https://www.ftvnews.com.tw/news/detail/2024701W0326"
                },
                {
                    Q: '為什麼今年辦在巴黎?	',
                    A: '由國際奧委會（IOC）審理決定。而巴黎奧運，更早在7年前就獲得主辦資格。',
                    link: "https://www.ftvnews.com.tw/news/detail/2024628W0232"
                },
                {
                    Q: '巴黎奧運LOGO好像美容院招牌?!',
                    A: '它融合了金牌、聖火及瑪麗安娜的臉龐，是史上首次以人臉象徵作為標誌。詳細資訊看這邊！',
                    link: "https://www.ftvnews.com.tw/news/detail/2024628W0231"
                },
                {
                    Q: '大家都住在哪裡？如何前往賽場？',
                    A: '可以選擇住飯店或民宿，並搭乘地鐵或接駁公車前往賽場。詳細資訊看這邊！',
                    link: "https://www.ftvnews.com.tw/news/detail/2024628W0231"
                }
            ]
        }
    },
    setup() {
        return {
            modules: [EffectFlip, Pagination, Navigation, Autoplay],
        };
    },
    methods: {
        toggle(question) {
            question.isVisible = !question.isVisible;
        }, closeMenu(clickedItem) {
            this.Question.forEach(item => {
                if (item !== clickedItem) {
                    item.isVisible = false;
                }
            });
        },
    },
}

</script>

<style lang="scss" scoped>
@mixin small {
    @media (min-width: 300px) {
        @content;
    }
}

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

@mixin computer {
    @media (min-width: 1024px) {
        @content;
    }
}



.Qicon {
    color: orange;
    font-size: 1.8rem;
    text-align: center;
    font-weight: 600;
    margin: .5rem auto;
}

.Aicon {
    color: orange;
    font-size: 1.8rem;
    text-align: center;
    font-weight: 600;
    margin: .5rem auto;
}



.flip {
    .flipbigzone {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1rem;

        @include phone {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
        }


        @include computer {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 1rem;
            max-width: 1000px;
            margin: auto;
        }
    }

    .card-container {

        height: 250px;
        position: relative;
        cursor: pointer;

        .bg-blue {
            background-color: #60aadf;
        }

        .bg-green {
            background-color: #519b95;
        }

        .bg-purple {
            background-color: #7B86BF;
        }

        .bg-blueA {
            background-color: #60aadf;
        }

        .bg-greenA {
            background-color: #519b95;
        }

        .bg-purpleA {
            background-color: #7B86BF;
        }


        .cover,
        .back {
            color: #000000;
            font-size: .9rem;
            position: absolute;
            backface-visibility: hidden;
            transition: transform .2s ease-in-out;
            display: flex;
            gap: 1rem;
            border-radius: .5rem;
            object-fit: cover;
            transform: rotatey(0deg);
            margin: auto;
            font-family: "Zen Maru Gothic";
            width: 100%;
            height: 100%;

            @include computer {
                font-size: 1.2rem;
                width: 100%;
                height: 100%;
            }

        }

        .back {
            transform: rotatey(-180deg);
            border-radius: .5rem;
        }

    }

    .card-container:hover .cover {
        transform: rotatey(180deg);

        @include computer {
            transform: rotatey(180deg);
        }

    }

    .card-container:hover .back {
        transform: rotatey(0deg);
    }


    .zone {
        background-position: center;
        background-size: cover;
        border-radius: .5rem;
        display: flex;
        gap: 1rem;
        justify-content: center;
        position: relative;
        margin: auto;

        @include pad {
            width: auto;
            height: 300px;
        }
    }

}



.card-container1 {
    border: 1px solid black;
    background-image: url('../assets/A3.png');
    width: 100%;
    height: 100%;
    background-size: contain;
}

.card-container_out {
    display: grid;
    grid-template-columns: 1fr 1fr;
    border: 1px solid;
    border-radius: 5px;

    .cover1,
    .back1 {

        color: #000000;
        font-size: 1.2rem;
        position: relative;
        backface-visibility: hidden;
        transition: transform .2s ease-in-out;
        gap: 1rem;
        border-radius: .5rem;
        object-fit: cover;
        transform: rotatey(0deg);
        margin: auto;
        font-family: "Zen Maru Gothic",
    }
}

.card-container1-title {
    font-size: 4rem;
}



.card-container1-title {
    transform: rotate(-10deg);
    font-size: 1.5rem;
    border-radius: 20px;
    background: rgb(242, 200, 187);
    width: fit-content;
    padding: .5rem 1rem;

    box-shadow: rgba(0, 0, 0) 5px 5px 0px, rgba(0, 0, 0) 0px 5px 0px;
    z-index: 88;
    font-weight: 500;
    font-family: "Zen Maru Gothic", "Noto Sans TC";
    position: absolute;
    top: 1rem;
    left: .5rem;

}


.cover_inner {
    width: 70%;
    transform: rotate(4deg);
    z-index: -1;
    margin: 2rem auto;
    background: rgb(248, 232, 227);
    box-shadow: rgba(0, 0, 0) 5px 5px 0px, rgba(0, 0, 0) 0px 5px 0px;
    padding: 1rem;

    text-align: center;
    display: flex;
    flex-direction: column;

    p {
        transform: rotate(-4deg);
        margin: -2rem auto;
        font-size: 1.1rem;
    }

}


.back_inner {
    width: 70%;
    transform: rotate(0deg);
    z-index: -1;
    margin: 2rem auto;
    background: rgb(248, 232, 227);
    border-radius: 10px;
    padding: 1rem;
    font-size: 1.1rem;
    text-align: justify;

    p {
        margin: -1.5rem auto;
        font-size: 1rem;
    }
}


.back-blue {
    box-shadow: rgba(0, 0, 0) 5px 5px, #254352 10px 10px, #254352 15px 15px, #254352 20px 20px;
}

.back-green {
    box-shadow: rgba(0, 0, 0) 5px 5px, #2D6D68 10px 10px, #2D6D68 15px 15px, #2D6D68 20px 20px;
}

.back-pruple {
    box-shadow: rgba(0, 0, 0) 5px 5px, #2D3F6D 10px 10px, #2D3F6D 15px 15px, #2D3F6D 20px 20px;
}


.seeA {
    transform: rotate(0deg);
    font-size: 1rem;
    background: rgb(209, 180, 250);
    width: fit-content;
    padding: .2rem .4rem;
    border: 1px solid black;
    z-index: 88;
    font-family: "Zen Maru Gothic", "Noto Sans TC";
    position: absolute;
    right: 50px;
    bottom: 6%;
}


.pc {
    display: none;

    @include pad {
        display: block;
    }
}


.Question {
    border-radius: 1rem;
    background: #fcfcfc;
    display: flex;
    flex-direction: column;
    margin: 1rem auto;
    cursor: pointer;
    box-shadow: 1.95px 1.95px 2.6px 0px rgba(0, 0, 0, 0.15);
    transition: 1s all;

    &:hover {
        background: #f6f6f6;
    }

}

.qatitle {
    width: 95%;
    padding: 1rem 0;
    display: flex;
    margin: auto;
    align-items: center;
    transition: 1s all;

    img {
        width: 40px;
    }

    p {
        display: flex;
        align-items: center;
        justify-content: start;
        margin: auto .5rem;
        font-weight: 400;
        width: 100%;
        font-size: 1rem;
        transition: 1s all;
    }

    i {
        justify-content: end;
        margin-right: 0rem;


    }

    h3 {
        width: 100%;
        font-size: 1rem
    }
}

.lazybag {
    &:hover {
        opacity: .9;
    }
}
</style>