<template>
  <div id="app" class="container mt-5" :class="{ 'modal-open': isJoinCompetitionModalOpen }">

    <!-- Encabezado -->
    <header class="text-center mb-4">
      <h1>Competencias Disponibles</h1>
    </header>

    <!-- Filtros -->
    <div class="d-flex justify-content-between align-items-center mb-3">
      <div class="d-flex align-items-center">
        <label for="filtertxt" class="mr-2 font-weight-bold">Listado de competencias disponibles:</label>
      </div>
      <div class="d-flex align-items-center">
        <label for="filter" class="mr-2">Filtros de búsqueda:</label>
        <select id="filter" class="form-control mr-2">
          <option value="all">Todas</option>
          <option value="categoria1">Categoría 1</option>
          <option value="categoria2">Categoría 2</option>
          <option value="categoria3">Categoría 3</option>
        </select>
      </div>
    </div>

    <!-- Tabla de Competencias -->
    <table class="table table-hover">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Nombre Competencia</th>
          <th scope="col">Creador de Competencia</th>
          <th scope="col">Fecha de Inicio</th>
          <th scope="col">Fecha de Fin</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Competencia 1</td>
          <td>Usuario 1</td>
          <td>Fecha 1</td>
          <td>Fecha 1</td>
          <td><button @click="showJoinCompetitionModal" class="btn btn-success">Unirse</button></td>
        </tr>
        <tr>
          <td>Competencia 2</td>
          <td>Usuario 2</td>
          <td>Fecha 2</td>
          <td>Fecha 2</td>
          <td><button @click="showJoinCompetitionModal" class="btn btn-success">Unirse</button></td>
        </tr>
        <tr>
          <td>Competencia 3</td>
          <td>Usuario 3</td>
          <td>Fecha 3</td>
          <td>Fecha 3</td>
          <td><button @click="showJoinCompetitionModal" class="btn btn-success">Unirse</button></td>
        </tr>
      </tbody>
    </table>

    <!-- Modal para unirse a competencia -->
    <div v-if="isJoinCompetitionModalOpen" class="modal fade show d-block" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Unirse a Competencia</h5>
            <button type="button" class="close" @click="closeJoinCompetitionModal" aria-label="Close">
              <span aria-hidden="true" style="color: #B6FFFF;">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="submitJoinCompetition">
              <div class="form-group">
                <label for="competition-type">Tipo de Licitación</label>
                <select class="form-control" id="competition-type" v-model="joinCompetition.type" required>
                  <option value="tipo1">Tipo 1</option>
                  <option value="tipo2">Tipo 2</option>
                  <option value="tipo3">Tipo 3</option>
                </select>
              </div>
              <div class="form-group">
                <label>Productos</label>
                <div v-for="product in products" :key="product.id" class="form-check">
                  <input class="form-check-input" type="checkbox" :value="product.id" v-model="joinCompetition.products">
                  <label class="form-check-label">{{ product.name }}</label>
                </div>
              </div>
              <button type="submit" class="btn btn-primary">Unirse</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Competencias',
  data() {
    return {
      isJoinCompetitionModalOpen: false,
      joinCompetition: {
        type: '',
        products: [],
      },
      products: [
        { id: 1, name: 'Producto 1' },
        { id: 2, name: 'Producto 2' },
        { id: 3, name: 'Producto 3' },
      ],
    };
  },
  methods: {
    showJoinCompetitionModal() {
      this.isJoinCompetitionModalOpen = true;
    },
    closeJoinCompetitionModal() {
      this.isJoinCompetitionModalOpen = false;
    },
    submitJoinCompetition() {
      // Lógica para unirse a la competencia
      alert('Te has unido a la competencia con los productos: ' + this.joinCompetition.products.join(', '));
      this.closeJoinCompetitionModal();
    }
  }
};
</script>

<style scoped>
#app {
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  padding-top: 60px; /* Añadido para separar de la navbar */
  transition: all 0.3s ease;
}

.modal-open::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: 1;
}

.modal-open .container {
  filter: blur(5px);
  transition: filter 0.3s ease;
}

header h1 {
  font-size: 28px;
  color: #004173;
  transition: color 0.3s ease;
}

.table th, .table td {
  text-align: center;
  transition: background-color 0.3s ease;
}

.table td {
  background-color: #B6FFFF;
}

.table .thead-dark th {
  background-color: #004173;
  border-color: #0979B0;
}

.btn-success {
  background-color: #0CB7F2;
  border-color: #0CB7F2;
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

.btn-success:hover {
  background-color: #0979B0;
  border-color: #0979B0;
}

.btn-primary {
  background-color: #0CB7F2;
  border-color: #0CB7F2;
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #0979B0;
  border-color: #0979B0;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #004173;
  color: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 15px;
}

.modal-body {
  padding: 20px;
  background-color: #f0f0f0;
}

.modal-content {
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: fadeIn 0.3s ease-in-out;
}

.modal-content input,
.modal-content textarea,
.modal-content select {
  width: 100%;
  margin-bottom: 15px;
  border: 1px solid #0CB7F2;
  border-radius: 5px;
  transition: border-color 0.3s ease;
}

.modal-content input:focus,
.modal-content textarea:focus,
.modal-content select:focus {
  border-color: #004173;
}

.btn-primary {
  background-color: #004173;
  border-color: #004173;
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #0979B0;
  border-color: #0979B0;
}

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
</style>
