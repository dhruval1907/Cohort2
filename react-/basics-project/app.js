import nav from "./nav.js"
import hero from "./hero.js"

const app=()=>{
    return React.createElement("div",null,[React.createElement(nav,{key:1}),React.createElement(hero,{key:2})])
}
 export default app;