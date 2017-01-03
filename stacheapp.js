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
    button.addEventListener('click', function() {
        console.log('clicked on ' + product.wine);
        cart_array.push(product);
        console.log(cart_array);
        // showCart();
    })
}


function showCart() {
    let cartList = document.querySelector("#cart ul");
    cartList.innerHTML = '';

    for (let i = 0; i < cart.length; i++) {
        showCartItem(cart[i])
    }

    let subtotal = 0;
    for (let i = 0; i < cart.length; i++) {
        subtotal = subtotal + cart[i].cost;
    }

    //add number to document
    document.querySelector("#cart-subtotal").textContent = subtotal;
    document.querySelector("#cart-tax").textContent = subtotal * 0.1;
    document.querySelector("#cart-total").textContent = subtotal + (subtotal * 0.1);
}

function showCartItem(item) {
    let child = document.createElement("li");
    let parent = document.querySelector("#cart ul");
    let template = document.querySelector("#cart-template");

    child.innerHTML = Mustache.render(template.innerHTML, {
        wineName: item.wine,
        winePrice: item.cost,
    })

    parent.appendChild(child);


}
