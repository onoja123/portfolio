<script setup lang="ts">
import { RouterLink } from "vue-router";
import ProjectList from "./ProjectList.vue";
import { projects } from "@/data/project";
import { nextTick, onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(async () => {
  await nextTick();

  const isMobile = window.innerWidth <= 768;
  if (!isMobile) {
    gsap.fromTo(
      ".header-section",
      { opacity: 0, x: -300 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        delay:0.7
      }
    );
  } else {
    gsap.fromTo(
      ".header-section",
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".header-section",
          start: "top 90%",
          toggleActions: "play none none reset",
          once: true,
        },
      }
    );
  }

  document.querySelectorAll(".project-item").forEach((item, index) => {
    gsap.fromTo(
      item,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        delay: index * 0.5,
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );
  });
});

</script>

<template>
  <div class="flex items-end justify-between w-full mt-20 px-4 lg:px-0 header-section">
    <div class="flex flex-col gap-2">
      <p class="text-base lg:text-lg font-normal">Let's get right into it!</p>
      <h2 class="text-2xl lg:text-3xl xl:text-7xl uppercase">
        Featured Projects
      </h2>
    </div>
  </div>
  <div class="mt-20 flex flex-col gap-32 px-4 lg:px-0 project-list">
    <ProjectList
      v-for="(project, index) in projects"
      :key="index"
      :project="project"
      class="project-item"
    />
  </div>
</template>