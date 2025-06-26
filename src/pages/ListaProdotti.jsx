import React from 'react'
import { useGlobalContext } from '../context/GlobalProvider'
import ProductRow from '../components/ProductRow'

const ListaProdotti = () => {
    const { products } = useGlobalContext()
    return (
        <div>
            {products === undefined && (
                <p className="text-center text-violet-200">Caricamento Prodotti...</p>
            )}
            {products === null && (
                <p className="text-center text-red-300">nessun Prodotto trovato</p>
            )}
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>

                {products && (
                    products?.map((p) => {
                        return (

                            <ProductRow key={p.id} product={p} />
                        )
                    })
                )}
            </div>
        </div>
    )
}

export default ListaProdotti