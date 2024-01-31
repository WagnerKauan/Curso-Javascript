let amigo = {nome:'Wagner',idade:20,sexo:'M',peso:63.7,engordar(p=0){
    console.log('Engordou !')
    this.peso += p
}}
amigo.engordar(3)

console.log(`O meu amigo ${amigo.nome} tem ${amigo.peso}Kg`)