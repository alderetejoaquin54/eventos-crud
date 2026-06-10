// este archivo responde a los evento del DOM,
// interactuando con el usuario y el modelo de datos desarrollado en modulos.js

document.addEventListener("DOMContentLoaded", () => {
        //cargamos listado de personas

    mostrarPersonas();


    

    //Mostrar formulario para agregar Persona desde el boton "Agregar Persona"
    const btn_agregar = document.querySelector("#btn-agregar");
    btn_agregar.addEventListener("click", () => {
        document.querySelector("#form-agregar").style.display = "block";
    })

    //Ocultar formulario "Agregar persona" desde el boton "cerrar" o X
    document.querySelector(".btn-cerrar-formAgregar").addEventListener("click", (event) => {
        event.preventDefault();
        document.querySelector("#form-agregar").style.display = "none";
    })
   

    
    //evento "submit" formulario "AgregarPersona"
        //Enviar formulario
        const form_agregar = document.querySelector("#form-agregar");
        console.log(form_agregar)
        form_agregar.addEventListener("submit", (e) => {
            e.preventDefault();

            const nuevaPersona = {
                nombre: form_agregar.nombre.value,
                edad: form_agregar.edad.value,
                DNI: form_agregar.dni.value
            }
            agregarPersona(nuevaPersona);
            form_agregar.reset();
            form_agregar.style.display = "none";
        })

    //evento "submit" formulario buscar
        const form_buscar = document.querySelector("#form-buscar");
        console.log(form_buscar)
        form_buscar.addEventListener("submit", (e) => {
            e.preventDefault();
            const personaABuscar = {
            nombre: form_buscar.nombre.value,
            dni: form_buscar.dni.value
        }
        buscarPersonas(personaABuscar)
    }
        )

    //boton limpiar filtros
        const form_limpiarFiltro = document.querySelector("#btn-filtros")
        form_limpiarFiltro.addEventListener("click", (event) => {
            form_buscar.reset()
            mostrarPersonas()
        })
   

    //evento "submit" formulario modificar
   
})
