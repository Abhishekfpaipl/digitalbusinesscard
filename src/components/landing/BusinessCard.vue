<template>
    <div class="my-3 py-3">
        <h1 class="text-center pb-3">Advantanges of Digital Business <br>Cards over Paper Cards</h1>
        <div class="container">
            <div class="row row-cols-2 row-cols-md-3 row-cols-xl-4">
                <div class="col my-2" v-for="(advantage, index) in advantages" :key="index">
                    <div class="card">
                        <div class="card-header border-0 text-center bg-white">
                            <i class="bi text-primary fs-1" :class="advantage.icon"></i>
                        </div>
                        <div class="card-body">
                            <p class="card-text">{{ advantage.text }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'BusinessCard',
    data() {
        return {
            advantages: [
                {
                    id: 1,
                    icon: "bi-person",
                    text: "Immediately saves your info in a contact's phone",
                },
                {
                    id: 2,
                    icon: "bi-person",
                    text: "Eliminates the risk of a prospect losing or throwing out your card",
                },
                {
                    id: 3,
                    icon: "bi-person",
                    text: "Automatically syncs with your CRM & marketing apps",
                },
                {
                    id: 4,
                    icon: "bi-person",
                    text: "Sends automated follow-up emails and text messages",
                },
                {
                    id: 5,
                    icon: "bi-person",
                    text: "Embeds your digital card into zoom backgrounds, email signature, & more",
                },
                {
                    id: 6,
                    icon: "bi-person",
                    text: "Manages & shares your card on-the-go through mobile app or desktop app",
                },
                {
                    id: 7,
                    icon: "bi-person",
                    text: "Lead capture forms allow you to capture their info as well. When a digital business card is received, 75% of people will send their contact information back to the sender",
                },
            ]
        }
    }
}
</script>
<style lang="">

</style>