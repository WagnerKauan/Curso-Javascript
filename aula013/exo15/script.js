function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    fano = document.getElementById('txtano')
    res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')

        if (fsex[0].checked) {
            genero = 'homem'
            
            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src','image/menino.jpg')
            } else if (idade >=10 && idade < 21){
                //jovem
                img.setAttribute('src','image/jovem.jpg')
            }else if(idade >= 21 && idade < 51){
                //adulto
                img.setAttribute('src','image/homem.jpg')
            } else {
                //idoso
                img.setAttribute('src','image/idoso.jpg')
            }
            


        } else if (fsex[1].checked){
            genero = 'mulher'

            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src','image/menina.jpg')
            } else if (idade >=10 && idade < 21){
                //jovem
                img.setAttribute('src','image/jovem-mulher.jpg')
            }else if(idade >= 21 && idade < 51){
                //adulto
                img.setAttribute('src','image/mulher.jpg')
            } else {
                //idoso
                img.setAttribute('src','image/idosa.jpg')
            }
            

        }

        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}