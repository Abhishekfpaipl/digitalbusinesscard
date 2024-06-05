<template>
    <div>
        <div class="my-5">
            <div class="heading d-flex justify-content-center text-center pt-4">
                <p class="fs-1" style="font-weight: 600;">Success Stories of Our Partners</p>
            </div>
            <div class="w-100 d-block ">
                <div class="w-100 overflow-auto d-flex align-items-center hide-scroll" ref="slider">
                    <div v-for="(review, index) in infiniteReviews" :key="index" @click="showUser(review, index)"
                        class="btn rounded-circle m-2 mx-3 d-flex" :class="{ selectedDiv: isSelected(review.id) }">
                        <img :src="review.imgr" alt="User Image">
                    </div>
                </div>
                <div>
                    <div class="text d-flex justify-content-center text-center">
                        <p class="w-75 fs-4">{{ getSelectedReviewText }}</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
export default {
    name: 'SucessSection',
    data() {
        return {
            selectedReview: 0,
            reviews: [
                {
                    id: 1,
                    show: false,
                    imgr: 'img/users/1.png',
                    text: ' "Using Retailpur.com has given me the opportunity to sell more products, and my customers have increased greatly over the period I joined as a Retailer."'
                },
                {
                    id: 2,
                    show: false,
                    imgr: 'img/users/2.png',
                    text: ' "Smooth app functioning, easy to use for even a novice. No need to build a website to sell products which requires monthly fees. The platform already provides a free one which is totally at zero cost. Make your own shop here with no headaches. Prime membership has extra benefits, although it is not mandatory. Payments can be withdrawn directly in your bank account." '
                },
                {
                    id: 3,
                    show: false,
                    imgr: 'img/users/3.png',
                    text: ' "Loved its UI. I have tried many other apps but this app is the best. The details in which the products are shown in picture is above all." '
                },
                {
                    id: 4,
                    show: false,
                    imgr: 'img/users/4.png',
                    text: ' "My shopping experience has been good and delivery is as per schedule with courteous and location savvy personnel. I use PayTM which is safe. They focus on security so if you are logging in from another phone, they immediately check to verify its you." '
                },
                {
                    id: 5,
                    show: false,
                    imgr: 'img/users/5.png',
                    text: '  "I have been able to increase my earnings since I joined as a Retailer. I sell almost everything in the app to my contacts and members in different online channels and groups." '
                },
                {
                    id: 6,
                    show: false,
                    imgr: 'img/users/3.png',
                    text: ' "Smooth app functioning, easy to use for even a novice. No need to build a website to sell products which requires monthly fees. The platform already provides a free one which is totally at zero cost. Make your own shop here with no headaches. Prime membership has extra benefits, although it is not mandatory. Payments can be withdrawn directly in your bank account." '
                },
                {
                    id: 7,
                    show: false,
                    imgr: 'img/users/2.png',
                    text: ' "Loved its UI. I have tried many other apps but this app is the best. The details in which the products are shown in picture is above all." '
                },
                {
                    id: 8,
                    show: false,
                    imgr: 'img/users/1.png',
                    text: ' "My shopping experience has been good and delivery is as per schedule with courteous and location savvy personnel. I use PayTM which is safe. They focus on security so if you are logging in from another phone, they immediately check to verify its you." '
                },
                {
                    id: 9,
                    show: false,
                    imgr: 'img/users/4.png',
                    text: '  "I have been able to increase my earnings since I joined as a Retailer. I sell almost everything in the app to my contacts and members in different online channels and groups." '
                },
                {
                    id: 10,
                    show: false,
                    imgr: 'img/users/5.png',
                    text: ' "Smooth app functioning, easy to use for even a novice. No need to build a website to sell products which requires monthly fees. The platform already provides a free one which is totally at zero cost. Make your own shop here with no headaches. Prime membership has extra benefits, although it is not mandatory. Payments can be withdrawn directly in your bank account." '
                },
                {
                    id: 11,
                    show: false,
                    imgr: 'img/users/2.png',
                    text: ' "Loved its UI. I have tried many other apps but this app is the best. The details in which the products are shown in picture is above all." '
                },
                {
                    id: 12,
                    show: false,
                    imgr: 'img/users/1.png',
                    text: ' "My shopping experience has been good and delivery is as per schedule with courteous and location savvy personnel. I use PayTM which is safe. They focus on security so if you are logging in from another phone, they immediately check to verify its you." '
                },
                {
                    id: 13,
                    show: false,
                    imgr: 'img/users/4.png',
                    text: ' "My shopping experience has been good and delivery is as per schedule with courteous and location savvy personnel. I use PayTM which is safe. They focus on security so if you are logging in from another phone, they immediately check to verify its you." '
                },
                {
                    id: 14,
                    show: false,
                    imgr: 'img/users/2.png',
                    text: ' "Smooth app functioning, easy to use for even a novice. No need to build a website to sell products which requires monthly fees. The platform already provides a free one which is totally at zero cost. Make your own shop here with no headaches. Prime membership has extra benefits, although it is not mandatory. Payments can be withdrawn directly in your bank account." '
                },
            ],
        };
    },
    computed: {
        infiniteReviews() {
            const reviews = this.reviews.slice();
            return reviews.concat(reviews);
        },
        getSelectedReviewText() {
            return this.infiniteReviews[this.selectedReview].text;
        },
    },
    mounted() {
        this.reviews[this.selectedReview].show = true;
        this.scrollToCenter();
    },
    methods: {
        isSelected(clickedReviewId) {
            return clickedReviewId === this.infiniteReviews[this.selectedReview].id;
        },
        showUser(review, reviewIndex) {
            this.selectedReview = reviewIndex;
            let userIndex = this.reviews.indexOf(review);
            this.reviews.forEach(user_review => {
                user_review.show = false
            });
            this.reviews[userIndex].show = true
            this.scrollToCenter();
        },
        scrollToCenter() {
            const slider = this.$refs.slider;
            const selectedElement = slider.children[this.selectedReview];
            const scrollLeft =
                selectedElement.offsetLeft - (slider.offsetWidth - selectedElement.offsetWidth) / 1.8;
            slider.scrollLeft = scrollLeft;
        },
    }
}
</script>

<style lang="scss" scoped>
.btn.selectedDiv {
    border: 2px solid red;
}

img {
    width: 80px;
    height: 80px;
}

.btn.selectedDiv img {
    width: 120px !important;
    height: 120px !important;
}

.btn {
    --bs-btn-padding-x: 5px;
    --bs-btn-padding-y: 5px;
}

#style-4 {
    scroll-behavior: smooth; // Add smooth scrolling
    overflow-x: scroll;
}

#style-4::-webkit-scrollbar {
    display: none;
}

.hide-scroll {
    overflow-x: hidden;
}

::-webkit-scrollbar {
    width: 10px;
    /* Width of the scrollbar */
}

::-webkit-scrollbar-track {
    background: #ffffff;
    /* Color of the scrollbar track */
}

::-webkit-scrollbar-thumb {
    background: rgb(134, 132, 132)4f4;
    /* Color of the scrollbar thumb */
    border-radius: 5px;
    /* Rounded corners of the thumb */
    width: 10px;
}

::-webkit-scrollbar-thumb:hover {
    background: #f5e5e5;
    width: 10px;
}
</style>
