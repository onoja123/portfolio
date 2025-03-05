<script setup lang="ts">
import { RouterLink } from "vue-router";
import IconLink from "./IconLink.vue";
import LinkedinIcon from "./icon/LinkedinIcon.vue";
import GithubIcon from "./icon/GithubIcon.vue";
import TwitterIcon from "./icon/TwitterIcon.vue";
defineProps<{
  aboutRoute: boolean;
}>();
</script>

<template>
  <section
    class="flex flex-col gap-3 lg:gap-0 lg:flex-row px-4 lg:px-0 items-start w-full justify-between"
  >
    <h1 class="uppercase font-normal text-4xl lg:text-3xl xl:text-7xl">
      About me
    </h1>
    <div class="max-w-3xl w-full flex flex-col gap-14">
      <div class="flex flex-col gap-3">

        <p
          v-if="!aboutRoute"
          class="font-normal text-base lg:text-lg"
        >
        I am a full stack developer with 5+ years of experience in building
          high-quality applications and backend systems. Specialises in intuitive
          UIs, scalable databases, and robust APIs. Passionate about learning new
          technologies and improving skills. Thrives in team environments, contributing
          technical expertise and problem-solving abilities to drive successful project outcomes.

        </p>
        <p v-else class="font-normal text-base lg:text-lg">
          I am a full stack developer with 5+ years of experience in building
          high-quality applications and backend systems. Specialises in intuitive
          UIs, scalable databases, and robust APIs. Passionate about learning new
          technologies and improving skills. Thrives in team environments, contributing
          technical expertise and problem-solving abilities to drive successful project outcomes.
        </p>
      </div>
      <div v-if="aboutRoute" class="flex items-center gap-4">
        <a
          href="/Okpeonojagodwin_Resume.pdf"
          download="Okpeonojagodwin_Resume.pdf"
          class="bg-[#D3E97A] rounded-full h-14 lg:w-60 px-4 lg:px-0 flex items-center justify-center"
        >
          <span class="uppercase text-[#0A0A0A] font-bold text-sm lg:text-base">
            Download Resume
          </span>
        </a>

      </div>
      <RouterLink
        v-else
        to="/about"
        class="text-[#D3E97A] border-b-2 border-b-[#D3E97A] uppercase font-bold text-base w-fit"
      >
        More about me
      </RouterLink>
    </div>
  </section>
</template>
