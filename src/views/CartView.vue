<script setup>
import { useStore } from "../store/index.js";

const store = useStore();
</script>

<template>
  <h1 class="cart">Cart</h1>
  <div class="movies-box">
    <div class="purchase-container">
      <div v-for="movie in Array.from(store.cart.values())">
        <button class="remove" @click="store.removeFromCart(movie.id)">Remove</button>
        <img :src="`https://image.tmdb.org/t/p/w500${movie.poster}`" />
        <h1>{{ movie.title }}</h1>
        <h2>{{ movie.date }}</h2>
      </div>
    </div>
  </div>
  <img class="background" src="../components/images/hero.png">
</template>

<style scoped>
img {
  width: 200px;
  aspect-ratio: 2 / 3;
}

.cart {
  position: absolute;
  top: 1vh;
  right: 48vw;
  color:white;
  font-size: 40px;
}

.movies-box {
  padding-top: 5vh;
  background-color: black;
  margin: 10vh;
  box-shadow: 0px 0px 500px #221e1ec9;
}

.remove {
  position: relative;
}

.purchase-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 1vh;
  width: 83vw;
  row-gap: 1vh;
  text-align: center;
  color: white;
  grid-row-gap: 10vh;
}

.background {
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: -1;
  height: 100vh;
  width: 100vw;
}
</style>
