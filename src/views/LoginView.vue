<script setup>
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, } from "firebase/auth";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const email = ref("");
const password = ref("");

const auth = getAuth();
console.log(auth);
const login = async () => {
  await signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      console.log(userCredential);
      console.log("yes");
      router.push("./purchase")
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
    })
};

const GoogleLogin = async () => {
  const provider = new GoogleAuthProvider();
  const user = await signInWithPopup(auth, provider);
  console.log(user);
  router.push("./purchase")
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
    <button @click="GoogleLogin">Google</button>
  </div>
</template>

<style scoped>

</style>