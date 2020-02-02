<template>
  <div>
  	<header-vue/>
    <nuxt />
  </div>
</template>
<script>
import HeaderVue from '../components/HeaderVue.vue';

export default {
  middleware: ['starter'],	
  components: {
    HeaderVue,

  }
}

</script>
