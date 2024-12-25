<script setup lang="ts">
import { RouterLink } from "vue-router";
defineProps<{
  link: string;
}>();
</script>

<template>
  <RouterLink
    :to="link"
    class="bg-[#222] w-14 h-14 rounded-full flex justify-center items-center"
  >
    <slot />
  </RouterLink>
</template>
