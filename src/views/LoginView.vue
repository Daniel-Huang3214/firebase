<script setup>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ref } from "vue";

const email = ref("");
const password = ref("");

const auth = getAuth();
console.log(auth);
const login = async () => {
  await signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      console.log(userCredential);
      console.log("yes");
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
    })
};
</script>

<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login()">
      <input v-model="email" type="email" placeholder="email" /> <br />
      <input v-model="password" type="password" placeholder="password" />
      <input type="submit" value="Login" />
    </form>
  </div>
</template>

<style scoped>

</style>