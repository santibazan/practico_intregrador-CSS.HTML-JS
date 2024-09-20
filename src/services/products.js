import Swal from "sweetalert2"
import { productoActivo } from "../../main";
import { handleGetProductLocalStorage, setInLocalStorage } from "../persistence/localStorage";
import { closeModal } from "../views/modal";
import { handleGetProductsToStore, handleRenderList } from "../views/store";



//Guardamos
const acceptButton = document.getElementById("acceptButton");
acceptButton.addEventListener("click", () =>{
    handleSaveOrModifyElements();
})

//Funcion de guardar
const handleSaveOrModifyElements = () =>{
    const nombre = document.getElementById("nombre").value,
        imagen = document.getElementById("img").value,
        precio = document.getElementById("precio").value,
        categories = document.getElementById("categoria").value;
    let object = null;

    if(productoActivo){
        object = {
            ...productoActivo,
            nombre,
            imagen,
            precio,  
            categories
        }
     }else{
        object = {
            id: new Date().toISOString(),
            nombre,
            imagen,
            precio,  
            categories
        }
    }
    Swal.fire({
        title: "Correcto!",
        text: "Producto guardado correctamente!",
        icon: "success"
    });

    console.log(object);
   
    setInLocalStorage(object);
    handleGetProductsToStore();
    closeModal();

}
//eliminar elemento
export const handleDeleteProduct = ()=>{
    Swal.fire({
        title: "Desea eliminar el elemento??",
        text: "Si lo elimina sera permanentemente",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si!, eliminar"
      }).then((result) => {
        if (result.isConfirmed) {
            const products = handleGetProductLocalStorage();
            const result = products.filter((el)=>el.id !== productoActivo.id);
            //Setear el nuevo array
            localStorage.setItem("products", JSON.stringify(result));
            const newProducts = handleGetProductLocalStorage();
            handleRenderList(newProducts);
            closeModal()
        }else{
            closeModal()
        }
      });
   
}



