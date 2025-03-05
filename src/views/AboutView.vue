<script setup lang="ts">
import AboutMe from "@/components/AboutMe.vue";
import Capabilities from "@/components/Capabilities.vue";
import Education from "@/components/Education.vue";
import Experience from "@/components/Experience.vue";
import LetConnect from "@/components/LetConnect.vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { nextTick, onMounted, ref } from "vue";

gsap.registerPlugin(ScrollTrigger);

const aboutMeRef = ref(null);

onMounted(async () => {
  await nextTick();

  gsap.fromTo(
    aboutMeRef.value,
    { scale: 0, opacity:0, duration:1, delay:0.5 },
    {
      scale:1.5,
      opacity: 1,
      duration: 1.2,
      delay:0.8,
      ease: "power1.inOut",
      onComplete: () => {
        gsap.to(aboutMeRef.value, { scale: 1, opacity:1,duration:1.1});
      },
    }
  );
});
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
