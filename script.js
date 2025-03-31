async function getProducts() {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    
    let productList = "";
    products.forEach(product => {
        productList += `
            <div>
                <img src="${product.image}">
                <p>${product.title} - ₹${product.price}</p>
                <button onclick="buyNow(${product.price})">Buy Now</button>
            </div>
        `;
    });
    document.getElementById("products").innerHTML = productList;
}

async function uploadDesign() {
    const file = document.getElementById("fileInput").files[0];
    if (!file) return alert("Select a file first!");

    let formData = new FormData();
    formData.append("image", file);

    const response = await fetch("https://api.imgur.com/3/upload", {
        method: "POST",
        headers: { "Authorization": "Client-ID YOUR_IMGUR_CLIENT_ID" },
        body: formData
    });

    const result = await response.json();
    alert("Design Uploaded! URL: " + result.data.link);
}
