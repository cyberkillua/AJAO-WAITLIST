<template>
    <footer class="bg-hero-pattern pb-[7rem] overflow-hidden lg:h-fit px-[1.5rem] xs:px-[1rem] pt-[4rem] md:flex flex-col">
        <h1 class="header lg:w-[600px] self-center">Don’t Miss out on our launch dates <span
                class="text-[#FF6128]">&</span> other updates</h1>

        <div class=" md:w-[493px] md:self-center">
            <div class="flex mt-[3rem] justify-between items-center">
                <input type="text" v-model="email" placeholder="Your Email Address"
                    class="h-[50px] w-[60%] focus:outline-0 md:w-[70%] border border-[#998C834D] rounded-[1.8rem] indent-3 placeholder:font-body placeholder:font-thin lg:placeholder:text-[14px] placeholder:text-[12px] placeholder:text-[#998C83]">
                <button @click="joinWaitlist"
                    class="bg-custom-gradient py-[.8rem] text-[14px] font-body capitalize px-[1.5rem] rounded-[1.8rem] text-white disabled:opacity-50 disabled:cursor-not-allowed"
                    :disabled="!testEmail || loading">{{ loading ? "loading...." : "Join Waitlist" }}</button>
            </div>
            <p v-if="!testEmail && email !== ''"
                class="text-[red] self-center mt-1 ml-3 font-sans text-[.7rem] md:text-[.8rem]">Please provide a valid
                email address.</p>
        </div>

    </footer>
</template>

<script setup>
import { ref, watch } from 'vue';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
const email = ref("");
const testEmail = ref(false)
const loading = ref(false)
const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const joinWaitlist = async () => {
    try {
        loading.value = true
        const response = await fetch("https://book-summerizer-ai.onrender.com/api/v1/waitlist/join-wait", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email.value })
        });

        const json = await response.json();

        if (response.ok) {
            email.value = "";
            loading.value = false
            toast.success(json.message, {
                autoClose: 2000,
                hideProgressBar: true,
                transition: toast.TRANSITIONS.SLIDE,
            });

        } else {
            loading.value = false
            toast.error(json.error, {
                autoClose: 2000,
                hideProgressBar: true

            });
        }

    } catch (error) {
        loading.value = false
        toast(error, {
            autoClose: 2000,
            hideProgressBar: true
        });
    }
};

watch(email, (newValue) => {
    testEmail.value = EMAIL_REGEX.test(newValue)
})
</script>

<style>
.Toastify__toast-container {
    @media screen and (max-width: 800px) {
        width: 60vw;
        left: auto;
        margin-top: 1rem;
        margin-left: 1rem;
    }
}

.Toastify__toast {
    text-transform: capitalize;
    font-family: sans-serif;
    font-size: .8rem;
    @media screen and (max-width: 800px) {
        font-size: .7rem;
    }    
}
</style>
