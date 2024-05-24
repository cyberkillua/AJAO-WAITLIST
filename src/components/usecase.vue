<template>
    <div class="flex flex-col gap-[25px] mb-[50px] md:mb-[7rem] md:justify-between" v-for="(usecase, index) in usecases" :key="index" :class="index % 2 ? 'md:flex-row' : 'md:flex-row-reverse' ">
        <img :src="`${usecase.image}`" class="w-full lg:w-[518px]" alt="">
        <div class="flex flex-col w-[306px] self-center md:w-[100vw] lg:w-[477px]">
            <h2 class="text-center self-center w-[260px] md:w-[365px] lg:w-[463px] lg:font-semibold  md:text-[1.2rem] lg:text-[30px] md:text-left md:self-start text-[#381903] mb-[10px]">{{ usecase.title }}</h2>
            <p class="sub-header lg:w-[415px] md:text-left md:self-start">{{ usecase.paragraph }}</p>
        </div>
    </div>
</template>

<script setup>
 defineProps(['usecases']);
</script>


