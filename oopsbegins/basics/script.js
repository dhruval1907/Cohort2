class CreatePencil {
    constructor(name, company, price, color) {
        this.name = name;
        this.company = company;
        this.price = price;
        this.color = color;
    }

    write(text) {
        let h1 = document.createElement("h1")
        h1.textContent = text;
        h1.style.color = this.color
}

let pencil1 = new CreatePencil("natrajpencil", "sheryians", "123", "red")