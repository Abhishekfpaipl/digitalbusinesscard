<template>
    <div>
        <div class=" pt-3" style="background-color: #fbf4f4">
            <div class="d-md-flex flex-column-sm justify-content-evenly py-4 px-3  ">
                <div class="mb-3">
                    <router-link to="/">
                        <img :src="`${publicPath}${img}`" style="width: 100px;object-fit: contain;">
                    </router-link>
                    <p class="mb-2 fw-bold">Welcome to R2L</p>
                    <p class="mb-2">Digital Business Card</p>
                </div>
            </div>
            <div class="bg-dark text-center py-3 d-flex align-items-center justify-content-center">
                <p class="text-white mb-0"> Copyright © 2024 wsgbrand.in All rights reserved</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'DigitalFooter',
    data() {
        return {
            publicPath: process.env.BASE_URL,
            img: "img/wb.png",
        }
    }
}
</script>
<style lang="">

</style>