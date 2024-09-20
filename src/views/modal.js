// POPUP

import { productoActivo, setProductoActivo } from "../../main";
import { handleDeleteProduct } from "../services/products";


// funcion abrir modal
export const openModal = () =>{
   const modal =  document.getElementById("modalPopUp");
    modal.style.display="flex";
    const deleteButton = document.getElementById("deleteButton")
    if(productoActivo){
        deleteButton.style.display = "block"
    }else{
        deleteButton.style.display="none"
    }

    if(productoActivo){
        const nombre = document.getElementById("nombre"),
        imagen = document.getElementById("img"),
        precio = document.getElementById("precio"),
        categories = document.getElementById("categoria");

        nombre.value = productoActivo.nombre;
        imagen.value = productoActivo.imagen;
        precio.value = productoActivo.precio; 
        categories.value = productoActivo.categories;
    }
}

//funcion cerrar modal
export const closeModal = () =>{
    const modal =  document.getElementById("modalPopUp");
    modal.style.display="none";
    setProductoActivo(null)
    resetModal();
}

const cancelButton = document.getElementById("cancelButton");
cancelButton.addEventListener("click", ()=>{
    closeModal();
})

const resetModal =()=>{
    const nombre = document.getElementById("nombre"),
        imagen = document.getElementById("img"),
        precio = document.getElementById("precio"),
        categories = document.getElementById("categoria");

        nombre.value = "";
        imagen.value = "";
        precio.value = 0; 
        categories.value = "Seleccione una categoria";
}

const deleteButton=document.getElementById("deleteButton");
deleteButton.addEventListener("click", ()=>{
    handlebuttonDelete();
})
const handlebuttonDelete =()=>{
    handleDeleteProduct()
}
