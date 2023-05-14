import {createRouter, createWebHistory} from 'vue-router'
import AppHome from "@/modules/AppHome.vue";
import CombineLetters from "@/modules/alphabet/CombineLetters.vue";
import NumberApp from "@/modules/number/NumberApp.vue";
import ViewContainer from "@/modules/ViewContainer.vue";
import LetterTable from "@/components/LetterTable.vue";

// @formatter:off
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', name: 'home', alias: ['/home', '/index'], component: AppHome},
    {path: '/alphabets', name: 'alphabets', component: ViewContainer, children: [
        {path: 'capital-letters', name: 'capitalLetters', component: LetterTable, props: {startCharCode: 65}},
        {path: 'small-letters', name: 'smallLetters', component: LetterTable, props: {startCharCode: 97}},
        {path: 'combine-letters', name: 'combineLetters', component: CombineLetters}
      ]
    },
    {path: '/numbers', name: 'numbers', component: NumberApp},
    {path: '/random', name: 'random', component: ViewContainer, children: [
        {path: 'capital-letters', name: 'randomCapital', component: LetterTable, props: {startCharCode: 65, canShuffle: true}},
        {path: 'small-letters', name: 'randomSmall', component: LetterTable, props: {startCharCode: 97, canShuffle: true}}
      ]
    },
  ]
})
// @formatter:on

export default router
