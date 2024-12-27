<script setup lang="ts">
import { ProjectProps } from "@/data/project";
import { RouterLink } from "vue-router";

defineProps<{
  project: ProjectProps;
}>();
</script>

<template>
  <div class="flex flex-col lg:flex-row justify-between items-center gap-12">
    <div
      class="max-w-2xl h-96 lg:h-[576px] bg-[#1A1A1A] rounded-xl flex items-center justify-center w-full"
    >
      <img
        :src="project.src"
        class="w-80 h-80 rounded-xl object-cover object-top"
      />
    </div>
    <div class="flex flex-col gap-4 max-w-2xl w-full">
      <h2 class="text-2xl lg:text-4xl">{{ project.title }}</h2>
      <ul>
        <li
          v-for="(list, index) in project.list"
          :key="index"
          :class="project.list.length > 0 ? 'list-disc list-inside' : null"
          class="text-base lg:text-lg font-normal"
        >
          {{ list }}
        </li>
      </ul>
      <div>
        <h4 class="mb-4 uppercase font-semibold text-base">Project Info</h4>
        <div
          v-if="project.client"
          class="py-4 border-t border-y-[#1A1A1A] flex items-center justify-between"
        >
          <p>Client</p>
          <p>{{ project.client }}</p>
        </div>
        <div
          class="py-4 border-y border-t-[#1A1A1A] flex items-center justify-between"
        >
          <p>Period</p>
          <p>{{ project.period }}</p>
        </div>
        <div
          class="py-4 border-y border-y-[#1A1A1A] flex items-center justify-between"
        >
          <p>Role</p>
          <p>{{ project.role }}</p>
        </div>
      </div>
      <a
        :href="project.link"
        target="_blank"
        rel="noopener noreferrer"
        class="text-[#D3E97A] text-base w-fit lg:text-base font-bold uppercase border-b-2 border-b-[#D3E97A] pb-1 mt-5"
      >
        View live site
      </a>
    </div>
  </div>
</template>
