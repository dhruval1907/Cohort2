class CreatePencil {
    constructor(name, company, price, color) {
        this.name = name;
        this.company = company;
        this.price = price;
        this.color = color;
    }

    erase() {
        document.body.querySelectorAll("h1").forEach((elem)=> {
            if (elem.style.color === this.color) {
                elem.remove()
            }
        })
    }

    write(text) {
        let h1 = document.createElement("h1")
        h1.textContent = text;
        h1.style.color = this.color
        document.body.appendChild(h1)
    }
}

let pencil1 = new CreatePencil("natrajpencil", "sheryians", "123", "red")
let pencil2 = new CreatePencil("natrajpencil", "sheryians", "123", "blue")