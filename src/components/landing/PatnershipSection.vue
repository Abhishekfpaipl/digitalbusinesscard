<template>
    <div>
        <div class="text-center my-5" id="second">
            <h1 class="text-center py-5 container">Select Your Partnership Mode</h1>
            <div class="row m-0 gy-2">
                <div v-for="(text, index) in texts" :key="index" class="col-12 col-lg-4">
                    <RouterLink :to="'/registraion/' + text.name" class="text-decoration-none">
                        <div class="card p-3 my-card text-decoration-none">
                            <div class="fs-3">
                                <i class="fs-2 me-2" :class="text.icon"></i> {{ text.name }}
                            </div>
                        </div>
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'PatnershipSection',
    data() {
        return {
            texts: [
                {
                    icon: 'bi bi-star',
                    name: 'Brand Owner',
                },
                {
                    icon: 'bi bi-buildings',
                    name: 'Manufacturer',
                },
                {
                    icon: 'bi bi-shop-window',
                    name: 'Market Seller',
                }
            ]
        }
    }
}
</script>
<style lang="">

</style>