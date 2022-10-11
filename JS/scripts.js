
let dolar = 280
let euro = 290
let real = 71
let libra = 310 

function convertidor(pesos, dolar, euro, real, libra, moneda) {
    switch (moneda) {
        case "dolar":
            return pesos / dolar;
            break;
        case "euro":
            return pesos / euro;
            break;
        case "real":
            return pesos / real;
            break;
        case "libra":
            return pesos / libra;
            break;
        default:
            return error;
            break;
    }
}

// \n = ENTER

let salir = "1";
while(salir == "1"){
    let pesos=parseInt(prompt("Ingresa valor en pesos Argentinos"));
    let moneda=prompt("Elegir entre: \n dolar \n euro \n real \n libra");
    let resultado=convertidor(pesos, dolar, euro, real, libra, moneda);
    console.log("Resultado de la conversion = $"+resultado);
    alert("Total en la moneda seleccionada es: $"+resultado);
    salir=prompt("1 - Para seguir convirtiendo \n 2 - para salir ");
}

//Array

const monedas=[

    {
        moneda:"dolar",
        cotizacion:280,
        origen:"EEUU",
    },
    {
        moneda:"euro",
        cotizacion:290,
        origen:"Union Europea",
    },
    {
        moneda:"real",
        cotizacion:71,
        origen:"Brasil",
    },
    {
        moneda:"libra",
        cotizacion:310,
        origen:"EEUU",
    }, 
];

for(const moneda of monedas){
    console.log(moneda)
};