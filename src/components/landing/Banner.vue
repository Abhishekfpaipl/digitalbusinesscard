<template lang="">
    <div>
        <div class="d-md-flex d-lg-flex justify-content-center align-items-center w-100"
            style="background: linear-gradient(101deg, rgba(220,53,69,1) 52%, rgba(229,104,116,1) 78%);
            background-repeat: no-repeat;
            height: 700px;">
            <div class="d-flex flex-column justify-content-center align-items-center pt-5">
                <div class="text-center">
                    <img src="img/wb.png" style="filter: brightness(0) invert(1);" width="115" alt="">  
                    <p class="fs-1 text-white fw-bold m-0 ">R2L</p>
                </div>
                <h3 class="text-center text-white mt-3">Your Smart Digital Presence. <br>Will Insprie your clients in a smarter way.</h3>
                <RouterLink to="/digital-card">
                    <div class="btn btn-light rounded-5 text-danger my-4 fs-5 fw-bold">
                        Get Started 
                    </div>
                </RouterLink>
                <a href="#second"><i class="bi bi-chevron-down fs-1 text-white"></i></a>
            </div>
            <div class="d-flex justify-content-center align-items-center pt-5">
                <div class="bg-white rounded-circle" style="width:800px; max-width:50%">
                    <img src="img/landinglogo.png" class="w-100" >
                </div>
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