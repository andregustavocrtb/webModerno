const falaBissexto = () => console.log("Esse ano é bissexto")

function avaliaBissexto(ano){
    if(ano%400 === 0){
        return falaBissexto()
    } else if(ano%100 === 0){
        return falaBissexto()
    } else if(ano%4 === 0){
        return falaBissexto()
    } else{
        return console.log("Esse ano não é bissexto")
    }
}

avaliaBissexto(2020)
avaliaBissexto(2019)
avaliaBissexto(400)
avaliaBissexto(2016)