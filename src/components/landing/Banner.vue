<template lang="">
    <div>
        <div class="d-md-flex d-lg-flex justify-content-center align-items-center w-100"
            style="background: linear-gradient(101deg, rgba(220,53,69,1) 52%, rgba(229,104,116,1) 78%);
            background-repeat: no-repeat;
            height: 700px;">
            <div class="d-flex flex-column justify-content-center align-items-center pt-5">
                <div class="text-center">
                    <img src="img/wb.png" style="filter: brightness(0) invert(1);" width="115" alt="">  
                    <p class="fs-1 text-white fw-bold m-0 ">WSG Brand</p>
                </div>
                <h1 class="text-center text-white mt-3">India's largest B2B Platform for <br> businesses & shop-owners</h1>
                <RouterLink to="/LoginPage">
                    <div class="btn btn-light text-danger my-4 fs-5 fw-bold">
                        Get Started 
                    </div>
                </RouterLink>
                <a href="#second"><i class="bi bi-chevron-down fs-1 text-white"></i></a>
            </div>
            <div class="d-flex justify-content-center align-items-center pt-5">
                <img src="img/laptop.png" width="800" style="max-width:80%; ">
            </div>
        </div> 
    </div>
</template>
<script>
export default {
    name: 'BannerComp',
}
</script>
<style lang="">

</style>