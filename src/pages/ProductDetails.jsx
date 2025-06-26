import { useParams } from "react-router-dom"
const ProductDetails = () => {
  const params=useParams()
  console.log(params)
  return (
    <div>ProductDetails {params.id}</div>
  )
}

export default ProductDetails