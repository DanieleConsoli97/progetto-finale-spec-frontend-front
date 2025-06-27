
import { useGlobalContext } from '../context/GlobalProvider'
import ProductRow from '../components/ProductRow'
import { Dumbbell } from 'lucide-react'
import { useEffect, useMemo } from 'react';
import { memo } from "react"
const imageUrls = [
    "../assets/nike-pegasus.jpg",
    "../assets/nike-pegasus.jpg",
    "../assets/adidas-ultraboost.jpg",
    "../assets/ua-tech-shirt.jpg",
    "../assets/adidas-shorts.jpg",
    "../assets/nike-leggings.jpg",
    "../assets/ua-hoodie.jpg",
    "../assets/adidas-tee.jpg",
    "../assets/nike-joggers.jpg",
    "../assets/ua-bra.jpg",
    "../assets/adidas-terrex.jpg",
    "../assets/nike-court.jpg",
    "../assets/ua-jacket.jpg",
    "../assets/adidas-tiro.jpg",
    "../assets/adidas-tiro.jpg",
    "../assets/nike-academy.jpg",
    "../assets/ua-heatgear.jpg"
];

const ProductRowMemo = memo(ProductRow)

const ListaProdotti = () => {
    const { products, setQuery, setCategoryQuery, categoryList } = useGlobalContext()

    const handleChangeInput = (e) => { setQuery(e.target.value) }
    const handleChangeCategory = (e) => { setCategoryQuery(e.target.value) }
    const productsMemo = (useMemo(() => {
        if (products) {
            return (
                products?.map((p) => {
                    console.log(imageUrls[parseInt(p.id) - 1])
                    console.log(parseInt(p.id) - 1)
                    return (
                        <ProductRowMemo key={p.id} product={p} link={imageUrls[(parseInt(p.id) - 1)]} />
                    )
                })
            )
        }
    }, [products]))

    //FUNCTION - funzione che mi restituisce un array di categorie senza doppioni
    const CategorySelect = () => {
        if (products) {

            return (
                products.map((p) => p.category).filter((category, index, array) => array.indexOf(category) === index)
            )
        } else {
            <p>caricamento</p>
        }
    }


    return (

        <div>
            {products === undefined && (
                <p className="text-center text-violet-200">Caricamento Prodotti...</p>
            )}
            {products === null && (
                <p className="text-center text-red-300">nessun Prodotto trovato</p>
            )}
            <div className='mt-3 d-flex align-items-center'>
                <Dumbbell className='me-1' />
                <h2 className='m-0'>Lista Prodotti</h2>
            </div>
            <div className="mb-4">
                <div className="input-group">
                    <input onChange={handleChangeInput} type="text" className="form-control flex-grow-1" placeholder="Quantità" aria-label="Quantità" />
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
                            console.log("category", category)
                            return (
                                <option key={category} value={category}>
                                    {category}
                                </option>)
                        }
                        )}
                    </select>
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