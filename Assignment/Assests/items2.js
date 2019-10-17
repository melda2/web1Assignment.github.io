const items = document.getElementById('items2');

const xhr = new XMLHttpRequest();

xhr.open('GET', '/Assests/Shirts.json', true);
xhr.onload = () => {
    if (xhr.status == 200){
        const array = JSON.parse(xhr.responseText);

        array.forEach(p => {
            let list = document.getElementById("items2");

            items.innerHTML = items.innerHTML + `<div class = "outer">

            <img src="${p.image}" height = "300"></img>
            <br>
            ${p.brand}
            <br>
            ${p.teamName}
            <br>
            ${p.price}
            </div>`
        });    
    }
}

xhr.send()