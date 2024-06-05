<template>
    <div class="">
        <div class="my-5 pb-5" style="background-color: #fbf4f4;">
            <h1 class="text-center py-5 container">Partnership With Us in 3 simple steps</h1>
            <div class="row m-0 gy-2 mb-4">
                <div v-for="(link, index) in links" :key="index" class="col-12 col-lg-4">
                    <div class="card p-3 ">
                        <div class="">
                            <div class="d-flex justify-content-center align-items-center">
                                <img :src="link.img" width="120" class="">
                            </div>
                            <h3 class=" text-center">{{ link.head }}</h3>
                            <p class="text-center w-100">{{ link.text }}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
export default {
    name: 'KycSection',
    data() {
        return {
            links: [
                {
                    id: 1,
                    img: 'img/registration.png', 
                    head: 'Register Your Account',
                    text: 'Register your account and get verified.'
                },
                {
                    id: 2,
                    img: 'img/1.png', 
                    head: 'Setup Your Account',
                    text: 'Setup your account as per your business details.'
                },
                {
                    id: 3,
                    img: 'img/2.png', 
                    head: 'Start Selling',
                    text: 'Start receiving orders'
                },
            ],
        }
    }
}
</script>