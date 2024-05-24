<script setup>
import Button from './button.vue';
function scrollToEndOfPage() {
    window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
    });
}
</script>
<template>
    <section class="pt-[5rem] pb-4 lg:pb-[5rem] flex flex-col items-center relative bg-hero-pattern px-[2rem]">
        <img src="/Star.png"
            class="absolute left-[1rem] md:left-[2.5rem] lg:bottom-[60vh] lg:w-[60px] lg:left-[10vh] bottom-[55vh] animate-spin" alt="">
        <img src="/Star.png"
            class="absolute right-[2rem] md:right-[3rem] bottom-[25vh] w-[20px] lg:w-[31px] lg:bottom-[30vh] lg:right-[15vh] animate-spin"
            alt="">
        <img src="/Star.png"
            class="absolute right-[2rem] bottom-[25vh] md:top-[40vh] md:right-[10vw] w-[20px] lg:w-[31px] lg:top-[30vh] lg:right-[35vh] animate-spin"
            alt="">
        <img class="w-10 mb-3 -rotate-12 wond" src="/wond.png" alt="">
        <h1 class="header mb-[15px] lg:w-[600px]">Upload your books & articles
            and let <span class="text-[#FF6128]">AI</span> do the rest.</h1>
        <div class="flex flex-col relative h-[20.6rem] lg:h-[26rem] md:h-[30rem]">
            <p class="sub-header w-[87%] self-center lg:w-[522px]">Provide summaries of diverse materials, including
                textbooks, novels, and PDFs. Ideal
                for
                students, professionals, or anyone seeking to make reading more efficient and enjoyable!</p>
            <div class="flex flex-col absolute top-[1rem]">
                <img class="self-center w-full md:w-[70%] lg:w-[100%]" src="/spotlight.png" alt="">
                <img class="absolute bottom-0 self-center md:w-[40%] translate-x-1 w-[234px] lg:w-[350px]"
                    src="/book.png" alt="">
            </div>
        </div>
        <Button class="mt-[2.5rem]" @click="scrollToEndOfPage">
            Join Waitlist
        </Button>
    </section>
</template>

<style scoped>
.wond {
    transform-origin: top right;
    animation: wiggle 2s infinite;
}

@keyframes wiggle {
    0% {
        transform: rotate(-20deg);
    }
    50% {
        transform: rotate(20deg);
    }
    100% {
        transform: rotate(-20deg);
    }
}
</style>