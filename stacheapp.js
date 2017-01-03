var shop = [{
    wine: "Merlot",
    description: "California Merlot",
    cost: 11.99,
    id: 0
}, {
    wine: "Pinot Noir",
    description: "California Pinot Noir",
    cost: 14.59,
    id: 1
}, {
    wine: "Pino Grigio",
    description: "Crisp and fruity from Argentina",
    cost: 22.99,
    id: 2
}, {
    wine: "Red Blend",
    description: "Blend of red italian wines",
    cost: 13.99,
    id: 3,
}, ]

let cart_array = [];

window.addEventListener("load", function() {
    for (let i = 0; i < shop.length; i++) {
        showProducts(shop[i]);
    }
})

function showProducts(product) {
    let child = document.createElement("li");
    child.setAttribute("class", "list_item");
    let parent = document.querySelector("ul");
    let template = document.querySelector("#product-template");

    //  Mustache.render(template, values)
    child.innerHTML = Mustache.render(template.innerHTML, {
        wineName: product.wine,
        wineDescription: product.description,
        winePrice: product.cost.toFixed(2),
    });

    parent.appendChild(child);

    let button = child.querySelector("button");
    button.addEventListener('click', function(){
      console.log('clicked on ' + product.wine);
    })
}
