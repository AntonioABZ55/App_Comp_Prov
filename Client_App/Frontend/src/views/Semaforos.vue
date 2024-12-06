<template>
  <div class="semaforo-container">
    <h1 class="text-center">Sistema de Semáforo</h1>

    <div class="semaforo">
      <div
        class="luz"
        :class="{ rojo: color === 'rojo', amarillo: color === 'amarillo', verde: color === 'verde' }"
      ></div>
      <div class="botones">
        <button
          class="btn btn-rojo"
          @click="cambiarColor('rojo')"
        >
          Rojo
        </button>
        <button
          class="btn btn-amarillo"
          @click="cambiarColor('amarillo')"
        >
          Amarillo
        </button>
        <button
          class="btn btn-verde"
          @click="cambiarColor('verde')"
        >
          Verde
        </button>
      </div>
    </div>

    <div v-if="color === 'verde'" class="mensaje">
      <p class="text-center">¡El semáforo está verde! Generando orden de compra...</p>
      <router-link to="/orden" class="btn btn-success">
        Ir a Generar Orden
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      color: '',
    };
  },
  methods: {
    cambiarColor(c) {
      this.color = c;
    },
  },
};
</script>

<style scoped>
.semaforo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

h1 {
  font-size: 2rem;
  font-weight: bold;
  color: #1f4e79; /* Azul */
  margin-bottom: 20px;
}

.semaforo {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.luz {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 20px 0;
  transition: background-color 0.5s ease;
}

.rojo {
  background-color: #f44336;
}

.amarillo {
  background-color: #ff9800;
}

.verde {
  background-color: #4caf50;
}

.botones {
  display: flex;
  gap: 15px;
  justify-content: center;
}

.botones button {
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.botones button:hover {
  transform: scale(1.1);
}

.btn-rojo {
  background-color: #f44336;
  color: white;
}

.btn-amarillo {
  background-color: #ff9800;
  color: white;
}

.btn-verde {
  background-color: #4caf50;
  color: white;
}

.mensaje {
  text-align: center;
  margin-top: 20px;
}

.btn-success {
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
}

.btn-success:hover {
  background-color: #388e3c;
}
</style>
