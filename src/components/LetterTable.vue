<script setup>
import {nextTick, reactive, watch} from "vue";
import {shuffleArray} from "@/common/AppUtils";
import {convertToChar} from "@/common/LetterUtils";
import {useRoute} from 'vue-router'

const charArray = reactive([...Array(26).keys()]);
const route = useRoute();

const props = defineProps({
  startCharCode: {
    type: Number,
    required: true
  },
  canShuffle: {
    type: Boolean,
    default: false
  }
});

function getChar(row, col) {
    const charPos = (row - 1) * 6 + (col - 1);
    if (charPos < 24) {
        return convertToChar(charArray[charPos], props.startCharCode);
    } else if (charPos === 26 || charPos === 27) {
        return convertToChar(charArray[charPos - 2], props.startCharCode);
    }
}

watch(() => route.name, async () => {
    await nextTick();
    charArray.sort((a, b) => a - b);
    if (props.canShuffle === true) {
        shuffleArray(charArray);
    }
}, {immediate: true});

</script>

<template>
  <table class="table table-bordered border-primary text-center letter-table">
    <tbody>
    <tr v-for="row in 5" :key="row">
      <td v-for="col in 6" :key="col">
        <span class="capital-letter">{{getChar(row, col)}}</span>
      </td>
    </tr>
    </tbody>
  </table>
  <div v-if="canShuffle" class="d-flex justify-content-center">
    <button @click="shuffleArray(charArray)" class="btn btn-info btn-lg">Shuffle Again</button>
  </div>
</template>

<style scoped>

</style>