import React from 'react'
import Jumbo from "../assets/jumbo.png"

const JumboTron = () => {
  return (
    <div className="position-relative text-white text-center w-100 top-0" style={{ height: '500px' }}>
      <img
        src={Jumbo}
        className="w-100 h-100 object-fit-cover position-absolute top-0 start-0"
        alt="Sport Background"
        style={{ zIndex: 0 }}
      />

      {/* Overlay oscurante */}
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50" style={{ zIndex: 1 }}></div>

      {/* Contenuto sopra immagine */}
      <div className="position-relative d-flex flex-column justify-content-center align-items-center h-100 p-4" style={{ zIndex: 2 }}>
        <h1 className="display-4 fw-bold">Benvenuti sul nostro sito</h1>
        <p className="lead col-lg-8 mx-auto text-light text-uppercase">
          hero sport shop
        </p>
      </div>
    </div>
  )


}

export default JumboTron