// import React, { createElement } from "react"
import nav from "./nav.js"
 const main =()=>{
    return React.createElement("div",{id:"main"}, React.createElement(nav))
}

export default main