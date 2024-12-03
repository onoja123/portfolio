<script setup>
import GithubIcon from "@/components/icon/GithubIcon.vue";
import LinkedinIcon from "@/components/icon/LinkedinIcon.vue";
import { navLink } from "@/data/nav";
import { RouterLink } from "vue-router";
</script>
<template>
  <nav class="flex items-center justify-between px-16 py-6">
    <div>
      <RouterLink class="text-4xl font-normal tracking-tighter">
        ONOJA
      </RouterLink>
    </div>
    <ul
      class="p-2 px-6 rounded-full h-16 bg-[#141414] flex items-center gap-10 max-w-sm w-full justify-between"
    >
      <RouterLink
        v-for="(link, index) in navLink"
        :key="index"
        class="py-3 text-base text-center text-[#B3B3B3]"
      >
        {{ link.label }}
      </RouterLink>
    </ul>

    <div class="flex items-center gap-4">
      <RouterLink
        class="bg-[#222] w-14 h-14 rounded-full flex justify-center items-center"
      >
        <LinkedinIcon />
      </RouterLink>
      <RouterLink
        class="bg-[#222] w-14 h-14 rounded-full flex justify-center items-center"
      >
        <GithubIcon />
      </RouterLink>
    </div>
  </nav>
</template>
