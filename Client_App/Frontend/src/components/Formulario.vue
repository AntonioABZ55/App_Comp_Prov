<template>
    <div id="app" class="container py-5">
      <h2 class="text-center text-white mb-4">Crear Competencia</h2> 
      <form @submit.prevent="crearCompetencia" class="form-container">
        <div class="mb-4">
          <label for="nombre" class="form-label text-success">Nombre de la competencia:</label>
          <input
            type="text"
            id="nombre"
            v-model="nombre"
            class="form-control"
            placeholder="Escribe el nombre de la competencia"
            required
          />
        </div>
        <div class="mb-4">
          <label for="descripcion" class="form-label text-success">Descripción:</label>
          <textarea
            id="descripcion"
            v-model="descripcion"
            class="form-control"
            placeholder="Escribe una breve descripción"
            rows="5"
            required
          ></textarea>
        </div>
        <div class="mb-4">
          <label for="productos" class="form-label text-success">Productos a licitar:</label>
          <input
            type="text"
            id="productos"
            v-model="productos"
            class="form-control"
            placeholder="Especifica los productos"
            required
          />
        </div>
        <button type="submit" class="btn btn-success w-100 py-3 font-weight-bold">Crear</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: "App",
    data() {
      return {
        nombre: "",
        descripcion: "",
        productos: "",
      };
    },
    methods: {
      crearCompetencia() {
        console.log("Competencia creada:", {
          nombre: this.nombre,
          descripcion: this.descripcion,
          productos: this.productos,
        });
        alert("¡Competencia creada exitosamente!");
        this.nombre = "";
        this.descripcion = "";
        this.productos = "";
      },
    },
  };
  </script>
  
  <style>
  #app {
    font-family: 'Roboto', sans-serif;
    color: #333;
    background-color: #4CAF50; 
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
  }
  
  h2 {
    font-weight: 600;
    color: #ffffff;
    margin-bottom: 40px;
    font-size: 2.5rem;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  }
  
  form {
    width: 100%;
    max-width: 600px;
    padding: 30px;
    background-color: #ffffff;
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
    border: 2px solid #4CAF50; 
  }
  
  form:hover {
    box-shadow: 0 12px 36px rgba(0, 0, 0, 0.3);
  }
  
  .form-label {
    font-weight: 600;
    color: #2d6a4f;
    font-size: 1.1rem;
    margin-bottom: 10px;
  }
  
  .form-control {
    border-radius: 12px;
    padding: 14px;
    border: 1px solid #ffffff;
    font-size: 1rem;
    transition: border-color 0.3s, box-shadow 0.3s;
  }
  
  .form-control:focus {
    border-color: #4CAF50;
    box-shadow: 0 0 8px rgba(45, 106, 79, 0.4);
    outline: none;
  }
  
  textarea.form-control {
    resize: none;
  }
  
  .btn-success {
    background-color: #4CAF50;
    border-color: #4CAF50;
    padding: 14px;
    font-size: 1.2rem;
    font-weight: 600;
    border-radius: 12px;
    transition: background-color 0.3s, transform 0.2s;
  }
  
  .btn-success:hover {
    background-color: #45a049;
    transform: scale(1.05);
  }
  
  .btn-success:active {
    background-color: #3e8e41;
  }
  
  @media (max-width: 768px) {
    h2 {
      font-size: 2rem;
    }
  
    form {
      width: 90%;
      padding: 20px;
    }
  
    .form-control {
      padding: 12px;
    }
  }
  </style>