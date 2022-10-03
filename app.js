// one euro is:
const unEuroEs = {
    "JPY": 141.52, // yen
    "USD": 0.98, // dolar
    "GBP": 0.87, // libra
}
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * unEuroEs["USD"];
    valueInDollar = valueInDollar.toFixed(4);
   
    // retornamos el valor
    return valueInDollar;
}
const fromDollarToYen = function(valueInDollar){
    
    let valueInYen = valueInDollar * (unEuroEs["USD"]/unEuroEs["JPY"]);
    valueInYen = valueInYen.toFixed(4);    
    return valueInYen;
}
const fromYenToPound = function(valueInYen){
    
    let valueInPound = valueInYen * (unEuroEs["GBP"]/unEuroEs["JPY"]);
    valueInPound = valueInPound.toFixed(4);
    return valueInPound;
}
module.exports = { unEuroEs, fromEuroToDollar, fromDollarToYen, fromYenToPound}