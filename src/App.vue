<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-indigo text-white">
      <q-toolbar class="justify-center">
        <q-toolbar-title class="header-title">
          Weather App
        </q-toolbar-title>
        <q-btn-dropdown flat icon="menu" class="text-white">
          <q-list>
            <q-item clickable tag="router-link" to="/">
              <q-item-section>
                <q-item-label>Home</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable tag="router-link" to="/tugas1">
              <q-item-section>
                <q-item-label>Tugas 1</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable tag="router-link" to="/tugas2">
              <q-item-section>
                <q-item-label>Tugas 2</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable tag="router-link" to="/tugas3">
              <q-item-section>
                <q-item-label>Tugas 3</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable tag="router-link" to="/tugas4">
              <q-item-section>
                <q-item-label>Tugas 4</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable tag="router-link" to="/tugas5">
              <q-item-section>
                <q-item-label>Tugas 5</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable tag="router-link" to="/tugas6">
              <q-item-section>
                <q-item-label>Tugas 6</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable tag="router-link" to="/tugas7">
              <q-item-section>
                <q-item-label>Tugas 7</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>

    <q-page-container class="page-background">
      <img src="./assets/Background.jpg" alt="Background Image" class="background-image">
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-Turquoise text-white">
      <q-toolbar>
        <q-toolbar-title class="footer-tittle">
          &copy; 2024 WahyuRamadhan.S. All Rights Reserved.
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
.header-title {
  font-size: 24px;
  color: white;
  text-align: left;
  font-weight: bold;
}

.background-image {
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 0.7; 
}

.footer-tittle{
  text-align: right;
}
  
.q-toolbar-title {
  color: #E1AFD1; 
}

.q-btn-dropdown .q-item-label {
  color: #7469B6; 
}

.q-list .q-item:hover {
  background-color: #AD88C6; 
}

.q-footer {
  background-color: #7469B6; 
}
 
.bg-primary {
  background-color: #7469B6;
}
</style>
