<template>
    <div class="my-3 py-3">
        <div class="text-center">
            <h1>So many ways to share</h1>
            <small>Your digital business card, your choice... <br> Popl provides you with the most sharing options on
                the
                planet.</small>
        </div>

        <div class="container">
            <div class="row row-cols-1 row-cols-md-3 row-cols-xl-4">
                <div class="col d-flex justify-content-center my-3" v-for="(way, index) in ways" :key="index">
                    <div class="card" style="width: 18rem;">
                        <div class="text-center card-body">
                            <h5 class="card-title">{{ way.title }}</h5>
                            <p v-if="way.text" class="card-text">{{ way.text }}</p>
                            <!-- <span v-if="way.link" class="btn btn-primary">{{ way.link }}</span> -->
                        </div>
                        <img :src="way.image" class="card-img-top" alt="image">
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "WayToShare",
    data() {
        return {
            // images: [
            //     "https://popl.co/cdn/shop/files/get-the-app-qr-code.png?v=1692803358&width=300",
            //     "https://popl.co/cdn/shop/files/iphone-widgets.png?v=1692803358&width=300",
            //     "https://popl.co/cdn/shop/files/namedrop.png?v=1692803596&width=300",
            //     "https://popl.co/cdn/shop/files/text-your-link.png?v=1692803597&width=300",
            //     "https://popl.co/cdn/shop/files/wallet-and-apple-watch.png?v=1692803596&width=300",
            //     "https://popl.co/cdn/shop/files/email-signatures.png?v=1692803596&width=300",
            //     "https://popl.co/cdn/shop/files/virtual-backgrounds.png?v=1692803596&width=300",
            //     "https://popl.co/cdn/shop/files/popl-accessories.png?v=1692803596&width=300"
            // ]
            ways: [
                {
                    title: "R2L App Qr Code",
                    text: "",
                    image: "img/share/1.png",
                    // link: "Get the app"
                },
                {
                    title: "iPhone Widget",
                    text: "Add home screen and lock screen iPhone widgets for instant sharing",
                    image: "img/share/2.png",
                    // link: ""
                },
                {
                    title: "NameDrop",
                    text: "Tap iPhone to share your digital card right from the R2L app.",
                    image: "img/share/3.png",
                    // link: ""
                },
                {
                    title: "Text your link",
                    text: "Use or iMessage app or mobile app to text your link to anyone.",
                    image: "img/share/4.png",
                    // link: ""
                },
                {
                    title: "Wallet & apple watch",
                    text: "Share via Apple/Google Wallet, accessible from your iPhone or Apple Watch.",
                    image: "img/share/5.png",
                    // link: ""
                },
                {
                    title: "Email signatures",
                    text: "Share your digital business card from every email you send.",
                    image: "img/share/6.png",
                    // link: ""
                },
                {
                    title: "Virtual backgrounds",
                    text: "Create custom backgrounds for Zoom, Google Meet, Microsoft Teams & more...",
                    image: "img/share/7.png",
                    // link: ""
                },
                {
                    title: "R2L Accessories",
                    text: "",
                    image: "img/share/8.png",
                    // link: "Shop now"
                },
            ]
        }
    }
}
</script>
<style lang="">

</style>