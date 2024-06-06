<template>
  <div class=" ">
    <DigitalTop/>
    <TopNav />
    <TopSection />
    <!-- <MapSection/> -->
    <CollectionSection />
    <GroupsSection />
    <InfoSection />
    <ContactCard />
    <SocialSchedule />
    <GalleryCollage />
    <DigitalFooter/>
    <div class="query border rounded-circle bg-success text-white" data-bs-toggle="offcanvas"
      data-bs-target="#bottomQuery" aria-controls="bottomQuery">
      <i class="d-flex justify-content-center align-items-center bi bi-question-circle"></i>
    </div>
 
    <div class="offcanvas offcanvas-end" tabindex="-1" id="bottomQuery" aria-labelledby="bottomQueryLabel">
      <div class="offcanvas-header border-bottom">
        <h5 class="offcanvas-title" id="bottomQueryLabel">Query</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <form @submit.prevent="submitQuery()" class="row g-3 needs-validation" novalidate>
          <div class="w-100 p-2 form-floating">
            <input type="text" class="form-control" placeholder="Mobile" v-model="name" required>
            <label for="floatingInput" class="text-muted">First name</label>
          </div>
          <div class="w-100 p-2 form-floating">
            <input type="text" class="form-control" placeholder="Mobile" v-model="email" required>
            <label class="text-muted">Email Or Mobile No.</label>
          </div>
          <div class="form-floating">
            <textarea v-model="query" rows="2" class="form-control flex-fill" placeholder="Type your message..."
              required>
              </textarea>
            <label class="text-muted">Enter Your Query</label>
          </div>
          <div class="col-12">
            <button class="btn btn-primary" type="submit">Submit Query</button>
          </div>
        </form>
      </div>
    </div>

  </div>
</template>

<script>

import TopNav from '@/components/TopNav.vue'
import TopSection from '@/components/digitalcard/TopSection.vue'
// import MapSection from '@/components/MapSection.vue'
import CollectionSection from '@/components/digitalcard/CollectionSection.vue'
import InfoSection from '@/components/digitalcard/InfoSection.vue';
import GroupsSection from '@/components/digitalcard/GroupsSection.vue';
import SocialSchedule from '@/components/digitalcard/SocialSchedule.vue';
import GalleryCollage from '@/components/digitalcard/GalleryCollage.vue';
import ContactCard from '@/components/digitalcard/ContactCard.vue';
import DigitalFooter from '@/components/digitalcard/DigitalFooter.vue';
import DigitalTop from '@/components/digitalcard/DigitalTop.vue';

export default {
  name: "DigitalCard",
  components: {
    TopSection,
    TopNav,
    // MapSection,
    CollectionSection,
    InfoSection,
    ContactCard,
    GroupsSection,
    SocialSchedule,
    DigitalFooter,
    GalleryCollage,
    DigitalTop
  },
  data() {
    return {
      name: '',
      email: '',
      query: ''
    }
  },
  methods: {
    submitQuery() {
      console.log('Submit Query')
      const data = {
        name: this.name,
        email: this.email,
        query: this.query,
      }
      this.$store.dispatch('submitQuery', data)
    },
  }

};
</script>
<style>
.query {
  z-index: 9;
  position: fixed;
  bottom: 60px;
  right: 10px;
  padding: 10px 10px;
  cursor: pointer;
  border-radius: 5px;
  display: flex;
  align-items: center;
}
</style>