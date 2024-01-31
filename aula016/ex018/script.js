let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let velores = []

function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
    return true
    }else{
    return false
    }
}

function inLista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true
} else{
    return false
}
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value,velores)){
        velores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor invalido ou já encontrado na lista.')}

    num.value = ''
    num.focus()
}

function finalizar(){
    if(velores.length == 0){
        window.alert('Adione valores antes de finalizar.')
    }else{
        let tot = velores.length
        let maior = velores[0]
        let menor = velores[0]
        let soma = 0
        let media = 0

        for(pos in velores){
            soma += velores[pos]

            if (velores[pos] > maior){
                maior = velores[pos]
            }

            if (velores[pos] < menor){
                menor = velores[pos]
            }
        }
        media = soma / tot
        
        res.innerHTML = ''

        res.innerHTML += `<p>Ao todo temos ${tot} numeros cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`

    }
}