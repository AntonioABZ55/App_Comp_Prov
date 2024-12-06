<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top rounded-bottom">
    <div class="container">
      <router-link to="/" class="btn-nav">Home</router-link>

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

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/users" class="btn-nav">Users</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/competencias" class="btn-nav">Competencias</router-link>
          </li>
          <li class="nav-item">
            <button class="btn-nav ml-3" @click="showModal = true">Acceder</button>
          </li>
        </ul>
      </div>
    </div>

    <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <span class="close-modal" @click="closeModal">&times;</span>
        <h2 class="modal-title">{{ isLogin ? "Iniciar Sesión" : "Registrarse" }}</h2>
        <form v-if="isLogin">
          <label for="email">Correo Electrónico:</label>
          <input type="email" id="email" placeholder="Ingresa tu correo" required />
          <label for="password">Contraseña:</label>
          <input type="password" id="password" placeholder="Ingresa tu contraseña" required />
          <button type="submit" class="btn-submit">Iniciar Sesión</button>
          <p class="switch-text">¿No tienes cuenta? 
            <button @click="toggleLogin" class="btn-switch">Regístrate</button>
          </p>
        </form>
        <form v-else>
          <label for="new-email">Correo Electrónico:</label>
          <input type="email" id="new-email" placeholder="Ingresa tu correo" required />
          <label for="new-password">Contraseña:</label>
          <input type="password" id="new-password" placeholder="Crea tu contraseña" required />
          <button type="submit" class="btn-register">Crear Cuenta</button>
          <p class="switch-text">¿Ya tienes cuenta? 
            <button @click="toggleLogin" class="btn-switch">Inicia Sesión</button>
          </p>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
      isLogin: true,
    };
  },
  methods: {
    closeModal() {
      this.showModal = false;
    },
    toggleLogin() {
      this.isLogin = !this.isLogin;
    },
  },
};
</script>

<style scoped>
/* Reutilizamos los estilos del navbar y modal que proporcionaste */
.navbar {
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  background-color: #004173;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.btn-nav {
  padding: 10px 15px;
  background-color: transparent;
  border: 2px solid #0cb7f2;
  border-radius: 50px;
  font-size: 1rem;
  color: #ffffff;
  font-weight: bold;
  margin: 5px;
  transition: all 0.3s ease-in-out;
}

.btn-nav:hover {
  background-color: #0cb7f2;
  color: #004173;
  transform: scale(1.1);
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
}

.modal-content {
  background-color: #f0faff;
  padding: 30px;
  border-radius: 20px;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.close-modal {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  color: #004173;
  cursor: pointer;
}

.modal-title {
  color: #004173;
  margin-bottom: 20px;
  text-align: center;
  font-size: 1.8rem;
  font-weight: bold;
}

.modal-content input,
.modal-content select {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 2px solid #0cb7f2;
  border-radius: 10px;
}

.btn-submit,
.btn-register {
  width: 100%;
  padding: 15px;
  background-color: #004173;
  color: white;
  border: none;
  border-radius: 15px;
  font-weight: bold;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease-in-out;
}

.btn-submit:hover,
.btn-register:hover {
  background-color: #0cb7f2;
  transform: scale(1.05);
}

.btn-switch {
  background: none;
  border: none;
  color: #0cb7f2;
  cursor: pointer;
  font-weight: bold;
  text-decoration: underline;
}

.switch-text {
  text-align: center;
  margin-top: 10px;
  color: #004173;
}
</style>
