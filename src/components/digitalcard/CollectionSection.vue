<template>
    <div class="container my-3 py-3">
        <p class="px-2 py-3 text-center mb-0 bill"><span class="fs-2">~ Collections ~</span></p>
        <div class="row row-cols-3 row-cols-md-6 g-1">
            <div class="col" v-for="(collection, key) in collections" :key="key">
                <div class="position-relative">
                    <img :src="collection.img" alt="" data-bs-toggle="offcanvas" data-bs-target="#collectionModal"
                        :data-bs-collectionId="collection.id" aria-controls="collectionModal"
                        style="object-position: top; object-fit: cover; width: 100%; height: 150px;">
                    <div class="position-absolute top-0 start-0 m-2 ms-0" style="font-size: 12px;">
                        <span class='text-white bg-danger px-1 rounded-end-3'>₹{{ collection.price }}</span>
                    </div>
                </div>
            </div>
            <CollectionOffcanvas :collection="collections" />
        </div>
    </div>
</template>
<script>
import CollectionOffcanvas from '@/components/CollectionOffcanvas.vue'
export default {
    name: 'CollectionSection',
    components: {
        CollectionOffcanvas
    },
    data() {
        return {
            isOffCanvasOpen: false,
            selectedItem: {},
        }
    },
    computed: {
        collections() {
            return this.$store.getters.getCollection
        }
    },
    methods: {
        openOffCanvas(collection) {
            this.selectedItem = collection;
            this.isOffCanvasOpen = true;
            // this.disableBodyScroll();
        },
        closeOffCanvas() {
            this.isOffCanvasOpen = false;
        },
    }
}
</script>