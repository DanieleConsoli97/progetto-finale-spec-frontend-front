import { useEffect } from 'react'
import { useState } from 'react'
const BASE_URL = import.meta.env.VITE_BASE_URL_SERVER;
const useProduct = () => {

    const [products, setProduct] = useState()
    const [query, setQuery] = useState("")
    const [categoryQuery, setCategoryQuery] = useState("")
    const [allProduct, setAllProduct] = useState()
    const [singleProduct,setSingleProduct] = useState()
    const [categoryList, setCategoryList] = useState([])

    const indexProduct = async (textQuery = "", categoryQuery = "") => {

        try {
            const response = await fetch(`${BASE_URL}/products?search=${textQuery}&category=${categoryQuery}`)
            if (!response.ok) {
                throw new Error("Errore nella recezione dei dati")
            }

            const data = await response.json()

            if (data === undefined) {
                setProduct([])
                throw new Error("Dati non validi")
            }
            if (data === null) {
                setProduct([])
                throw new Error("Nessun prodotto trovato")
            }
            setProduct(data)
           

        } catch (error) {
            setProduct(null)
            console.log(error)
        }

    }

    useEffect(() => {
        const loadAllProductsForCategories = async () => {
            try {
                const response = await fetch(`${BASE_URL}/products`) // Senza filtri
                if (response.ok) {
                    const data = await response.json()
                    setAllProduct(data)
                }
            } catch (error) {
                console.log(error)
            }
        }
        console.log("biscotti")
        loadAllProductsForCategories()
    }, [])

    useEffect(() => {

        setCategoryList(allProduct?.map((p) => p.category).filter((category, index, array) => array.indexOf(category) === index))
    }, [allProduct])


    useEffect(() => { indexProduct(query, categoryQuery) }, [query, categoryQuery])
    

    const productsByid = async (id) => {

        try {
            const response = await fetch(`${BASE_URL}/products/${id}`)
            if (!response.ok) {
                throw new Error("Errore nella recezione dei dati")
            }

            const data = await response.json()

            if (data === undefined) {
                setProduct({})
                throw new Error("Dati non validi")
            }
            if (data === null) {
                setProduct({})
                throw new Error("Nessun prodotto trovato")
            }
            setSingleProduct(data)

        } catch (error) {
            setProduct(null)
            console.log(error)
        }

    }
    return {
        products,
        setQuery,
        setCategoryQuery,
        categoryList,
        productsByid,
        singleProduct,
        indexProduct
    }
}


export { useProduct }