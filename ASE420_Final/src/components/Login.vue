<script setup>
  import Navbar from '@/components/nav_bar.vue'
  import dataTest from '@/components/testDB.vue';
</script>

<template>
  <div>
      <h1>Login Page</h1>
      <form>
          <label for="username">Username:</label>
          <input type="text" id="username" name="username" />
          <br />
          <label for="password">Password:</label>
          <input type="password" id="password" name="password" />
          <br />
          <button type="submit">Login</button>
      </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
};
</script>