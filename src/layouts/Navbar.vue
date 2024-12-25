<script setup>
import GithubIcon from "@/components/icon/GithubIcon.vue";
import LinkedinIcon from "@/components/icon/LinkedinIcon.vue";
import { navLink } from "@/data/nav";
import { RouterLink } from "vue-router";
import { ref } from "vue";

const isMenuOpen = ref(false);
</script>

<template>
  <nav class="flex items-center justify-between px-4 py-4 lg:px-16 lg:py-6">
    <!-- Logo -->
    <div>
      <RouterLink to="/" class="text-4xl font-normal tracking-tighter">
        ONOJA
      </RouterLink>
    </div>

    <!-- Desktop Links -->
    <ul
      class="p-2 px-6 lg:flex rounded-full h-16 bg-[#141414] hidden items-center max-w-sm w-full justify-between"
    >
      <li v-for="(link, index) in navLink" :key="index">
        <RouterLink
          :to="link.href"
          class="py-3 text-base text-center px-5 text-[#B3B3B3]"
          :class="{
            'text-[#0A0A0A] font-bold bg-[#D3E97A] rounded-full':
              $route.path === link.href,
          }"
        >
          {{ link.label }}
        </RouterLink>
      </li>
    </ul>

    <!-- Social Icons -->
    <div class="hidden lg:flex items-center gap-4">
      <RouterLink
        to="https://linkedin.com"
        target="_blank"
        class="bg-[#222] w-14 h-14 rounded-full flex justify-center items-center"
      >
        <LinkedinIcon />
      </RouterLink>
      <RouterLink
        to="https://github.com"
        target="_blank"
        class="bg-[#222] w-14 h-14 rounded-full flex justify-center items-center"
      >
        <GithubIcon />
      </RouterLink>
    </div>

    <!-- Mobile Menu Button -->
    <button
      class="lg:hidden text-black focus:outline-none"
      @click="isMenuOpen = !isMenuOpen"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
    </button>

    <!-- Mobile Menu -->
    <div
      v-if="isMenuOpen"
      class="absolute top-16 left-0 w-full bg-[#141414] p-6 shadow-md lg:hidden"
    >
      <ul class="flex flex-col gap-4">
        <li v-for="(link, index) in navLink" :key="index">
          <RouterLink
            :to="link.href"
            class="block text-base text-[#B3B3B3]"
            :class="{ 'text-white font-bold': $route.path === link.href }"
            @click="isMenuOpen = false"
          >
            {{ link.label }}
          </RouterLink>
        </li>
      </ul>
      <div class="flex items-center gap-4 mt-4">
        <RouterLink
          to="https://linkedin.com"
          target="_blank"
          class="bg-[#222] w-12 h-12 rounded-full flex justify-center items-center"
        >
          <LinkedinIcon />
        </RouterLink>
        <RouterLink
          to="https://github.com"
          target="_blank"
          class="bg-[#222] w-12 h-12 rounded-full flex justify-center items-center"
        >
          <GithubIcon />
        </RouterLink>
      </div>
    </div>
  </nav>
</template>
