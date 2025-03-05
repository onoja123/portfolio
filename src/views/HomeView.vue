<script setup>
import AboutMe from "@/components/AboutMe.vue";
import FeatureProjectList from "@/components/FeatureProjectList.vue";
import Hero from "@/components/Hero.vue";
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
    { x: -5, rotation: -15 },
    {
      x: 5,
      rotation: 15,
      duration: 0.1,
      repeat: 5,
      yoyo: true,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: aboutMeRef.value,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      onComplete: () => {
        gsap.to(aboutMeRef.value, { x: 0, rotation: 0, duration: 0.1 });
      },
    }
  );
});

</script>

<template>
  <div
    class="max-2xl:max-w-screen-xl max-w-screen-2xl w-full mx-auto mt-20 flex flex-col gap-16 lg:px-10 xl:px-0 lg:gap-36"
  >
    <Hero />
    <FeatureProjectList />
    <AboutMe />
    <LetConnect />
  </div>
  <!-- <main></main> -->
</template>
