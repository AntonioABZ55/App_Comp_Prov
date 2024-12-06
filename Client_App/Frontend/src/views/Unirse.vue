<template>
  <div id="app" class="bg-light p-4">
    <div class="container">
      <div class="row mb-4">
        <div class="col-12">
          <h1 class="text-center">Unirse a una Competencia</h1>
        </div>
      </div>

      <div class="row mb-4">
        <div class="col-12">
          <form @submit.prevent="registrarCompetencia">
            <div class="table-responsive">
              <table class="table table-bordered">
                <thead class="thead-dark">
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
                  <tr v-for="(competencia, index) in competencias" :key="index">
                    <td>
                      <input
                        type="text"
                        v-model="competencia.id"
                        class="form-control"
                        placeholder="ID"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        v-model="competencia.nombre"
                        class="form-control"
                        placeholder="Nombre"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        v-model="competencia.categoria"
                        class="form-control"
                        placeholder="Categoría"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        v-model="competencia.descripcion"
                        class="form-control"
                        placeholder="Descripción"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        v-model="competencia.valorUnitario"
                        class="form-control"
                        placeholder="Valor Unitario"
                        @input="calcularValorTotal(index)"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        v-model="competencia.unidades"
                        class="form-control"
                        placeholder="Unidades"
                        @input="calcularValorTotal(index)"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        v-model="competencia.valorTotal"
                        class="form-control"
                        placeholder="Valor Total"
                        disabled
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="form-group text-center">
              <button type="submit" class="btn btn-primary">Participar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      competencias: [
        {
          id: '',
          nombre: '',
          categoria: '',
          descripcion: '',
          valorUnitario: 0,
          unidades: 0,
          valorTotal: 0
        }
      ]
    };
  },
  methods: {
    calcularValorTotal(index) {
      const competencia = this.competencias[index];
      competencia.valorTotal = competencia.valorUnitario * competencia.unidades;
    },
    registrarCompetencia() {
      // Simulación de registrar los datos
      console.log('Competencia registrada:', this.competencias);
    }
  }
};
</script>

<style scoped>
#app {
  background-color: #f4f4f4;
}

h1 {
  font-size: 2rem;
  font-weight: bold;
  color: #1f4e79; /* Azul oscuro */
}

.table {
  margin-top: 20px;
}

.table th,
.table td {
  vertical-align: middle;
}

.table th {
  background-color: #1f4e79; /* Azul oscuro */
  color: white;
}

.table td {
  background-color: #ffffff;
}

input.form-control {
  width: 100%;
  border-radius: 4px;
  border: 1px solid #ddd;
  padding: 8px;
}

input.form-control:focus {
  border-color: #1f4e79;
}

.btn-primary {
  background-color: #1f4e79;
  border: none;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #135b83;
}

.table-responsive {
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
}
</style>
