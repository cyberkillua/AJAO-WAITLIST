<script setup>
import Button from './button.vue';
import Ajao from "../AjaoAI.json";
import { LottieAnimation } from "lottie-web-vue"

function scrollToEndOfPage() {
    window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
    });
}

</script>
<template>
    <section class="pt-[5rem] flex flex-col items-center relative bg-hero-pattern px-[2rem]">
        <img src="/Star.png"
            class="absolute left-[6vw] md:left-[2.5rem] lg:bottom-[60vh] md:bottom-[40vh] lg:w-[60px] lg:left-[10vh] bottom-[45vh] animate-spin"
            alt="">
        <img src="/Star.png"
            class="absolute right-[2rem] md:right-[3rem] bottom-[25vh] md:bottom-[50vh] w-[20px] lg:w-[31px] lg:bottom-[30vh] lg:right-[15vh] animate-spin"
            alt="">
        <img src="/Star.png"
            class="absolute right-[2rem] bottom-[25vh] md:top-[55vh] md:right-[10vw] w-[20px] lg:w-[31px] lg:top-[30vh] lg:right-[35vh] animate-spin"
            alt="">
        <h1 class="header mb-[15px] lg:w-[600px] lg:mt-[5rem] mt-[3rem]">Upload your books & articles
            and let <span class="text-[#FF6128]">AI</span> do the rest
            .
        </h1>
        <div class="flex flex-col h-[14rem] lg:h-[26rem] md:h-[33rem]">
            <p class="sub-header w-[87%] self-center lg:w-[522px]">Provide summaries of diverse materials, including
                textbooks, novels, and PDFs. Ideal
                for
                students, professionals, or anyone seeking to make reading more efficient and enjoyable!
            </p>
            <div class="absolute self-center lg:top-[4rem] top-[0]">
                <LottieAnimation class="w-[100vw] lg:h-[100vh] h-[58vh]" :animation-data="Ajao" :auto-play="true"
                    :loop="true" />
            </div>
        </div>
        <Button class="lg:mt-5" @click="scrollToEndOfPage">
            Join Waitlist
        </Button>
    </section>
</template>