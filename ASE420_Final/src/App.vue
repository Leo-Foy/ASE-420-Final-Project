<script setup>
  import Navbar from '@/components/nav_bar.vue'
  import dataTest from '@/components/testDB.vue';

  
</script>

<template>
  <Navbar />
  <!--<dataTest />-->
  <router-view></router-view>
</template>

<script>
  export default {
      name: 'App',
  };
</script>

<style scoped>
</style>