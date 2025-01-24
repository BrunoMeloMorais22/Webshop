

document.getElementById('enviar').addEventListener('click', function(event){
    event.preventDefault()

    let email = document.getElementById('email').value

    if(email === ""){
        alert("Por favor, coloque um email.")
    }

    else{
        alert('Email enviado com sucesso')
    }

    setTimeout(() => {
        window.location.href = 'login.html'
    }, 2000);
})