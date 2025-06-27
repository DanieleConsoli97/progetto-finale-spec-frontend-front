import { useContext } from "react"
import { createContext } from "react"
import { useProduct } from "../hooks/useProduct"
const GlobalContext = createContext()
export const GlobalProvider = ({ children }) => {
  const { products,setQuery } = useProduct()

  const value = { products,setQuery }
 
  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  )
}
export const useGlobalContext = () => useContext(GlobalContext)

