<<template>
  <div id="app" class="bg-success text-light">
    <header class="navbar navbar-expand-lg navbar-dark bg-success">
      <!-- Mover la imagen aquí para que esté en el lado izquierdo -->
      <div class="navbar-container">
        <img src="../assets/logodreamm.jpg" alt="Perfil" class="perfil-icono" />
      </div>

      <nav class="navbar-nav ml-auto">
        <ul class="navbar-nav d-flex align-items-center">
          <li class="nav-item">Mis competencias</li>
          <li class="nav-item">Orden de compra</li>
          <li class="nav-item">Soporte</li>

          <li class="nav-item">
            <input
              type="text"
              placeholder="Buscar..."
              v-model="busqueda"
              @input="realizarBusqueda"
              class="form-control"
            />
          </li>

          <li class="nav-item">
            <i class="fas fa-user-circle" @click="irAperfil"></i>
          </li>
        </ul>
      </nav>
    </header>

    <main class="container py-4">
      <div class="competencias-container">
        <div class="gestion-competencias">
          <span class="h3 font-weight-bold">Gestionar competencias</span>
        </div>

        <div class="listado-competencias my-4">
          <span class="h4 font-weight-bold">Listado de competencias dadas de alta por el cliente</span>
        </div>

        <!-- Tabla de competencias -->
        <table class="table table-bordered table-striped table-hover">
          <thead class="thead-dark">
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
                <!-- Botón de eliminar -->
                <button @click="eliminarCompetencia(index)" class="btn btn-danger btn-sm">
                  Eliminar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <component :is="seccionActiva" :busqueda="busqueda" />
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      busqueda: '',
      competencias: [
        { nombre: 'Competencia 1', descripcion: 'Descripción de la competencia 1' },
        { nombre: 'Competencia 2', descripcion: 'Descripción de la competencia 2' },
        { nombre: 'Competencia 3', descripcion: 'Descripción de la competencia 3' },
      ],
    };
  },
  methods: {
    realizarBusqueda() {
      
    },
    irAperfil() {
      
    },
    eliminarCompetencia(index) {
      // Eliminar la competencia de la lista
      this.competencias.splice(index, 1);
    }
  },
};
</script>

<style scoped>
#app {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  height: 100vh;
}

/* Navbar */
.navbar-container img.perfil-icono {
  width: 50px;
  height: 50px;
  margin-right: 20px;
}

.navbar-nav {
  margin-left: auto;
}

.navbar-nav .nav-item {
  margin-right: 15px;
}

.navbar-nav .nav-item .form-control {
  width: 150px;
}

.navbar-nav .nav-item i {
  font-size: 24px;
}

/* Competencias Section */
.competencias-container {
  padding: 2rem;
  background-color: #f4f4f4;
}

.gestion-competencias {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 1rem;
}

.listado-competencias {
  font-size: 20px;
  margin-bottom: 2rem;
}

.table {
  width: 100%;
  margin-top: 20px;
  background-color: #fff;
  color: #333;
  border-radius: 8px;
}

.table th,
.table td {
  padding: 15px;
  text-align: left;
}

.table th {
  background-color: #4CAF50;
  color: white;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
}

.table tbody tr {
  transition: background-color 0.3s ease;
}

.table tbody tr:hover {
  background-color: #f4f4f4;
}

.table tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}

.table td:first-child {
  font-weight: bold;
}

.table td {
  font-size: 16px;
  color: #555;
}

/* Botón eliminar */
.btn-eliminar {
  background-color: #f44336;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;
}

.btn-eliminar:hover {
  background-color: #d32f2f;
}
</style>
