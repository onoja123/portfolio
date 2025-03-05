<script setup>
import { capabilities } from "@/data/about";
import { ref, onMounted, onBeforeUnmount } from "vue";
import gsap from "gsap";

const activeSkill = ref(null);
const activeButton = ref(null);
const startShaking = (el) => {
  gsap.to(el, {
    x: -5,
    repeat: -1,
    yoyo: true,
    duration: 0.1,
    ease: "power1.inOut",
  });
};

const stopShaking = (el) => {
  gsap.killTweensOf(el);
  gsap.to(el, { x: 0 });
};

const handleClick = (event, skill) => {
  const clickedButton = event.currentTarget;

  // Stop shaking the previous button
  if (activeButton.value && activeButton.value !== clickedButton) {
    stopShaking(activeButton.value);
  }

  // Toggle the active button and skill
  if (activeSkill.value === skill) {
    stopShaking(clickedButton);
    activeSkill.value = null;
    activeButton.value = null;
  } else {
    activeSkill.value = skill;
    activeButton.value = clickedButton;
    startShaking(clickedButton);
  }
};
const handleClickOutside = (event) => {
  if (activeButton.value && !activeButton.value.contains(event.target)) {
    stopShaking(activeButton.value);
    activeSkill.value = null;
    activeButton.value = null;
  }
};

// Add event listener when component is mounted
onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

// Remove event listener when component is unmounted
onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});



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
          <button
            v-for="(skill, idex) in item.skills"
            :key="idex"
            @click.stop="(event) => handleClick(event, skill)"
            class="border border-[#484848] rounded-full p-4 lg:px-7 lg:py-5 text-sm lg:text-base font-bold uppercase"
            :class="{ 'bg-[#D3E97A] text-black border-none': activeSkill === skill }"
          >
            {{ skill }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>