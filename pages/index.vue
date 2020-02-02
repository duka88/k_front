<template>
  <div class="container">
    <div class="" @click="getUser()">user</div>
    <div v-for="category in categories">
      <nuxt-link :to="`categories/${category.slug}`">{{category.name}}</nuxt-link>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  components: {

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


