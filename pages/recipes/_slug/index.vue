<template>
  <h1>{{$route.params.slug}}</h1>
</template>
<script>
import gql from 'graphql-tag';

export default {
  components: {

  },
  apollo: {
    recipe: {
      query: gql `
        query getRecipe($slug: slug){
          recipes(slug: $slug){
            data{
              title
          
        }
      }
    }`,
      variables() {
        return {
          slug: this.$route.params.slug
        }
      }
    }
  }
}

</script>
