<template>
  <div class="login">
    <form class="form">
      <input class="form-control" type="user" id="user" placeholder="Usuario" v-model="user" required>
      <br>
      <input class="form-control" type="password" id="pass" placeholder="Contraseña" v-model="con1" required />
      <br>
      <input class="form-control" type="password" id="pass" placeholder="Repite la contraseña" v-model="con2"
        required />
      <div class="col">
        <div v-if="error == true" class="text-white">
          {{ mensaje }}
        </div>
        <input class="btn btn-success m-3 p-2" type="button" value="Registrar" @click="register" />
        <router-link class="btn btn-primary m-3 p-2" type="button" to="/login">Ingresar</router-link>
      </div>
    </form>
  </div>
</template>

<script>

export default {
  data() {
    return {
      user: "",
      con1: "",
      con2: "",
      Usuarios: [],
      error: false,
      mensaje: ""
    };
  },
  methods: {
    register() {

      var users = {
        usuario: this.user,
        con: this.con1,
        estado: false
      }

      if (this.con1 == this.con2) {
        this.Usuarios.push(users)
        this.guardar()
        alert("USUARIO CREADO CON ÉXITO!")
        this.$router.push("/login");
      } else {
        this.error = true
        this.mensaje = "Contraseña debe la misma"
      }

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
}

</script>

<style lang="scss" scoped>
.login {
  padding: 2rem;
}

.title {
  text-align: center;
}

.form {
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  min-width: 350px;
  max-width: 100%;
  background: rgba(31, 70, 99, 0.9);
  border-radius: 5px;
  padding: 40px;
  box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
}

.form-label {
  margin-top: 2rem;
  color: white;
  margin-bottom: 0.5rem;

  &:first-of-type {
    margin-top: 0rem;
  }
}

.form-input {
  padding: 10px 15px;
  background: none;
  background-image: none;
  border: 1px solid white;
  color: white;

  &:focus {
    outline: 0;
    border-color: #1ab188;
  }
}

.form-submit {
  background: #1ab188;
  border: none;
  color: white;
  width: auto;
  margin: 15px;
  padding: 20px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #0b9185;
  }
}
</style>