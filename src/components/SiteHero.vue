<script setup>

</script>

<template>
  <div>
    <img class="background" src="./images/hero.png">
    <img class="amazon" src="./images/amazonprime.png">
  </div>
</template>

<style scoped>
h1 {
  font-family: 'Amazon Ember', sans-serif;
}

.background {
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: -1;
  height: 100vh;
  width: 100vw;
}

.amazon {
  position: relative;
  margin-left: 15vw;
  margin-right: 15vw;
  border-radius: 25%;
  box-shadow: 0px 0px 50px #ffffff;
}
</style>