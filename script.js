const menuItems = [
    { name: "Kebab", price: 50 },
    { name: "Shawarma", price: 25 },
    { name: "Falafel", price: 15 },
    { name: "Baklava", price: 20 },
    { name: "Turkish Tea", price: 10 }
];

const menuDiv = document.getElementById("menu");
menuItems.forEach((item, index) => {
    const div = document.createElement("div");
    div.innerHTML = `<label>${item.name} - ${item.price} SAR</label> 
                     <input type="number" id="item${index}" min="0" value="0" onchange="updateTotal()">`;
    menuDiv.appendChild(div);
});

function updateTotal() {
    let total = 0;
    menuItems.forEach((item, index) => {
        const quantity = parseInt(document.getElementById(`item${index}`).value) || 0;
        total += quantity * item.price;
    });
    document.getElementById("total").innerText = total.toFixed(2);
}

function clearOrder() {
    document.getElementById("table").value = "";
    menuItems.forEach((_, index) => {
        document.getElementById(`item${index}`).value = "0";
    });
    updateTotal();
}
