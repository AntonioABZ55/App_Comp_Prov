<template>
    <div id="app" class="container mt-5">
  
      <!-- Encabezado -->
      <header class="text-center mb-4">
        <h1>Mis Productos</h1>
      </header>
  
      <!-- Filtros -->
      <div class="d-flex justify-content-between align-items-center mb-3">
        <div class="d-flex align-items-center">
          <label for="filtertxt" class="mr-2 font-weight-bold">Listado de mis productos:</label>
        </div>
        <div class="d-flex align-items-center">
          <label for="filter" class="mr-2">Filtros de búsqueda:</label>
          <select id="filter" class="form-control mr-2">
            <option value="all">Todos</option>
            <option value="categoria1">Categoría 1</option>
            <option value="categoria2">Categoría 2</option>
            <option value="categoria3">Categoría 3</option>
          </select>
        </div>
      </div>
  
      <!-- Tabla de Productos -->
      <table class="table table-hover">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Nombre del Producto</th>
            <th scope="col">Campo 2</th>
            <th scope="col">Campo 3</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>producto 1</td>
            <td></td>
            <td></td>
            <td><button @click="eliminarProducto" class="btn btn-danger">Eliminar</button></td>
          </tr>
          <tr>
            <td>producto 2</td>
            <td></td>
            <td></td>
            <td><button @click="eliminarProducto" class="btn btn-danger">Eliminar</button></td>
          </tr>
          <tr>
            <td>procuto 3</td>
            <td></td>
            <td></td>
            <td><button @click="eliminarProducto" class="btn btn-danger">Eliminar</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MisProductos',
    data() {
      return {
        productos: [
          { nombre: '', tipo: '', competencia: '' },
          { nombre: '', tipo: '', competencia: '' },
          { nombre: '', tipo: '', competencia: '' },
        ],
      };
    },
    methods: {
      eliminarProducto(index) {
        this.productos.splice(index, 1);
        alert('Producto eliminado');
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
  