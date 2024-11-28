<template>
  <div class="container mt-4">
    <!-- Encabezado -->
    <div class="d-flex justify-content-between align-items-center bg-success text-white p-3 rounded">
      <div class="d-flex align-items-center">
        <h1 class="h4 mb-0 me-3">Mis competencias</h1>
        <select class="form-select form-select-sm" style="width: auto;">
          <option>Ordenenes de compra</option>
          <option>Historial</option>
        </select>
        <a href="#" class="text-white ms-3">Soporte</a>
      </div>
      <div class="d-flex align-items-center">
        <input
          type="text"
          class="form-control form-control-sm me-2"
          placeholder="Buscar..."
        />
        <button class="btn btn-light btn-sm">🔍</button>
      </div>
    </div>

    <!-- Título y subtítulo -->
    <div class="mt-3">
      <h2 class="h5">Detalle de la competencia</h2>
      <hr />
      <p class="mb-3">
        Listado de los proveedores que participan en la competencia y se organizan por el semáforo.
      </p>
    </div>

    <!-- Tabla de Proveedores -->
    <div class="table-responsive">
      <table class="table table-bordered">
        <thead class="table-success text-white">
          <tr>
            <th>Nombre del proveedor</th>
            <th>Tipo de licitación</th>
            <th>Producto(s)</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Proveedor 1</td>
            <td>Abierta</td>
            <td>Producto A, Producto B</td>
            <td>$500</td>
          </tr>
          <tr>
            <td>Proveedor 2</td>
            <td>Cerrada</td>
            <td>Producto C</td>
            <td>$700</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Botón para generar orden -->
    <div class="text-end mt-3">
      <button class="btn btn-success">Generar orden de pago</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetalleCompetencia",
};
</script>

<style scoped>
/* Personalización de colores */
.bg-success {
  background-color: #4caf50 !important;
}

.table-success {
  background-color: #4caf50 !important;
}
</style>
