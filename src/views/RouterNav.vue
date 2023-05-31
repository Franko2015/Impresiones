<template>
    <nav>
        <router-link to="/login">Inicio</router-link> |
        <router-link to="/admin">Administración</router-link> |
        <router-link to="/products">Productos</router-link> |
        <router-link to="/products/stock">Stock</router-link>
    </nav>
</template>

<script>
export default {
    
}
</script>

<style>
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