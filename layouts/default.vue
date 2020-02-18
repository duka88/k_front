<template>
  <div class="main">   	
     <header-vue/>
    <div class="page-container">	  
       <nuxt />
    </div>  
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
