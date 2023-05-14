<script setup>
</script>

<template>
  <div class="container mt-3">
    <div v-for="row in 5" :key="row" class="d-flex justify-content-center">
      <span v-for="col in 4" :key="col" class="number-box app-gradient-color text-center">
        {{(row - 1) * 4 + col }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.number-box {
    font-weight: bold;
    height: 120px;
    width: 120px;
    padding: 5px;
    margin: 2px;
    border: 1px solid red;
    border-radius: 10px;
    box-sizing: border-box;
}
</style>