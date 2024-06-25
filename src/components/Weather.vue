<template>
  <q-page class="q-pa-md flex flex-center">
    <q-card class="q-pa-md transparent-card" style="width: 1000px;">
      <div class="weather">
        <h4>Cek Cuaca Kota Hari Ini</h4>
        <q-input v-model="city" label="Masukkan Nama Kota" @keyup.enter="getWeather" filled class="city-input" />
        <br>
        <q-btn @click="getWeather" label="Cek Cuaca" color="primary" class="q-mt-mdt" />
        <div v-if="weather" class="q-mt-md">
          <q-card class="transparent-card">
            <q-card-section class="infoCard">
              <div class="text-h5">{{ weather.name }}</div>
              <div>Weather: {{ weather.weather[0].description }}</div>
              <div>Temperature: {{ weather.main.temp }}°C</div>
              <div>Time: {{ formattedTime }}</div>
            </q-card-section>
          </q-card>
        </div>
        <div v-if="error" class="q-mt-md text-negative">
          {{ error }}
        </div>
      </div>
    </q-card>
  </q-page>
</template>
  
<script>
import axios from 'axios';

export default {
  data() {
    return {
      city: '',
      weather: null,
      error: null,
      formattedTime: '',
    };
  },
  methods: {
    async getWeather() {
      try {
        this.error = null; // Clear previous errors
        const apiKey = '1ec9f1416abffcb848dfd945801cd564'; // Replace with your OpenWeatherMap API key
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${apiKey}`
        );
        this.weather = response.data;
        this.formatTime(response.data.dt);
      } catch (error) {
        console.error(error);
        this.error = 'Gagal mendapatkan data cuaca. Silakan coba lagi.';
      }
    },
    formatTime(timestamp) {
      const date = new Date(timestamp * 1000);
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      this.formattedTime = `${hours}:${minutes}`;
    },
  },
};
</script>
  
<style scoped>
.weather {
  text-align: center;
  margin-top: 20px;
  color: #7469B6; /* primary text color */
}

.transparent-card {
  background-color: rgba(240, 248, 255, 0.729);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
}

.q-mt-md {
  background-color: #fff; /* Warna putih */
  padding: 20px;
  border-radius: 10px;
}

.city-input {
  background-color: #fff; /* Warna putih */
  padding: 10px;
  border-radius: 10px;
}
</style>
