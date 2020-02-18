<template>
  <div>
    <div class="carusel-container">
      <div id="scrollCont" class="carusel-inner">
        <div class="carusel-item" v-for="category in categories" :key="category.id">
          <div class="wrap" :style="{backgroundImage: `url(${url}/img/S/${category.image})`}">
          </div>
            <p>{{category.name}}</p>
        </div>
      </div>
      <div class="carusel-nav">
        <i id="prevBtn" class="fas fa-chevron-left"></i>
        <i id="nextBtn" class="fas fa-chevron-right"></i>
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
      latest_recipes: state => state.recipes.latest_recipes,
      url: state => state.backUrl,
    })
  },
  mounted() {
    let sctollCont = document.getElementById('scrollCont');
    const imgNum = sctollCont.children.length;
    let clone1 = sctollCont.children[sctollCont.children.length - 1].cloneNode(true);
    let clone2 = sctollCont.children[sctollCont.children.length - 2].cloneNode(true);
    let clone3 = sctollCont.children[sctollCont.children.length - 3].cloneNode(true);
    let clone4 = sctollCont.children[0].cloneNode(true);
    let clone5 = sctollCont.children[1].cloneNode(true);
    let clone6 = sctollCont.children[2].cloneNode(true);


    sctollCont.insertBefore(clone1, sctollCont.firstElementChild);
    sctollCont.insertBefore(clone2, clone1);
    sctollCont.insertBefore(clone3, clone2);
    sctollCont.appendChild(clone4);
    sctollCont.appendChild(clone5);
    sctollCont.appendChild(clone6);

    let single = document.querySelectorAll('.carusel-item');
    let prevBtn = document.getElementById('prevBtn');
    let nextBtn = document.getElementById('nextBtn');
    let counter = 1;
    const width = single[0].clientWidth;



    function transition(transition = true) {

      if (!transition) {
        sctollCont.classList.remove('transition');
      } else {
        sctollCont.classList.add('transition');
      }

      sctollCont.style.transform = `translateX(${-width * counter}px)`;
    }

    function increment() {
      if (counter > imgNum) return;
      counter++;
      transition();
    }

    function decrement() {
      if (counter <= 0) return;
      counter--;
      transition();
    }

    transition(false);

    nextBtn.addEventListener('click', () => {

      increment();

    });

    prevBtn.addEventListener('click', () => {
      decrement();

    });

    sctollCont.addEventListener('transitionend', () => {
      if (counter === 0) {
        counter = imgNum;
        transition(false);
      } else if (counter === imgNum + 1) {
        counter = 1;
        transition(false);
      }
    });


    let isDown = false;
    let isMove = false;
    let startX;
    let moveX;


    function scrolle() {
      if (isMove) {

        if (startX < moveX) {
          decrement();

        } else if (startX > moveX) {
          increment();

        }
      }
    }

    sctollCont.addEventListener('touchstart', (e) => {
      e.preventDefault();
      isDown = true;
      startX = e.targetTouches[0].clientX;
      moveX = e.targetTouches[0].clientX;    
    });

    sctollCont.addEventListener('touchmove', (e) => {
      e.preventDefault();
      if (!isDown) return;

      moveX = e.targetTouches[0].clientX;
      if (Math.abs(startX - moveX) > 50) {
        isMove = true;
      }
      console.log('asfaw')

    })
    sctollCont.addEventListener('touchend', () => {
      isDown = false;

      scrolle();
    });


  }
}

</script>
