<script setup>
const props = defineProps({
    text: {
        type: String,
        required: true
    },
    routeName: {
        type: String,
        required: true
    }
});
</script>

<template>
  <li>
    <RouterLink :to="{name: props.routeName}" class="dropdown-item">
      {{props.text}}
    </RouterLink>
  </li>
</template>

<style scoped>

</style>