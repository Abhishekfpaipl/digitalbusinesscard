<template>
    <div class="containerr d-flex justify-content-between align-items-center" ref="topnav"
        :style="`background:rgb(143,145,147, ${backgroundOpacity});`">
        <div class="d-flex align-items-center gap-3" :class="{ 'hide-on-scroll': hideOnScroll }">
            <router-link to="/" 
                class="text-decoration-none text-dark d-flex align-items-center">
                <img src="https://cdn.bhybrid.org/imgcdn/20230708200505/card/p1109photo.jpg" style="width: 50px;object-fit: contain;">
            </router-link>
            <span>Business Name</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductTopnav',
    data() {
        return {
            publicPath: process.env.BASE_URL,
            img: "img/logo/logo.png",
            backgroundOpacity: 0,
            hideOnScroll: true,
        };
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollPercentage = (scrollTop / (document.documentElement.scrollHeight - window.innerHeight)) * 100; 
            if (scrollPercentage >= 5 && scrollPercentage <= 6) {
                this.backgroundOpacity = 0.5;
                this.hideOnScroll = true;
            } else if (scrollPercentage > 5) {
                this.backgroundOpacity = 1;
                this.hideOnScroll = false;
            } else {
                this.backgroundOpacity = 0;
                this.hideOnScroll = true;
            }
        },
    }
};
</script>

<style scoped>
.hide-on-scroll {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
}

.containerr {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #fff;
    padding: 10px;
    z-index: 10;
}
</style>