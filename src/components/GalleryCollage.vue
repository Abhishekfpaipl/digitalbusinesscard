<template>
    <div class="container" id="imageCollage" ref="imageCollage">
        <div class="collageImage border" v-for="(image, index ) in images" :key="index">
            <img :src="image.src" :alt="image.alt" >
        </div>
    </div>
</template>

<script>
import Masonry from 'masonry-layout';
export default {
    data() {
        return {
            images: [
                { src: 'https://t4.ftcdn.net/jpg/02/56/10/07/360_F_256100731_qNLp6MQ3FjYtA3Freu9epjhsAj2cwU9c.jpg', alt: 'Image 1' },
                { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCcZgzHS5HS02nxVXYM-ZV7LxuHqbUNdCj8A&s', alt: 'Image 8' },
                { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg5C1ZvRQN1S8wR6X3V3zNoxOAY6PTxWwiDA&s', alt: 'Image 3' },
                { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdNQQ7fhk27ymnygeeOof3wJ0lu-4Z18qKlA&s', alt: 'Image 6' },
                { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZadRfF_T-e-7C4nufNJ8T514HyWO5WDG7Ig&s', alt: 'Image 5' },
                { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzXjAhQuy0BOtC_myG_KcyVF4MGvhJTSv9kg&s', alt: 'Image 7' },
                { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReHU-DT6OLZpLeIXhRxVQpihvGdAbhAV86bQ&s', alt: 'Image 4' },
                { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdZOBkio-wrTpcqr9ELIxaK-sN4PtmVHKATw&s', alt: 'Image 10' },
                { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLpyyc2bDBvJYsw1YqAlmTFMYfxLuLZvpUPw&s', alt: 'Image 2' },
                { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJOen3c9HwoWLwXEuW-cLMdP-RYRGou7vohg&s', alt: 'Image 9' },
            ],
            publicPath: process.env.BASE_URL,
        }; 
    },
    created() {
        this.initMasonry();
    },
    mounted() {
        this.updateCollageLayout();
        window.addEventListener('resize', this.updateCollageLayout);
    },
    unmounted() {
        window.removeEventListener('resize', this.updateCollageLayout);
    },
    methods: {
        initMasonry() {
            const elem = this.$refs.imageCollage;
            this.msnry = new Masonry(elem, {
                itemSelector: '.collageImage',
                // columnWidth: 200, 
                gutter: 10,
            });
        },
        updateCollageLayout() {
            const collage = this.$refs.imageCollage;
            const width = window.innerWidth;
            if (width < 300) {
                collage.style.columnCount = 1;
            } else if (width >= 300 && width < 600) {
                collage.style.columnCount = 2;
            } else if (width >= 600 && width < 900) {
                collage.style.columnCount = 3;
            } else {
                collage.style.columnCount = 4;
            }
        },
    },
};
</script>

<style scoped>
#imageCollage {
    column-count: 3;
    column-gap: 10px;
    width: 100%;
    padding: 5px;
}

#imageCollage img {
    width: 100%;
    display: block;
    margin-bottom: 10px;
}
</style>
