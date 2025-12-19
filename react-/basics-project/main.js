import nav from "./nav.js"
import part from "./parts.js"
 const main =()=>{
    return React.createElement("div",{id:"main"}, React.createElement(nav),React.createElement(part))
}
export default main