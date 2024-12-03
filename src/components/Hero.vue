<script setup>
import memoji from "@/assets/images/memoji.png";
</script>

<template>
  <header class="flex justify-between mb-32">
    <div class="max-w-xl flex flex-col gap-10">
      <div class="flex flex-col gap-2">
        <h2 class="text-8xl uppercase">
          hi, i am <br />
          OKPE ONOJA
        </h2>
        <p class="text-lg font-normal">
          A full stack developer with 5+ years of experience in building
          high-quality applications and backend systems, I specialize in
          crafting intuitive UIs, scalable databases, and robust APIs.
        </p>
      </div>
      <button
        class="w-52 h-14 bg-[#D3E97A] rounded-full flex items-center justify-between pl-6 pr-2"
      >
        <span class="uppercase text-base font-bold">Contact Me</span>
        <div class="bg-[#0A0A0A] w-3 h-3 rounded-full" />
      </button>
    </div>
    <div>
      <img :src="memoji" />
    </div>
  </header>
</template>
