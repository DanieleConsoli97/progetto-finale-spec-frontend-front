
import Card from '../components/Card'

const ProductRow = ({ product }) => {
    return (
        <>
            {product === undefined && (
                <p className="text-center text-violet-200">Caricamento Prodotti...</p>
            )}
            {product === null && (
                <p className="text-center text-red-300">nessun Prodotto trovato</p>
            )}
            <div className='col'>
                {product && (

                    <Card product={product} />
                )}
            </div>
        </>
    )
}

export default ProductRow