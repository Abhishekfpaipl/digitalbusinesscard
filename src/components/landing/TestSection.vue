<template>
    <div class="my-3 py-3">
        <!-- <button class="toggle" @click="toggleDirection" :class="{ 'toggle--vertical': isVertical }">
            <span>Toggle scroll axis</span>
            <svg aria-hidden="true" viewBox="0 0 512 512" width="100" title="arrows-alt-h">
                <path
                    d="M377.941 169.941V216H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.568 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296h243.882v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.568 0-33.941l-86.059-86.059c-15.119-15.12-40.971-4.412-40.971 16.97z" />
            </svg>
        </button> -->
        <h1 class="text-center mb-5">Millions of teams and professionals around the world trust R2L</h1>
        <article :class="['wrapper', { 'wrapper--vertical': isVertical }]">
            <div class="marquee" :class="{ 'marquee--vertical': isVertical }">
                <div class="marquee__group" :style="{ 'animation-direction': isReverse ? 'reverse' : 'normal' }">
                    <img src="https://popl.co/cdn/shop/files/uber-for-business-logo-vector_9e2de018-b147-4db2-bba9-943318bd0701_400x.png?v=1681184019"
                        style="height:60px; width:175px;object-fit: contain;" alt="">
                    <img src="https://popl.co/cdn/shop/files/disney-logo_400x.png?v=1681411450"
                        style="height:60px; width:175px; object-fit: contain" alt="">
                    <img src="https://popl.co/cdn/shop/files/Compass_65738054-4331-4345-812f-f94873e75db0_400x.png?v=1681184019"
                        style="height:60px; width:175px; object-fit: contain" alt="">
                    <img src="https://popl.co/cdn/shop/files/Tesla__Inc.-Wordmark-Black-Logo.wine_02158900-a08d-4963-95f3-f05f66bce57f_400x.png?v=1681184019"
                        style="height:60px; width:175px; object-fit: contain" alt="">
                    <img src="https://popl.co/cdn/shop/files/mgm-logo_400x.webp?v=1689027252"
                        style="height:60px; width:175px; object-fit: contain" alt="">
                    <img src="https://popl.co/cdn/shop/files/Prudential_logo_400x.png?v=1681184019"
                        style="height:60px; width:175px; object-fit: contain" alt="">
                    <img src="https://popl.co/cdn/shop/files/salesforce_61aef24b-0672-426a-ba3c-a9945bcd7513_400x.png?v=1693232754"
                        style="height:60px; width:175px; object-fit: contain" alt="">
                    <img src="https://popl.co/cdn/shop/files/REMAX_New_2021_c61c609b-cec1-48ca-8e7e-8a4a35959b00_400x.png?v=1681184019"
                        style="height:60px; width:175px; object-fit: contain" alt="">
                    <img src="https://popl.co/cdn/shop/files/XMLID_1_400x.png?v=1681184019"
                        style="height:60px; width:175px; object-fit: contain" alt="">
                    <!-- Your SVG icons here -->
                </div>
                <div aria-hidden="true" class="marquee__group"
                    :style="{ 'animation-direction': isReverse ? 'reverse' : 'normal' }">
                    <img src="https://popl.co/cdn/shop/files/uber-for-business-logo-vector_9e2de018-b147-4db2-bba9-943318bd0701_400x.png?v=1681184019"
                        style="height:60px; width:175px; object-fit: contain;" alt="">
                    <img src="https://popl.co/cdn/shop/files/disney-logo_400x.png?v=1681411450"
                        style="height:60px; width:175px; object-fit: contain;" alt="">
                    <img src="https://popl.co/cdn/shop/files/Compass_65738054-4331-4345-812f-f94873e75db0_400x.png?v=1681184019"
                        style="height:60px; width:175px; object-fit: contain;" alt="">
                    <img src="https://popl.co/cdn/shop/files/Tesla__Inc.-Wordmark-Black-Logo.wine_02158900-a08d-4963-95f3-f05f66bce57f_400x.png?v=1681184019"
                        style="height:60px; width:175px; object-fit: contain;" alt="">
                    <img src="https://popl.co/cdn/shop/files/mgm-logo_400x.webp?v=1689027252"
                        style="height:60px; width:175px; object-fit: contain;" alt="">
                    <img src="https://popl.co/cdn/shop/files/Prudential_logo_400x.png?v=1681184019"
                        style="height:60px; width:175px; object-fit: contain;" alt="">
                    <img src="https://popl.co/cdn/shop/files/salesforce_61aef24b-0672-426a-ba3c-a9945bcd7513_400x.png?v=1693232754"
                        style="height:60px; width:175px object-fit: contain;;" alt="">
                    <img src="https://popl.co/cdn/shop/files/REMAX_New_2021_c61c609b-cec1-48ca-8e7e-8a4a35959b00_400x.png?v=1681184019"
                        style="height:60px; width:175px; object-fit: contain;" alt="">
                    <img src="https://popl.co/cdn/shop/files/XMLID_1_400x.png?v=1681184019"
                        style="height:60px; width:175px; object-fit: contain;" alt="">
                    <!-- Your SVG icons here -->
                </div>
            </div>

            <!-- <div class="marquee marquee--reverse" :class="{ 'marquee--vertical': isVertical }">
                <div class="marquee__group" :style="{ 'animation-direction': isReverse ? 'normal' : 'reverse' }">
                    <img src="/img/gallery/1.png" alt="">
                    <img src="/img/gallery/2.png" alt="">
                    <img src="/img/gallery/3.png" alt="">
                    <img src="/img/gallery/4.png" alt="">
                    <img src="/img/gallery/5.png" alt="">
                    <img src="/img/gallery/6.png" alt="">
                    <img src="/img/gallery/7.png" alt="">
                    <img src="/img/gallery/8.png" alt="">
                    <img src="/img/gallery/9.png" alt="">

                </div>
                <div aria-hidden="true" class="marquee__group"
                    :style="{ 'animation-direction': isReverse ? 'normal' : 'reverse' }">
                    <img src="/img/gallery/1.png" alt="">
                    <img src="/img/gallery/2.png" alt="">
                    <img src="/img/gallery/3.png" alt="">
                    <img src="/img/gallery/4.png" alt="">
                    <img src="/img/gallery/5.png" alt="">
                    <img src="/img/gallery/6.png" alt="">
                    <img src="/img/gallery/7.png" alt="">
                    <img src="/img/gallery/8.png" alt="">
                    <img src="/img/gallery/9.png" alt="">

                </div>
            </div> -->
        </article>

        <!-- Your SVG definitions here -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            isVertical: false,
            isReverse: false,
        };
    },
    methods: {
        toggleDirection() {
            this.isVertical = !this.isVertical;
            this.isReverse = !this.isReverse;
        },
    },
};
</script>

<style>
:root {
    --color-text: navy;
    --color-bg: papayawhip;
    --color-bg-accent: #ecdcc0;
    --size: clamp(10rem, 1rem + 40vmin, 30rem);
    --gap: calc(var(--size) / 14);
    --duration: 60s;
    --scroll-start: 0;
    --scroll-end: calc(-100% - var(--gap));
}

/* @media (prefers-color-scheme: dark) {
    :root {
        --color-text: papayawhip;
        --color-bg: navy;
        --color-bg-accent: #2626a0;
    }
} */

* {
    box-sizing: border-box;
}

/* body {
    display: grid;
    align-content: center;
    overflow: hidden;
    gap: var(--gap);
    width: 100%;
    min-height: 100vh;
    font-family: system-ui, sans-serif;
    font-size: 1rem;
    line-height: 1.5;
    color: var(--color-text);
    background-color: var(--color-bg);
} */

.marquee {
    display: flex;
    overflow: hidden;
    user-select: none;
    gap: var(--gap);
    mask-image: linear-gradient(var(--mask-direction, to right),
            hsl(0 0% 0% / 0),
            hsl(0 0% 0% / 1) 20%,
            hsl(0 0% 0% / 1) 80%,
            hsl(0 0% 0% / 0));
}

.marquee__group {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: var(--gap);
    min-width: 100%;
    animation: scroll-x var(--duration) linear infinite;
}

@media (prefers-reduced-motion: reduce) {
    .marquee__group {
        animation-play-state: paused;
    }
}

.marquee--vertical {
    --mask-direction: to bottom;
}

.marquee--vertical,
.marquee--vertical .marquee__group {
    flex-direction: column;
}

.marquee--vertical .marquee__group {
    animation-name: scroll-y;
}

.marquee--reverse .marquee__group {
    animation-direction: reverse;
    animation-delay: -3s;
}

@keyframes scroll-x {
    from {
        transform: translateX(var(--scroll-start));
    }

    to {
        transform: translateX(var(--scroll-end));
    }
}

@keyframes scroll-y {
    from {
        transform: translateY(var(--scroll-start));
    }

    to {
        transform: translateY(var(--scroll-end));
    }
}

/* Element styles */
/* .marquee svg {
    display: grid;
    place-items: center;
    width: var(--size);
    fill: var(--color-text);
    background: var(--color-bg-accent);
    aspect-ratio: 16/9;
    padding: calc(var(--size) / 10);
    border-radius: 0.5rem;
}

.marquee--vertical svg {
    aspect-ratio: 1;
    width: calc(var(--size) / 1.5);
    padding: calc(var(--size) / 6);
} */

/* Parent wrapper */
.wrapper {
    display: flex;
    flex-direction: column;
    gap: var(--gap);
    margin: auto;
    max-width: 100vw;
}

.wrapper--vertical {
    flex-direction: row;
    height: 100vh;
}

/* Toggle direction button */
.toggle {
    --size: 3rem;
    position: relative;
    position: fixed;
    top: 1rem;
    left: 1rem;
    width: var(--size);
    height: var(--size);
    font: inherit;
    text-align: center;
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 50%;
    color: inherit;
    background-color: var(--color-bg-accent);
    z-index: 1;
}

.toggle:focus-visible {
    box-shadow: 0 0 0 2px var(--color-text);
}

.toggle span {
    position: absolute;
    display: inline-block;
    top: 50%;
    left: calc(100% + 0.4em);
    width: fit-content;
    white-space: nowrap;
    transform: translateY(-50%);
    animation: fade 400ms 4s ease-out forwards;
    user-select: none;
}

/* .toggle svg {
    --size: 1.5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    width: var(--size);
    height: var(--size);
    fill: currentcolor;
    transform: translate(-50%, -50%);
    transition: transform 300ms cubic-bezier(0.25, 1, 0.5, 1);
}

.toggle--vertical svg {
    transform: translate(-50%, -50%) rotate(-90deg);
} */

@keyframes fade {
    to {
        opacity: 0;
        visibility: hidden;
    }
}
</style>