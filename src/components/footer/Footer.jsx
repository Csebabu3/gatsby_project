// import React from "react"
// import "./footer.css"

// function Footer() {
//   return (
//     <div className="footer">
//       <p>Nature 2024. All rights reserved</p>
//     </div>
//   )
// }

// export default Footer

import React from "react"
import { MDBFooter } from "mdb-react-ui-kit"
import "bootstrap/dist/css/bootstrap.min.css"
import "./footer.css"

export default function Footer() {
  return (
    <MDBFooter bgColor="light" className=" text-center text-lg-left">
      <div className="footer text-center p-3">
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <a className="text-dark" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  )
}
