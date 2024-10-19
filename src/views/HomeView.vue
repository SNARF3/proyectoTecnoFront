<template>
  <div>
    <barInicio/>
    <bodyquest/>
  </div>
</template>

<script>
import barInicio from '../components/barInicio.vue'
import bodyquest from '../components/bodyQuest.vue'
  export default {
    name: 'HomeView',
    components: {
      barInicio,
      bodyquest,
    },
  }
</script>
<style>



</style>
