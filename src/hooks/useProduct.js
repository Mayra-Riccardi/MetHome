import { useEffect, useState } from "react"
import { doc, getDoc, getDocs } from "firebase/firestore";
import db from "../DB/DB.js";

const useProduct = (productId) => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const getProduct = async() => {
    try {
        const docRef = doc(db, "products", productId);
        const datadb = await getDoc(docRef);

        const data = {id: datadb.id, ...datadb.data()};
        setProduct(data);
        setLoading(false);
    } catch (error) {
        console.log(error)
    }
  }

    useEffect (() => {
       getProduct();
    }, [])

    return {product, loading};
};

export default useProduct;