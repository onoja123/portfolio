<script setup lang="ts">
import { RouterLink } from "vue-router";
import IconLink from "./IconLink.vue";
import LinkedinIcon from "./icon/LinkedinIcon.vue";
import GithubIcon from "./icon/GithubIcon.vue";
import TwitterIcon from "./icon/TwitterIcon.vue";
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
          <a
            href="mailto:okpeonoja18@gmail.com"
            class="font-normal text-base border-b border-b-[#D3E97A]"
            >okpeonoja18@gmail.com</a
          ><br />
        </p>
        <p>
          For more info, here’s my
          <a
            href="../../public/Okpeonojagodwin_Resume.pdf"
            download="Okpeonojagodwin_Resume.pdf"
            class="font-normal text-base border-b border-b-[#D3E97A]"
          >
            resume
          </a>
        </p>
        <div class="flex items-center gap-3">
          <IconLink link="https://linkedin.com/in/okpe-onoja">
            <LinkedinIcon />
          </IconLink>
          <IconLink link="https://github.com/onoja123">
            <GithubIcon />
          </IconLink>
          <IconLink link="https://x.com/iam_the_code">
            <TwitterIcon />
          </IconLink>
        </div>
      </div>
      <p class="font-medium text-base hidden lg:flex">
        © 2024 Okpe Onoja Godwin
      </p>
    </div>
    <div
    class="max-w-3xl lg:max-w-xl xl:max-w-3xl w-full flex flex-col gap-6 mt-4 lg:mt-0"
    >
    <div class="flex flex-col gap-3">
      <label class="font-medium text-base" for="">Name</label>
      <input
        type="text"
        class="bg-white text-[#1A1A1A] border border-[#1A1A1A] focus:border-[#1A1A1A] focus:ring-0 rounded px-4 py-3 h-12 w-full text-transform: capitalize"
      />
    </div>
    <div class="flex flex-col gap-3">
      <label class="font-medium text-base" for="">Email</label>
      <input
        type="text"
        class="bg-white text-[#1A1A1A] border border-[#1A1A1A] focus:border-[#1A1A1A] focus:ring-0 rounded px-4 py-3 h-12 w-full text-transform: capitalize"
      />
    </div>
    <div class="flex flex-col gap-3">
      <label class="font-medium text-base" for="">Subject</label>
      <input
        type="text"
        class="bg-white text-[#1A1A1A] border border-[#1A1A1A] focus:border-[#1A1A1A] focus:ring-0 rounded px-4 py-3 h-12 w-full text-transform: capitalize"
      />
    </div>
    <div class="flex flex-col gap-3">
      <label class="font-medium text-base" for="">Message</label>
      <textarea
        class="bg-white text-[#1A1A1A] border border-[#1A1A1A] focus:border-[#1A1A1A] focus:ring-0 rounded px-4 py-3 h-40 w-full text-transform: capitalize"
      ></textarea>
    </div>
    <button
      class="flex item-center uppercase bg-[#D3E97A] px-10 py-5 rounded-full w-fit"
    >
      Submit
    </button>

    <p class="font-medium text-base flex lg:hidden">
      © 2024 Okpe Onoja Godwin
  </p>
</div>

  </section>
</template>
