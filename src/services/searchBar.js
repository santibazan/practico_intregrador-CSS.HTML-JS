import { handleGetProductLocalStorage } from "../persistence/localStorage";
import { handleRenderList } from "../views/store";

export const handleSearchProductByName = () =>{
    const inputHeader = document.getElementById("inputHeader");
    const products = handleGetProductLocalStorage()

    const resultSearch = products.filter((el)=> {
        return el.nombre.toLowerCase().includes(inputHeader.value.toLowerCase());
    });

    
    handleRenderList(resultSearch);
}