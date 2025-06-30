import { CopyPlus, GitCompareArrows } from "lucide-react"
import CompareCard from "../components/compareCard"
import { useState } from "react"

const ProductCompare = () => {
    const [compare, setCompare] = useState([0])

    const handleAdd = () => {
        if (compare && compare.length > 0) {
            setCompare(prev => [...prev, compare.length])

        }

    }
    const handleDelete = () => {
      
        if ( compare.length > 1) {
             setCompare(prev => prev.slice(0, -1));
        }

    }


    return (
        <>
            <div className='my-3 d-flex align-items-center'>
                <GitCompareArrows className='me-1' />
                <h2 className='m-0'>Comparatore Prodotti</h2>
            </div>
            {
                compare === undefined && (
                    <div>caricamento</div>
                )
            }
            {
                compare !== undefined && (compare === null || compare.length === 0) && (
                    <div>nessun prodotto da comparare</div>
                )
            }
           
            <div className="card-group">
                {
                    compare && compare.length > 0  && (
                        compare.map((index) => {
                            return <CompareCard key={index} />
                        })
                    )
                }
            </div>
            {
                compare.length===4 ?(
                    <div className="bg-danger text-center">
                        <p>E' possibile comparare solo 4 prodotti alla volta</p>
                    </div>
                    
                ):("")
            }
            <button disabled={compare.length === 4}   onClick={() => { handleAdd() }}><CopyPlus /> Aggiungi un prodotto</button> <button disabled={compare.length === 1} onClick={() => { handleDelete() }}><CopyPlus /> Rimuovi prodotto </button>
        </>
    )
}

export default ProductCompare