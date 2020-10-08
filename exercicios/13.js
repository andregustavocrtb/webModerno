const diaUtil = (n) => console.log(`O dia ${n} é dia útil`)
const finalDeSemana = (n) => console.log(`O dia ${n} é parte do fim de semana`)

function avaliaDia (num){
    if(num >= 1 && num <= 7){
        switch(num){
            case 1:
                return finalDeSemana(num)
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
                return diaUtil(num)
            case 7:
                return finalDeSemana(num)
        }
    } else{
        return console.log("Dia inválido")
    }
}

avaliaDia(1)
avaliaDia(2)
avaliaDia(3)
avaliaDia(4)
avaliaDia(5)
avaliaDia(6)
avaliaDia(7)
avaliaDia(8)