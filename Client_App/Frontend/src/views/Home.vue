<template>
  <div class="home-page">
    <!-- Imagen principal -->
    <section class="hero">
      <img src="/path/to/your-image.jpg" alt="Imagen principal" class="hero-image" />
      <div class="hero-text">
        <h1 class="animate">Bienvenidos a nuestra tienda</h1>
        <p class="animate">¡Explora nuestra colección y encuentra lo que necesitas!</p>
      </div>
    </section>

    <!-- Botón de Acceso -->
    <div class="access-container">
      <button @click="showLoginModal = true" class="access-button">Acceder</button>
    </div>

    <!-- Sección Informativa -->
    <section class="info-sections">
      <div class="info-card animate" v-for="(info, index) in infoData" :key="index">
        <img :src="info.image" :alt="info.title" class="info-image" />
        <div class="info-text">
          <h2>{{ info.title }}</h2>
          <p>{{ info.description }}</p>
        </div>
      </div>
    </section>

    <!-- Más información creativa -->
    <section class="creative-info">
      <div class="info-item">
        <img src="" alt="Imagen 1" class="info-image" />
        <div class="info-text">
          <h2>Calidad Insuperable</h2>
          <p>Disfruta de nuestros productos de alta calidad, fabricados con los mejores materiales y tecnologías.</p>
        </div>
      </div>
      <div class="info-item">
        <img src="" alt="Imagen 2" class="info-image" />
        <div class="info-text">
          <h2>Innovación Continua</h2>
          <p>Siempre a la vanguardia con nuevos productos que harán que tu experiencia sea única.</p>
        </div>
      </div>
      <div class="info-item">
        <img src="" alt="Imagen 3" class="info-image" />
        <div class="info-text">
          <h2>Atención Personalizada</h2>
          <p>Estamos aquí para ayudarte. Nuestro equipo de soporte está disponible para resolver cualquier duda.</p>
        </div>
      </div>
    </section>

    <!-- Modal de Login -->
    <div v-if="showLoginModal" class="modal-overlay">
      <div class="modal-content">
        <h2>Iniciar Sesión</h2>
        <form>
          <label for="email">Correo Electrónico:</label>
          <input type="email" id="email" placeholder="Introduce tu correo" />

          <label for="password">Contraseña:</label>
          <input type="password" id="password" placeholder="Introduce tu contraseña" />

          <button type="submit" class="modal-button">Iniciar Sesión</button>
          <button
            type="button"
            class="modal-button secondary"
            @click="switchToRegister"
          >
            Crear Cuenta
          </button>
        </form>
        <button class="modal-close" @click="showLoginModal = false">Cerrar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showLoginModal: false,
      infoData: [
        {
          title: "Calidad Garantizada",
          description: "Nuestros productos están hechos con los mejores materiales.",
          image: "/path/to/quality-image.jpg",
        },
        {
          title: "Envío Rápido",
          description: "Entregamos a toda la región en tiempo récord.",
          image: "/path/to/shipping-image.jpg",
        },
        {
          title: "Soporte al Cliente",
          description: "Estamos aquí para ayudarte con cualquier consulta.",
          image: "/path/to/support-image.jpg",
        },
      ],
    };
  },
  methods: {
    switchToRegister() {
      alert("Redirigiendo al formulario de registro...");
    },
  },
};
</script>

<style scoped>
/* Estilos Generales */
.home-page {
  font-family: 'Arial', sans-serif;
  background-color: #f8f9fa;
  overflow-x: hidden;
}

/* Hero Section */
.hero {
  position: relative;
  text-align: center;
  margin-bottom: 50px;
}

.hero-image {
  width: 100%;
  height: 400px;
  object-fit: cover;
  filter: brightness(70%);
}

.hero-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffffff;
  text-align: center;
  animation: fadeIn 1.5s ease-in-out;
}

.hero-text h1 {
  font-size: 3rem;
  margin-bottom: 10px;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
}

.hero-text p {
  font-size: 1.5rem;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
}

/* Botón de Acceso */
.access-container {
  text-align: center;
  margin: 20px 0;
}

.access-button {
  background-color: #0079b0;
  color: white;
  font-size: 1.2rem;
  padding: 10px 20px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, transform 0.3s ease;
}

.access-button:hover {
  background-color: #004173;
  transform: scale(1.1);
}

/* Sección Informativa */
.info-sections {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
  background-color: #e8f7fc;
}

.info-card {
  background-color: #ffffff;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: fadeInUp 1.5s ease-in-out;
}

.info-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

.info-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.info-text {
  padding: 15px;
  text-align: center;
}

.info-text h2 {
  font-size: 1.8rem;
  color: #004173;
  margin-bottom: 10px;
}

.info-text p {
  font-size: 1rem;
  color: #333333;
}

/* Sección de Información Creativa */
.creative-info {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px;
  padding: 30px;
  background-color: #f1f8fc;
  animation: fadeInUp 1.5s ease-in-out;
}

.info-item {
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  flex-basis: 32%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.info-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.info-item .info-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.info-item .info-text {
  padding: 20px;
  text-align: center;
}

.info-item .info-text h2 {
  font-size: 1.5rem;
  color: #0079b0;
  margin-bottom: 10px;
}

.info-item .info-text p {
  font-size: 1rem;
  color: #666666;
}

/* Modal */
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
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 90%;
  max-width: 400px;
  animation: fadeIn 0.5s ease-in-out;
}

.modal-content h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #004173;
}

.modal-content input {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #0079b0;
  border-radius: 10px;
}

.modal-button {
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.modal-button:hover {
  background-color: #004173;
}

.modal-close {
  background-color: #0079b0;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 50px;
  padding: 10px;
  cursor: pointer;
}

/* Animaciones */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

