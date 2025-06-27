import { useGlobalContext } from '../context/GlobalProvider'
import CardImg from "../assets/nike-pegasus.jpg"
import dayjs from 'dayjs'
import { ChevronRight } from 'lucide-react'
const Homepage = () => {

  const { products } = useGlobalContext()

  const productHome = products ? products[1] : ""
  console.log(productHome)

  return (
    <>
      {products === undefined && (
        <p className="text-center text-violet-200">Caricamento ...</p>
      )}
      {products === null && (
        ""
      )}

      <div className="row align-items-md-stretch my-5">
        <div className="col-md-6">
          <div className="p-5 text-bg-dark rounded-3">
            <h2 className='display-5 fw-bold mb-4'>Cosa puoi trovare nel nostro Store?</h2>
            <p className='fs-5 mb-4 opacity-75'>Nel nostro negozio trovi abbigliamento sportivo di alta qualità per uomo, donna e unisex: scarpe da running, magliette tecniche, pantaloni, felpe, accessori e molto altro dei migliori brand come Nike, Adidas e Under Armour. Ideale per ogni sport e stile di vita attivo!</p>
            <button className="btn btn-outline-light me-3" type="button">Inizia da qui</button>
            <span className="text-white-50 small">Scopri le novità</span>
            <div className="mt-4 pt-3 border-top border-white border-opacity-10">
              <div className="d-flex gap-2 flex-wrap">
                <span className="badge bg-white bg-opacity-10 text-white py-2 px-3">
                  <i className="bi bi-check-circle me-1"></i> Adidas
                </span>
                <span className="badge bg-white bg-opacity-10 text-white py-2 px-3">
                  <i className="bi bi-truck me-1"></i> Nike
                </span>
                <span className="badge bg-white bg-opacity-10 text-white py-2 px-3">
                  <i className="bi bi-arrow-repeat me-1"></i> Under Armour
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className=" p-5 bg-body-secondary border rounded-3">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={CardImg} className="img-fluid rounded-start h-100 w-100" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body d-flex flex-column h-100 p-3">
                    <div className="mb-2">
                      <span className="badge bg-primary bg-opacity-10 text-primary mb-2">
                        {productHome.category?.toUpperCase()}
                      </span>
                      <h5 className="card-title fw-bold mb-2">{productHome.title}</h5>
                    </div>
                    <div className="mt-auto">
                      <div className="d-flex justify-content-between align-items-center">
                        <p className="card-text text-muted small mb-2">
                          <strong>Aggiunto il:</strong> {dayjs('2019-01-25').format('DD/MM/YYYY')}
                        </p>
                        <button className='btn btn-outline-primary btn-sm px-3 py-1 rounded-pill d-flex align-items-center'>
                          Scopri <ChevronRight size={16} className="ms-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       <div className="row mt-4 g-4">
  {[
    { icon: '🚚', title: 'Spedizione veloce', text: 'Consegna in 2-3 giorni lavorativi' },
    { icon: '🔄', title: 'Reso facile', text: '30 giorni per cambiare idea' },
    { icon: '🛡️', title: 'Garanzia', text: '2 anni su tutti i prodotti' },
    { icon: '💳', title: 'Pagamento sicuro', text: 'Carte e PayPal accettati' }
  ].map((item, index) => (
    <div key={index} className="col-md-3 col-6">
      <div className="p-3 bg-body-secondary rounded-3 text-center h-100 border border-secondary border-opacity-25">
        <div className="display-6 mb-3 text-primary">{item.icon}</div>
        <h5 className="fw-bold mb-2 text-body">{item.title}</h5>
        <p className="text-body-secondary small mb-0">{item.text}</p>
      </div>
    </div>
  ))}
</div>
      </div>
    </>

  )
}

export default Homepage