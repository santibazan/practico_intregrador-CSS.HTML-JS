/// localStorage

export const handleGetProductLocalStorage = () =>{
    const products = JSON.parse(localStorage.getItem("products"));
    if(products){
        return products
    }else{
        return[];
    }
};

//Guardar en local storage

// recibir un producto
export const setInLocalStorage = (productIn)=>{
    if(productIn){
        //traer  los elementos
        let productsInLocal = handleGetProductLocalStorage();
        const existingIndex = productsInLocal.findIndex ((productsLocal) => productsLocal.id === productIn.id);

        //verificar si el elemento existe
        if(existingIndex !== -1){
            //si existe debe remplaxarse
            productsInLocal[existingIndex]= productIn;
        }else{
            //si no agregarse
            productsInLocal.push(productIn);

        }
    //setear el nuevo array
    localStorage.setItem("products", JSON.stringify(productsInLocal));
    }
}

