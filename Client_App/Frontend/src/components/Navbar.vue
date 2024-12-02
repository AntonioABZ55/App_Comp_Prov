<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top rounded-bottom">
    <div class="container">
      <!-- Logo -->
      <router-link to="/" class="navbar-brand bg-success text-white px-3 py-2 rounded">
        Home
      </router-link>

      <!-- Botón toggle para dispositivos móviles -->
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Links del navbar -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/competencias" class="nav-link">unirse</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/semaforos" class="nav-link">categorias</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/gestion" class="nav-link">saber mas</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/user" class="nav-link">contactos</router-link>
          </li>
        </ul>

        <!-- Teléfono y carrito -->
        
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
}

.navbar-toggler {
  border-radius: 50px;
}

.navbar-brand {
  font-size: 1.25rem;
  font-weight: bold;
  border-radius: 20px; /* Redondeamos el logo */
}

.nav-link {
  font-size: 1rem;
  font-weight: 500;
  transition: color 0.3s ease-in-out;
}

.nav-link:hover {
  color: #4caf50; /* Cambia el color del enlace al pasar el cursor */
}

.navbar-text {
  font-size: 0.9rem;
}

.btn-success {
  border-radius: 50%; /* Carrito con borde redondo */
  padding: 10px 12px;
}
</style>
