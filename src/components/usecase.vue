<template>
    <div class="flex flex-col lg:flex-row gap-[25px] mb-[50px] lg:mb-[7rem] lg:justify-between" v-for="(usecase, index) in usecases" :key="index" :class="index % 2 ? '' : 'lg:flex-row-reverse' ">
        <img :src="`${usecase.image}`" class="w-full lg:w-[518px]" alt="">
        <div class="flex flex-col">
            <h2 class="text-center self-center font-medium w-[200px] lg:w-[365px] lg:text-[30px] lg:text-left lg:self-start text-[#381903] mb-[10px]">{{ usecase.title }}</h2>
            <p class="sub-header w-[85%] lg:w-[477px] self-center lg:text-left lg:self-start">{{ usecase.paragraph }}</p>
        </div>
    </div>
</template>

<script setup>
 defineProps(['usecases']);
</script>