<template>
  <div class="login">
    <form class="form">
      <input class="form-control" type="user" id="user" required placeholder="Usuario" v-model="user">
      <br>
      <input class="form-control" type="pass" id="pass" placeholder="Contraseña" v-model="pass" required>
      <div class="col">
        <input class="btn btn-primary m-3 p-2" type="button" value="Ingresar" @click="validar" />
        <router-link class="btn btn-success m-3 p-2" type="button" to="/register">Registrarse</router-link>
      </div>
    </form>
    <div v-if="error == true">
      Hola
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      error: false,
      user: "",
      pass: "",
      Usuarios: [],
    };
  },
  methods: {
    validar() {
      
      let data = localStorage.getItem("Usuarios");

      if (data != null) {
        this.Usuarios = JSON.parse(data);
      }

      var verify = !!this.Usuarios.find(element => element.usuario === this.user && element.con === this.pass)

      if (verify) {
        // window.location = 'verificacion.html';
        alert('¡Correo y contraseña correctos!')
        this.$router.push("/App.vue/:" + this.user)
      } else {
        alert('Correo o contraseña incorrecta');
      }
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