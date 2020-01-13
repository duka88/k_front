<template>
  <div class="container">
    <div v-for="recipe in recipes.data">
       <nuxt-link :to="`recipes/${recipe.slug}`">{{recipe.title}}</nuxt-link>
    </div>
  </div>
</template>
<script>
import gql from 'graphql-tag';

export default {
  components: {

  },
  apollo: {
        recipes: gql `
        query{
          recipes(first: 2){
            data{
              title
              slug
          
        }
      }
    }`
  }
}

</script>

