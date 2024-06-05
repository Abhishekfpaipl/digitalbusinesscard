<template>
    <!-- <div class="my-5" id="slider">
      <div class="heading d-flex justify-content-center text-center container">
        <div class="fs-3 fw-bold">Top brands available for a seller to resell across all categories</div>
      </div>
      <div class="slider shadow" @mouseover="pause" @mouseleave="resume">
        <div class="slide-track">
          <div v-for="(image, index) in duplicatedImages" :key="index" class="slide d-flex justify-content-center align-items-center">
            <img :src="image.src" :style="{ margin: '0px 60px', width: image.displayWidth }" />
          </div>
        </div>
      </div>
    </div> -->

    <!-- <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item" data-bs-interval="2000">
                <img src="/img/gallery/3.png" class="d-inline-block w-50" alt="Image 3">
                <img src="/img/gallery/4.png" class="d-inline-block w-50" alt="Image 3">
            </div>
            <div class="carousel-item active" data-bs-interval="2000">
                <img src="/img/gallery/1.png" class="d-inline-block w-50" alt="Image 1">
                <img src="/img/gallery/2.png" class="d-inline-block w-50" alt="Image 2">
            </div>
            <div class="carousel-item" data-bs-interval="2000">
                <img src="/img/gallery/2.png" class="d-inline-block w-50" alt="Image 2">
                <img src="/img/gallery/3.png" class="d-inline-block w-50" alt="Image 3">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div> -->

    <div id="hold_logos">
        <img v-for="(image, index) in images" :key="index" :src="image" class="logo" />
    </div>
</template>


<script>
export default {
data() {
      return {
        images: [
          "https://www.strunkmedia.com/wp-content/uploads/2018/05/bigstock-221516158.jpg",
          "https://cms-assets.tutsplus.com/cdn-cgi/image/width=360/uploads/users/2273/posts/32751/image/TwoPeaks-Logo.jpg",
          "https://png.pngtree.com/png-clipart/20210711/original/pngtree-colorful-nature-logo-png-image_6511888.jpg",
          "https://designshack.net/wp-content/uploads/symbol-logo-example.jpg",
          "https://cdn.thebrandingjournal.com/wp-content/uploads/2019/05/chanel_logo_the_branding_journal.jpg"
        ],
        numberOfLogos: 5,
        intCnt: -1,
        intervalId: null
      };
    },
    computed: {
      spacing() {
        return (window.innerWidth / this.numberOfLogos) * 10;
      },
      duration() {
        return this.numberOfLogos * this.spacing;
      }
    },
    mounted() {
      this.startInterval();
      setTimeout(this.clearInterval, this.duration);
    },
    methods: {
      startInterval() {
        this.intervalId = setInterval(this.addImage, this.spacing / 1.4);
      },
      clearInterval() {
        clearInterval(this.intervalId);
      },
      addImage() {
        this.intCnt++;
        if (this.intCnt < this.numberOfLogos) {
          this.images.push(this.images[this.intCnt]);
        }
      }
    }
}
</script>

<!-- <script>
export default {
    data() {
        return {
            images: [
                { src: '/img/gallery/1.png', displayWidth: '50%' },
                { src: '/img/gallery/2.png', displayWidth: '80%' },
                { src: '/img/gallery/3.png', displayWidth: '60%' },
                { src: '/img/gallery/4.png', displayWidth: '60%' },
                { src: '/img/gallery/5.png', displayWidth: '60%' },
                { src: '/img/gallery/6.png', displayWidth: '60%' },
                { src: '/img/gallery/7.png', displayWidth: '80%' },
                { src: '/img/gallery/8.png', displayWidth: '60%' },
                { src: '/img/gallery/9.png', displayWidth: '60%' },
            ]
        };
    },
    computed: {
        duplicatedImages() {
            // Duplicate the images array to create an infinite loop effect
            return [...this.images, ...this.images];
        }
    },
    methods: {
        pause() {
            document.querySelector('.slide-track').style.animationPlayState = 'paused';
        },
        resume() {
            document.querySelector('.slide-track').style.animationPlayState = 'running';
        }
    }
}
</script> -->


<style>
#hold_logos {
    height: 200px;
    background: #218c74;
    display: flex;
    align-items: center;
    margin-top: 100px;
    position: relative;
}

.logo {
    position: absolute;
    cursor: pointer;
    width: 140px;
    border-radius: 4px;
    animation: marquee 10s linear infinite;
}

@keyframes marquee {
    0% {
        transform: translateX(1400px);
    }

    100% {
        transform: translateX(-200px);
    }
}
</style>

<!-- <style>
.carousel-item img {
    width: 300px;
    /* Fixed width */
    height: auto;
    /* Maintain aspect ratio */
    margin: auto;
    /* Centering the image horizontally */
}

/* Optional: Center the carousel controls if needed */
.carousel-control-prev,
.carousel-control-next {
    top: 50%;
    /* Align vertically */
    transform: translateY(-50%);
    /* Center vertically */
}
</style> -->