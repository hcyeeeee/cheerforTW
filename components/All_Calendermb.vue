<template>
    <div class="layout">
        <div class="icontitle">
            <!-- <img loading="lazy" srcset="../assets/map.png" alt=""> -->
            <img loading="lazy" src="../assets/tower.png" alt="">
            <h2>今日賽程</h2>
        </div>
        <div v-for="(tab, index) in tabs" :key="index" v-show="activeTab === index">
            <div class="infogram-embed" :data-id="tab.link" data-type="interactive" :data-title="'2024大選-' + tab.label">
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            tabs: [
                { label: '2024年', link: '4afe998a-5131-4710-ac25-1ef2bdfc1f96' },
                { label: '2020年', link: '0ed95ff8-d441-4d6a-b74f-3f5f05f9b76e' },
                { label: '2016年', link: '0ee18735-d808-4d4e-b00c-bca4b906ce8a' },
                { label: '2012年', link: '4c8f7092-a088-4e47-ba62-1856495110b8' },
            ],
            flourishSrc: "visualisation/14873406",
            activeTab: 0,
        };
    },
    methods: {
        activateTab(index) {
            this.activeTab = index; // 点击选项卡时设置选中的选项卡索引
        },
        loadFlourishScript() {
            const script = document.createElement("script");
            script.src = "https://public.flourish.studio/resources/embed.js";
            script.async = true;
            script.defer = true;
            document.body.appendChild(script);
        }
    },
    mounted() {
        this.loadFlourishScript();
    },

};
</script>
<style lang="scss" scoped>
ul {
    flex-direction: row;
    width: 90%;
    justify-content: center;
    gap: 1rem;
    margin: auto;
    display: flex;
    cursor: pointer;

    li {
        font-size: 1.2rem;
        font-weight: 500;
        letter-spacing: 0.1rem;
        padding: 0.2rem;
        border-bottom: 2px solid #d9d9d9;

        &:hover,
        &:active,
        &:focus {
            border-bottom: 2px solid #ffa500;
        }
    }
}

.active {
    background: rgba(255, 122, 0, 0.20);
    border-bottom: 2px solid #f08308 !important;
}

.footer-bottom {
    display: none !important;
}
</style>