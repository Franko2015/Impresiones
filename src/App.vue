<template>
  <nav>
    <router-link to="/login" >Inicio</router-link> |
    <router-link to="/admin/{{ this.$route.params.usuario }}">Administración</router-link> |
    <router-link to="/products/{{ this.$route.params.usuario }}">Productos</router-link> |
    <router-link to="/stock/{{ this.$route.params.usuario }}">Stock</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} 

nav {
  padding: 30px;
  font-size: 20px;
}

nav a {
  font-weight: bold;
  color: #c6d0db;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #42b983;
}
nav a:hover{
  color: #077191;
}
</style>
