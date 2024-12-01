<template>
  <form @submit.prevent="login">
    <div>
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required />
    </div>
    <div>
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" required />
    </div>
    <button type="submit">Login</button>
  </form>
</template>

<script>
export default {
  name: 'Login',

  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async login() {
      console.log('Login method triggered');
      try {
        const response = await fetch('http://localhost:3000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: this.email,
            password: this.password,
          }),
        });
        const result = await response.json();
        if (result.success) {
          alert(result.message);
          
          this.$router.push({ name: 'Dashboard' });
        } else {
          alert('Login failed: ' + result.message);
        }
      } catch (error) {
        console.error('Error logging in:', error);
        alert('An error occurred while logging in.');
      }
    },
  },
};
</script>