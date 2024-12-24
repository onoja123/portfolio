<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <section class="flex items-start w-full justify-between">
    <h1 class="uppercase font-normal text-8xl">About me</h1>
    <div class="max-w-2xl w-full flex flex-col gap-14">
      <div class="flex flex-col gap-3">
        <h3 class="text-3xl font-medium">
          I am a full stack developer based in Abuja. Has Computer Science
          background.
        </h3>
        <p class="text-[#C7C7C7] font-normal text-lg">
          I am a full stack developer with 5+ years of experience in building
          high-quality applications and backend systems, I specialize in
          crafting intuitive UIs, scalable databases, and robust APIs. I am
          passionate about learning new technologies and continuously improving
          my skills
        </p>
      </div>
      <RouterLink
        to="#"
        class="text-[#D3E97A] border-b-2 border-b-[#D3E97A] uppercase font-bold text-base w-fit"
      >
        More about me
      </RouterLink>
    </div>
  </section>
</template>
