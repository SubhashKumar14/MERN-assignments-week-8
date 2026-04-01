import { Outlet } from 'react-router'
import Header from './Header'
import Footer from './Footer'

function RootLayout() {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default RootLayout