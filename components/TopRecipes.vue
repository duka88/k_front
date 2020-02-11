<template>
  <div >
 
      TopRecipes
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
 name: 'TopRecipes',

  data() {
    return {

    }
  },

  methods: {
     
  },
  computed: {
    ...mapState({
      token: state => state.token,
      categories: state => state.recipes.categories,
      latest_recipes: state => state.recipes.latest_recipes,
      like_recipes: state => state.recipes.like_recipes,
      top_recipes: state => state.recipes.top_recipes,
    })
  },
 mounted(){
    
  

 }
}

</script>
