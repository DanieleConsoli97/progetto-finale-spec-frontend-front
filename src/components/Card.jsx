import { Link } from "react-router-dom"
import { useGlobalContext } from "../context/GlobalProvider"
import { FolderHeart, ListCollapse } from "lucide-react"

const Card = ({ product, link}) => {
const  {updateStorage}=useGlobalContext()
    const { id, category, title } = product

    return (
        <>
            {product === undefined && (
                <p className="text-center text-violet-200">Caricamento Prodotti...</p>
            )}
            {product === null && (
                <p className="text-center text-red-300">nessun Prodotto trovato</p>
            )}
            {product && (

                <div className="card w-100 h-100 shadow-sm rounded-4" style={{ width: "18rem" }}>
                    <img src={link} className="card-img-top h-100" ></img>
                    <div className="card-body  d-flex flex-column justify-content-between">
                        <div>
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text text-muted text-capitalize">{category}</p>
                        </div>

                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-between mt-3 " >
                            <Link to={`/product/${id}`} className="btn btn-outline-primary btn-sm" ><ListCollapse className={"me-1"} /> Scopri di più</Link>
                            <button onClick={()=> updateStorage(prev => [...prev, product])}
                                className="btn btn-outline-danger btn-sm"
                            > <FolderHeart />
                            </button>
                        </div>
                    </div>
                </div>

            )}
        </>
    )
}

export default Card