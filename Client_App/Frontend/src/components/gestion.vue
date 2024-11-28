<template>
  <div id="app" class="bg-success text-light">
    <header class="navbar">
      <!-- Mover la imagen aquí para que esté en el lado izquierdo -->
      <div class="navbar-container">
        <img src="@/assets/logodreamm.jpg" alt="Perfil" class="perfil-icono" />
      </div>

      <nav>
        <ul>
          <li>Mis competencias</li> 
          <li>Orden de compra</li> 
          <li>Soporte</li> 

          <li>
            <input
              type="text"
              placeholder="Buscar..."
              v-model="busqueda"
              @input="realizarBusqueda"
            />
          </li>

          <li>
            <i class="fas fa-user-circle" @click="irAperfil"></i>
          </li>
        </ul>
      </nav>
    </header>

    <main>
      <div class="competencias-container">
        <div class="gestion-competencias">
          <span>Gestionar competencias</span>
        </div>

        <div class="listado-competencias">
          <span>Listado de competencias dadas de alta por el cliente</span>
        </div>

        <!-- Tabla de competencias -->
        <table class="competencias-table">
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
                <!-- Botón de eliminar -->
                <button @click="eliminarCompetencia(index)" class="btn-eliminar">
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
}

.navbar {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: #4CAF50;
  border-bottom: 1px solid #ddd;
}

.navbar-container {
  background-color: #d3f8d3;
}

.navbar img.perfil-icono {
  width: 50px;
  height: 50px;
  margin-right: 20px;
}

nav ul {
  list-style: none;
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-left: auto;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.gestion-competencias {
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: space-between;
  font-size: 30px;
  font-weight: bold;
}


.listado-competencias {
  margin-top: 40px;
  font-size: 30px;
  font-weight: bold;
}

/* Tabla de competencias */
.competencias-table {
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
  background-color: #fff;
  color: #333;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden; 
}

.competencias-table th,
.competencias-table td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.competencias-table th {
  background-color: #4CAF50;
  color: white;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase; 
}

.competencias-table tbody tr {
  transition: background-color 0.3s ease;
}

.competencias-table tbody tr:hover {
  background-color: #f4f4f4;
}

.competencias-table tbody tr:nth-child(even) {
  background-color: #f9f9f9; 
}

.competencias-table tbody tr td:first-child {
  font-weight: bold;
}

.competencias-table td {
  font-size: 16px;
  color: #555;
}


.btn-eliminar {
  background-color: #f44336; 
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;
}

.btn-eliminar:hover {
  background-color: #d32f2f; 
}

.nombre-descripcion {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
}

.nombre, .descripcion {
  font-size: 30px;
  font-weight: bold;
}

</style>
