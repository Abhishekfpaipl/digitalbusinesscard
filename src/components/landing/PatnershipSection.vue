<template>
    <div>
        <div class="container text-center my-5">
            <div class="py-2">
                <h1 class="text-center">We Would like to Serve to All</h1>
                <small>We are loved by all types of people across all industries</small>
            </div>
            <div class="row m-0 gy-2 text-center">
                <div v-for="(text, index) in texts" :key="index" class="col-6 col-xl-4">
                    <div class="card fs-6 p-3 my-card text-decoration-none">
                        {{ text.name }}
                    </div>
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
                    // icon: 'bi bi-star',
                    name: 'Freelancers',
                },
                {
                    // icon: 'bi bi-building',
                    name: 'Business',
                },
                {
                    // icon: 'bi bi-shop-window',
                    name: 'Students',
                },
                {
                    // icon: 'bi bi-shop-window',
                    name: 'Influencers',
                },
                {
                    // icon: 'bi bi-shop-window',
                    name: 'Politicians',
                },
                {
                    // icon: 'bi bi-shop-window',
                    name: 'Celebrities',
                },
                {
                    // icon: 'bi bi-shop-window',
                    name: 'Shopkeepers',
                },
                {
                    // icon: 'bi bi-shop-window',
                    name: 'Govt. Employee',
                },
                {
                    // icon: 'bi bi-shop-window',
                    name: 'Private Employee',
                },
                {
                    // icon: 'bi bi-shop-window',
                    name: 'Proffesional',
                },
                {
                    // icon: 'bi bi-shop-window',
                    name: 'Service Providers',
                },
            ]
        }
    }
}
</script>
<style scoped>
.my-card {
    border: 1px solid #ced4da;
    border-radius: 8px;
    transition: all 0.3s ease;
}

.my-card:hover {
    color: red;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}
</style>