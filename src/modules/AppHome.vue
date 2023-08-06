<script setup>
import imageLandscape from '@/assets/images/first_scribble_circle_cropped.png'
</script>

<template>
  <div class="d-flex justify-content-center s-brand-image-container">
    <img :src="imageLandscape" alt="First Scribble" />
  </div>
  <div class="card">
    <div class="card-body container">
      <h3 class="card-title">Welcome to <span class="text-info">First Scribble</span></h3>
      <p class="card-text">First Scribble is a fun and interactive website and mobile app designed to help young children learn English
        alphabet, numbers, and words. With engaging activities and colorful visuals, kids can easily master the basics
        of reading and writing, while having fun and building confidence. Get your child started on the path to literacy
        with First Scribble today!</p>
    </div>
  </div>
</template>

<style scoped>
.s-brand-image-container {
    height: 30vh;
    max-height: 30vh;
    background: #B0B5FF;
}
</style>