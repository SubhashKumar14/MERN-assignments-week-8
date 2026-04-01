import { createBrowserRouter,RouterProvider, Navigate} from 'react-router'
import RootLayout from "./components/RootLayout"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"
import ProductsList from "./components/ProductsList"
import ContactUs from './components/ContactUs'
import Contacts from './components/Contacts'
import Product from './components/Product'

function App() {

  //routing configuration
  const routingObj=createBrowserRouter([
    {
      path:"/",
      element:<RootLayout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"productslist",
          element:<ProductsList/>
        },
        {
          path:"products",
          element:<Product/>
        },
        {
          path:"contactus",
          element:<ContactUs/>,
          children:
            [
              {
              path:"contacts",
              element:<Contacts/>
              }
            ]
        },
        {
          path:"*",
          element:<Navigate to="/" replace/>
        }
      ]
    }
  ])

  return <RouterProvider router={routingObj}/>
}

export default App