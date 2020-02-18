<template>
  <div class="latest-container">
    <div v-for="(recipe, index) in latest_recipes" class="latest-wrap" v-if="index < 3">
      <div class="recipe" :style="{backgroundImage: `url(${backUrl}/img/XL/${recipe.image})`}">
        <div class="text-wrap">
          <div>
            <nuxt-link to="recipes/recipe.slug">
              <h2>{{recipe.title}}</h2>
            </nuxt-link>
            <p>{{recipe.description}}</p>
             <nuxt-link to="recipes/recipe.slug">
              <span>READ MORE </span><i class="fas fa-angle-double-right"></i>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: 'ReacentRecipes',

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
      backUrl: state => state.backUrl
    })
  },
  mounted() {



  }
}

</script>
