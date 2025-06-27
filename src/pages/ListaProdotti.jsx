import React from 'react'
import { useGlobalContext } from '../context/GlobalProvider'
import ProductRow from '../components/ProductRow'
import { Dumbbell } from 'lucide-react'
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
            <div className='mt-3 d-flex align-items-center'>
                <Dumbbell className='me-1' />
                <h2 className='m-0'>Lista Prodotti</h2>
            </div>
            
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-5'>
                
                {products && (
                    products?.map((p) => {
                        console.log(imageUrls[parseInt(p.id)-1])
                        console.log(parseInt(p.id)-1)
                        return (
                            <ProductRow key={p.id} product={p} link={imageUrls[(parseInt(p.id)-1)]} />
                        )
                    })
                )}
            </div>
        </div>
    )
}

export default ListaProdotti