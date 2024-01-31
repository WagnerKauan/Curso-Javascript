let num = [5,7,2,4,6]


/*num.sort()
num.push(10)
console.log(num)
console.log(`O vetor tem ${num.length} posições.`)

for (var c = 0; c <= num.length;c += 1){
    console.log(`A posição ${c} tem o valor: ${num[c]}`)
}*/

for(pos in num){
    console.log(`A posição ${pos} tem o valor: ${num[pos]}`)
}