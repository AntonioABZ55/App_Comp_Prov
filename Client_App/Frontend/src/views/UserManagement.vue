<template>
  <div class="container mt-5">

    <!-- Notificaciones de registro -->
    <div class="card mb-4 shadow-sm notification-box">
      <div class="card-header text-white">
        <h2 class="mb-0">Notificaciones de registro</h2>
      </div>
      <div class="card-body">
        <table class="table table-hover">
          <thead class="thead-light">
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Correo</th>
              <th scope="col">Tipo</th>
              <th scope="col">Documentos</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <!-- Aquí agregarías filas de datos -->
          </tbody>
        </table>
        <p class="text-center text-muted">Listado de los usuarios para poder aceptarlos o declinar su solicitud</p>
        <div class="d-flex justify-content-end">
          <button class="btn btn-success me-2">Aceptar</button>
          <button class="btn btn-danger">Declinar</button>
        </div>
      </div>
    </div>

    <!-- Gestión de usuarios -->
    <div class="card mb-4 shadow-sm user-management-box">
      <div class="card-header text-white d-flex justify-content-between align-items-center">
        <h2 class="mb-0">Gestión de usuarios</h2>
        <select class="form-select w-auto">
          <option value="" selected>Filtros de búsqueda</option>
          <option value="activo">Activo</option>
          <option value="inactivo">Inactivo</option>
          <option value="pendiente">Pendiente</option>
        </select>
      </div>
      <div class="card-body">
        <table class="table table-hover">
          <thead class="thead-light">
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Correo</th>
              <th scope="col">Tipo</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
          
          </tbody>
        </table>
        <p class="text-center text-muted">Listado de los usuarios para poder gestionarlos</p>
        <div class="d-flex justify-content-end">
          <button class="btn btn-danger">Eliminar</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'UserManagement',
  data() {
    return {
      
    };
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 60px; 
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  background-color: #004173;
}

.card-header h2 {
  margin: 0;
}

.card-body {
  padding: 20px;
  background-color: #f0f0f0;
}

.table-hover tbody tr:hover {
  background-color: rgba(12, 183, 242, 0.1);
}

.table thead th {
  background-color: #0979B0;
  color: #fff;
}

.notification-box {
  background-color: #7CDAF9;
}

.user-management-box {
  background-color: #B6FFFF;
}

.btn {
  padding: 8px 16px;
  font-size: 14px;
}

.btn-success {
  background-color: #0CB7F2;
  border-color: #0CB7F2;
}

.btn-danger {
  background-color: #dc3545;
  border-color: #dc3545;
}

.btn-success:hover {
  background-color: #0979B0;
  border-color: #0979B0;
}

.btn-danger:hover {
  background-color: #c82333;
  border-color: #bd2130;
}
</style>
