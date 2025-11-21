var arr = [
    { name: "love of salmankhan hirannn", image: "https://images.unsplash.com/photo-1763162944506-ee1fbaf5a733?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "viratpaglu", image: "https://i.pinimg.com/1200x/64/85/7c/64857c1bbf3f46959956b506027c5cb5.jpg" },
    { name: "naturelove", image: "https://images.unsplash.com/photo-1763156877609-d43b62d5f88c?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "streee", image: "https://images.unsplash.com/photo-1763152496539-302ef51ef66f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "thala for a reason", image: "https://i.pinimg.com/736x/c2/de/6b/c2de6b448b4177c659b76f718bc6306b.jpg" },
    { name: "orange peeled", image: "https://images.unsplash.com/photo-1762755647813-017e128a4ba0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "petlas of roses", image: "https://plus.unsplash.com/premium_photo-1762990917169-2ae8bd7328b3?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "peelsofrelieaf", image: "https://plus.unsplash.com/premium_photo-1671580099240-af3b3f33e635?q=80&w=731&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "light house ", image: "https://images.unsplash.com/photo-1763333868819-9ae30223a897?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "manifesting", image: "https://images.unsplash.com/photo-1763306934271-9eaa9aa30f05?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "call karu batcha", image: "https://images.unsplash.com/photo-1763307411487-173bd98b1af0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },

]


function showTheCards() {
    var clutter = "";
    arr.forEach(function (obj) {
        clutter += `<div class="box">
        <img class="cursor-pointer" src="${obj.image}" alt="image">
        <div class="caption">Lorem ipsum </div>
    </div>`;
    })

    document.querySelector(".container")
        .innerHTML = clutter;
}

