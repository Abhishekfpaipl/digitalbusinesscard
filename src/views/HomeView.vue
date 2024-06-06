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
import TopSection from '@/components/digitalcard/TopSection.vue'
// import MapSection from '@/components/MapSection.vue'
import CollectionSection from '@/components/digitalcard/CollectionSection.vue'
import AboutSection from '@/components/digitalcard/InfoSection.vue';
import BrandSection from '@/components/digitalcard/GroupsSection.vue';
import SocialSchedule from '@/components/digitalcard/SocialSchedule.vue';
import GalleryCollage from '@/components/digitalcard/GalleryCollage.vue';

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
