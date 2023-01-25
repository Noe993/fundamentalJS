let invoice={
    number: '1',
    client:'livinglab',
    currency:'usd',
    coords:{
        lat:42.0,
        lon:-108.1
    },
    services:['LAPTOPS','COFFE','INTERNET'],
    location:{cp:'31100',address:'AV AMERICAS'},
    subtotal:500,
    IVA:80
}
console.log(invoice)
//podemos acceder a metodos de difeerentes maneras
console.log('Cliente:', invoice.client);
console.log('Cliente:', invoice['client']);
console.log('Latitud:', invoice.coords.lat);

//calcula el ultimo servicio que le ofrecemos a la empresa
console.log('Ultimo servicio:',
invoice.services[invoice.services.length -1]);
document.writeln(invoice.services[invoice.services.length -1]);