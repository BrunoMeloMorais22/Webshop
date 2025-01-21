

let carrinho = []

function carrinhoCompras(){
    let div = document.createElement('div')
    div.style.position = "absolute"
    div.style.background = "Lightgray"
    div.style.padding = "30px"
    div.style.marginTop = "35px"
    div.style.borderRadius = "20px"
    div.style.maxHeight = "400px"
    div.style.overflowY = "auto"
    div.style.zIndex = "1000"

    let h3 = document.createElement('h3')
    h3.innerHTML = "Itens no carrinho"
    div.appendChild(h3)

    let hr = document.createElement('hr')
    div.appendChild(hr)


    if(carrinho.length > 0){
        carrinho.forEach(item =>{
            let p = document.createElement('p')
            p.innerHTML = item
            p.style.marginTop = "10px"
            div.appendChild(p)
        });
    }

    else{
        let p = document.createElement('p')
        p.textContent = "Carrinho Vazio"
        p.style.marginTop = "20px"
        p.style.marginLeft = "23px"
        div.appendChild(p)
    }

    document.getElementById('carrinho').appendChild(div)
}

function adicionaraocarrinho(){
    let produto = event.target.parentElement.querySelector('h2').innerHTML
    let preco = event.target.parentElement.querySelector('p').innerHTML

    carrinho.push(produto, preco)

    alert('Seu produto foi adicionado ao carrinho')
}