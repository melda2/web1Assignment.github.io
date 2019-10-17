const items = document.getElementById('items');

const xhr = new XMLHttpRequest();

xhr.open('GET', '/Assests/Boots.json', true);
xhr.onload = () => {
    if (xhr.status == 200){
        const array = JSON.parse(xhr.responseText);

        array.forEach(p => {
            let list = document.getElementById("items");

            items.innerHTML = items.innerHTML + `<div class = "outer">
            
            <img src="${p.image}" height = "300"></img>
            <br>
            ${p.brand}
            <br>
            ${p.name}
            <br>
            ${p.price}
            </div>`
        });    
    }
}

xhr.send()