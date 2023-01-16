import { firestore } from "../firebase/index";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { defineStore } from 'pinia'
import axios from 'axios';

export const useStore = defineStore('store', {
  state: () => {
    return {
      movies: [],
      cart: new Map(),
    }
  },
  actions: {
    async populateFirestore() {
      const genres = new Map([[27, "Horror"], [80, "Crime"], [18, "Drama"], [36, "History"], [10752, "War"]]);

      genres.forEach(async (value, key) => {
        let data = (await axios.get("https://api.themoviedb.org/3/discover/movie", {
          params: {
            api_key: "0dcabfe51b80fa2de3e80d7d256e0e81",
            with_genres: key,
            include_adult: false,
          }
        })).data.results;
        data = data.map((movie) => {
          return {
            id: movie.id,
            image: movie.poster_path,
          }
        });
        await setDoc(doc(firestore, "Genre", value), { data });
      });
    },
    async getMovies(genre) {
      this.movies = (await getDoc(doc(firestore, "Genre", genre))).data().data;
      console.log(this.movies);
    },
    addToCart(id, data) {
      this.cart.set(id, data);
    },
    removeFromCart(id) {
      this.cart.delete(id);
    }
  }
});