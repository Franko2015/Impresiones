<template>
  <div class="container">
    <div class="card p-2">
      <div class="input-group m-4">
        <button class="btn btn-danger input-group-text" @click="eliminar">
          Eliminar
        </button>
      </div>
      <table class="table table-bordered table-hover table-sm">
        <thead>
          <tr>
            <th scope="col">Usuario</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in filtros" :key="index">
            <td>{{ item.usuario }} <label @if="item.usuario = ''">No hay registros</label></td>
            <td>
              <input type="checkbox" class="btn" v-model="item.estado" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      estado: false,
      Usuarios: []
    }
  },
  methods: {
    eliminar() {
      this.Usuarios = this.Usuarios.filter((i) => !i.estado);
      this.guardar();

      alert("PRODUCTO ELIMINADO CON ÉXITO!");
    },
    guardar() {
      localStorage.setItem("Usuarios", JSON.stringify(this.Usuarios));
    }
  },
  computed: {
    filtros() {
      return this.estado ? this.Usuarios.filter((i) => !i.estado) : this.Usuarios;
    },
  },
  created() {
    let data = localStorage.getItem("Usuarios");

    if (data != null) {
      this.Usuarios = JSON.parse(data);
    }
  },
};
</script>
