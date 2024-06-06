<template>
    <div class="">
        <DashboardNav />
        <Banner />
        <div class="my-3" id="second">
            <PatnershipSection />
        </div>
        <div class="my-3"> 
            <TestSection />
        </div>
        <div class="my-3">
            <KycSection />
        </div>
        <div class="my-3">
            <SucessSection />
        </div>
        <div class="my-3">
            <OurFeatures />
        </div>
        <div class="my-3">
            <BusinessCard />
        </div>
        <div class="my-3">
            <CounterSection />
        </div>
        <div class="my-3">
            <WayToShare />
        </div>
        <div class="my-3">
            <ImageWithText />
        </div>
        <FooterBar />
    </div>
</template>
<script>
import Banner from '@/components/landing/Banner.vue'
import PatnershipSection from '@/components/landing/PatnershipSection.vue'
import KycSection from '@/components/landing/KycSection.vue'
import SucessSection from '@/components/landing/SucessSection.vue'
import CounterSection from '@/components/landing/CounterSection.vue' 
import FooterBar from '@/components/landing/FooterBar.vue'
import TestSection from '@/components/landing/TestSection.vue'
import OurFeatures from '@/components/landing/OurFeatures.vue'
import BusinessCard from '@/components/landing/BusinessCard.vue'
import WayToShare from '@/components/landing/WayToShare.vue'
import ImageWithText from '@/components/landing/ImageWithText.vue'
import DashboardNav from '@/components/navbar/DashboardNav.vue'
export default {
    name: 'LandingPage',
    components: {
        Banner,
        PatnershipSection,
        KycSection,
        SucessSection,
        CounterSection, 
        FooterBar,
        TestSection,
        OurFeatures,
        WayToShare,
        BusinessCard,
        ImageWithText,
        DashboardNav
    }
}
</script>
<style></style>