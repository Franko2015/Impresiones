<template>
    <div class="container">
      <div class="card">
        <div class="input-group m-4">
          <button
            class="btn btn-success input-group-text"
            @click="imprimir('seleccion')"
          >
            Imprimir
          </button>
        </div>
        <div class="card-body" id="seleccion">
          <table class="table table-bordered table-hover table-striped">
            <thead>
              <tr>
                <th scope="col">Producto</th>
                <th scope="col">Tamaño</th>
                <th scope="col">Precio</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in filtros" :key="index">
                <td>{{ item.Producto }}</td>
                <td>{{ item.Tamaño }}</td>
                <th scope="row">${{ item.Precio }}</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        Servicio: "",
        Descripcion: "",
        Precio: "",
        Estado: false,
        Productos: [],
      };
    },
    methods: {
      imprimir(nombre) {
        var contenido = document.getElementById(nombre).innerHTML;
        var contenidoOriginal = document.body.innerHTML;
        document.body.innerHTML = contenido;
        window.print();
        document.body.innerHTML = contenidoOriginal;
      },
    },
    computed: {
      filtros() {
        return this.Estado ? this.Productos.filter((i) => !i.Estado) : this.Productos;
      },
    },
    created() {
      let data = localStorage.getItem("Productos");
      if (data != null) {
        this.Productos = JSON.parse(data);
      }
    },
  };
  </script>