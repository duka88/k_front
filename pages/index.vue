<template>
  <div class="container">
    <div class="" @click="getUser()">user</div>
  
    <vue-carousel />
  </div>
</template>
<script>
import { mapState } from 'vuex';
import VueCarousel from '../components/CaruselHome.vue';


export default {
  components: {
    VueCarousel
  },
  async fetch({ store, from }) {

    let isFrom = !from;

  if (isFrom || store.state.recipes.length === 0) {
     // await store.dispatch('recipes/loadStarter');
    }
  },
  methods:{
    getUser(){
      this.$store.dispatch('getUser',this.$store.state.token );
    }
  },
  computed: {
    ...mapState({
      categories: state => state.recipes.categories,
      latest_recipes: state => state.recipes.latest_recipes      
    })
  }

}

</script>


