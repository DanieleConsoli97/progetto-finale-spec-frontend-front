import { useEffect, useState } from "react"
import { useGlobalContext } from "../context/GlobalProvider"
useEffect
const compareCard = () => {
  const { productsByid, singleProduct, imageUrls } = useGlobalContext()
  
  const [product,setProduct]=useState()
  return (
    <>
      {product === undefined && (
        <p className="text-center text-violet-200">Caricamento Prodotti...</p>
      )}
      {product === null && (
        <p className="text-center text-red-300">nessun Prodotto trovato</p>
      )}
      {product && (

        <div className="card" style={{ width: "18rem" }}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
          </ul>
          <div className="card-body">
            <a href="#" className="card-link">Card link</a>
            <a href="#" className="card-link">Another link</a>
          </div>
        </div>

      )}
    </>

  )
}

export default compareCard