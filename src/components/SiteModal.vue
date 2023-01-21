<script setup>
import axios from "axios";
import { useStore } from "../store/index.js";
import { ref } from "vue";

const store = useStore();
const props = defineProps(["id"]);
const emits = defineEmits(["toggleModal"]);
const popup = ref(false);

let data = (
  await axios.get(`https://api.themoviedb.org/3/movie/${props.id}`, {
    params: {
      api_key: "0dcabfe51b80fa2de3e80d7d256e0e81",
    },
  })
).data;

const purchase = () => {
  store.addToCart(props.id, {
    id: data.id,
    poster: data.poster_path,
    title: data.title,
    date: data.release_date,
  })
  popup.value = true;
}
</script>

<template>
  <Teleport to="body">
    <div class="modal-outer-container" @click.self="emits('toggleModal')">
      <div class="modal-inner-container">
        <button class="close-button" @click="emits('toggleModal')">X</button>
        <h1>{{ data.title }}</h1>
        <p class="tagline">"{{ data.tagline }}"</p>
        <img class="poster" :src="`https://image.tmdb.org/t/p/w500${data.poster_path}`" />
        <p class="overview">{{ data.overview }}</p>
        <p class="original-language">Original Language: {{ data.original_language }}</p>
        <p class="budget">Budget: ${{ data.budget }}</p>
        <p class="vote count">Vote Count: {{ data.vote_count }}</p>
        <p class="vote average">Vote Average: {{ data.vote_average }}</p>
        <button class="purchase" @click="purchase">
          Purchase
        </button>
        <p v-if="popup" class="popup">Purchased!</p>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
/* button {
  grid-column-start: 2;
  grid-row-start: 3;
} */

h1 {
  grid-column-start: 1;
  grid-row-start: 1;
}

.popup {
  grid-column-start: 2;
  grid-row-start: 4;
  margin: auto;
}

.budget {
  grid-column-start: 3;
  grid-row-start: 3;
}

.vote {
  grid-column-start: 3;
  grid-row-start: 2;
}

.average {
  margin-top: 10vh;
}

.original-language {
  grid-column-start: 3;
  grid-row-start: 1;
}

.purchase {
  grid-column-start: 2;
  grid-row-start: 3;
  height: 5vh;
  width: 6vw;
  margin: auto;
}

.overview {
  grid-column-start: 2;
  grid-row-start: 2;
}

.poster {
  grid-column-start: 1;
  grid-row-start: 2;
  height: 35vh;
  margin: 10px;
}

.tagline {
  grid-column-start: 1;
  grid-row-start: 1;
  position: relative;
  top: 5vh;
}

.modal-outer-container {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #141313d5;
  z-index: 3;
}

.modal-inner-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 25% 25% 25% 25%;
  grid-column-gap: 1vw;
}

.modal-outer-container .modal-inner-container {
  background-color: black;
  color: white;
  width: 70vw;
  height: 60vh;
  position: relative;
}

.modal-outer-container .modal-inner-container .close-button {
  position: absolute;
  right: 0px;
  padding: 1rem;
  border: none;
  background: #1f2123;
  font-weight: bold;
  font-size: 1.25rem;
  color: white;
}
</style>
