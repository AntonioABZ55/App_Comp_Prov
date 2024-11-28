<template>
  <div class="competencias-container">
    <!-- Encabezado -->
    <header class="header">
      <h1>Unirse a Competencia</h1>
      <div class="search-container">
        <input type="text" placeholder="Buscar..." />
        <button class="search-button">🔍</button>
      </div>
    </header>

    <!-- Tabla de Competencias -->
    <div class="tabla-competencias">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Descripción</th>
            <th>Valor Unitario</th>
            <th>Unidades</th>
            <th>Valor Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2234</td>
            <td>Cemento Blanco</td>
            <td>Construcción</td>
            <td>Cemento blanco 50 kg</td>
            <td><input type="text" placeholder="Ingrese V.U." /></td>
            <td><input type="text" placeholder="Ingrese U." /></td>
            <td><input type="text" placeholder="Ingrese V.Total" /></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Competencias",
};
</script>

<style scoped>
/* Colores */
:root {
  --main-green: #4caf50;
  --background: #f0f4f0;
  --yellow: #fdf4cb;
  --text-dark: #333;
}

/* Contenedor Principal */
.competencias-container {
  font-family: Arial, sans-serif;
  background-color: var(--background);
  padding: 20px;
}

/* Encabezado */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--main-green);
  color: white;
  padding: 10px;
  border-radius: 10px;
}

.header h1 {
  margin: 0;
}

.search-container {
  display: flex;
  align-items: center;
}

.search-container input {
  padding: 5px;
  border: none;
  border-radius: 5px;
  margin-right: 5px;
}

.search-button {
  background-color: white;
  color: var(--main-green);
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}

/* Tabla */
.tabla-competencias table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  background-color: var(--yellow);
  border-radius: 10px;
  overflow: hidden;
}

.tabla-competencias th,
.tabla-competencias td {
  text-align: left;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.tabla-competencias th {
  background-color: var(--main-green);
  color: white;
}

.tabla-competencias input {
  width: 90%;
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
