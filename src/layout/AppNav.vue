<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-secondary">
    <div class="container-fluid">
      <RouterLink :to="{name: 'home'}" class="navbar-brand">First Scribble</RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Alphabets
            </a>
            <ul class="dropdown-menu">
              <li><RouterLink :to="{name: 'capitalLetters'}" class="dropdown-item">Capital Letters</RouterLink></li>
              <li><RouterLink :to="{name: 'smallLetters'}" class="dropdown-item">Small Letters</RouterLink></li>
              <li><RouterLink :to="{name: 'combineLetters'}" class="dropdown-item">Combined Letters</RouterLink></li>
            </ul>
          </li>
          <li class="nav-item">
            <RouterLink :to="{name: 'numbers'}" class="nav-link">Numbers</RouterLink>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Random Letters
            </a>
            <ul class="dropdown-menu">
              <li><RouterLink :to="{name: 'randomCapital'}" class="dropdown-item">Capital Letters</RouterLink></li>
              <li><RouterLink :to="{name: 'randomSmall'}" class="dropdown-item">Small Letters</RouterLink></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
</script>

<style scoped>
</style>