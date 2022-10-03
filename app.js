// one euro is:
const unEuroEs = {
    "JPY": 141.93, // yen
    "USD": 0.98, // dolar
    "GBP": 0.88, // libra
}
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * unEuroEs["USD"];
    valueInDollar = valueInDollar.toFixed(4);
   
    // retornamos el valor
    return valueInDollar;
}
const fromDollarToYen = function(valueInDollar){
    
    let valueInYen = valueInDollar / unEuroEs["JPY"];
    valueInYen = valueInYen.toFixed(4);
    
    return valueInYen;
}
const fromYenToPound = function(valueInYen){
    
    let valueInPound = valueInYen * (unEuroEs["GBP"]/100);
    valueInPound = valueInPound.toFixed(4);
    return valueInPound;
}
let valor_euroDolar= 1* unEuroEs["USD"];
let valor_DolarYen= 1 * unEuroEs["JPY"];
let valor_YenPound= 1 * unEuroEs["GBP"];

console.log("un dolar es "+valor_euroDolar+" euro" )
console.log("un yen es "+ valor_DolarYen+" dolar")
console.log("un yen es "+ valor_YenPound+" libras")

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound}