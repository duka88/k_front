<template>
   <div>
      <div v-for="category in categories" :key="category.id" class="img-wrapper">
        <div class="carusel-item" :style="{backgroundImage: `url(http://127.0.0.1:8000/img/S/${category.image})`}">
          <p>{{category.name}}</p>
          <div class="carusel-opacity">
          </div>
        </div>
      </div>
 </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: 'VueCarousel',

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
      latest_recipes: state => state.recipes.latest_recipes
    })
  },
 mounted(){
  

 }
}

</script>
