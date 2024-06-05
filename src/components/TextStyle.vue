<template>
    <div id="TextAnimation" class="text-center w-100">
        <h2 class="text-dark">Search For
            <span class="typed-text ">{{ typeValue }}</span>
            <span class="cursor" :class="{ 'typing': typeStatus }">&nbsp;</span>
        </h2>
        <div class=" text-dark">
            <p class="m-0 fs-5"> At No Cost Now you can Build <br> and Scale with
                confidence</p>
        </div>
    </div>
</template>

<script>

export default {
    data: () => {
        return {
            typeValue: '',
            typeStatus: false,
            typeArray: ['Retail Shop'],
            // typeArray: ['Online Retail Shop'],
            typingSpeed: 200,
            erasingSpeed: 100,
            newTextDelay: 2000,
            typeArrayIndex: 0,
            charIndex: 0
        }
    },
    methods: {
        typeText() {
            if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
                if (!this.typeStatus)
                    this.typeStatus = true;
                this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex);
                this.charIndex += 1;
                setTimeout(this.typeText, this.typingSpeed);
            }
            else {
                this.typeStatus = false;
                setTimeout(this.eraseText, this.newTextDelay);
            }
        },
        eraseText() {
            if (this.charIndex > 0) {
                if (!this.typeStatus)
                    this.typeStatus = true;
                this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1);
                this.charIndex -= 1;
                setTimeout(this.eraseText, this.erasingSpeed);
            }
            else {
                this.typeStatus = false;
                this.typeArrayIndex += 1;
                if (this.typeArrayIndex >= this.typeArray.length)
                    this.typeArrayIndex = 0;
                setTimeout(this.typeText, this.typingSpeed + 1000);
            }
        }
    },
    created() {
        setTimeout(this.typeText, this.newTextDelay + 200);
    }

}
</script>

<style lang="scss" scoped>
#TextAnimation {
    h2 {
        // font-size: 2rem;
        font-weight: 500;

        span.typed-text {
            // color: #fff;
            color: #d25b4b;
        }

        span.cursor {
            display: inline-block;
            margin-left: 3px;
            width: 4px;
            // background-color: #fff;
            background-color: #d25b4b;
            animation: cursorBlink 1s infinite;
        }

        span.cursor.typing {
            animation: none;
        }
    }

    @keyframes cursorBlink {
        49% {
            background-color: #fff;
        }

        50% {
            background-color: transparent;
        }

        99% {
            background-color: transparent;
        }
    }
}
</style>