<template>
  <div class="home">
    <Navbar />

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-overlay d-flex">
        <div class="container text-white">
          <h1 class="hero-title">Bienvenido al sistema</h1>
          <p class="hero-subtitle">de competencia de proveedurías</p>
          <router-link to="/competencias" class="btn-animated">Más</router-link>
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
/* Reset */
html, body, .home {
  width: 100%;
  height: 100%;
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  overflow: hidden;
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
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.container {
  max-width: 800px;
}

/* Hero Title */
.hero-title {
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #b6ffff; /* Color azul claro */
  opacity: 0;
  transform: translateY(50px);
  animation: fadeInUp 1s ease forwards;
}

.hero-subtitle {
  font-size: 2rem;
  margin-bottom: 30px;
  color: #7cdaf9; /* Color azul intermedio */
  opacity: 0;
  transform: translateY(50px);
  animation: fadeInUp 1.5s ease forwards;
}

/* Button Animation */
.btn-animated {
  font-size: 1.5rem;
  padding: 15px 40px;
  border-radius: 50px;
  color: white;
  text-decoration: none;
  background-color: #0cb7f2; /* Azul vibrante */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  position: relative;
  display: inline-block;
  overflow: hidden;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.btn-animated::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 300%;
  height: 300%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.3), transparent);
  transform: rotate(45deg);
  transition: all 0.6s ease;
}

.btn-animated:hover {
  background-color: #0979b0; /* Azul más oscuro */
  transform: translateY(-3px);
}

.btn-animated:hover::after {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) rotate(45deg) scale(1);
}

/* Keyframes for animations */
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
