<template>
    <div class="calender">
        <div>
            <div class="infogram-embed" data-id="16572780-3048-410f-af6a-9e48e649d801" data-type="interactive">
            </div>
        </div>
        <h1 class="title">
            巴黎奧運
        </h1>
        <div class="calender_content">
            <div class="calender-inner">
                <a class="icontitle" href="https://www.ftvnews.com.twtopics/cheerforTaiwan/">
                    <img src="../assets/tower.png" alt="">
                    <div>奧運首頁</div>
                </a>
                <a class="icontitle" href="https://www.ftvnews.com.twtopics/cheerforTaiwan/Athlete">
                    <img src="../assets/HomePresi.png" alt="">
                    <div>台將資訊</div>
                </a>
                <a class="icontitle" href="https://www.ftvnews.com.twtopics/cheerforTaiwan/Schedule">
                    <img src="../assets/Homelegis.png" alt="">
                    <div>台將賽程</div>
                </a>
                <a class="icontitle" href="https://www.ftvnews.com.twtopics/cheerforTaiwan/Knowledge">
                    <img src="../assets/policy.png" alt="">
                    <div>奧運學堂</div>
                </a>
                <a class="icontitle" href="https://www.ftvnews.com.twtopics/cheerforTaiwan/video">
                    <img src="../assets/video.png" alt="">
                    <div>影音專區</div>
                </a>

            </div>
        </div>
        <div>
            <div>

            </div>
        </div>
    </div>
    <div class="infogram-embed" data-id="16572780-3048-410f-af6a-9e48e649d801" data-type="interactive">
    </div>
</template>
<script>
export default {
    mounted() {
        this.loadInfogramScript();
    },
    methods: {
        loadInfogramScript() {
            if (!document.getElementById('infogram-embed-script')) {
                const script = document.createElement('script');
                script.id = 'infogram-embed-script';
                script.src = 'https://e.infogram.com/js/dist/embed-loader-min.js';
                script.async = true;
                document.body.appendChild(script);
            }
        }
    }
};
</script>

<style lang="scss" scoped>
@mixin pad {
    @media (min-width: 768px) {
        @content;
    }
}

$Bg-Shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);

.calender-inner {
    font-size: 1.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: .5rem;

    div {
        margin: auto;
    }
}

.router-link-active {
    color: #7a77f4;
}



.calender {
    display: none;

    @include pad {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: fit-content;
        height: fit-content;
        box-shadow: $Bg-Shadow;
        position: sticky;
        top: 4rem;
        padding: 0rem 0.5rem 1rem;
        border-radius: 1rem;
        margin-top: 4.5rem;
    }

    .title {
        color: #fff;
        height: 100%;
        width: 30px;
        min-height: 20px !important;
        text-align: center;
        padding: 20px 10px;
        border-radius: 1rem 0rem 0rem 1rem;
        font-size: 1.4rem;

        @include pad {
            width: 100%;
            padding: 1rem 0.5rem;
            border-radius: 1rem 1rem 0rem 0rem;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    .calender_content {
        display: flex;
        padding: 1rem 0.2rem;
        flex-direction: column;
        gap: 1rem;
        width: 130px;
        overflow: hidden;

        .calender-inner {
            border-bottom: 1px solid rgba(246, 184, 123, 0.4);
            padding-bottom: 0.8rem;

            &:last-child {
                border-bottom: none;
                padding-bottom: 0rem;
            }
        }

        div {
            text-align: center;
        }
    }
}
</style>