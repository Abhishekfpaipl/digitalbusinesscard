<template>
    <div>
        <DashboardNav />

        <div class="pt-5 "
            style="background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,254,196,1) 29%, rgba(255,251,172,1) 90%); height:80vh;">
            <div class="d-flex  justify-content-center my-5">
                <img src="/img/logo/logo.png" width="200" alt="">
            </div>
            <div class="d-flex flex-column justify-content-center">
                <div class="w-100 pb-5 mt-4">
                    <div class="container d-md-flex d-block justify-content-between align-items-center">
                        <RouterLink to="/search" class="text-decoration-none w-100 rounded">
                            <div class="my-1 rounded-0 btn btn-light border py-2 w-100 d-flex justify-content-between">
                                <div class='d-flex'>
                                    <span class="fw-bold">Search by</span> &nbsp;
                                    <span class="text-secondary">{{ searchText }}</span>
                                </div>
                                <i class="bi bi-search"></i>
                            </div>
                        </RouterLink>
                    </div>
                </div>
                <div class="d-md-flex d-none justify-content-evenly align-items-center w-100">
                    <div class="d-flex align-items-center">
                        <TextStyle />
                    </div>
                </div>
                <div class="d-md-none d-flex flex-column justify-content-center align-items-center w-100">
                    <div class="d-flex align-items-center" style="font-size: 20px !important;">
                        <TextStyle />
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-center my-3 px-2 gap-2">
                <router-link to="/digital-card" class=" text-center w-50 btn btn-dark">Login</router-link>
                <router-link to="/register" class=" text-center w-50 btn btn-dark">Sign Up</router-link>
            </div>
        </div>

        <div class="my-3">
            <p class="p-2 text-center mt-3 mb-0 bill text-style">
                <span class="fs-5">WHAT ARE YOU LOOKING FOR?</span>
            </p>
            <div class="d-flex justify-content-evenly w-100 my-3">
                <div class="row g-1 d-flex justify-content-evenly">
                    <div v-for="(type, index) in types" :key="index"
                        style="width:110px;  height:100px; background:linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,254,196,1) 29%, rgba(255,217,102,1) 90%)"
                        class=" d-flex flex-column justify-content-center align-items-center m-1 rounded-3 col-3 col-md-1 ">
                        <i class="fs-3 text-danger" :class="type.icon"></i>
                        <span class="fw-bold">{{ type.name }}</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="my-3">
            <p class="p-2 text-center mt-3 mb-0 bill text-style">
                <span class="fs-5">~ CATAGORIES ~</span>
            </p>
            <div class="d-flex" style="overflow-x: scroll">
                <div v-for="(cat, index) in categories" :key="index" class="me-2">
                    <div class="p-3 border">
                        <p class="fw-bold text-center w-100">{{ cat.text }}</p>
                        <img :src="cat.img" width="70" alt="" />
                    </div>
                </div>
            </div>
        </div>

        <div class="my-3">
            <p class="p-2 text-center mt-3 mb-0 bill text-style">
                <span class="fs-5">~ FEATURED ~</span>
            </p>
            <div class="container">
                <FeaturedSection />
            </div>
        </div>

        <div class="my-3">
            <p class="p-2 text-center mt-3 mb-0 bill text-style">
                <span class="fs-5">~ OUR BEST RETAILER ~</span>
            </p>
            <div class="shops-container">
                <div class="shop-wrapper">
                    <div v-for="(vote, index) in shops" :key="index" class="d-inline-block" style=" width: 100vw;">
                        <router-link :to="'/shop/' + vote.id"
                            class="d-flex  justify-content-center align-items-center text-decoration-none text-dark mb-4 container text-center"
                            style=" color: #212529;">
                            <div class="shop-card">
                                <img :src="vote.img" alt="" class="shop-image" />
                                <p class="fw-bold my-2">{{ vote.name }}</p>
                                <div class=" ">
                                    <img src="/img/golden.png" width="35" alt="" />
                                    <img src="/img/silver.png" width="35" alt="" />
                                    <img src="/img/black.png" width="35" alt="" />
                                    <img src="/img/white.png" width="35" alt="" />
                                </div>
                                <p class="mt-1 ">{{ vote.support }}+ Promoters</p>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>

        <div class="my-3">
            <div class="d-flex justify-content-between align-items-end mt-3 mb-4 py-4"
                style="background-color: #efefed">
                <div class="">
                    <p class="ps-2 text-start fw-bold mb-0">
                        <span class="fs-4"> <i class="bi bi-star-fill"></i> Delhi's</span>
                    </p>
                    <p class="ps-2 text-start mb-0">
                        <span style="">Top Retailers</span>
                    </p>
                </div>
                <RouterLink to="/AllMarket" class="text-dark text-decoration-none">
                    <p class="mb-0 pe-2">See All <i class="bi bi-arrow-right"></i></p>
                </RouterLink>
            </div>
            <div class="d-flex align-items-center w-100 ">
                <div class="d-flex justify-content-center flex-wrap gx-1 row">
                    <div v-for="(vote, index) in shops" :key="index" class="col-4 col-md-2 position-relative">
                        <router-link :to="'/shop/' + vote.id"
                            class="d-flex justify-content-center text-decoration-none text-dark mb-4">
                            <div class="bg-light border rounded-2 d-flex flex-column justify-content-center align-items-center pt-3 px-3 text-dark"
                                style="width: 120px;">
                                <img :src="vote.img" alt="" style="width: 60%;" />
                                <p class="fw-bold my-1 text-center">{{ vote.name }}</p>
                                <div class="d-flex justify-content-evenly mb-2">
                                    <img src="/img/golden.png" width="15" alt="" />
                                    <img src="/img/silver.png" width="15" alt="" />
                                    <img src="/img/black.png" width="15" alt="" />
                                    <img src="/img/white.png" width="15" alt="" />
                                </div>
                                <div class="d-flex">
                                    <small>{{ vote.support }}+</small>
                                    &nbsp;
                                    <small>Promoters</small>
                                </div>
                            </div>
                        </router-link>
                        <span class="gg text-style position-absolute" style="top: -9px; left: 5px; font-size: 45px;">{{
                            vote.id
                        }}</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="my-3">
            <BannerCollection />
        </div>
    </div>
</template>
<script>
import DashboardNav from '@/components/navbar/DashboardNav.vue';
import TextStyle from '@/components/TextStyle.vue';
import FeaturedSection from '@/components/FeaturedSection.vue';
import BannerCollection from '@/components/BannerCollection.vue';

export default {
    name: 'DashboardPage',
    components: {
        DashboardNav,
        TextStyle,
        FeaturedSection,
        BannerCollection
    },
    data() {
        return {
            searchText: '',
            currentIndex: 0,
            words: ['City', 'Clothing', 'Categories', 'Top Retailer'],
        }
    },
    mounted() {
        this.rotateWords();
    },
    computed: {
        types() {
            return this.$store.getters.getTypes
        },
        categories() {
            return this.$store.getters.getCategories
        },
        shops() {
            return this.$store.getters.getShops
        }
    },
    methods: {
        rotateWords() {
            setTimeout(() => {
                this.searchText = this.words[this.currentIndex];
                this.currentIndex++;
                if (this.currentIndex >= this.words.length) {
                    this.currentIndex = 0;
                }
                this.rotateWords();
            }, 1000);
        },
    }
}
</script>
<style>
.shops-container {
    width: 100%;
    overflow-x: auto;
    white-space: nowrap;
}

.shop-card {
    background-color: #f8f9fa;
    border: 1px solid #dee2e6;
    border-radius: 8px;
    padding: 10px;
}

.shop-image {
    width: 60%;
}
</style>