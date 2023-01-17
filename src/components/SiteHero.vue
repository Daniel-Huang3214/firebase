<script setup>

</script>

<template>
  <div>
    <img class="background" src="./images/hero.png">
    <img class="thanos" src="./images/thanos.png">
  </div>
</template>

<style scoped>
h1 {
  font-family: 'Amazon Ember', sans-serif;
}

.background {
  position: fixed;
  top: 0px;
  left:0px;
  z-index: -1;
  height: 100vh;
  width: 100vw;
}

.thanos {
  display: -webkit-box;
  margin-left: auto;
  height: 60vh;
  width: 30vw;
  filter:blur(0.75px);
}
</style>