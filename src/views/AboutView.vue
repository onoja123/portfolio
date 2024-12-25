<script setup lang="ts">
import AboutMe from "@/components/AboutMe.vue";
import Capabilities from "@/components/Capabilities.vue";
import Education from "@/components/Education.vue";
import Experience from "@/components/Experience.vue";
import LetConnect from "@/components/LetConnect.vue";
</script>

<template>
  <div
    class="max-2xl:max-w-screen-xl max-w-screen-2xl w-full mx-auto mt-20 flex flex-col gap-16 lg:px-10 xl:px-0 lg:gap-36"
  >
    <AboutMe :about-route="true" />
    <Education />
    <Capabilities />
    <Experience />
    <LetConnect />
  </div>
</template>
