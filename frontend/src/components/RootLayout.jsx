import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";

function RootLayout() {

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container-page">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default RootLayout;