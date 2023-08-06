<script setup>
import {ref} from "vue";
import {onOutsideClick} from "@/common/GlobalEvents";

const props = defineProps({
    text: {
        type: String,
        required: true
    }
});

const showDropdown = ref(false);
const navMenu = ref(null);

onOutsideClick(navMenu, () => {
    showDropdown.value = false;
});
</script>

<template>
  <li class="nav-item dropdown" ref="navMenu">
    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" :aria-expanded="showDropdown"
       :class="{'show': showDropdown}" @click="showDropdown = !showDropdown">
      {{ props.text }}
    </a>
    <ul class="dropdown-menu" :class="{'show': showDropdown}" @click="showDropdown = false">
      <slot/>
    </ul>
  </li>
</template>

<style scoped>

</style>