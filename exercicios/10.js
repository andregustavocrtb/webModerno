function divisivelPor3 (num) {
    teste = num%3
    if(teste === 0){
        return true
    } else{
        return false
    }
}

console.log(divisivelPor3(6))
console.log(divisivelPor3(77))
console.log(divisivelPor3(48))
console.log(divisivelPor3(13))