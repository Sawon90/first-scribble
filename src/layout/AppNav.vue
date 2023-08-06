<script setup>
import RouterDropdownItem from "@/components/navbar/RouterDropdownItem.vue";
import NavItemDropDown from "@/components/navbar/NavItemDropDown.vue";
import {ref} from "vue";

const showNav = ref(false);
const buttonRef = ref(null);

function toggleNavbar() {
    showNav.value = !showNav.value;
    buttonRef.value.blur();
}
</script>

<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-secondary">
    <div class="container-fluid">
      <RouterLink :to="{name: 'home'}" class="navbar-brand">First Scribble</RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" :aria-expanded="showNav" aria-label="Toggle navigation"
              @click="toggleNavbar" ref="buttonRef">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-collapse collapse" id="navbarNav" :class="{'show': showNav}">
        <ul class="navbar-nav">
          <NavItemDropDown text="Alphabets">
            <RouterDropdownItem route-name="capitalLetters" text="Capital Letters"></RouterDropdownItem>
            <RouterDropdownItem route-name="smallLetters" text="Small Letters"></RouterDropdownItem>
            <RouterDropdownItem route-name="combineLetters" text="Combined Letters"></RouterDropdownItem>
          </NavItemDropDown>
          <li class="nav-item">
            <RouterLink :to="{name: 'numbers'}" class="nav-link">Numbers</RouterLink>
          </li>
          <NavItemDropDown text="Random Letters">
            <RouterDropdownItem route-name="randomCapital" text="Capital Letters"></RouterDropdownItem>
            <RouterDropdownItem route-name="randomSmall" text="Small Letters"></RouterDropdownItem>
          </NavItemDropDown>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>

</style>