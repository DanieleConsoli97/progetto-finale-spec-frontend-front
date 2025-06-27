import { Link } from "react-router-dom"

import { ListCollapse } from "lucide-react"
const Card = ({ product, link }) => {

    const { id, category, title } = product
   console.log(link.replace("../assets"))
    return (
        <>
            {product === undefined && (
                <p className="text-center text-violet-200">Caricamento Prodotti...</p>
            )}
            {product === null && (
                <p className="text-center text-red-300">nessun Prodotto trovato</p>
            )}
            {product && (

                <div className="card w-100 h-100" style={{ width: "18rem" }}>
                    <img src={link.replace("../assets","")} className="card-img-top h-100" ></img>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{category}</p>
                        <Link to={`/product/${id}`} className="btn btn-outline-secondary" ><ListCollapse className={"me-1"} /> Scopri di più</Link>
                    </div>
                </div>

            )}
        </>
    )
}

export default Card