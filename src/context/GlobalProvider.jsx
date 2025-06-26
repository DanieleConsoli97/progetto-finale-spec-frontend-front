import { useContext } from "react"
import { createContext } from "react"
import { useProduct } from "../hooks/useProduct"
const GlobalContext = createContext()
export const GlobalProvider = ({ children }) => {
  const { products } = useProduct()
  console.log(products)

  const value = {products}
  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  )
}
export const useGlobalContext = () => useContext(GlobalContext)

