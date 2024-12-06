<template>
  <div id="orden" class="container mt-5">
    <header class="text-center mb-4">
      <h1 class="text-primary">Orden de Compra</h1>
    </header>

    <!-- Información del Cliente y Proveedor -->
    <div class="row mb-4">
      <div class="col-md-6">
        <h4 class="text-primary">Información del Cliente</h4>
        <div class="form-group">
          <label for="cliente-nombre">Nombre</label>
          <input type="text" id="cliente-nombre" class="form-control" placeholder="Nombre del Cliente" />
        </div>
        <div class="form-group">
          <label for="cliente-contacto">Contacto</label>
          <input type="text" id="cliente-contacto" class="form-control" placeholder="Información de Contacto" />
        </div>
      </div>
      <div class="col-md-6">
        <h4 class="text-primary">Información del Proveedor</h4>
        <div class="form-group">
          <label for="proveedor-nombre">Nombre</label>
          <input type="text" id="proveedor-nombre" class="form-control" placeholder="Nombre del Proveedor" />
        </div>
        <div class="form-group">
          <label for="proveedor-contacto">Contacto</label>
          <input type="text" id="proveedor-contacto" class="form-control" placeholder="Información de Contacto" />
        </div>
      </div>
    </div>

    <!-- Detalles del Producto -->
    <div class="row mb-4">
      <div class="col-md-12">
        <h4 class="text-primary">Detalles del Producto</h4>
        <table class="table table-hover">
          <thead class="thead-blue">
            <tr>
              <th scope="col">Producto</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Precio Unitario</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Martillo</td>
              <td>
                <input type="number" class="form-control" value="1" />
              </td>
              <td>$100.00</td>
              <td>$100.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Total y Botón -->
    <div class="row justify-content-between align-items-center">
      <div class="col-md-6">
        <h4 class="text-primary">Total: $100.00</h4>
      </div>
      <div class="col-md-6 text-right">
        <button class="btn btn-primary btn-lg" @click="generarPago">Generar Pago</button>
      </div>
    </div>

    <!-- Vista de QR y Confirmación -->
    <div v-if="pagoGenerado" class="text-center mt-4">
      <h2 class="text-success">¡Su pago ha sido generado!</h2>
      <div>
        <qrcode :value="pagoQR" size="200"></qrcode>
      </div>
    </div>
  </div>
</template>

<script>
import QRCode from 'qrcode.vue';

export default {
  name: "Orden",
  data() {
    return {
      pagoGenerado: false,
      pagoQR: '',
    };
  },
  methods: {
    generarPago() {
      // Simulación de generación de pago
      this.pagoGenerado = true;
      this.pagoQR = 'https://www.ejemplo.com/pago?id=123456';  // URL o datos específicos de pago
    }
  },
  components: {
    qrcode: QRCode
  }
};
</script>

<style scoped>
#orden {
  background-color: #f0f8ff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.text-primary {
  color: #004173;
}

.thead-blue th {
  background-color: #004173;
  color: white;
  text-transform: uppercase;
}

.table td input {
  width: 100%;
  text-align: center;
}

.btn-primary {
  background-color: #004173;
  border-color: #004173;
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #0979b0;
  border-color: #0979b0;
}

.text-success {
  color: #28a745;
}
</style>
