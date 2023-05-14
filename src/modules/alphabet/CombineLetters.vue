<script setup>

function convertToCapLetter(row, col) {
  return convertToLetter(row, col, 64);
}

function convertToSmallLetter(row, col) {
  return convertToLetter(row, col, 96);
}

function convertToLetter(row, col, initial) {
  const charVal = (row - 1) * 6 + col;
  if (charVal <= 24) {
    return String.fromCharCode(charVal + initial);
  } else if (charVal === 27 || charVal === 28) {
    return String.fromCharCode((charVal - 2) + initial);
  }
}
</script>

<template>
  <table class="table table-bordered border-primary text-center letter-table">
    <tbody>
    <tr v-for="row in 5" :key="row">
      <td v-for="col in 6" :key="col">
        <span class="capital-letter">{{convertToCapLetter(row, col)}}</span>
        <span class="small-letter">{{convertToSmallLetter(row, col)}}</span>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<style scoped>
.capital-letter {
  margin: 10px;
}

.small-letter {
  margin: 10px;
}
</style>