<script setup>
import { capabilities } from "@/data/about";
</script>
<template>
  <section
    class="flex items-start flex-col lg:flex-row w-full justify-between px-4 lg:px-0"
  >
    <h1 class="uppercase font-normal text-4xl lg:text-3xl xl:text-7xl">
      My Capabilities
    </h1>
    <div class="max-w-3xl w-full flex flex-col gap-10 mt-4 lg:mt-0">
      <div
        v-for="(item, index) in capabilities"
        :key="index"
        class="flex items-start flex-col lg:flex-row gap-3 justify-between"
      >
        <h3 class="text-lg lg:text-xl font-bold uppercase">{{ item.label }}</h3>
        <div class="flex items-center gap-4 flex-wrap max-w-md">
          <div
            v-for="(skill, idex) in item.skills"
            :key="idex"
            class="border border-[#484848] rounded-full p-4 lg:px-7 lg:py-5 text-sm lg:text-base font-bold uppercase"
          >
            {{ skill }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
