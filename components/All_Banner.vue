<template>
    <div class="banner">
        <div>
            <div class="layout-h1">
                <picture>
                    <source media="(max-width:650px)" srcset="../assets/banner_mb.png">
                    <img src="../assets/banner.png"  style="width:100%;">
                </picture>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            countdown: "",
            day: "",
            hours: "",
            mins: "",
            secs: "",
        }
    },
    methods: {
        startCountdown() {
            const targetDate = new Date("2024/7/27 00:00").getTime();
            const countdownInterval = setInterval(() => {
                const now = new Date().getTime();
                const timeDifference = targetDate - now;

                if (timeDifference <= 0) {
                    clearInterval(countdownInterval);
                    this.countdown = "";
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
    mounted() { // 修正了生命周期钩子
        this.startCountdown(); // 直接调用倒数计时函数
    }
};
</script>


<style lang="scss">
img {
    width: 100%;
}


.layout-h1 {
    background-size: cover;
    width: 100%;
}

.layout-h1 {
    position: relative;
    width: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    margin-bottom: 10px;
    letter-spacing: 1px;

    h1 {
        line-height: 1.5;
        position: absolute;
        text-align: center;
        transform: rotate(-3deg);
        top: 0rem;



        span {
            color: #f90cfdea;
            text-shadow: 0px 0 rgba(0, 0, 0, 0.865), 3px 0px black, 3px 1px black,
                2px 0px rgba(0, 0, 0, 0.702), 2px -0px black;
            font-size: 3rem;
            font-weight: bold;
            letter-spacing: 0.2rem;
        }
    }
}
</style>