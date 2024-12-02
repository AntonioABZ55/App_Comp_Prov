<template>
  <div class="home">
    <Navbar />

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-overlay d-flex justify-content-end align-items-end">
        <div class="container text-white text-right">
          <h1 class="display-4">Bienvenido al sistema</h1>
          <p class="lead mb-4">de competencia de proveedurias</p>
          <router-link to="/competencias" class="btn btn-success btn-lg rounded-pill shadow">Mas</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
  },
}
</script>

<style scoped>
/* Estilos Generales */
html, body, .home {
  width: 100%;
  height: 100%;
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

/* Hero Section */
.hero {
  width: 100%;
  height: 100vh;
  background: url('../assets/home.png') center/cover no-repeat;
  position: relative;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6); /* Fondo oscuro con opacidad */
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 50px;
}

.container {
  text-align: right; /* Alinea el texto a la derecha */
}

h1 {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 20px;
}

p {
  font-size: 1.5rem;
  margin-bottom: 30px;
}

.btn-success {
  font-size: 1.25rem;
  padding: 15px 30px;
  border-radius: 50px; /* Bordes redondeados */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;
}

.btn-success:hover {
  background-color: #45a049;
}
</style>

