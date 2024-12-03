<script setup lang="ts">
import { ProjectProps } from "@/data/project";

defineProps<{
  project: ProjectProps;
}>();
</script>

<template>
  <div class="flex justify-between items-center gap-12">
    <div
      class="max-w-2xl h-[576px] bg-[#1A1A1A] rounded-xl flex items-center justify-center w-full"
    >
      <img
        :src="project.src"
        class="w-80 h-80 rounded-xl object-cover object-top"
      />
    </div>
    <div class="flex flex-col gap-4 max-w-2xl w-full">
      <h2 class="text-4xl">{{ project.title }}</h2>
      <ul>
        <li
          v-for="(list, index) in project.list"
          :key="index"
          :class="project.list.length > 0 ? 'list-disc list-inside' : null"
          class="text-lg font-normal"
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
    </div>
  </div>
</template>
