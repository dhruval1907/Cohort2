import {h1} from "./nav.js"

console.log(h1);

var main = ReactDOM.createRoot(document.querySelector("#container"))
main.render(h1())

