

<template>
  <div id="app" class="container mt-5" :class="{ 'modal-open': isJoinCompetitionModalOpen }">
    <!-- Encabezado -->
    <header class="text-center mb-4">
      <h1 class="text-primary font-weight-bold">Competencias Disponibles</h1>
    </header>

    <!-- Filtros -->
    <div class="d-flex justify-content-between align-items-center mb-3 filtros-container">
      <div class="d-flex align-items-center">
        <label for="filtertxt" class="mr-2 font-weight-bold">Listado de competencias disponibles:</label>
      </div>
      <div class="d-flex align-items-center">
        <label for="filter" class="mr-2 text-secondary font-weight-bold">Filtros de búsqueda:</label>
        <select id="filter" class="form-control">
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
                <label for="competition-type" class="text-secondary font-weight-bold">Tipo de Licitación</label>
                <select class="form-control" id="competition-type" v-model="joinCompetition.type" required>
                  <option value="tipo1">Tipo 1</option>
                  <option value="tipo2">Tipo 2</option>
                  <option value="tipo3">Tipo 3</option>
                </select>
              </div>
              <div class="form-group">
                <label class="text-secondary font-weight-bold">Productos</label>
                <div v-for="product in products" :key="product.id" class="form-check">
                  <input class="form-check-input" type="checkbox" :value="product.id" v-model="joinCompetition.products">
                  <label class="form-check-label">{{ product.name }}</label>
                </div>
              </div>
              <button type="submit" class="btn btn-primary w-100">Unirse</button>
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
      alert('Te has unido a la competencia con los productos: ' + this.joinCompetition.products.join(', '));
      this.closeJoinCompetitionModal();
    },
  },
};
</script>

<style scoped>
/* Estilo General */
#app {
  background-color: #f5f8fa;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

/* Filtros */
.filtros-container label {
  font-size: 14px;
  color: #333;
}

.table {
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.table-hover tbody tr:hover {
  background-color: #e8f8ff;
}

.thead-dark th {
  background-color: #004173;
  color: white;
}

.btn-success {
  background-color: #0CB7F2;
  border-color: #0CB7F2;
}

.btn-success:hover {
  background-color: #0979B0;
}

.modal-content {
  border-radius: 10px;
}

.modal-header {
  background-color: #004173;
  color: white;
}

.modal-content input,
.modal-content select {
  border-color: #0CB7F2;
}

.modal-content input:focus,
.modal-content select:focus {
  border-color: #0979B0;
}
</style>
