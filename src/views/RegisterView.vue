<script setup>
import { ref } from "vue";
import { auth } from "../firebase/index";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, } from "firebase/auth";
import { useRouter } from "vue-router";

const email = ref("");
const password1 = ref("");
const password2 = ref("");
const router = useRouter();

const registerUserByEmail = async () => {
  if ((password1.value !== password2.value) || password2.value >= 6) {
    alert("Password must be 6 letters or more");
    return;
  }
  try {
    await createUserWithEmailAndPassword(auth, email.value, password1.value);
    router.push("./purchase")
  } catch (error) {
    alert("The user already exist/Your password is too short");
  }
};

const registerUserByGoogle = async () => {
  const provider = new GoogleAuthProvider();
  router.push("./purchase")
};
</script>

<template>
  <div class="login-container">
    <div class="register-UI">
      <h2>Register by email</h2>
      <form @submit.prevent="registerUserByEmail()">
        <input v-model="email" type="email" placeholder="email" /> <br />
        <input v-model="password1" type="password" placeholder="password" /> <br />
        <input v-model="password2" type="password" placeholder="re-enter password" /> <br />
        <input type="submit" value="Register" />
      </form>
      <hr />
      <br />
      <div class="google-UI">
        <h2>Register by Google</h2>
        <button @click="registerUserByGoogle">Google</button>
      </div>
    </div>
  </div>
  <img class="background" src="../components/images/hero.png">
</template>

<style scoped>
h2, p {
  -webkit-text-stroke: 1px rgb(250, 250, 250);
  color: white;
}

h2, form, input {
  text-align: center;
}

.google-UI {
  text-align: center;
}

.register-UI {
  grid-column-start: 2;
  grid-row-start: 2;
  background-color: #383636;
  border: rgba(89, 5, 184, 0.637) solid 5px;
  border-radius: 20%;
  height: 40vh;
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
