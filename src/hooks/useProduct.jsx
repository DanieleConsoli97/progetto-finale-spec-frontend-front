import { useEffect } from 'react'
import { useState } from 'react'
const BASE_URL = import.meta.env.VITE_BASE_URL_SERVER;
const useProduct = (query="") => {
    const queryText=String(query)

    const [products, setProduct] = useState()


   const indexProduct= async (queryText) => {

        try {
            const response = await fetch(`${BASE_URL}/products?search=${queryText}`)
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
    useEffect(() => { indexProduct(queryText)}, [queryText])

    return {
        products
    }
}

export { useProduct }