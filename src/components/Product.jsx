import { useLocation } from "react-router" //when the component loaded it checks what was the previous object loaded 
function Product() {

    const {state}=useLocation()
    
  return (
    <div className="flex flex-col sm:flex-row justify-between p-10">
        <div className=" w-2/5 mt-14">
        <img src={state?.product?.image} className="w-96" alt="" />
        </div>
        <div className="w-3/5 p-2 sm:p-10">
        <p className="text-2xl mb-10">{state?.product.title}</p>
        <p className="mb-10">{state?.product.description}</p>
        <p className="text-3xl mb-10" >{state?.product.price}</p>
        <p className="text-2xl mb-10">{state?.product.category}</p>
        </div>
    </div>
  )
}

export default Product