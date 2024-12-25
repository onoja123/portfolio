<script setup>
import memoji from "@/assets/images/memoji.png";
import IconLink from "./IconLink.vue";
import LinkedinIcon from "./icon/LinkedinIcon.vue";
import GithubIcon from "./icon/GithubIcon.vue";
</script>

<template>
  <header class="flex flex-col px-4 lg:px-0 lg:flex-row justify-between">
    <div class="max-w-xl flex flex-col gap-10">
      <div class="flex flex-col gap-2">
        <h2 class="text-5xl lg:text-3xl xl:text-7xl uppercase">
          hi, i am <br />
          OKPE ONOJA
        </h2>
        <p class="text-base lg:text-lg font-normal">
          Welcome to my corner of the web—where creativity meets code. 
          Dive in to explore my journey as a developer, my projects, 
          and my passion for crafting seamless digital experiences. 
          Sit back, scroll, and enjoy the ride!
        </p>
      </div>
      <div class="flex items-center gap-3">
        <RouterLink
          to="/contact"
          class="w-52 h-14 bg-[#D3E97A] rounded-full flex items-center justify-between pl-6 pr-2"
        >
          <span class="uppercase text-base font-bold">Contact Me</span>
          <div class="bg-[#0A0A0A] w-3 h-3 rounded-full"></div>
        </RouterLink>
      </div>
        <div class="flex items-center gap-3 lg:hidden">
          <IconLink link="https://linkedin.com/in/okpe-onoja">
            <LinkedinIcon />
          </IconLink>
          <IconLink link="https://github.com/onoja123">
            <GithubIcon />
          </IconLink>
        </div>
      </div>
    <div class="mt-20 lg:mt-0">
      <img :src="memoji" />
    </div>
  </header>
</template>
