<script setup>
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, } from "firebase/auth";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const email = ref("");
const password = ref("");
const fail = ref(false);

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
      fail.value = error;
      alert("Wrong Email/Password");
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
  <div class="login-container">
    <div class="login-UI">
      <h1>Login</h1>
      <form @submit.prevent="login()">
        <input v-model="email" type="email" placeholder="email" /> <br />
        <input v-model="password" type="password" placeholder="password" /> <br />
        <input type="submit" value="Login" />
      </form>
      <br/>
      <div class="google-login">
        <p>Login with Google?</p>
        <button @click="GoogleLogin">Google</button>
      </div>
    </div>
  </div>
  <img class="background" src="../components/images/hero.png">
</template>

<style scoped>
h1, p {
  -webkit-text-stroke: 1px rgb(250, 250, 250);
  color: white;
}

form, h1 {
  text-align: center;
}

button {
  text-align: center;
}

.google-login {
  text-align: center;
}

.login-UI {
  grid-column-start: 2;
  grid-row-start: 2;
  background-color: #383636;
  border: rgba(89, 5, 184, 0.637) solid 5px;
  border-radius: 20%;
}

.login-container {
  display: grid;
  grid-template-columns: repeat(3, 33vw);
  grid-template-rows: repeat(3, 30vh);
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