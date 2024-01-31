var agora = new Date()
var dia = agora.getDay()

switch(dia){
    case 0:
        console.log(`Domindo`)
        break

    case 1:
        console.log(`Segunda`)
        break
        
    case 2:
        console.log(`terça`)
        break

    case 3:
        console.log(`Quarta`)
        break

    case 4:
        console.log(`Quinta`)
        break

    case 5:
        console.log(`sexta`)
        break
    
    case 6:
        console.log(`sabádo`)
        break

    default:
        console.log('[ERRO] Dia inválido !')
        break
}