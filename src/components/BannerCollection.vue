<template>
    <div class="">
        <div v-for="(collect, index) in collections" :key="index" class="my-3">
            <div class="banner" style="background-color: #EFEFED;">
                <div class="container">
                    <div class="row">
                        <div class="col-8" :class="'order-' + collect.order">
                            <h1 class="mt-4">{{ collect.heading }}</h1>
                            <p>{{ collect.text }}</p>
                            <router-link :to="'/catalogs/collection' + collect.id">
                                <button class="btn btn-dark rounded mb-4">{{ collect.button }}</button>
                            </router-link>
                        </div>
                        <div class="col-4 ">
                            <img :src="collect.img" style="width:100%; height: 100%; object-fit: fill;" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="container my-2">
                <div class="row row-cols-3 row-cols-md-6 g-1">
                    <div class="col" v-for="(product, key) in collect.subProduct" :key="key">
                        <div class="position-relative">
                            <img :src="product.img" alt=""
                                style="object-position: top; object-fit: cover; width: 100%; height: 150px;">
                            <div class="position-absolute top-0 start-0 m-2 ms-0" style="font-size: 12px;">
                                <span class='text-white bg-danger px-1 rounded-end-3'>₹{{ product.price }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "CollectionPage",
    components: {
    },
    computed: {
        collections() {
            return this.$store.getters.getBannerCollection
        },
    }
};
</script>
<style></style>