import { useParams } from "react-router-dom"
import { useGlobalContext } from '../context/GlobalProvider'
import { useEffect } from "react"
import { Star, Heart, ShieldCheck, Truck, CreditCard, ArrowLeft, ShoppingCart, ChevronDown, CheckCircle } from "lucide-react"
import { Link } from "react-router-dom"

const ProductDetails = () => {
  const { productsByid, singleProduct, imageUrls } = useGlobalContext()
  const params = useParams()

  useEffect(() => { 
    productsByid(params.id) 
  }, [params.id])

  if (!singleProduct) {
    return null
  }

  const { product } = singleProduct

 
 

  return (
    <div className="container py-4">
      {product === undefined && (
        <p className="text-center text-violet-200">Caricamento Prodotti...</p>
      )}
      {product === null && (
        <p className="text-center text-red-300">Nessun Prodotto trovato</p>
      )}

      {product && (
        <>
          <Link to="/products" className="btn btn-outline-secondary mb-3 d-flex align-items-center">
            <ArrowLeft size={18} className="me-2" /> Torna indietro
          </Link>

          <div className="card shadow-lg border-0 overflow-hidden rounded-4">
            <div className="row g-0">
              {/* Sezione Immagine */}
              <div className="col-md-5 position-relative">
                <div className="position-absolute top-0 start-0 m-3">
                  {product.discount && (
                    <span className="badge bg-danger fs-6">
                      -{product.discount}%
                    </span>
                  )}
                </div>
                <button className="btn btn-light position-absolute top-0 end-0 m-3 rounded-circle">
                  <Heart className="text-danger" />
                </button>
                <img
                  src={`/${imageUrls[parseInt(params.id) - 1]}`}
                  className="img-fluid h-100 w-100 object-fit-cover"
                  alt={product.title}
                  style={{ minHeight: '400px', objectFit: 'cover' }}
                />
              </div>
              <div className="col-md-7 d-flex flex-column">
                <div className="card-body d-flex flex-column justify-content-between h-100 p-4">
                  <div>
                    <div className="d-flex justify-content-between align-items-start">
                      <h2 className="card-title mb-2">{product.title}</h2>
                    </div>
                    
                    <p className="text-muted mb-4">{product.description}</p>
                    <div className="d-flex align-items-center mb-4">
                      <h3 className="text-primary mb-0 me-3">€{product.price}</h3>
                      {product.originalPrice && (
                        <del className="text-muted">€{product.originalPrice}</del>
                      )}
                    </div>
                    <div className="row mb-4">
                      <div className="col-md-6 mb-3">
                        <div className="border p-3 rounded-3 h-100">
                          <h6 className="fw-bold mb-3">Caratteristiche</h6>
                          <ul className="list-unstyled">
                            <li className="mb-2">
                              <strong>Brand:</strong> {product.brand}
                            </li>
                            <li className="mb-2">
                              <strong>Categoria:</strong> {product.category}
                            </li>
                            <li className="mb-2">
                              <strong>Colore:</strong> 
                              <span className="d-inline-block ms-2 rounded-circle border" 
                                style={{
                                  width: "16px", 
                                  height: "16px", 
                                  backgroundColor: product.color?.toLowerCase(),
                                  verticalAlign: 'middle'
                                }} 
                              />
                              <span className="ms-1">{product.color}</span>
                            </li>
                            <li className="mb-2">
                              <strong>Genere:</strong> {product.gender}
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-6 mb-3">
                        <div className="border p-3 rounded-3 h-100">
                          <h6 className="fw-bold mb-3">Disponibilità</h6>
                          <ul className="list-unstyled">
                            <li className="mb-2">
                              <strong>Taglie:</strong>
                              <div className="d-flex flex-wrap mt-2">
                                {product.size?.map((size) => (
                                  <button 
                                    key={size} 
                                    className="btn btn-outline-secondary btn-sm me-2 mb-2"
                                  >
                                    {size}
                                  </button>
                                ))}
                              </div>
                            </li>
                            <li className="mb-2 d-flex align-items-center">
                              <strong className="me-2">Stato:</strong>
                              {product.inStock ? (
                                <span className="badge bg-success">
                                  <CheckCircle size={16} className="me-1" />
                                  Disponibile
                                </span>
                              ) : (
                                <span className="badge bg-danger">Esaurito</span>
                              )}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h6 className="fw-bold mb-3">Tags</h6>
                      <div className="d-flex flex-wrap">
                        {product.tags?.map((tag) => (
                          <span key={tag} className="badge bg-light text-dark me-2 mb-2">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="d-flex align-items-center mb-3">
                      <button className="btn btn-primary flex-grow-1 me-2 py-2 d-flex align-items-center justify-content-center">
                        <ShoppingCart className="me-2" /> Aggiungi al carrello
                      </button>
                      <button className="btn btn-outline-danger py-2">
                        <Heart />
                      </button>
                    </div>

                    <div className="border-top pt-3">
                      <div className="d-flex align-items-center mb-2">
                        <Truck className="text-success me-2" />
                        <span>Spedizione gratuita per ordini superiori a €50</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <ShieldCheck className="text-primary me-2" />
                        <span>Garanzia 2 anni inclusa</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card shadow-sm  rounded-4 mt-4">
            <div className="card-body">
              <h5 className="card-title mb-4">Dettagli aggiuntivi</h5>
              <div className="accordion" id="productAccordion">
                <div className="accordion-item ">
                  <h2 className="accordion-header">
                    <button 
                      className="accordion-button  btn-secondary" 
                      type="button" 
                      data-bs-toggle="collapse" 
                      data-bs-target="#collapseOne"
                    >
                      <ChevronDown className="me-2" /> Descrizione completa
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show ">
                    <div className="accordion-body">
                      <p>{product.longDescription || product.description}</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item ">
                  <h2 className="accordion-header">
                    <button 
                      className="accordion-button collapsed btn-secondary" 
                      type="button" 
                      data-bs-toggle="collapse" 
                      data-bs-target="#collapseTwo"
                    >
                      <ChevronDown className="me-2" /> Spedizione e reso
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse ">
                    <div className="accordion-body">
                      <p>Spedizione standard gratuita per ordini superiori a €50. Tempi di consegna stimati: 2-5 giorni lavorativi. Reso gratuito entro 30 giorni dalla ricezione.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default ProductDetails