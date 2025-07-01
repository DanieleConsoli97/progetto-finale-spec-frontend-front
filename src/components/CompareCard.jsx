import { useEffect, useState } from "react";
import { useGlobalContext } from "../context/GlobalProvider";

const CompareCard = ({ productItem,remove }) => {
  const { productsByid, singleProduct } = useGlobalContext();

  useEffect(() => {
    if (productItem) {
      productsByid(productItem);
    }
  }, [productItem]);

  // ✅ Gestione safe dei casi iniziali
  if (!singleProduct) {
    return <p className="text-center text-violet-200">Caricamento Prodotto...</p>;
  }

  if (!singleProduct.product) {
    return <p className="text-center text-red-300">Nessun Prodotto trovato</p>;
  }

  const { product } = singleProduct

  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body bg-body-secondary">
        <h5 className="card-title">{product.title}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item"><strong>Descrizione: </strong>{product.description}</li>
        <li className="list-group-item"><strong>Prezzo:</strong> €{product.price}</li>
        <li className="list-group-item"><strong>Marca:</strong> {product.brand}</li>
        <li className="list-group-item"><strong>Categoria:</strong> {product.category}</li>
        <li className="list-group-item"><strong>Colore:</strong> {product.color}</li>
        <li className="list-group-item"><strong>Taglie:</strong> {Array.isArray(product.size) ? product.size.join(", ") : product.size}</li>
        <li className="list-group-item"><strong>Disponibilità:</strong> {product.inStock ? "In stock" : "Esaurito"}</li>
        <div>
          <button className="w-100 btn btn-outline-light" onClick={()=>remove(productItem)} > clicca per rimuovere il prodotto</button>
        </div>
      </ul>
      
    </div>
  );
};

export default CompareCard;
