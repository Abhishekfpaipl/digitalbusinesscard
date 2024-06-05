<template>
    <div class="my-3">
        <div id="About">
            <div class="container mb-5">
                <div class="d-flex justify-content-between align-items-center w-100 mb-4">
                    <div class="d-block w-100">
                        <p class="p-2 text-center mb-0 bill"><span class="fs-2">~ Description ~</span></p>
                        <div class="w-100 border px-1">
                            <p class="p-2 mb-0 w-100">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nobis quasi eos nam,
                                reprehenderit voluptas id quod natus. Sequi, nihil! Voluptates ipsa vitae sapiente
                                mollitia, minus facere. Natus nam velit eius neque doloribus! Necessitatibus, asperiores
                                earum deserunt nostrum quae ratione ab optio aliquam? Autem voluptatem sequi nulla
                                cupiditate omnis quasi alias, nostrum magni a. Officia ex quia tempore, exercitationem
                                cumque sunt suscipit, iure, atque alias eaque distinctio odit labore? Veritatis
                                voluptatum, fuga assumenda illo porro, quos autem fugiat deleniti consequuntur numquam
                                animi commodi nulla quo aperiam cupiditate velit iure quaerat sit obcaecati ut
                                laudantium reiciendis voluptatibus totam. Ab, earum laborum.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mb-5 container">
                <div class="d-flex justify-content-evenly">
                    <div class="text-center fw-bold">
                        <p class="m-0 d-flex justify-content-center align-items-center fs-4">
                            <AutoCounter :data="10"> </AutoCounter>
                        </p>
                        <small style="font-size: var(--x-small)">Years Of <br />
                            Experience</small>
                    </div>
                    <div class="separator"></div>
                    <div class="text-center fw-bold">
                        <p class="m-0 d-flex justify-content-center align-items-center fs-4">
                            <AutoCounter :data="100"> </AutoCounter>
                        </p>
                        <small style="font-size: var(--x-small)">Products <br />
                            Listed</small>
                    </div>
                    <div class="separator"></div>
                    <div class="text-center fw-bold">
                        <p class="m-0 d-flex justify-content-center align-items-center fs-4">
                            <AutoCounter :data="1000"> </AutoCounter>
                        </p>
                        <small style="font-size: var(--x-small)">Happy <br />
                            Customers</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import AutoCounter from '@/components/AutoCounter.vue'
export default {
    name: 'AboutSection',
    components: {
        AutoCounter
    },

}
</script>
<style scoped>
.separator {
    border-left: 1px solid #000;
    /* Adjust the color and style as needed */
    height: 80px;
    /* Adjust the height as needed */
    margin: 0 20px;
    /* Adjust the margin as needed */
}
</style>