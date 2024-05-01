<template>
  <v-card
    style="border-radius: 10px"
    variant="flat"
    class="pt-2 pl-5 my-4 pr-5 animated animatedFadeInUp fadeInUp"
  >
    <p class="custom-font text-h6 font-weight-bold">Lista de Unidades</p>
    <div class="mt-3">
      <v-btn
        @click="$router.push('/create-unit')"
        color="#30105C"
        class="custom-font"
      >
        <v-icon left> mdi-plus </v-icon>
        Agregar unidad
      </v-btn>
      <div></div>
    </div>
    <v-data-table
      items-per-page="5"
      :headers="headers"
      :items="units"
      :loading="loading"
      :items-length="units.length"
      loading-text="Cargando..."
      items-per-page-text="Unidades por página"
      no-data-text="No hay información."
      hide-default-header
    >
      <template v-slot:item="row">
        <tr>
          <td class="custom-font">
            {{ row.item.code }}
          </td>
          <td class="custom-font">
            {{ row.item.name }}
          </td>
          <td class="text-left">
            <v-btn
              dark
              elevation="0"
              color="#26547c"
              @click="$router.push(`/edit-unit/uni-${row.item.id}`)"
            >
              <v-icon size="x-large" dark icon="mdi-pencil-circle"></v-icon>
            </v-btn>
            <v-btn
              class="mx-2"
              dark
              elevation="0"
              color="#CE000C"
              @click="deleteItem(row.item.id)"
            >
              <v-icon size="x-large" dark icon="mdi-delete-circle"></v-icon>
            </v-btn>
          </td>
        </tr>
      </template>
    </v-data-table>
  </v-card>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { headers } from "./mock.js";

const loading = ref(false);
const dialog = ref(false);
const units = ref([]);

// methods
const handleList = async () => {
  try {
    loading["value"] = true;
    const response = await axios.get("api/v1/unit/");
    units["value"] = response.data;
    loading["value"] = false;
  } catch (error) {
    loading["value"] = false;
    console.error("Error fetching units:", error);
  }
};

const deleteItem = async (id) => {
  Swal.fire({
    title: "¿Seguro que deseas eliminar el registro?",
    text: "!No podrás revertir esta acción!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    cancelButtonText: "Cancelar",
    confirmButtonText: "Sí, eliminar",
  }).then((result) => {
    if (result.isConfirmed) {
      handleDelete(id);
    }
  });
};

const handleDelete = async (id) => {
  await axios
    .delete(`api/v1/unit/delete/${id}/`)
    .then((r) => {
      handleList();
      Swal.fire("Unidad!", "El registro ha sido eliminado", "success");
      return r.data;
    })
    .catch((e) => {
      Swal.fire("Error", "Hubo un problema al eliminar el registro", "error");
      return e;
    });
};

import { onMounted } from "vue";
import Swal from "sweetalert2";
onMounted(handleList);
</script>

<style scoped>
.custom-font {
  font-family: Telegraf !important;
  text-transform: none !important;
}

/* Animation */

@keyframes fadeInUp {
  from {
    transform: translate3d(0, 40px, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@-webkit-keyframes fadeInUp {
  from {
    transform: translate3d(0, 40px, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
  -webkit-animation-duration: 1s;
  -webkit-animation-fill-mode: both;
}

.animatedFadeInUp {
  opacity: 0;
}

.fadeInUp {
  opacity: 0;
  animation-name: fadeInUp;
  -webkit-animation-name: fadeInUp;
}
</style>
