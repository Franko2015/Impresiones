<template>
    <div class="container">
        <div class="card">
            <div class="card-title">
                <h3>Formulario de impresiones</h3>
            </div>
            <form>
                <div class="card-body">
                    <div class="row m-3">
                        <div class="input-group col">
                            <label for="" class="input-group-text">Producto: &nbsp;</label>
                            <input type="text" class="form-control" v-model="Producto" required />

                            <label for="" class="input-group-text">Tamaño: &nbsp;</label>
                            <select class="form-select" v-model="Tamaño">
                                <option selected disabled>Selecciona un tañano de impresión</option>
                                <option value="Grande">Grande</option>
                                <option value="Normal">Normal</option>
                                <option value="Pequeño">Pequeño</option>
                            </select>
                        </div>
                    </div>
                    <div class="row m-3">
                        <div class="input-group col">
                            <label for="" class="input-group-text">Precio unitario: $ &nbsp;</label>
                            <input type="number" class="form-control" v-model="Precio" required />

                            <label for="" class="input-group-text">Cantidad: &nbsp;</label>
                            <input type="number" class="form-control" v-model="Cantidad" required />

                            <button class="btn btn-success" @click="Agregar" type="submit">
                                Ingresar
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <hr />
        <div class="card">
            <div class="input-group m-4">
                <button class="btn btn-danger input-group-text" @click="eliminar">
                    Eliminar
                </button>
            </div>
            <div class="card-body" id="seleccion">
                <table class="table table-bordered table-hover table-striped table-sm table-responsive">
                    <thead>
                        <tr>
                            <th scope="col">Producto</th>
                            <th scope="col">Tamaño</th>
                            <th scope="col">Precio unitario</th>
                            <th scope="col">Cantidad</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in filtros" :key="index">
                            <td>{{ item.Producto }}</td>
                            <td>{{ item.Tamaño }}</td>
                            <td>${{ item.Precio }}</td>
                            <th scope="row">{{ item.Cantidad }}</th>
                            <td>
                                <input type="checkbox" class="btn" v-model="item.Estado" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    /* eslint-disable */
    name: "MisProyectos",
    data() {
        return {
            Producto: "",
            Tamaño: "",
            Precio: Number,
            Cantidad: Number,
            Estado: false,
            Productos: [],
        };
    },
    methods: {
        Agregar() {
            var datos = {
                Producto: this.Producto,
                Tamaño: this.Tamaño,
                Precio: this.Precio,
                Cantidad: this.Cantidad,
                Estado: false,
            };

            if (this.Producto != "" || this.Tamaño != "" || this.Precio != 0) {
                this.Productos.push(datos);
                this.guardar();

                alert("PRODUCTO INGRESADO CON ÉXITO!");

            } else {
                alert("FALTAN DATOS POR COMPLETAR PARA AGREGAR EL PRODUCTO!!");
            }
        },
        guardar() {
            localStorage.setItem("Productos", JSON.stringify(this.Productos));
        },
        eliminar() {
            this.Productos = this.Productos.filter((i) => !i.Estado);
            this.guardar();

            alert("PRODUCTO ELIMINADO CON ÉXITO!");
        },
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
