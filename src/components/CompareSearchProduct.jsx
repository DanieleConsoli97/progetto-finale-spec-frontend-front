
import { useGlobalContext } from '../context/GlobalProvider'
import { useState } from "react"

import CompareCard from '../components/CompareCard'
const CompareSearchProduct = () => {
    const { indexProduct } = useGlobalContext()

    const [product, setProduct] = useState([])
    const [productSearch, setProductSearch] = useState([])
    const [query, setQuery] = useState("")

    setProductSearch(() => {
        return (
            indexProduct(query, "")
        )
    })




    return (

        <div className="container py-4">
            {product === undefined && (
                <p className="text-center text-violet-200">Caricamento...</p>
            )}

            {product === null && (
                <>
                    <h2>cerca il prodotto</h2>
                    <input type="text" onChange={(e) => setQuery(() => e.target.input)}></input>
                    {
                        <div>
                            <p>seleziona prodotto</p>
                            <ul>
                                {productSearch.map((p) => {
                                    return (
                                        <li>
                                            <p>{p.title}</p>
                                        </li>
                                    )
                                })}
                            </ul>

                        </div>
                    }
                </>
            )}

            {product && (
                <>
                    <CompareCard />
                </>
            )}
        </div>
    )
}

export default CompareSearchProduct