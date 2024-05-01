<template>
  <v-card
    style="border-radius: 10px"
    variant="flat"
    class="pt-2 pl-5 my-4 pr-5 animated animatedFadeInUp fadeInUp"
  >
    <p class="custom-font text-h6 font-weight-bold mb-5">Agregar empleado</p>
    <v-card elevation="0" style="border-radius: 10px">
      <form @submit.prevent="submit">
        <v-text-field
          v-model="code.value.value"
          :counter="10"
          :error-messages="code.errorMessage.value"
          label="Código"
        ></v-text-field>
        <v-text-field
          v-model="first_name.value.value"
          :error-messages="first_name.errorMessage.value"
          label="Nombres"
        ></v-text-field>
        <v-text-field
          v-model="last_name.value.value"
          :error-messages="last_name.errorMessage.value"
          label="Apellidos"
        ></v-text-field>
        <v-text-field
          label="Fecha de nacimiento"
          v-model="birthday.value.value"
          type="date"
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
        />
        <v-autocomplete
          outlined
          :items="listDepartment"
          :item-title="isDepartment"
          return-object
          v-on:update:modelValue="selectText2"
          clearable
          v-model="department.value.value"
          placeholder="Seleccionar departamento"
          no-data-text="Ningun departamento disponible"
          :error-messages="department.errorMessage.value"
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
const listDepartment = ref([]);

const getUnit = async () => {
  const response = await axios.get(`/api/v1/unit/`);
  listUnit["value"] = response.data;
};

const isUnit = (item) => {
  return item.name;
};

const isDepartment = (item) => {
  return item.name;
};

const selectText = async (text) => {
  if (text && text.id !== null && text.id !== undefined) {
    unit.key = text.id;
    // department.value = [];
    const response = await axios.get(`/api/v1/departments/${text.id}/`);
    listDepartment["value"] = response.data;
  } else {
    unit.key = "";
  }
};

const selectText2 = async (text) => {
  if (text && text.id !== null && text.id !== undefined) {
    department.key = text.id;
  } else {
    department.key = "";
  }
};

const { handleSubmit, handleReset } = useForm({
  validationSchema: {
    code(value) {
      if (value) return true;
      return "El código es campo obligatorio.";
    },
    first_name(value) {
      if (value) return true;
      return "Los nombres son campo obligatorio.";
    },
    last_name(value) {
      if (value) return true;
      return "Los apellidos son campo obligatorio.";
    },
    department(value) {
      if (value) return true;
      return "Debes de seleccionar una opción.";
    },
  },
});
const code = useField("code");
const first_name = useField("first_name");
const last_name = useField("last_name");
const birthday = useField("birthday");
const unit = useField("unit");
const department = useField("department");

const submit = handleSubmit(async (values) => {
  try {
    const response = await axios.post("api/v1/employee/create/", {
      code: values.code,
      first_name: values.first_name,
      last_name: values.last_name,
      birthday: values.birthday,
      department: values.department.id,
    });
    Swal.fire("Empleado!", "El registro ha sido creado", "success");
    router.push("/employee-list");
    return response.data;
  } catch (error) {
    console.error("Error al enviar la solicitud:", error);
    Swal.fire("Error", "Hubo un problema al crear el registro", "error");
  }
});

onMounted(getUnit);
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
