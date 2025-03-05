<script setup lang="ts">
import { experienceData } from "@/data/about";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { nextTick, onMounted } from "vue";

gsap.registerPlugin(ScrollTrigger);

onMounted(async () => {
  await nextTick();

  const isMobile = window.innerWidth <= 768;

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

  document.querySelectorAll(".experience-item").forEach((item, index) => {
    gsap.fromTo(
      item,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        delay: index * 0.4,
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
  <section
    class="flex items-start w-full justify-between flex-col lg:flex-row px-4 lg:px-0"
  >
    <h1
      class="uppercase font-normal text-4xl lg:text-3xl xl:text-7xl mb-3 lg:mb-0"
    >
      My Experience
    </h1>
    <div class="max-w-3xl w-full flex flex-col gap-10 ">
      <div
        v-for="(list, index) in experienceData"
        class="flex flex-col gap-4 experience-item"
        :key="index"
      >
        <div class="flex flex-col gap-2">
          <div class="flex items-center justify-between">
            <h3 class="list-disc text-base lg:text-2xl font-medium">
              {{ list.position }}
            </h3>
            <p class="list-disc text-xs lg:text-lg font-normal">
              {{ list.startDate }} - {{ list.endDate }}
            </p>
          </div>
          <p class="list-disc text-sm lg:text-lg font-semibold text-[#D3E97A]">
            {{ list.company }}
          </p>
        </div>
        <ul>
          <li
            class="list-disc text-sm lg:text-lg font-normal"
            v-for="(data, idx) in list.list"
            :key="idx"
          >
            {{ data }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>