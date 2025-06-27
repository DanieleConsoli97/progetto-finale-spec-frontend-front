
import { useGlobalContext } from '../context/GlobalProvider'
import ProductRow from '../components/ProductRow'
import { ArrowDownUp, ArrowUpDown, Dumbbell } from 'lucide-react'
import { useMemo, useState } from 'react';
import { memo } from "react"
const imageUrls = [
    "nike-pegasus.jpg",
    "nike-pegasus.jpg",
    "adidas-ultraboost.jpg",
    "ua-tech-shirt.jpg",
    "adidas-shorts.jpg",
    "nike-leggings.jpg",
    "ua-hoodie.jpg",
    "adidas-tee.jpg",
    "nike-joggers.jpg",
    "ua-bra.jpg",
    "adidas-terrex.jpg",
    "nike-court.jpg",
    "ua-jacket.jpg",
    "adidas-tiro.jpg",
    "adidas-tiro.jpg",
    "nike-academy.jpg",
    "ua-heatgear.jpg"
];

const ProductRowMemo = memo(ProductRow)

const ListaProdotti = () => {

    const { products, setQuery, setCategoryQuery, categoryList } = useGlobalContext()
    const [sortOrder, setSortOrder] = useState(1)
    const handleChangeInput = (e) => { setQuery(e.target.value) }
    const handleChangeCategory = (e) => { setCategoryQuery(e.target.value) }

    const sortedProducts = useMemo(() => {
        if (!products) {
            return []
        }
        return [...products].sort((a, b) => sortOrder * a.title.localeCompare(b.title))
    }, [products, sortOrder])

    const productsMemo = (useMemo(() => {
        if (sortedProducts) {
            return (
                sortedProducts?.map((p) => {
                    console.log(imageUrls[parseInt(p.id) - 1])
                    console.log(parseInt(p.id) - 1)
                    return (
                        <ProductRowMemo key={p.id} product={p} link={imageUrls[(parseInt(p.id) - 1)]} />
                    )
                })
            )
        }
    }, [sortedProducts]))

    return (

        <div>
            {products === undefined && (
                <p className="text-center text-violet-200">Caricamento Prodotti...</p>
            )}
            {products === null && (
                <p className="text-center text-red-300">nessun Prodotto trovato</p>
            )}
            <div className='my-3 d-flex align-items-center'>
                <Dumbbell className='me-1' />
                <h2 className='m-0'>Lista Prodotti</h2>
            </div>
            <div className="mb-4">
                <div className="input-group">
                    <input onChange={handleChangeInput} type="text" className="form-control flex-grow-1" placeholder="Ricerca un prodotto" aria-label="Quantità" />
                    <select onChange={handleChangeCategory} className="form-select w-auto" id="unita2" style={{ maxWidth: "120px" }}>
                        {categoryList === undefined && (
                            <option>Caricamento</option>
                        )}
                        {categoryList === null && (
                            <option>nessuna categoria</option>
                        )}
                        {/* map dell'array di categorie */}
                        <option value={""}>Categoria</option>
                        {categoryList?.map(category => {
                            return (
                                <option key={category} value={category}>
                                    {category}
                                </option>)
                        }
                        )}
                    </select>
                    <button onClick={() => setSortOrder((c) => -c)}
                        className="btn btn-outline-secondary"
                        type="button"
                        id="button-addon2">
                        Ordina Per Nome
                        {sortOrder === 1 ? <ArrowUpDown className='ms-2' /> : <ArrowDownUp className='ms-2' />}
                    </button>
                </div>
            </div>


            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-5'>
                {products && (
                    productsMemo
                )}
            </div>
        </div>
    )
}

export default ListaProdotti