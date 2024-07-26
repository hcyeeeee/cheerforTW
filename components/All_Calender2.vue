<template>
    <div class="sss">
        <a href="https://www.ftvmall.com.tw/link/795/" target="_blank">
            <img src="../assets/A2.gif" alt="">
        </a>
        <div class="calender">

            <div class="title">
                <a href="https://www.ftvnews.com.tw/topics/cheerforTaiwan/Schedule">
                    <div>台將賽程</div>
                </a>
            </div>
            <div class="calender_content">
                <div>
                    <div class="infogram-embed" data-id="4afe998a-5131-4710-ac25-1ef2bdfc1f96" data-type="interactive">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.ad_out {
    display: flex;
    flex-direction: column;
}

.calender {

    .title {
        background-image: url('../assets/yellowbg.png');
        color: rgb(0, 0, 0);
        font-weight: 500;
        background-size: cover;
        background: linear-gradient(to right, red, blue);

        color: white;
    }

    .calender_content {


        .calender_content_title {
            border-radius: 100px;
            width: fit-content;
            margin: auto;
            padding: .5rem 1rem;
            font-size: 1.1rem;

        }

        .calender_content_activity {
            padding: 1rem .5rem;
            font-size: 1.1rem;
        }
    }

}

@mixin pad {
    @media(min-width: 768px) {
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
        background: white;
        box-shadow: $Bg-Shadow;
        padding: 0rem 0.5rem 1rem;
        border-radius: 1rem;
        top: 4rem;
    }

    .title {
        color: #fff;
        height: 100%;
        width: 30px;
        min-height: 20px !important;
        text-align: center;
        padding: 20px 10px;
        border-radius: 1rem 0rem 0rem 1rem;
        font-size: 1.2rem;


        @include pad {
            color: #fff !important;
            width: 100%;
            padding: 1rem 0.5rem;
            border-radius: 1rem 1rem 0rem 0rem;
            display: flex;
            justify-content: center;
            align-items: center;
        }


        div {
            color: #fff !important;
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


.sss {
    display: none;

    @include pad {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: fit-content;
        height: fit-content;
        position: sticky;
        padding: 0rem 1rem;
        border-radius: 1rem;
        margin-top: 4.5rem;
        gap: 1rem;


        img {
            box-shadow: $Bg-Shadow;
        }
    }
}
</style>