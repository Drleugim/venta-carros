//Ejercicio 01

function numDuplicados (cadena){
    var repetidosArray = []
    var input = cadena.split('')
    var repetidos = 0

    for (var i=0; i < input.length; i++){
        if(input.filter(x => x == input[i]).length > 1){
            if(repetidosArray.filter(x => x == input[i]).length == 0){
                repetidosArray.push(input[i])
            }
        }
    }
    repetidos = repetidosArray.length
    return repetidos
}

console.log(numDuplicados("abcaa")); // 1
console.log(numDuplicados("abab")); // 2
console.log(numDuplicados("abc")); // 0