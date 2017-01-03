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
let wine = null;

function init() {

    for (let i = 0; i < shop.length; i++) {
        let store_list = document.querySelector(".items_list");
        let store_item = document.createElement("li");
        store_item.setAttribute("class", "store_item");

        let item_description = document.createElement("p");
        item_description.setAttribute("class", "item_description");

        let price = document.createElement("p");
        price.setAttribute("class", "price");

        let buy_button = document.createElement("button");
        buy_button.setAttribute("class", "buy_button");

        let itemId = shop[i].id;
        buy_button.setAttribute("id", shop[i].id);

        // wine = shop[i].wine;
        store_item.textContent = shop[i].wine;
        item_description.textContent = shop[i].description;
        price.textContent = shop[i].cost;
        buy_button.textContent = "BUY";

        store_list.appendChild(store_item);
        store_item.appendChild(item_description);
        store_item.appendChild(price);
        store_item.appendChild(buy_button);


        buy_button.addEventListener("click", function(){
          buyit(shop[i].wine);

        });
    } //closing forloop init



    function buyit(wine) {
        let cart = document.querySelector(".cart_list");
        let add_item = document.createElement("li");
        add_item.setAttribute("class", "add_item");

        let item_price = document.createElement("p");
        item_price.setAttribute("class", "item_price");

        for (let j=0; j <= shop.length; j++) {
          console.log(shop[j]);
            add_item.textContent = shop[j].wine;
            item_price.textContent = shop[j].cost;

            cart.appendChild(add_item);
            add_item.appendChild(item_price);
        }
    }

}

window.addEventListener("load", init);
