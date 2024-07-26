<template>
    <div class="calender">
        <div class="calender_content" style="background-color: white;">
            <div class="calender-inner">
                <a class="icontitle" href="https://www.ftvnews.com.tw/topics/cheerforTaiwan/">
                    <img src="../assets/tower.png" alt="">
                    <h1>奧運首頁</h1>

                </a>
                <a class="icontitle" href="https://www.ftvnews.com.tw/topics/cheerforTaiwan/Athlete">
                    <img src="../assets/HomePresi.png" alt="">
                    <div>台將資訊</div>
                </a>
                <a class="icontitle" href="https://www.ftvnews.com.tw/topics/cheerforTaiwan/Schedule">
                    <img src="../assets/Homelegis.png" alt="">
                    <div>台將賽程</div>
                </a>
                <a class="icontitle" href="https://www.ftvnews.com.tw/topics/cheerforTaiwan/Knowledge">
                    <img src="../assets/policy.png" alt="">
                    <div>奧運學堂</div>
                </a>
                <a class="icontitle" href="https://www.ftvnews.com.tw/topics/cheerforTaiwan/video">
                    <img src="../assets/video.png" alt="">
                    <div>影音專區</div>
                </a>

            </div>
        </div>
        <div class="calender_content1">
            <div>
                <div class="infogram-embed" data-id="16572780-3048-410f-af6a-9e48e649d801" data-type="interactive">
                </div>
            </div>
        </div>
    </div>


</template>

<style lang="scss" scoped>
@mixin pad {
    @media(min-width: 768px) {
        @content;
    }
}

$Bg-Shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);


.calender {
    display: none;

    @include pad {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: fit-content;
        height: fit-content;
        position: sticky;
        top: 4rem;
        padding: 0rem 0.5rem 1rem;
        border-radius: 1rem;
        margin-top: 4.5rem;

    }


    .title {
        height: 100%;
        width: 30px;
        text-align: center;
        border-radius: 1rem 0rem 0rem 1rem;
        font-size: 1.2rem;
        color: rgb(0, 0, 0);
        font-weight: 500;
        background-size: cover;
        background: linear-gradient(to right, red, blue);
        color: white;
        padding: 20px 0;

        @include pad {
            width: 100%;
            border-radius: 1rem 1rem 0rem 0rem;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    .calender_content {
        display: flex;
        padding: 1rem;
        flex-direction: column;
        gap: 1rem;
        width: 125px;
        overflow: hidden;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
        border-radius: 1rem 1rem;

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




.calender_content1 {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 150px;
    overflow: hidden;
    margin-top: 1rem;


    div {
        text-align: center;
    }
}


h1 {
    margin: auto;

}
</style>