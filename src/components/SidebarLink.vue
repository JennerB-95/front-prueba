<template>
  <v-card v-if="showAppBar">
    <v-layout>
      <v-navigation-drawer permanent color="#F4F5FA" elevation="0" floating>
        <v-list class="align-center" color="#30105C" density="compact" nav>
          <v-row no-gutters="" justify="center">
            <img height="75em" src="@/assets/logo.png" />
          </v-row>
          <v-list-item
            link
            to="/home"
            prepend-icon="mdi-view-dashboard"
            value="home"
          >
            <p class="custom-font">Dashboard</p>
          </v-list-item>
          <v-list-item
            link
            to="/unit-list"
            prepend-icon="mdi-home-account"
            value="unit-list"
          >
            <p class="custom-font">Unidades</p>
          </v-list-item>
          <v-list-item
            link
            to="/department-list"
            prepend-icon="mdi-family-tree"
            value="department-list"
          >
            <p class="custom-font">Departamentos</p>
          </v-list-item>
          <v-list-item
            link
            to="/employee-list"
            prepend-icon="mdi-account-multiple"
            value="/employee-list"
          >
            <p class="custom-font">Empleados</p>
          </v-list-item>
        </v-list>
        <template v-slot:append>
          <div class="pa-2">
            <v-btn
              prepend-icon="mdi-logout"
              class="custom-font text-capitalize"
              @click="logout"
            >
              Cerrar sesión
            </v-btn>
          </div>
        </template>
      </v-navigation-drawer>
      <v-main
        style="height: 100vh; overflow: scroll; background-color: #f4f5fa"
      >
        <router-view> </router-view>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref, watch } from "vue";

const router = useRouter();
const showAppBar = ref(true);

const logout = async () => {
  localStorage.removeItem("isLogged");
  router.push({ name: "Login" });
};

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

<style scoped>
.read-the-docs {
  color: #888;
}

.custom-font {
  font-family: Telegraf !important;
  text-transform: none !important;
}
</style>
