<template>
  <v-app>
    <SidebarLink></SidebarLink>
    <router-view v-if="!showAppBar"> </router-view>
  </v-app>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref, watch } from "vue";
import SidebarLink from "./components/SidebarLink.vue";

const router = useRouter();
const showAppBar = ref(true);

const excludedRoutes = ["/", "/login"];

const shouldShowAppBar = () => {
  return !excludedRoutes.includes(router.currentRoute.value.path);
};

watch(
  () => router.currentRoute.value.path,
  () => {
    showAppBar.value = shouldShowAppBar();
  }
);

showAppBar.value = shouldShowAppBar();
</script>
<style lang="scss">
:root {
  --primary: #4ade80;
  --primary-alt: #22c55e;
  --grey: #64748b;
  --dark: #1e293b;
  --dark-alt: #334155;
  --light: #f4f5fa;
  --sidebar-width: 300px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Fira sans", sans-serif;
}

body {
  background: var(--light);
}

button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}

.app {
  display: flex;

  main {
    flex: 1 1 0;
    padding: 2rem;

    @media (max-width: 1024px) {
      padding-left: 6rem;
    }
  }
}

@font-face {
  font-family: "Telegraf";
  src: local("Telegraf"),
    url(./assets/fonts/FontsFree-Net-Telegraf-Regular.ttf) format("truetype");
}
</style>
