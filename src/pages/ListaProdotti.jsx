import React from 'react'
import {useGlobalContext} from '../context/GlobalProvider'
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
            {products && (
                products?.map((p) => {
                    return (
                        <ProductRow key={p.id} product={p}/>
                    )
                })
            )}
        </div>
    )
}

export default ListaProdotti