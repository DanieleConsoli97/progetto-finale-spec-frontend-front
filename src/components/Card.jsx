const Card = ({ product }) => {
    const { category, title } = product
    return (
        <div>
            {product === undefined && (
                <p className="text-center text-violet-200">Caricamento Prodotti...</p>
            )}
            {product === null && (
                <p className="text-center text-red-300">nessun Prodotto trovato</p>
            )}
            {product && (
                <>
                    <div className="card" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{category}</p>
                        </div>
                    </div>
                </>

            )}
        </div>
    )
}

export default Card