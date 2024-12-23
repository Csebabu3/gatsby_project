import React from "react"
import Header from "./header/Header"
import Footer from "./footer/Footer"
// import Header from "./Header"
// import Footer from "./Footer"

function Layout({ children }) {
  return (
    <div style={{ height: "100%" }}>
      <Header />
      <div className="container mt-5 shadow-lg p-4 mb-4 bg-white rounded-5">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
