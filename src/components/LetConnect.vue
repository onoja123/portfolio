<script setup lang="ts">
import { RouterLink } from "vue-router";
import IconLink from "./IconLink.vue";
import LinkedinIcon from "./icon/LinkedinIcon.vue";
import GithubIcon from "./icon/GithubIcon.vue";
</script>

<template>
  <section
    class="flex items-start px-4 lg:px-0 flex-col lg:flex-row justify-between h-full"
  >
    <div class="flex flex-col h-full justify-between gap-8">
      <div class="flex flex-col gap-3">
        <h1 class="uppercase font-normal text-4xl lg:text-3xl xl:text-7xl">
          Let's Connect
        </h1>
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
        <div class="flex items-center gap-3">
          <IconLink link="https://linkedin.com/in/okpe-onoja">
            <LinkedinIcon />
          </IconLink>
          <IconLink link="https://github.com/onoja123">
            <GithubIcon />
          </IconLink>
        </div>
      </div>
      <p class="text-[#c7c7c7] font-medium text-base hidden lg:flex">
        © 2024 Okpe Onoja Godwin
      </p>
    </div>
    <div
      class="max-w-3xl lg:max-w-xl xl:max-w-3xl w-full flex flex-col gap-6 mt-4 lg:mt-0"
    >
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

      <p class="text-[#c7c7c7] font-medium text-base flex lg:hidden">
        © 2024 Okpe Onoja Godwin
      </p>
    </div>
  </section>
</template>
