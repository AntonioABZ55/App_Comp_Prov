<template>
  <div id="app" class="bg-primary text-light">
    <header class="navbar">
      <div class="navbar-container">
        <img src="../assets/logodreamm.jpg" alt="Perfil" class="perfil-icono" />
      </div>

      <nav>
        <ul>
          <li>Mis competencias</li>
          <li>Orden de compra</li>
          <li>Soporte</li>

          <li>
            <div class="search-container">
              <input
                type="text"
                placeholder="Buscar..."
                v-model="busqueda"
                @input="realizarBusqueda"
              />
              <i class="fas fa-search search-icon"></i>
            </div>
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
              <th>Nombre del Creador</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(competencia, index) in competencias" :key="index">
              <td>{{ competencia.nombre }}</td>
              <td>{{ competencia.descripcion }}</td>
              <td>{{ competencia.creador }}</td>
              <td>
                <button @click="eliminarCompetencia(index)" class="btn-eliminar">
                  Eliminar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
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
        { nombre: "Competencia 1", descripcion: "Descripción de la competencia 1", creador: "Juan Pérez" },
        { nombre: "Competencia 2", descripcion: "Descripción de la competencia 2", creador: "María López" },
        { nombre: "Competencia 3", descripcion: "Descripción de la competencia 3", creador: "Carlos Sánchez" },
      ],
    };
  },
  methods: {
    realizarBusqueda() {
      console.log(`Buscando: ${this.busqueda}`);
    },
    irAperfil() {
      alert("Ir a perfil");
    },
    eliminarCompetencia(index) {
      if (confirm("¿Estás seguro de que deseas eliminar esta competencia?")) {
        this.competencias.splice(index, 1);
        alert("Competencia eliminada.");
      }
    },
  },
};
</script>

<style scoped>
/* Estilos generales */
#app {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.navbar {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: #007BFF; /* Azul primario */
  border-bottom: 1px solid #ddd;
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

/* Botones en colores azulados */
.btn-eliminar {
  background-color: #007BFF; /* Azul primario */
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.btn-eliminar:hover {
  background-color: #0056b3; /* Azul más oscuro */
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
  background-color: #007BFF; /* Azul primario */
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

.competencias-table td {
  font-size: 16px;
  color: #555;
}

/* Contenedor de búsqueda */
.search-container {
  position: relative;
}

.search-container input {
  padding: 8px 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  font-size: 16px;
}

.search-container .search-icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #777;
  cursor: pointer;
}
</style>
