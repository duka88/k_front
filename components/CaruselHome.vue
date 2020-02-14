<template>
  <div>
    <div class="carusel-container">
      <div id="scrollCont" class="carusel-inner">
        <div class="carusel-item" v-for="category in categories" :key="category.id" :style="{backgroundImage: `url(http://kocalici.test/img/S/${category.image})`}">
          <p>{{category.name}}</p>
          <div class="carusel-opacity">
          </div>
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
      latest_recipes: state => state.recipes.latest_recipes
    })
  },
  mounted() {
    let sctollCont = document.getElementById('scrollCont');
    const imgNum = sctollCont.children.length;
    let clone1 = sctollCont.children[sctollCont.children.length - 1].cloneNode(true);
    let clone2 = sctollCont.children[sctollCont.children.length - 2].cloneNode(true);
    let clone3 = sctollCont.children[0].cloneNode(true);
    let clone4 = sctollCont.children[1].cloneNode(true);



    console.log(imgNum)

    sctollCont.insertBefore(clone1, sctollCont.firstElementChild);
    sctollCont.insertBefore(clone2, clone1);
    sctollCont.appendChild(clone3);
    sctollCont.appendChild(clone4);

    let single = document.querySelectorAll('.carusel-item');
    let prevBtn = document.getElementById('prevBtn');
    let nextBtn = document.getElementById('nextBtn');
    let counter = 1;
    const width = single[0].clientWidth;




    let lines = document.querySelectorAll('.line');


    function transition(transition = true) {

      lines.forEach((item) => {
        item.classList.remove('current');
      });

      if (!transition) {
        sctollCont.classList.remove('transition');
      } else {
        sctollCont.classList.add('transition');
      }

      sctollCont.style.transform = `translateX(${-width * counter}px)`;
      lines[counter - 1].classList.add('current');

      console.log(counter)
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

    sctollCont.addEventListener('mousedown', (e) => {
      isDown = true;
      startX = e.pageX;
      moveX = e.pageX;
      sctollCont.classList.add('grab');

    });

    sctollCont.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      moveX = e.pageX;
      if (Math.abs(startX - moveX) > 50) {
        isMove = true;
      }

    })
    sctollCont.addEventListener('mouseup', () => {
      isDown = false;
      sctollCont.classList.remove('grab');
      scrolle();
    });
    sctollCont.addEventListener('mouseleave', () => {
      isDown = false;
      sctollCont.classList.remove('grab');

    });

  }
}

</script>
