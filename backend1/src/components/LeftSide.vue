<!-- eslint-disable prettier/prettier -->
<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
<template>
  <!-- src="@/assets/logo-removebg.png" /> -->

  <header class="flex flex-col w-full">
    <h1 class="mt-4 py-4 text-center text-4xl font-extrabold text-lime-400">Bhojan Shop</h1>
    <img alt="Vue logo" class="w-64 mx-auto object-cover rounded-lg shadow-sm" src="@/assets/logo/logo-removebg.png" />

    <div class="flex flex-col min-w-full">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
        <RouterLink to="/register">Register</RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: rgb(147, 238, 9);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
