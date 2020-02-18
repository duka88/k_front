<template>
  <div class="container">
    <div class="" @click="getUser()">user</div>
  
   <vue-carousel />
   <top-recipes />
  </div>
</template>
<script>
import { mapState } from 'vuex';
import VueCarousel from '../components/CaruselHome.vue';
import TopRecipes from '../components/TopRecipes.vue';


export default {
  components: {
    VueCarousel,
    TopRecipes
  },
  async fetch({ store, from }) {

 
  },
  methods:{
   
  },
  computed: {
    ...mapState({
      categories: state => state.recipes.categories,
      latest_recipes: state => state.recipes.latest_recipes      
    })
  }

}

</script>


