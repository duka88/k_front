<template>
  <div class="main">
    <header-vue />
    <div class="page-container">
      <search-main />
      <nuxt />
    </div>
  </div>
</template>
<script>
import HeaderVue from '../components/HeaderVue.vue';
import SearchMain from '../components/SearchMain.vue';

export default {
  middleware: ['starter'],
  components: {
    HeaderVue,
    SearchMain

  }
}

</script>
