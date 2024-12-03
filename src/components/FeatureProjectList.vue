<script setup lang="ts">
import { RouterLink } from "vue-router";
import ProjectList from "./ProjectList.vue";
import { projects } from "@/data/project";
</script>

<template>
  <div class="flex items-end justify-between w-full mt-20">
    <div class="flex flex-col gap-2">
      <p class="text-lg font-normal">Let's get right into it!</p>
      <h2 class="text-7xl uppercase">Featured Projects</h2>
    </div>
    <RouterLink
      to="#"
      class="text-[#D3E97A] text-base font-bold uppercase border-b-2 border-b-[#D3E97A] pb-1"
    >
      View all
    </RouterLink>
  </div>
  <div class="mt-20 flex flex-col gap-32">
    <ProjectList
      v-for="(project, index) in projects"
      :key="index"
      :project="project"
    />
  </div>
</template>
