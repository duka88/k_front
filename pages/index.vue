<template>
  <div class="container">
    <reacent-recipes />
    <vue-carousel />
    <top-recipes />
    <recipe-list />
  </div>
</template>
<script> 
import { mapState } from 'vuex';
import VueCarousel from '../components/CaruselHome.vue';
import TopRecipes from '../components/TopRecipes.vue';
import ReacentRecipes from '../components/ReacentRecipes.vue';
import RecipeList from '../components/RecipeList.vue';


export default {
  components: {
    VueCarousel,
    TopRecipes,
    ReacentRecipes,
    RecipeList
  },
  async fetch({ store, from }) {


  },
  methods: {

  },
  computed: {
    ...mapState({
      categories: state => state.recipes.categories,
      latest_recipes: state => state.recipes.latest_recipes
    })
  }

}

</script>
