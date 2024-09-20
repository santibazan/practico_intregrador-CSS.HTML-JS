// store

import { setProductoActivo } from "../../main";
import {handleGetProductLocalStorage } from "../persistence/localStorage";
import { openModal } from "./modal";

//funcion encargada de traer elementos y llamar al render
export const handleGetProductsToStore = () => {
    const products = handleGetProductLocalStorage()
    handleRenderList(products);

}
//Se encarga de filtar y de renderizar la seccion con todos sus respectivos elementos

export const handleRenderList = (productsIn) => {
    //filtrado de arrays por categoria
    const burguers = productsIn.filter((el) => el.categories === "Hamburguesas");
    const papas = productsIn.filter((el) => el.categories === "Papas");
    const gaseosas = productsIn.filter((el) => el.categories === "Gaseosa"); 

//reenderiza los elementos de la seccion
    const renderProductGroup = (productos, title)=>{
        if(productos.length > 0){
            const productosHTML = productos.map((producto, index)=>{
                return`<div 
                class="containerTarjetItem" 
                id="product-${producto.categories}-${index}">
                <div>
                <img src = "${producto.imagen}"/>
                <div>
                <h2>${producto.nombre}</h2>
                </div>
                <div class="targetProps">
                <p><b>Precio:</b> ${producto.precio}</p>
                </div>
                </div>
                </div>`;
            }) 
            //retorna la seccion con todos los elementos dentro
            return`
                <section class="sectionStore">
                    <div class="containerTitleSection">
                        <h3>${title}</h3>
                    </div>
                    <div class="containerProductStore">
                        ${productosHTML.join("")}
                    </div>
                </section>`;
        }else{
            return ""
        }
    }
    //renderizar cada uno de los productos dentro de su categoria
    const appContainer = document.getElementById('storeContainer');
    appContainer.innerHTML = `
    ${renderProductGroup(burguers, "Hamburguesas")}
    ${renderProductGroup(papas, "Papas")}
    ${renderProductGroup(gaseosas, "Gaseosas")}
    `;

//Se añaden los elementos de manera dinamica
     const addEvents = (productsIn)=>{ 
        if(productsIn){
            productsIn.forEach((element, index) => { 
                const productContainer = document.getElementById(`product-${element.categories}-${index}`);
                if(productContainer){
                    productContainer.addEventListener("click", () =>{
                        console.log("productoActivo", element);
                        setProductoActivo(element);
                        openModal();
                    })
                }
                
                
            });
        }
        
    } 
    addEvents(burguers);
    addEvents(papas);
    addEvents(gaseosas);
    
   
}
