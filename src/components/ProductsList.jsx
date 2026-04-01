import { useEffect,useState } from 'react'
import { useNavigate } from 'react-router'
function ProductsList() {
  let [productslist,setProducts]=useState([])
  let [loading,setLoading]=useState(false)
  let [error,setError]=useState(null)
  let [searchCategory,setSearchCategory]=useState('')
  const navigate=useNavigate()

  //navigate to product component
  const gotoProduct=(productObj)=>{
    //navigation logic
    //while navigating transfer product obj to
    navigate('/products',{state:{product:productObj}})
  }
  const filteredProducts = productslist.filter((product) =>
  product.category.toLowerCase().includes(searchCategory.toLowerCase())
)
  useEffect(()=>{
    setLoading(true);
    async function getProducts(){
      try{
        let res=await fetch("/api/products")
        if(res.ok){
          let productsData=await res.json();
          setProducts(productsData);
        }else{
          if(res.status===523){
            throw new Error("Fake Store API is temporarily unavailable (523). Please try again shortly.")
          }
          throw new Error(`Failed to fetch products (${res.status}).`)
        }
      }catch(err){
        setError(err instanceof Error ? err : new Error("Failed to fetch products."));
      }finally{
        setLoading(false);
      }
    }
    getProducts();
  },[]);
  if(loading===true){
    return <p className='text-center text-2xl text-blue-300'> Loading...</p>
  }
  if(error!=null){
    return <p className='text-2xl text-center text-red-500'> {error.message}</p>
  }
  return (
    <div className="" >
      <input type="text" placeholder="Search by category..." 
      value={searchCategory} 
      onChange={(e) => setSearchCategory(e.target.value)} 
      className=' flex justify-center w-100 p-3 m-5 border rounded-lg' />
      
    <div className='grid grid-cols-1 sm:grid-cols-2 mt-10 mr-5 ml-5 md:grid-cols-3 lg:grid-cols-4'>
        {filteredProducts.map((productObj)=>{
          return (
          <div onClick={()=>gotoProduct(productObj)} key={productObj.id} className='shadow-2xl p-10 mb-10 rounded-2xl'>
            <img src={productObj.image} alt="" 
            className='h-44 object-contain block mx-auto mb-10' />
            <p>{productObj.title}</p>
          </div>
          )
        })}
    </div>
    </div>
  )
}

export default ProductsList