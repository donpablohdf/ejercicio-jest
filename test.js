const unEuroEs = {
    "JPY": 141.93, // yen
    "USD": 0.98, // dolar
    "GBP": 0.88, // libra
}


test("Un euro es 0.9800 dolares", function(){
    const { fromEuroToDollar} = require('./app.js');
    // uso la funcion
    const dolares = fromEuroToDollar(1)
    //calculo el resultado esperado
    let resultado = 1 * unEuroEs["USD"];
    resultado = resultado.toFixed(4);
    // comparo con Jest
    expect(resultado).toBe(dolares);
})

test("Un dolar son 0.0070 Yenes", function(){
    const {fromDollarToYen} = require('./app.js');
    const yenes = fromDollarToYen(1)
    let resultado = 1 / unEuroEs["JPY"];
    resultado = resultado.toFixed(4);
    expect(resultado).toBe(yenes);
})

test("Un yen son 0.0088 libras", function(){
    const { fromYenToPound } = require('./app.js');
    const libras = fromYenToPound(1)
    let resultado = 1 * (unEuroEs["GBP"]/100);
    resultado = resultado.toFixed(4); 
    expect(resultado).toBe(libras);
})