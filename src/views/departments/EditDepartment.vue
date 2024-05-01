<template>
  <v-card
    style="border-radius: 10px"
    variant="flat"
    class="pt-2 pl-5 my-4 pr-5 animated animatedFadeInUp fadeInUp"
  >
    <p class="custom-font text-h6 font-weight-bold mb-5">Editar departamento</p>
    <v-card elevation="0" style="border-radius: 10px">
      <form @submit.prevent="submit">
        <v-text-field
          v-model="code.value.value"
          :counter="10"
          :error-messages="code.errorMessage.value"
          label="Código"
        ></v-text-field>
        <v-text-field
          v-model="name.value.value"
          :error-messages="name.errorMessage.value"
          label="Nombre"
        ></v-text-field>
        <v-text-field
          v-model="description.value.value"
          label="Descripción"
        ></v-text-field>
        <v-autocomplete
          outlined
          :items="listUnit"
          :item-title="isUnit"
          return-object
          v-on:update:modelValue="selectText"
          clearable
          v-model="unit.value.value"
          placeholder="Seleccionar unidad"
          no-data-text="Ninguna unidad disponible"
          :error-messages="unit.errorMessage.value"
        />
        <div class="mb-5">
          <v-btn
            class="text-none me-4 text-white"
            color="#30105C"
            rounded="0"
            variant="flat"
            type="submit"
          >
            Guardar
          </v-btn>

          <v-btn
            class="text-none"
            color="#30105C"
            rounded="0"
            variant="outlined"
            @click="handleReset"
          >
            Limpiar
          </v-btn>
        </div>
      </form>
    </v-card>
  </v-card>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useField, useForm } from "vee-validate";
import Swal from "sweetalert2";
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();
const listUnit = ref([]);
const depId = router.currentRoute.value.params.unit;

const getUnit = async () => {
  const response = await axios.get(`/api/v1/unit/`);
  listUnit["value"] = response.data;
};

const isUnit = (item) => {
  return item.name;
};

const selectText = (text) => {
  if (text && text.id !== null && text.id !== undefined) {
    unit.key = text.id;
  } else {
    unit.key = "";
  }
};

const handleGet = async () => {
  try {
    const response = await axios.get(`api/v1/department/profile/${depId}/`);
    code.value.value = response.data.code;
    name.value.value = response.data.name;
    description.value.value = response.data.description;
    unit.value.value = response.data.unit;
  } catch (error) {
    console.error("Error fetching departments:", error);
  }
};

const { handleSubmit, handleReset } = useForm({
  validationSchema: {
    code(value) {
      if (value?.length >= 2) return true;
      return "El código debe tener al menos 2 caracteres.";
    },
    name(value) {
      if (value?.length >= 2) return true;
      return "El nombre debe tener al menos 4 caracteres.";
    },
    unit(value) {
      if (value) return true;
      return "Debes de seleccionar una opción.";
    },
  },
});
const code = useField("code");
const name = useField("name");
const description = useField("description");
const unit = useField("unit");

const submit = handleSubmit(async (values) => {
  try {
    const response = await axios.patch(`api/v1/department/${depId}/`, {
      code: values.code,
      name: values.name,
      description: values.description,
      unit: values.unit.id,
    });
    Swal.fire("Departamento!", "El registro ha sido editado", "success");
    router.push("/department-list");
    return response.data;
  } catch (error) {
    Swal.fire("Error", "Hubo un problema al editar el registro", "error");
    console.error("Error al enviar la solicitud:", error);
  }
});
const handleMounted = () => {
  handleGet();
  getUnit();
};

onMounted(handleMounted);
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
