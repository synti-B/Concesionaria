// módulo autos, se crear un objeto literal llamado concesionaria que contendrá todas las funcionalidades que el cliente solicita.
//Por último, nuestro objeto literal debe tener un atributo llamado autos que contenga la lista de automóviles importada anteriormente.

let autos = require('./concesionaria');
let persona = require('./personas');
const concesionaria = {
    persona: persona,
    autos: autos,
    // buscarAuto que recibe por parámetro la patente y 
    //devuelva el auto al cual le corresponde. En caso de no encontrar el mismo, retorna null.
    buscarAuto: function (patente) {
        for (let i = 0; i < autos.length; i++) {
            if (autos[i].patente == patente) {
                return autos[i];
            }
        } return null;

    },
    //venderAuto recibe patente y, en caso de encontrar al automóvil, le asigna el estado de vendido.
    venderAuto: function (patente) {
        let autos = this.buscarAuto(patente);
        return autos.vendido = true;
    },
    // autosParaLaVenta devuelve lista de autos para la venta.
    autosParaLaVenta: function () {
        return autos.filter(function (auto) {
            return auto.vendido == false;
        });
    },
    // autosNuevos devuelve lista de autos 0km(menores a 100km)
    autosNuevos: function (autos) {
        let autosVenta = this.autosParaLaVenta();
        let ceroKm = autosVenta.filter(function (auto) {
            return auto.km < 100;
        })
        return ceroKm;
    },
    //listaDeVentas devuelve una lista que contiene el precio de venta de cada auto vendido
    
    listaDeVentas: function () {
        listaXVenta = [];
        for (let i = 0; i < this.autos.length; i++) {
            if (this.autos[i].vendido === true) {
                listaXVenta.push(autos[i].precio);
            }
        } return listaXVenta;
    },
    //totalDeVentas devuelve la sumatoria del valor de todas las ventas realizadas.
    totalDeVentas: function () {
        return this.listaDeVentas().reduce(function (totalDeVenta, ventas) {
            return totalDeVenta + ventas;
        }, 0)
    },
    // puedeComprar que reciba por parámetro un auto y una persona y devuelva true si la misma puede comprar el auto.
    puedeComprar: function (autos, persona) {
        let precioCuotas = autos.precio / autos.cuotas;
        // el costo total: si el total de un auto excede lo que la persona considera caro, no va a comprar el auto. 
        //capacidad de pago en cuotas: si la capacidad de pago en cuotas supera al costo de la cuota, va a poder pagarlo.ambas condiciones se deben cumplir
        if ((autos.precio < persona.capacidadDePagoTotal) && (precioCuotas < persona.capacidadDePagoEnCuotas)) {
            return true;
        } else { return false };

    },
   //autosQuePuedeComprar, que recibe una persona y devuelve la lista de autos que puede comprar.
    autosQuePuedeComprar: function (persona) {
        let listaAutosCompra = [];
        this.autosParaLaVenta().forEach(function (auto) {
            let losQPuedeComprar = concesionaria.puedeComprar(auto, persona);
            if (losQPuedeComprar) {
                listaAutosCompra.push(auto);
            }
        })
        return listaAutosCompra;
    },

}

    // return listaAutosCompra;

