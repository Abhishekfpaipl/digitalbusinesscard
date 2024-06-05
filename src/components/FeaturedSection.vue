<template>
    <swiper :effect="'coverflow'" :grabCursor="true" :centeredSlides="true" :slidesPerView="'auto'" :coverflowEffect="{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    }" :pagination="true" :modules="modules" class="mySwiper">
        <swiper-slide><img class="rounded-3"
                src="https://www.creativehatti.com/wp-content/uploads/edd/2022/02/Great-ideas-can-help-to-grow-business-banner-template-23-large.jpg" /></swiper-slide>
        <swiper-slide><img class="rounded-3"
                src="https://www.creativehatti.com/wp-content/uploads/edd/2021/04/Grow-your-business-with-creative-ideas-banner-design-11-large.jpg" /></swiper-slide>
        <swiper-slide><img class="rounded-3"
                src="https://www.creativehatti.com/wp-content/uploads/edd/2022/03/Banner-template-of-easy-with-business-loan-06-large.jpg" /></swiper-slide>
        <swiper-slide><img class="rounded-3"
                src="https://www.creativehatti.com/wp-content/uploads/2022/02/Business-reach-with-brand-build-banner-template-44-small.jpg" /></swiper-slide>
        <swiper-slide><img class="rounded-3"
                src="https://www.creativehatti.com/wp-content/uploads/edd/2021/03/Industry-expert-business-solutions-with-banner-design-template-14-large.jpg" /></swiper-slide>
        <swiper-slide><img class="rounded-3"
                src="https://www.creativehatti.com/wp-content/uploads/2022/02/Build-brand-and-expand-business-reach-banner-template-45-small.jpg" /></swiper-slide>
        <swiper-slide><img class="rounded-3"
                src="https://www.creativehatti.com/wp-content/uploads/edd/2021/10/Your-business-solution-and-grow-your-business-banner-template-11-large.jpg" /></swiper-slide>
        <swiper-slide><img class="rounded-3"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3T5QYK6i_opVTsCtgGc4sDUSapslNRMMqGQ&usqp=CAU" /></swiper-slide>
        <swiper-slide><img class="rounded-3"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM7v_6QCEjKkuOapkFo-BlCF1wyjAvbmwI7A&usqp=CAU" /></swiper-slide>
    </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default {
    name:'FeaturedSection',
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [EffectCoverflow, Pagination],
        };
    },
};
</script>
<style scoped>
#app {
    height: 100%;
}

html,
body {
    position: relative;
    height: 100%;
}

body {
    background: #eee;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color: #000;
    margin: 0;
    padding: 0;
}

.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>