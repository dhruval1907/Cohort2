import herotext from "./herotext.js"
import heroimage from "./heroimage.js"

const hero=()=>{
    return React.createElement("section",{className:"hero"},[
        React.createElement(herotext,{key:1}),
        React.createElement(heroimage,{key:2})
    ])
}

export default hero;