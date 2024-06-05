<template>
    <div class="">
        <Banner />
        <div class="my-3">
            <PatnershipSection />
        </div>
        <div class="my-3">
            <KycSection />
        </div>
        <div class="my-3">
            <SucessSection />
        </div>
        <div class="my-3">
            <CounterSection />
        </div>
        <div class="my-3">
            <!-- <AllBrand /> -->
            <SliderSection/>
        </div> 
        <FooterBar/>
    </div>
</template>
<script>
import Banner from '@/components/landing/Banner.vue'
import PatnershipSection from '@/components/landing/PatnershipSection.vue'
import KycSection from '@/components/landing/KycSection.vue'
import SucessSection from '@/components/landing/SucessSection.vue'
import CounterSection from '@/components/landing/CounterSection.vue'
// import AllBrand from '@/components/landing/AllBrand.vue'
import SliderSection from '@/components/landing/SliderSection.vue'
import FooterBar from '@/components/landing/FooterBar.vue'
export default {
    name: 'LandingPage',
    components: {
        Banner,
        PatnershipSection,
        KycSection,
        SucessSection,
        CounterSection,
        // AllBrand,
        SliderSection,
        FooterBar
    }
}
</script>
<style></style>