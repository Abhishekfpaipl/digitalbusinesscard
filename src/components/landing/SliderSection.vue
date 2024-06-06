<template>
  <div class="">
    <div class="d-flex flex-column align-items-center justify-content-center px-2">
      <h4 class="text-center">5,000,000+ <br>interaction powered by Spreadly</h4>
      <small>Teams worldwide rely on Spreadly for a sustainable and modern way of networking</small>
    </div>
    <div class="container">
      <div class="wrap-slider" ref="wrapSlider">
        <ul class="js-slider">
          <li class="item" v-for="(link, index) in links" :key="index">
            <a :href="link.href" :class="{ 'hop': link.class === 'hop' }">
              <img :src="link.text" alt="">
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { href: '#', text: '/img/gallery/1.png', class: '' },
        { href: '#', text: 'img/gallery/2.png', class: '' },
        { href: '#', text: 'img/gallery/3.png', class: '' },
        { href: '#', text: 'img/gallery/4.png', class: '' },
        { href: '#', text: 'img/gallery/4.png', class: 'hop' } // Add a class 'hop' for the fourth link
      ],
      widthWrap: 0,
      sliders: [],
      sliderList: [],
      stateList: [],
      isPaused: false
    };
  },
  mounted() {
    this.wrapSlider = this.$refs.wrapSlider;
    this.widthWrap = this.wrapSlider.offsetWidth;
    this.getSliderList();

    this.slider = this.sliders[0];
    this.sliderWidth = this.slider.offsetWidth;

    this.initSlider();
    this.start();

    // this.wrapSlider.addEventListener("mouseover", () => {
    //   this.isPaused = true;
    // });
    // this.wrapSlider.addEventListener("mouseout", () => {
    //   this.isPaused = false;
    // });
  },
  methods: {
    getSliderList() {
      this.sliders = document.querySelectorAll(".js-slider");
      this.sliderList = [...this.sliders];
    },
    initSlider() {
      const iterationItems = Math.ceil((this.widthWrap + this.sliderWidth) / this.sliderWidth);

      if (iterationItems > 1) {
        for (let i = 0; i < iterationItems - 1; i++) {
          const clone = this.slider.cloneNode(true);
          this.wrapSlider.appendChild(clone);
        }

        this.getSliderList();
      }

      this.stateList = this.sliderList.map((item, i) => {
        let pos = 0;
        let start = false;

        if (i < iterationItems - 1) {
          pos = -this.widthWrap + this.sliders[i].offsetWidth * i;
          start = true;

          this.sliders[i].style.transform = `translate(${pos}px, -50%)`;
        }

        return { pos, start };
      });
    },
    translate() {
      for (let i = 0; i < this.sliderList.length; i++) {
        const slider = this.sliderList[i];
        const sliderWidth = slider.offsetWidth;
        const nextIndex = i != this.sliderList.length - 1 ? i + 1 : 0;
        let pos;

        if (this.stateList[i].start) {
          this.stateList[i].pos -= 1;
          pos = this.stateList[i].pos;

          slider.style.transform = `translate(${pos}px, -50%)`;
        }

        const isComplete = pos <= -sliderWidth;
        const isOutSeen = pos <= -this.widthWrap - sliderWidth;

        if (isComplete) {
          this.stateList[nextIndex].start = true;
        }
        if (isOutSeen) {
          this.stateList[i].start = false;
          this.stateList[i].pos = 0;
        }
      }
    },
    start() {
      if (!this.isPaused) {
        this.translate();
      }
      requestAnimationFrame(this.start);
    }
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  align-items: center;
  padding: 20px;
}

.wrap-slider {
  width: 100%;
  overflow: hidden;
  height: 200px;
  // background: rgba(0, 0, 255, 0.4);
  position: relative;

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    position: absolute;
    left: 100%;
    top: 50%;
    transform: translate(0, -50%);
    display: flex;
    flex-direction: row;
    will-change: transform;

    li {
      padding: 10px;

      a {
        display: block;
        padding: 50px;
        white-space: nowrap;
        // background: rgba(255, 0, 0, 0.8);
        // color: rgba(0, 0, 255, 0.9);
        text-decoration: none;
        transition: background 0.3s ease-in, color 0.3s ease-out;
        will-change: color, background;

        &.hop {
          // background-image: url(https://media.giphy.com/media/3o85xoi6nNqJQJ95Qc/giphy.gif);
          background-size: cover;
          background-position: center;
          text-indent: 30%;
          background-color: white;
        }

        &:hover,
        &:active,
        &:focus {
          color: rgba(255, 0, 0, 0.9);
          // background: rgba(0, 0, 0, 0.9);
        }
      }
    }
  }
}
</style>