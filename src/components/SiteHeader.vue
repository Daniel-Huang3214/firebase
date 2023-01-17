<script setup>
</script>

<template>
  
  <div class="header-container">
    <h1>Amazon Lime</h1>
    <RouterLink to="/login" custom v-slot="{ navigate }">
      <button @click="navigate" role="link">Login</button>
    </RouterLink>
    <RouterLink to="/register" custom v-slot="{ navigate }">
      <button @click="navigate" role="link">Register</button>
    </RouterLink>
  </div>
</template>

<style scoped>
.header-container {
  padding: 1rem;
  text-align: center;
  background-color: #383636;
  font-family: sans-serif;
  color: rgb(71, 19, 69);
  border: rgba(89, 5, 184, 0.637) solid 5px;
  border-radius: 5%;
  margin: 20px;
}

h1 {
  -webkit-text-stroke: 1px white;
}
</style>
