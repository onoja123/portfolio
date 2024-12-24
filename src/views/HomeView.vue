<script setup>
import AboutMe from "@/components/AboutMe.vue";
import FeatureProjectList from "@/components/FeatureProjectList.vue";
import Hero from "@/components/Hero.vue";
import LetConnect from "@/components/LetConnect.vue";
</script>

<template>
  <div
    class="max-2xl:max-w-screen-xl max-w-screen-2xl w-full mx-auto mt-36 flex flex-col gap-16"
  >
    <Hero />
    <FeatureProjectList />
    <AboutMe />
    <LetConnect />
  </div>
  <!-- <main></main> -->
</template>
