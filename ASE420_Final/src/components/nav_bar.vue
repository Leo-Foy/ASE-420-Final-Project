<script setup>
    
</script>

<template>
    <div id="app">
        <nav class="navbar">
            <div class="logo">Brainbolt</div>
            <ul class="nav-links">
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/login">Login</router-link></li>
            </ul>
        </nav>
    </div>
</template>

<style scoped>
    #app {
        background: linear-gradient(180deg, #1e1e1e, #333);
        color: #f4e000; 
        font-family: Arial, sans-serif;
    }

    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        background-color: #1a1a1a;
    }

    .navbar .logo {
        font-size: 2rem;
        font-weight: bold;
    }

    .navbar .nav-links {
        list-style-type: none;
        display: flex;
        gap: 15px;
    }

    .navbar .nav-links a {
        text-decoration: none;
        color: #f4e000; 
        font-size: 1.2rem;
    }

    .navbar .nav-links a:hover {
        text-decoration: underline;
    }
</style>
  