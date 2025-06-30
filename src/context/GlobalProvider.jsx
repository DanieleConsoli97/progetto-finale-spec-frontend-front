import { useContext } from "react"
import { createContext } from "react"
import { useProduct } from "../hooks/useProduct"
import useLocalStorage from '../hooks/useLocalStorage'

const GlobalContext = createContext()



export const GlobalProvider = ({ children }) => {
  
  const [wishListData,updateStorage] = useLocalStorage("wishList",[]); // Inizializza con array vuoto
  const [productCompare,updateProductCompare] = useLocalStorage("productCompare",[]); // Inizializza con array vuoto
  
  const imageUrls = [
    "nike-pegasus.jpg",
    "nike-pegasus.jpg",
    "adidas-ultraboost.jpg",
    "ua-tech-shirt.jpg",
    "adidas-shorts.jpg",
    "nike-leggings.jpg",
    "ua-hoodie.jpg",
    "adidas-tee.jpg",
    "nike-joggers.jpg",
    "ua-bra.jpg",
    "adidas-terrex.jpg",
    "nike-court.jpg",
    "ua-jacket.jpg",
    "adidas-tiro.jpg",
    "adidas-tiro.jpg",
    "nike-academy.jpg",
    "ua-heatgear.jpg"
];
  const { products,setQuery,setCategoryQuery,categoryList,productsByid,singleProduct } = useProduct()

  const value = { 
    products,
    setQuery,
    setCategoryQuery,
    categoryList,
    productsByid,
    singleProduct,
    imageUrls,
    wishListData,
    updateStorage,
    productCompare,
    updateProductCompare
  }

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  )
}
export const useGlobalContext = () => useContext(GlobalContext)

