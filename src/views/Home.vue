<template>
  <div class="ma-5 mr-5 animated animatedFadeInUp fadeInUp">
    <p class="custom-font font-weight-bold text-h6 mb-5 mt-10">Dashboard</p>
    <v-row class="mb-6" no-gutters justify="space-between">
      <v-col class="ma-2">
        <v-card variant="flat" style="border-radius: 10px" class="pa-5">
          <v-row no-gutters justify="space-between">
            <v-card-title>
              <p class="custom-font font-weight-bold text-h5 text-black">
                {{ count.unit_count }}
              </p>
            </v-card-title>
            <img class="pr-3" height="50em" src="@/assets/patient.png" />
          </v-row>
          <v-card-subtitle>
            <p class="custom-font text-h6">Unidades registradas</p>
          </v-card-subtitle>
        </v-card>
      </v-col>
      <v-col class="ma-2">
        <v-card variant="flat" style="border-radius: 10px" class="pa-5">
          <v-row no-gutters justify="space-between">
            <v-card-title>
              <p class="custom-font font-weight-bold text-h5 text-black">
                {{ count.department_count }}
              </p>
            </v-card-title>
            <img class="pr-3" height="50em" src="@/assets/patient.png" />
          </v-row>
          <v-card-subtitle>
            <p class="custom-font text-h6">Departamentos registrados</p>
          </v-card-subtitle>
        </v-card>
      </v-col>
      <v-col class="ma-2">
        <v-card variant="flat" style="border-radius: 10px" class="pa-5">
          <v-row no-gutters justify="space-between">
            <v-card-title>
              <p class="custom-font font-weight-bold text-h5 text-black">
                {{ count.employee_count }}
              </p>
            </v-card-title>
            <img class="pr-3" height="50em" src="@/assets/patient.png" />
          </v-row>
          <v-card-subtitle>
            <p class="custom-font text-h6">Empleados registrados</p>
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const count = ref([]);

const getUnit = async () => {
  const response = await axios.get(`/api/v1/record-count/`);
  count["value"] = response.data;
};

onMounted(getUnit);
</script>

<style>
.cards {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  gap: 1rem;
}

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
