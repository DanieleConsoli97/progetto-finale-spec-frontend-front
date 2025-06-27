
import Card from '../../public/Card'

const ProductRow = ({ product,link }) => {
console.log("render")
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
                    <Card product={product} link={link} />
                )}
            </div>
        </>
    )
}

export default ProductRow