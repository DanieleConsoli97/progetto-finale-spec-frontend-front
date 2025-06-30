import dayjs from "dayjs";
import { Calendar, ChevronRight, Tag, Trash2 } from "lucide-react"
import { useGlobalContext } from '../context/GlobalProvider'
import { useNavigate } from "react-router-dom";

const WishList = () => {
    const { wishListData,updateStorage } = useGlobalContext()
   const navigate = useNavigate()
    return (
        <>
            {wishListData === undefined && (
                <li>Lista in caricamento...</li>
            )}

            {(wishListData === null || wishListData.length === 0) && (
                <li>Nessun prodotto inserito</li>
            )}

            {wishListData && wishListData.length >= 0 && wishListData?.map((item, index) => {
                return (

                    <li key={index} className="mb-1">
                        <ul key={index} className="list-unstyled">
                            <li key={item.id} className="p-3 border rounded shadow-sm bg-body">
                                <div className="d-flex justify-content-between align-items-start">
                                    <div className="flex-grow-1">
                                        <h6 className="mb-2 fw-bold text-primary-emphasis">{item.title}</h6>
                                        <div className="d-flex flex-wrap gap-3">
                                            <span className="d-flex align-items-center text-muted small">
                                                <Tag className="lucide lucide-tag me-1" size={14} />
                                                <span className="text-body-secondary">{item.category}</span>
                                            </span>
                                            <span className="d-flex align-items-center text-muted small">
                                                <Calendar className="lucide lucide-calendar-days me-1" size={14} />
                                                <span className="text-body-secondary">
                                                    {dayjs(item.createdAt).format('DD/MM/YYYY HH:mm')}
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column flex-sm-row gap-2 ms-3">
                                        <button
                                            className="btn btn-outline-primary btn-sm px-3 py-1 rounded-pill d-flex align-items-center"
                                            onClick={() =>navigate(`product/${item.id}`)}
                                        >
                                            Scopri <ChevronRight className="lucide lucide-chevron-right ms-1" size={16} />
                                        </button>
                                        <button
                                            className="btn btn-outline-danger btn-sm px-3 py-1 rounded-pill d-flex align-items-center"
                                            onClick={() =>  updateStorage(prev => prev.filter(itemPrev => itemPrev.id !== item.id))}
                                            title="Elimina"
                                        >
                                            <Trash2 className="lucide lucide-trash-2" size={16} />
                                        </button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                )
            }
            )}
        </>
    )
}

export default WishList