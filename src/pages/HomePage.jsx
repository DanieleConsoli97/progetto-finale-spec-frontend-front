import JumboTron from '../components/JumboTron'

import { useGlobalContext } from '../context/GlobalProvider'
import CardImg from "../assets/nike-pegasus.jpg"
const Homepage = () => {

  const { products } = useGlobalContext()

  const productHome = products ? products[1] : ""
  console.log(productHome)

  return (
    <>
      {products === undefined && (
        <p className="text-center text-violet-200">Caricamento Prodotti...</p>
      )}
      {products === null && (
        <p className="text-center text-red-300">nessun Prodotto trovato</p>
      )}

      <div className="row align-items-md-stretch my-5">
        <div className="col-md-6">
          <div className="p-5 text-bg-dark rounded-3">
            <h2>Cosa puoi trovare nel nostro Store?</h2>
            <p>Nel nostro negozio trovi abbigliamento sportivo di alta qualità per uomo, donna e unisex: scarpe da running, magliette tecniche, pantaloni, felpe, accessori e molto altro dei migliori brand come Nike, Adidas e Under Armour. Ideale per ogni sport e stile di vita attivo!</p>

            <button className="btn btn-outline-light" type="button">Inizia da qui</button>
          </div>
        </div>
        <div className="col-md-6">
          <div className=" p-5 bg-body-tertiary border rounded-3">
            <div className="card mb-3" style={{ maxWidth: "540px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={CardImg} className="img-fluid rounded-start h-100" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{productHome.title}</h5>
                    <p className="card-text">{productHome.category?.toUpperCase()}</p>
                    <p className="card-text"><small className="text-body-secondary">{productHome.createdAt}</small></p>
                    <button className='btn btn-outline-secondary'>Scopri di più</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Homepage