<template>
  <div id="app" class="bg-light text-dark">
    <!-- Navbar -->
    <header class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="navbar-container d-flex align-items-center">
        <img src="../assets/logodreamm.jpg" alt="Perfil" class="perfil-icono" />
        <ul class="navbar-nav d-flex align-items-center ml-auto">
          <li class="nav-item">
            <a href="#" class="nav-link">Mis competencias</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Orden de compra</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Soporte</a>
          </li>
          <li class="nav-item">
            <input
              type="text"
              placeholder="Buscar..."
              v-model="busqueda"
              @input="realizarBusqueda"
              class="form-control buscar-input"
            />
          </li>
          <li class="nav-item">
            <i class="fas fa-user-circle perfil-icono clickable" @click="irAperfil"></i>
          </li>
        </ul>
      </div>
    </header>

    <!-- Main Content -->
    <main class="container py-4">
      <div class="competencias-container">
        <div class="gestion-competencias text-center">
          <h3 class="font-weight-bold text-primary">Gestionar competencias</h3>
        </div>

        <div class="listado-competencias my-4 text-center">
          <h4 class="font-weight-bold text-secondary">
            Listado de competencias dadas de alta por el cliente
          </h4>
        </div>

        <!-- Tabla de competencias -->
        <div class="table-responsive">
          <table class="table table-bordered table-hover">
            <thead>
              <tr>
                <th>Nombre de Competencia</th>
                <th>Descripción</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(competencia, index) in competencias" :key="index">
                <td>{{ competencia.nombre }}</td>
                <td>{{ competencia.descripcion }}</td>
                <td>
                  <button
                    @click="eliminarCompetencia(index)"
                    class="btn btn-danger btn-eliminar"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      busqueda: "",
      competencias: [
        { nombre: "Competencia 1", descripcion: "Descripción de la competencia 1" },
        { nombre: "Competencia 2", descripcion: "Descripción de la competencia 2" },
        { nombre: "Competencia 3", descripcion: "Descripción de la competencia 3" },
      ],
    };
  },
  methods: {
    realizarBusqueda() {
      // Implementar lógica de búsqueda
    },
    irAperfil() {
      // Implementar redirección al perfil
    },
    eliminarCompetencia(index) {
      this.competencias.splice(index, 1);
    },
  },
};
</script>

<style scoped>
/* General */
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f5f8fa;
}

/* Navbar */
.navbar-container img.perfil-icono {
  width: 50px;
  height: 50px;
  margin-right: 15px;
}

.navbar-nav {
  margin-left: auto;
}

.navbar-nav .nav-item {
  margin-right: 15px;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #d4e4ff;
}

.buscar-input {
  width: 200px;
  border-radius: 20px;
  padding: 5px 10px;
}

/* Competencias Section */
.competencias-container {
  padding: 2rem;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.table {
  background-color: #f9f9f9;
  border-radius: 10px;
}

.table thead {
  background-color: #0079b0;
  color: white;
  font-size: 18px;
  text-transform: uppercase;
}

.table tbody tr:hover {
  background-color: #e8f4fc;
}

.table tbody td {
  color: #555;
  font-size: 16px;
}

/* Botón eliminar */
.btn-eliminar {
  background-color: #dc3545;
  border: none;
  border-radius: 20px;
  padding: 8px 16px;
  font-size: 14px;
  transition: background-color 0.3s ease;
}

.btn-eliminar:hover {
  background-color: #c82333;
}
</style>
