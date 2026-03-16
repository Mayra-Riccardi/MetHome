import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../DB/DB.js";

const useProducts = (category) => {
    //EL USE STATE ES PARA QUE CUANDO LLEGA LA INFO SE GUARDE EN NUNESTRA ARIABLE DE ESTADO
    const [products, setProducts] = useState ([]);
    const [loading, setLoading] = useState (true);

    const getProducts = async() => {
        try {
            const datadb = await getDocs(collection(db, "products"));

            const data = datadb.docs.map((productDb)=> {
                return {id: productDb.id, ...productDb.data()}
            });
            
            setProducts(data);
            setLoading(false);
        }
            //capturar el error
            catch (error) {
            console.log(error);
        }
    }

    const getProductsByCategory = async() => {
        try {
            const q = query(collection(db, "products"), where("category", "==", category));
            const datadb = await getDocs(q);

            const data = datadb.docs.map((productDb)=> {
                return {id: productDb.id, ...productDb.data()}
            });

            setProducts(data)
            setLoading(false)
        }   catch (error) {
            console.log(error);
        }
    }

    //EL USE STATE ES PARA QUE SE EJECUTE UNA SOLA VEZ Y CADA VEZ QUE SE ACTUALIZA LA VISTA SE VUELVA A RENDERIZAR.
    useEffect (() => {
        
        if (category) {
            getProductsByCategory();
        }else{
            getProducts();
        }
        
    }, [category]);

    //RETORNAMOS LA VARIABLE DE ESTADO PRODUCTS Y LA VARIABLE DE ESTADO LOADING
    return {products, loading};
}

export default useProducts;