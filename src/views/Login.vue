<template>
  <div
    class="auth-wrapper d-flex align-center justify-center pa-4"
    style="background-color: #f4f5fa"
  >
    <v-card class="auth-card pa-4 pt-7" max-width="448">
      <v-card-item class="justify-center">
        <template #prepend>
          <div class="d-flex">
            <img height="200" width="300" src="@/assets/darklogo.png" />
          </div>
        </template>
      </v-card-item>

      <v-card-text>
        <p class="custom-font d-flex align-center justify-space-between">
          Usuario
        </p>
        <v-text-field
          placeholder="Ingrese su usuario"
          prepend-inner-icon="mdi-email-outline"
          variant="outlined"
          v-model="username"
        >
        </v-text-field>

        <p class="custom-font d-flex align-center title justify-space-between">
          Contraseña
        </p>

        <v-text-field
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          placeholder="Ingrese su contraseña"
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
          @click:append-inner="visible = !visible"
          v-model="password"
          @keyup.enter="validate"
        ></v-text-field>
        <div v-if="showError" class="text-center">
          <v-alert color="error"
            >Usuario o contraseña incorrectos. Por favor, inténtalo de
            nuevo.</v-alert
          >
        </div>
        <v-btn
          :disabled="loading"
          :loading="loading"
          block
          class="mb-8 pa-5 mt-5 text-capitalize"
          color="#643392"
          size="large"
          @click="validate"
        >
          <p class="custom-font">Iniciar Sesión</p>
        </v-btn>
      </v-card-text>
    </v-card>

    <img
      height="250"
      class="auth-footer-mask d-none d-md-block"
      src="@/assets/auth-v2-mask-light.png"
    />
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

const router = useRouter();

const showError = ref(false);
const visible = ref(false);
const loading = ref(false);
const username = ref("");
const password = ref("");

const validate = async () => {
  loading["value"] = true;
  await axios
    .post("api/token/", {
      username: username["value"],
      password: password["value"],
    })
    .then((r) => {
      localStorage.setItem("token", r.data.access);
      loading["value"] = false;
      router.push("/home");
      // location.reload();
      return r.data;
    })
    .catch((e) => {
      loading["value"] = false;
      showError["value"] = true;
      username["value"] = "";
      password["value"] = "";
      console.error(e);
    });
};
</script>
<style>
.auth-wrapper {
  min-block-size: calc(var(--vh, 1vh) * 100);
}

.auth-footer-mask {
  position: absolute;
  inset-block-end: 0;
  min-inline-size: 100%;
}

.auth-card {
  z-index: 1 !important;
}

.auth-footer-start-tree,
.auth-footer-end-tree {
  position: absolute;
  z-index: 1;
}

.auth-footer-start-tree {
  inset-block-end: 0;
  inset-inline-start: 0;
}

.auth-footer-end-tree {
  inset-block-end: 0;
  inset-inline-end: 0;
}

.auth-illustration {
  z-index: 1;
}

.auth-logo {
  position: absolute;
  z-index: 1;
  inset-block-start: 2rem;
  inset-inline-start: 2.3rem;
}

.auth-bg {
  background-color: rgb(var(--v-theme-surface));
}

.custom-placeholer-color input::placeholder {
  color: red !important;
  opacity: 1;
}

.custom-label-color .v-label {
  color: red;
  opacity: 1;
}

.custom-placeholer-color input,
.custom-label-color input {
  color: red !important;
  font-family: telegraf-regular;
}

.custom-font {
  font-family: Telegraf !important;
  text-transform: none;
}

.login-card {
  height: 100%;
  display: grid;
  place-items: center;
}

.auth-footer-start-tree,
.auth-footer-end-tree {
  position: absolute;
  z-index: 1;
}

.auth-footer-start-tree {
  inset-block-end: 0;
  inset-inline-start: 0;
}

.auth-footer-end-tree {
  inset-block-end: 0;
  inset-inline-end: 0;
}
</style>
