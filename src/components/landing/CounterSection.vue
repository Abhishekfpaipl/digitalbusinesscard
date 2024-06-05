<template>
    <div>
        <div class="bg-danger py-5">
            <div class="d-flex justify-content-center">
                <h1 class="text-white text-center">Join India's largest B2B platform</h1>
            </div>
            <div class="text-white d-md-flex justify-content-between mt-4 ">
                <div class="text-center fw-bold">
                    <p class="m-0 d-flex justify-content-center align-items-center" style="font-size: 50px;">
                        <AutoCounter :data="30"> </AutoCounter>&nbsp;L+
                    </p>
                    <p class="fs-5 mt-0">Authorised Sellers</p>
                </div>
                <div class="text-center fw-bold">
                    <p class="m-0 d-flex justify-content-center align-items-center" style="font-size: 50px;">
                        <AutoCounter :data="25"> </AutoCounter>&nbsp;k+
                    </p>
                    <p class="fs-5 mt-0">Fashion Categories</p>
                </div>
                <div class="text-center fw-bold">
                    <p class="m-0 d-flex justify-content-center align-items-center" style="font-size: 50px;">
                        <AutoCounter :data="10"> </AutoCounter>&nbsp;k+
                    </p>
                    <p class="fs-5 mt-0">Product Already Listed</p>
                </div>
                <div class="text-center fw-bold">
                    <p class="m-0 d-flex justify-content-center align-items-center" style="font-size: 50px;">
                        <AutoCounter :data="60"> </AutoCounter>&nbsp;L+
                    </p>
                    <p class="fs-5 mt-0">Happy Customer</p>
                </div>
                <div class="text-center fw-bold">
                    <p class=" m-0 d-flex justify-content-center align-items-center" style="font-size: 50px;">
                        <AutoCounter :data="900"> </AutoCounter>&nbsp;+
                    </p>
                    <p class="fs-5 mt-0 d-flex justify-content-center">Daily Cities</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import AutoCounter from '@/components/AutoCounter.vue'
export default {
    name: 'CounterSection',
    components: {
        AutoCounter
    }
}
</script>
<style lang="">

</style>