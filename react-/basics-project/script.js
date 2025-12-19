var h1 = React.createElement("h1",null,"kaise ho aap sb ")
var h2 = React.createElement("h2",null,"bhai mast hu tu bta")
var h3 = React.createElement("h3",null,"bhai mast hu tu bta")
var h4 = React.createElement("h4",null,"bhai mast hu tu bta")

var div = React.createElement("div",null,[h1,h2,h3,h4])

var root = ReactDOM.createRoot(document.querySelector("#container"))

// root.render(h1)
root.render(div)