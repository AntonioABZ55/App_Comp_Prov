<template>
    <div id="app" class="container mt-5">
  
      <!-- Encabezado -->
      <header class="text-center mb-4">
        <h1>Mis Participaciones</h1>
      </header>
  
      <!-- Filtros -->
      <div class="d-flex justify-content-between align-items-center mb-3">
        <div class="d-flex align-items-center">
          <label for="filtertxt" class="mr-2 font-weight-bold">Listado de mis participaciones:</label>
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
  
      <!-- Tabla de Participaciones -->
      <table class="table table-hover">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Nombre de la competencia</th>
            <th scope="col">Tipo de licitación</th>
            <th scope="col">Producto</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Competencia 1</td>
            <td>Tipo 1</td>
            <td>Producto 1</td>
            <td><button @click="eliminarParticipacion" class="btn btn-danger">Eliminar</button></td>
          </tr>
          <tr>
            <td>Competencia 2</td>
            <td>Tipo 2</td>
            <td>Producto 2</td>
            <td><button @click="eliminarParticipacion" class="btn btn-danger">Eliminar</button></td>
          </tr>
          <tr>
            <td>Competencia 3</td>
            <td>Tipo 3</td>
            <td>Producto 3</td>
            <td><button @click="eliminarParticipacion" class="btn btn-danger">Eliminar</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MisParticipaciones',
    data() {
      return {
        participaciones: [
          { nombre: 'Competencia 1', tipo: 'Tipo 1', producto: 'Producto 1' },
          { nombre: 'Competencia 2', tipo: 'Tipo 2', producto: 'Producto 2' },
          { nombre: 'Competencia 3', tipo: 'Tipo 3', producto: 'Producto 3' },
        ],
      };
    },
    methods: {
      eliminarParticipacion(index) {
        this.participaciones.splice(index, 1);
        alert('Participación eliminada');
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
  
  .btn-danger {
    background-color: #dc3545;
    border-color: #dc3545;
    transition: background-color 0.3s ease, border-color 0.3s ease;
  }
  
  .btn-danger:hover {
    background-color: #c82333;
    border-color: #bd2130;
  }
  </style>
  