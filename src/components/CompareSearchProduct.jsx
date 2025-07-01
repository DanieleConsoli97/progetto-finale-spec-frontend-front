import { useGlobalContext } from '../context/GlobalProvider';
import { useEffect, useState } from "react";
import CompareCard from '../components/CompareCard';

const CompareSearchProduct = () => {
    const { indexProduct } = useGlobalContext();
    const [productSelect, setProductSelect] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false);

    // Carica tutti i prodotti una volta sola
    useEffect(() => {
        const fetchAllProducts = async () => {
            try {
                setLoading(true);
                const result = await indexProduct("", ""); // carica tutti i prodotti
                setAllProducts(result || []);
            } catch (error) {
                console.error("Errore nel caricamento dei prodotti:", error);
                setAllProducts([]);
            } finally {
                setLoading(false);
            }
        };

        fetchAllProducts();
    }, []);

    const handleChange = (e) => {
        const newQuery = e.target.value;
        setQuery(newQuery);

        if (!newQuery.trim()) {
            setSearchResults([]);
            return;
        }

        const filtered = allProducts.filter((product) =>
            product.title.toLowerCase().includes(newQuery.toLowerCase())
        );
        setSearchResults(filtered);
    };

    const handleSelect = (item) => {
        if (!productSelect.some(p => p.id === item.id)) {
            setProductSelect(prev => [...prev, item]);
        }
        setQuery("");
        setSearchResults([]);
    };

    const removeFromCompare = (itemId) => {
        setProductSelect(prev => prev.filter(p => p.id !== itemId));
    };

    return (
        <>
            <div>
                {productSelect.length === 0 ? (
                    <div className="card p-3" style={{ width: "18rem" }}>
                        <h2 className="mb-4 text-center display-5">Cerca e Confronta Prodotti</h2>
                        <input
                            type="text"
                            value={query}
                            onChange={handleChange}
                            placeholder="Digita il nome del prodotto..."
                            className="form-control form-control-lg"
                            aria-label="Cerca prodotti"
                        />
                        {query && (
                            <div className="mt-2">
                                {loading ? (
                                    <div className="alert alert-info text-center">
                                        <i className="fas fa-spinner fa-spin me-2"></i> Caricamento Prodotti...
                                    </div>
                                ) : searchResults.length === 0 ? (
                                    <div className="alert alert-warning text-center">
                                        <i className="fas fa-exclamation-circle me-2"></i> Nessun Prodotto trovato
                                    </div>
                                ) : (
                                    <div className="card shadow-sm">
                                        <div className="card-header bg-primary text-white">
                                            <h5 className="mb-0">
                                                <i className="fas fa-search me-2"></i> Prodotti trovati
                                            </h5>
                                        </div>
                                        <div
                                            className="list-group overflow-auto"
                                            style={{ maxHeight: "300px" }}
                                        >
                                            {searchResults.map((p) => (
                                                <button
                                                    key={p.id}
                                                    onClick={() => handleSelect(p)}
                                                    className={`list-group-item list-group-item-action d-flex justify-content-between align-items-center ${productSelect.some(selected => selected.id === p.id) ? 'active' : ''
                                                        }`}
                                                    disabled={productSelect.some(selected => selected.id === p.id)}
                                                >
                                                    <span>{p.title}</span>
                                                    {productSelect.some(selected => selected.id === p.id) && (
                                                        <span className="badge bg-success">
                                                            <i className="fas fa-check me-1"></i> Selezionato
                                                        </span>
                                                    )}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                ) : (
                    <>
                        {productSelect.map(product => (
                            <div key={product.id} className="col-md-6 col-lg-4 mb-3">
                                <CompareCard productItem={product.id} remove={removeFromCompare} />
                            </div>
                        ))}
                    </>
                )}
            </div>
        </>
    );
};

export default CompareSearchProduct;
