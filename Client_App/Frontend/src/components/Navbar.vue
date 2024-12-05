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

.phone-number {
  margin-right: 20px;
}

.navbar-icons i {
  color: white;
  font-size: 1.2em;
  margin-right: 15px;
  cursor: pointer;
}

.navbar-cart {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
}

/* Estilos del Modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 90%;
  max-width: 400px;
}

.modal-content h2 {
  margin-bottom: 20px;
  color: #000000;
}

.modal-content label {
  display: block;
  margin-bottom: 5px;
}

.modal-content input {
  width: 100%;
  padding: 8px;
  margin-bottom: 15px;
  border: 1px solid #4CAF50;
  border-radius: 5px;
}

.modal-content button {
  background-color: #3f7654;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  margin-bottom: 10px;
}

.modal-content button[type="button"] {
  background-color: #ff0000; /* Color para el botón de cerrar */
}

/* Media Queries for Responsive Design */
@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    align-items: flex-start;
  }

  .navbar-toggle {
    display: flex;
    background: transparent;
    border: none;
    color: white;
    font-size: 1.5em;
    cursor: pointer;
  }

  .navbar-links {
    flex-direction: column;
    width: 100%;
    gap: 10px;
    display: none; /* Hidden by default */
  }

  .navbar-links.show {
    display: flex !important; /* Show when toggled */
  }

  .navbar-contact {
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 100%;
  }

  .navbar-icons {
    display: flex;
    gap: 10px;
  }
}

@media (max-width: 480px) {
  .navbar-icons i {
    font-size: 1em;
  }

  .navbar-cart {
    padding: 5px 8px;
  }
} 
</style>
