<template>
    <div v-if="activeCollection" class="offcanvas offcanvas-bottom w-100" style="height: 50%;" tabindex="-1"
        id="collectionModal" aria-labelledby="collectionModalLabel">
        <div class="offcanvas-header d-flex justify-content-between border-bottom">
            <h5 class="offcanvas-title" id="collectionModalLabel">{{ activeCollection.name }}</h5>
            <i class="bi bi-x fs-3" data-bs-dismiss="offcanvas" data-bs-target="#collectionModal"
                aria-label="Close"></i>
        </div>

        <div class="offcanvas-body p-2">
            <div class="d-flex">
                <img :src="activeCollection.img" style="width: 100px; height: 100px; object-fit: contain;" alt="">
                <div class="flex-fill">
                    <p class="mb-0 fw-bold text-start">{{ activeCollection.name }}</p>
                    <p class="mb-0 text-start"><span class="fw-bold me-2">Price</span>{{ activeCollection.price }}</p>

                    <div class="d-flex">
                        <div class="m-2" v-for="(color, index) in activeCollection.colors" :key="index">
                            <label :for="'colorRadio_' + index" class="p-2 border d-flex align-items-center"
                                :style="{ backgroundColor: selectedColor === color ? 'red' : 'transparent' }">
                                <input type="radio" :id="'colorRadio_' + index" v-model="selectedColor" :value="color"
                                    style="display: none;">
                                {{ color }}
                            </label>
                        </div>
                    </div>
                    <div class="d-flex">
                        <div class="m-2" v-for="(size, index) in activeCollection.sizes" :key="index">
                            <label :for="'sizeRadio_' + index" class="border d-flex align-items-center label-style p-2"
                                :style="{ backgroundColor: selectedSize === size ? 'red' : 'transparent' }">
                                <input type="radio" :id="'sizeRadio_' + index" v-model="selectedSize" :value="size"
                                    style="display: none;">
                                {{ size }}
                            </label>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="offcanvas-footer">
            <div class="w-100 d-flex justify-content-between align-items-center position-fixed px-1"
                style="height: 63px; bottom: 0; background: #f6f6f6; z-index: 20 !important">
                <div class="w-100 bg-white d-flex align-items-center pe-2">
                    <button class="btn btn-dark rounded-0" @click="decrement">-</button>
                    <input class="text-center form-control rounded-0 w-100" type="number" v-model="quantity" />
                    <button class="btn btn-dark rounded-0" @click="increment">+</button>
                </div>
                <div class="w-100">
                    <button @click="addToCart" class="btn btn-dark w-100 fs-5">Order<i class="bi bi-cart"></i></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ColltionOffcanvas',
    props: ['collection'],
    data() {
        return {
            activeCollection: {},
            selectedColor: null,
            selectedSize: null,
            quantity: 1,
        };
    },
    async mounted() {
        this.loadActiveSale();
    },
    methods: {
        loadActiveSale() {
            const collectionModal = document.getElementById('collectionModal')
            if (collectionModal) {
                collectionModal.addEventListener('show.bs.offcanvas', event => {
                    const button = event.relatedTarget
                    const collectionId = button.getAttribute('data-bs-collectionId');
                    this.activeCollection = this.collection.find(collection => collection.id == collectionId);
                });
            }
        },
        increment() {
            this.quantity++;
        },
        decrement() {
            if (this.quantity > 0) {
                this.quantity--;
            }
        },
    }
}
</script>

<style lang="scss" scoped></style>