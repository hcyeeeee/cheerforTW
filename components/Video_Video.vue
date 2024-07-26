<template>
    <div>
        <div class="home-video">
            <div class="layout2">
                <div class="icontitle">
                    <img loading="lazy" srcset="../assets/video.png" alt="">
                    <h2>巴黎奧運精彩影音 </h2>
                </div>
                <div class="video-menu">
                    <div class="video-container">
                        <iframe width="100%" height="100%"
                            src="https://www.youtube.com/embed/videoseries?si=RD8_hiBgPV0DWTGQ&amp;list=PLkP0kGDs5Otcqx2wPvKQfWDFF9ia74aVm"
                            title="YouTube video player" frameborder="0" name="video-frame"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.video-container {
    position: relative;
    padding-bottom: 56.25%;
    /* 16:9 */
    height: 0;
}

.video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 1rem;
}

.home-video {
    display: flex;
    margin-bottom: 1rem;
}
</style>