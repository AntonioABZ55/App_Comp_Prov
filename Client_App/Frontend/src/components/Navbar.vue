<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <ul class="navbar-links" :class="{ show: isNavbarVisible }">
        <li><router-link to="/catalogo">Каталог</router-link></li>
        <li><router-link to="/servicios">Услуги</router-link></li>
        <li><router-link to="/pago">Доставка и оплата</router-link></li>
        <li><router-link to="/contact">Контакты</router-link></li>
      </ul>
      <div class="navbar-contact">
        <span class="phone-number">+7 (495) 490-27-89</span>
        <div class="navbar-icons">
          <router-link to="/page404">
            <i class="fas fa-search"></i>
          </router-link>
          <router-link to="/page404">
            <i class="fas fa-heart"></i>
          </router-link>
          <router-link to="/carrito">
            <i class="fas fa-shopping-cart"></i>
          </router-link>
        </div>
        <button class="navbar-cart" @click="openLoginModal">Войти</button> <!-- Botón de Login -->
      </div>
    </nav>

    <!-- Modal de Login -->
    <div v-if="isLoginModalOpen" class="modal-overlay" @click="closeLoginModal">
      <div class="modal-content" @click.stop>
        <h2>Вход</h2>
        <form @submit.prevent="submitLogin">
          <div>
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="email" required />
          </div>
          <div>
            <label for="password">Пароль:</label>
            <input type="password" id="password" v-model="password" required />
          </div>
          <button type="submit">Войти</button>
          <button type="button" @click="showRegister">Создать аккаунт</button>
          <button type="button" @click="closeLoginModal">Закрыть</button>
        </form>
      </div>
    </div>

    <!-- Modal de Registro -->
    <div v-if="isRegisterModalOpen" class="modal-overlay" @click="closeRegisterModal">
      <div class="modal-content" @click.stop>
        <h2>Регистрация</h2>
        <form @submit.prevent="submitRegister">
          <div>
            <label for="reg-email">Email:</label>
            <input type="email" id="reg-email" v-model="regEmail" required />
          </div>
          <div>
            <label for="reg-password">Пароль:</label>
            <input type="password" id="reg-password" v-model="regPassword" required />
          </div>
          <div>
            <label for="confirm-password">Подтверждение пароля:</label>
            <input type="password" id="confirm-password" v-model="confirmPassword" required />
          </div>
          <button type="submit">Создать аккаунт</button>
          <button type="button" @click="showLogin">Уже есть аккаунт? Войти</button>
          <button type="button" @click="closeRegisterModal">Закрыть</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      isNavbarVisible: false,
      isLoginModalOpen: false,
      isRegisterModalOpen: false,
      email: '',
      password: '',
      regEmail: '',
      regPassword: '',
      confirmPassword: '',
      isMobile: false,
    };
  },
  created() {
    this.checkMobileView();
    window.addEventListener('resize', this.checkMobileView);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkMobileView);
  },
  methods: {
    checkMobileView() {
      this.isMobile = window.innerWidth < 768; // Define el umbral para móvil
    },
    toggleNavbar() {
      this.isNavbarVisible = !this.isNavbarVisible;
    },
    openLoginModal() {
      this.isLoginModalOpen = true;
      this.isRegisterModalOpen = false; // Close register if open
    },
    closeLoginModal() {
      this.isLoginModalOpen = false;
      this.resetLoginForm();
    },
    showRegister() {
      this.isLoginModalOpen = false;
      this.isRegisterModalOpen = true;
    },
    closeRegisterModal() {
      this.isRegisterModalOpen = false;
      this.resetRegisterForm();
    },
    showLogin() {
      this.isRegisterModalOpen = false;
      this.isLoginModalOpen = true;
    },
    submitLogin() {
      // Aquí puedes manejar la lógica de inicio de sesión
      console.log('Email:', this.email);
      console.log('Password:', this.password);
      this.closeLoginModal();
    },
    submitRegister() {
      // Aquí puedes manejar la lógica de registro
      console.log('Register Email:', this.regEmail);
      console.log('Register Password:', this.regPassword);
      this.closeRegisterModal();
    },
    resetLoginForm() {-
      this.email = '';
      this.password = '';
    },
    resetRegisterForm() {
      this.regEmail = '';
      this.regPassword = '';
      this.confirmPassword = '';
    },
  },
};
</script>

<style scoped>
.navbar-container {
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #333;
  position: fixed;
  top: 0;
  z-index: 1000;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
}

.navbar {
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background-color: #333;
  color: white;
}

.navbar-logo {
  font-family: Arial, sans-serif;
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px 15px;
  font-size: 1.2em;
  font-weight: bold;
  border-radius: 20px;
  cursor: pointer;
}

.navbar-links {
  display: flex;
  gap: 20px;
  list-style: none;
}

.navbar-links a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.navbar-contact {
  display: flex;
  align-items: center;
  gap: 15px;
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
  color: #4CAF50;
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
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  margin-bottom: 10px;
}

.modal-content button[type="button"] {
  background-color: #ccc; /* Color para el botón de cerrar */
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

