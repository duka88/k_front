<template>
  <div class="carusel">
    <VueSlickCarousel v-bind="slickOptions">
      <div v-for="category in categories" :key="category.id" class="img-wrapper">
        <div class="carusel-item" :style="{backgroundImage: `url(http://127.0.0.1:8000/img/S/${category.image})`}">
          <p>{{category.name}}</p>
          <div class="carusel-opacity">
          </div>
        </div>
      </div>
    </VueSlickCarousel>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: 'VueCarousel',

  data() {
    return {
      slickOptions: {   
        centerMode: true,
        centerPadding: '30px',
        slidesToShow: 6,
          nextArrow: '<i class="fa fa-arrow-right"></i>',
  prevArrow: '<i class="fa fa-arrow-left"></i>',
        responsive: [{
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      }
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
    
    let leftArrow = document.querySelector('.slick-next');
    let rightArrow = document.querySelector('.slick-prev');

    rightArrow.innerHTML = '<i class="fas fa-chevron-right"></i>';
    leftArrow.innerHTML = '<i class="fas fa-chevron-left"></i>';

 }
}

</script>
