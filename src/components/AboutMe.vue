<script setup lang="ts">
import { RouterLink } from "vue-router";
import IconLink from "./IconLink.vue";
import LinkedinIcon from "./icon/LinkedinIcon.vue";
import GithubIcon from "./icon/GithubIcon.vue";
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
        <h3 class="text-2xl lg:text-3xl font-medium">
          I am a full stack developer based in Abuja. Has Computer Science
          background.
        </h3>
        <p
          v-if="!aboutRoute"
          class="text-[#C7C7C7] font-normal text-base lg:text-lg"
        >
          I am a full stack developer with 5+ years of experience in building
          high-quality applications and backend systems, I specialize in
          crafting intuitive UIs, scalable databases, and robust APIs. I am
          passionate about learning new technologies and continuously improving
          my skills
        </p>
        <p v-else class="text-[#C7C7C7] font-normal text-base lg:text-lg">
          I am a full stack developer with 5+ years of experience in building
          high-quality applications and backend systems, I specialize in
          crafting intuitive UIs, scalable databases, and robust APIs. I am
          passionate about learning new technologies and continuously improving
          my skills. I thrive in team environments, where I can contribute my
          technical expertise and problem-solving abilities to drive successful
          project outcomes. I am eager to bring my creativity and dedication to
          drive positive results in any organization.
        </p>
      </div>
      <div v-if="aboutRoute" class="flex items-center gap-4">
        <button class="bg-[#D3E97A] rounded-full h-14 lg:w-60 px-4 lg:px-0">
          <span class="uppercase text-[#0A0A0A] font-bold text-sm lg:text-base"
            >Download Resume</span
          >
        </button>
        <IconLink link="https://linkedin.com/in/okpe-onoja">
          <LinkedinIcon />
        </IconLink>
        <IconLink link="https://github.com/onoja123">
          <GithubIcon />
        </IconLink>
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
