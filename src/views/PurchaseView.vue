<script setup>
import axios from "axios";
import { ref } from "vue";
import SiteModal from "../components/SiteModal.vue";
import { useStore } from "../store/index.js";

const store = useStore();
const genre = ref(27);
const criteria = ref("");
const searchResults = ref([]);
const page = ref(1);
const totalPages = ref(0);
const showModal = ref(false);
const selectedId = ref(0);

const openModal = (id) => {
  showModal.value = true;
  selectedId.value = id;
};

const closeModal = () => {
  showModal.value = false;
};

const getGenres = async () => {
  searchResults.value = [];
  criteria.value = "";
  await store.getMovies(genre.value);
};

const search = async (direction) => {
  page.value += direction;

  let data = (
    await axios.get("https://api.themoviedb.org/3/search/movie", {
      params: {
        api_key: "0dcabfe51b80fa2de3e80d7d256e0e81",
        query: criteria.value,
        include_adult: false,
        page: page.value,
      },
    })
  ).data;

  totalPages.value = data.total_pages;

  searchResults.value = data.results.map((movie) => {
    return {
      id: movie.id,
      image: movie.poster_path,
    };
  });
};

// await store.populateFirestore();
</script>

<template>
  <RouterLink to="/cart" custom v-slot="{ navigate }">
    <img @click="navigate" class="cart" role="link" src="../components/images/cart.png">
  </RouterLink>
  <div class="movies-box">
    <br />
    <input class="searchbar" type="search" placeholder="Search" v-model="criteria" @keydown.enter="search(0)" />
    <select class="genre" v-model="genre" @change="getGenres()">
      <option value="Horror">Horror</option>
      <option value="Crime">Crime</option>
      <option value="Drama">Drama</option>
      <option value="History">History</option>
      <option value="War">War</option>
    </select>
    <h1>*NOT* pirated movies</h1>
    <div class="purchase-container">
      <template v-if="searchResults.length">
        <img v-for="movie in searchResults" :id="movie.id" @click="openModal(movie.id)"
          :src="`https://image.tmdb.org/t/p/w500${movie.image}`" />
      </template>
      <template v-if="!searchResults.length">
        <img v-for="movie in store.movies" :id="movie.id" @click="openModal(movie.id)"
          :src="`https://image.tmdb.org/t/p/w500${movie.image}`" />
      </template>
      <SiteModal v-if="showModal" @toggleModal="closeModal()" :id="selectedId" />
    </div>
    <template v-if="searchResults.length">
      <div class="navigation">
        <img class="page-button left" src="../components/images/previous.png" v-show="page > 1" @click="search(-1)">
        <h1>{{ `Page ${page} of ${totalPages}` }}</h1>
        <img class="page-button right" src="../components/images/next.png" v-show="page < totalPages" @click="search(1)">
      </div>
    </template>
  </div>
  <img class="background" src="../components/images/hero.png">
</template>

<style scoped>
.purchase-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 1vh;
  width: 83vw;
  row-gap: 1vh;
}

.cart {
  position: fixed;
  right: 2vw;
  top: 5vh;
  height: 6vh;
  width: 4vw;
  border-radius: 40%;
}

.page-button {
  background-color: none;
  height: 10vh;
  width: 10vw;
}

.left {
  position: absolute; 
  left: 10vw;
}
.right {
  position: absolute;
  right: 10vw;
}
.genre {
  position: absolute;
  right: 10vw;
  width: 15vw;
}
.searchbar {
  position: absolute;
  left: 10vw;
  top: 12.5vh;
  width: 20vw;
}

h1 {
  color: white;
  text-align: center;
  grid-column-start: 2;
  height: 9vh;
}

img {
  width: 200px;
  aspect-ratio: 2 / 3;
}

img:hover {
  -moz-box-shadow: 0 0 10px #ccc;
  -webkit-box-shadow: 0 0 10px #ccc;
  box-shadow: 0 0 20px #ccc;
}

.movies-box {
  background-color: black;
  margin: 10vh;
  box-shadow: 0px 0px 500px #221e1ec9;
}

.background {
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: -1;
  height: 100vh;
  width: 100vw;
}

.navigation {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1;
}
</style>
