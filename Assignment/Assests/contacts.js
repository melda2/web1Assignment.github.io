const message = (e) =>{
    const name = document.getElementById('inputName').value

    window.alert(`Thank you ${name} for your messge`)
}

document.getElementById('submit').addEventListener('click', message)