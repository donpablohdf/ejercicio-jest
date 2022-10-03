const { unEuroEs} = require('./app.js');


test("Un euro es 0.9800 dolares", function(){
    const { fromEuroToDollar} = require('./app.js');
    // uso la funcion
    const dolares = fromEuroToDollar(1)
    //calculo el resultado esperado
    let resultado = 1* unEuroEs["USD"];
    resultado = resultado.toFixed(4);
    // comparo con Jest
    expect(resultado).toBe(dolares);
})

test("Un dolar son 0.0069 Yenes", function(){
    const {fromDollarToYen} = require('./app.js');
    const yenes = fromDollarToYen(1)
    let resultado = 1 * (unEuroEs["USD"]/unEuroEs["JPY"])
    resultado = resultado.toFixed(4);
    expect(resultado).toBe(yenes);
})

test("Un yen son 0.0061 libras", function(){
    const { fromYenToPound } = require('./app.js');
    const libras = fromYenToPound(1)
    let resultado = 1 * (unEuroEs["GBP"]/unEuroEs["JPY"]);
    resultado = resultado.toFixed(4); 
    expect(resultado).toBe(libras);
})