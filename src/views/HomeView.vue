<template>
  <div class="home">
    <TopNav />
    <TopSection />
    <!-- <MapSection/> -->
    <CollectionSection />
    <AboutSection />
    <BrandSection />
    <SocialSchedule />
    <GalleryCollage/>
  </div>
</template>

<script>

import TopNav from '@/components/TopNav.vue'
import TopSection from '@/components/TopSection.vue'
// import MapSection from '@/components/MapSection.vue'
import CollectionSection from '@/components/CollectionSection.vue'
import AboutSection from '@/components/AboutSection.vue';
import BrandSection from '@/components/BrandSection.vue';
import SocialSchedule from '@/components/SocialSchedule.vue';
import GalleryCollage from '@/components/GalleryCollage.vue';

export default {
  name: "HomeView",
  components: {
    TopSection,
    TopNav,
    // MapSection,
    CollectionSection,
    AboutSection,
    BrandSection,
    SocialSchedule,
    GalleryCollage
  }

};
</script>
