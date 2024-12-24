<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <section class="flex items-start justify-between h-full border-2">
    <div class="flex flex-col h-full border justify-between gap-8">
      <div class="flex flex-col gap-3">
        <h1 class="uppercase font-normal text-8xl">Let's Connect</h1>
        <p>
          Say hello at
          <RouterLink
            to="#"
            class="font-normal text-base border-b border-b-[#D3E97A]"
            >okpeonoja18@gmail.com</RouterLink
          ><br />
          <RouterLink
            to="#"
            class="font-normal text-base border-b border-b-[#D3E97A]"
            >+2348109942162</RouterLink
          >
        </p>
        <p>
          For more info, here’s my
          <RouterLink
            to="#"
            class="font-normal text-base border-b border-b-[#D3E97A]"
            >resume</RouterLink
          >
        </p>
      </div>
      <p class="text-[#c7c7c7] font-medium text-base">
        © 2024 Okpe Onoja Godwin
      </p>
    </div>
    <div class="max-w-2xl w-full flex flex-col gap-6">
      <div class="flex flex-col gap-3">
        <label class="text-[#c7c7c7] font-medium text-base" for="">Name</label>
        <input type="text" class="bg-[#1A1A1A] rounded px-4 py-3 h-12 w-full" />
      </div>
      <div class="flex flex-col gap-3">
        <label class="text-[#c7c7c7] font-medium text-base" for="">Email</label>
        <input type="text" class="bg-[#1A1A1A] rounded px-4 py-3 h-12 w-full" />
      </div>
      <div class="flex flex-col gap-3">
        <label class="text-[#c7c7c7] font-medium text-base" for=""
          >Subject</label
        >
        <input type="text" class="bg-[#1A1A1A] rounded px-4 py-3 h-12 w-full" />
      </div>
      <div class="flex flex-col gap-3">
        <label class="text-[#c7c7c7] font-medium text-base" for=""
          >Message</label
        >
        <textarea class="bg-[#1A1A1A] rounded px-4 py-3 h-40 w-full" />
      </div>
      <button
        class="flex item center uppercase bg-[#D3E97A] px-10 py-5 rounded-full w-fit"
      >
        Submit
      </button>
    </div>
  </section>
</template>
