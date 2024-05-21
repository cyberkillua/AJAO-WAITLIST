<script setup>
import usecase from './usecase.vue';

const usecases = [
    {
        title: "Upload a PDF document to receive a summary.",
        paragraph: "Our system will analyse the content of the document and provide you with a comprehensive summary. This summary will highlight the key points and ideas in the document, giving you a clear overview without having to read through the entire document.",
        image: "/pdf.png"
    },
    {
        title: "Provide the name and author of a book to receive a summary.",
        paragraph: "Provide the name and author of a book and Ajao will provide you a concise summary with key points such as the the main theme, key ideas and arguments of the book.",
        image: "/author.png"
    },
    {
        title: "Upload an audio file to receive a summary.",
        paragraph: "You can easily get a short summary of whatever audio file you provide Ajao.",
        image: "/audio.png "
    },
]
</script>

<template>
    <section class="mt-[4rem] px-[2rem] lg:px-[100px]">
        <h1
            class="mb-[20px] lg:mb-[5rem] capitalize  font-semibold text-center text-[1.375rem] lg:text-[2.19rem] text-[#381903]">
            Use Cases</h1>
        <div class="max-w-[1500px] mx-auto">
            <usecase :usecases="usecases"></usecase>
        </div>
    </section>
</template>