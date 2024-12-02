<template>
  <div id="app" class="container mt-5">

    <!-- Encabezado -->
    <header class="text-center mb-4">
      <h1>Competencias Activas</h1>
    </header>

    <!-- Filtros y botón -->
    <div class="d-flex justify-content-between align-items-center mb-3">
      <div class="d-flex align-items-center">
        <label for="filtertxt" class="mr-2 font-weight-bold">Listado de competencias activas:</label>
      </div>
      <div class="d-flex align-items-center">
        <label for="filter" class="mr-2">Filtros de búsqueda:</label>
        <select id="filter" class="form-control mr-2">
          <option value="all">Todas</option>
          <option value="categoria1">Categoría 1</option>
          <option value="categoria2">Categoría 2</option>
          <option value="categoria3">Categoría 3</option>
        </select>
        <button @click="showCreateCompetitionModal" class="btn btn-primary">Crear Competencia</button>
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
          <td><button @click="unirseCompetencia" class="btn btn-success">Unirse</button></td>
        </tr>
        <tr>
          <td>Competencia 2</td>
          <td>Usuario 2</td>
          <td>Fecha 2</td>
          <td>Fecha 2</td>
          <td><button @click="unirseCompetencia" class="btn btn-success">Unirse</button></td>
        </tr>
        <tr>
          <td>Competencia 3</td>
          <td>Usuario 3</td>
          <td>Fecha 3</td>
          <td>Fecha 3</td>
          <td><button @click="unirseCompetencia" class="btn btn-success">Unirse</button></td>
        </tr>
      </tbody>
    </table>

    <!-- Modal para crear competencia -->
    <div v-if="isCreateCompetitionModalOpen" class="modal fade show d-block" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Crear Competencia</h5>
            <button type="button" class="close" @click="closeCreateCompetitionModal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="submitCreateCompetition">
              <div class="form-group">
                <label for="competition-name">Nombre de la Competencia</label>
                <input type="text" class="form-control" id="competition-name" v-model="newCompetition.name" required />
              </div>
              <div class="form-group">
                <label for="competition-description">Descripción</label>
                <textarea class="form-control" id="competition-description" v-model="newCompetition.description" required></textarea>
              </div>
              <div class="form-group">
                <label for="competition-product">Producto a Licitar</label>
                <input type="text" class="form-control" id="competition-product" v-model="newCompetition.product" required />
              </div>
              <button type="submit" class="btn btn-primary">Crear</button>
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
      isCreateCompetitionModalOpen: false,
      newCompetition: {
        name: '',
        description: '',
        product: '',
      },
    };
  },
  methods: {
    showCreateCompetitionModal() {
      this.isCreateCompetitionModalOpen = true;
    },
    closeCreateCompetitionModal() {
      this.isCreateCompetitionModalOpen = false;
    },
    crearCompetencia() {
      alert('Crear nueva competencia');
    },
    unirseCompetencia() {
      alert('Te has unido a la competencia');
    },
    submitCreateCompetition() {
      // Lógica para crear una nueva competencia
      alert('Nueva competencia creada: ' + this.newCompetition.name);
      this.closeCreateCompetitionModal();
    }
  }
};
</script>



<style scoped>
#app {
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

header h1 {
  font-size: 28px;
  color: #333;
}

.table th, .table td {
  text-align: center;
}

.btn-success {
  background-color: #28a745;
  border-color: #28a745;
}

.btn-success:hover {
  background-color: #218838;
  border-color: #1e7e34;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}

.btn-primary:hover {
  background-color: #0069d9;
  border-color: #0062cc;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-body {
  padding: 20px;
}
</style>

