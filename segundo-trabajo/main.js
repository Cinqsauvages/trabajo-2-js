/* trabajo de funciones, calcular intereses  */
let plata = prompt('ingrese la cantidad de dinero que quiera poner en interes')
parseInt(plata)
let  banco = prompt('En que banco usted quiere ingresar el dinero?, Santander, Macro, Nativo o Provincia')

function interes(dinero, institucion){
    switch (institucion){
        case 'santander':
            alert('Usted eligio Banco Santander, posee una tasa de 21% anual')
            resultado = dinero * 0.21
            break
        case 'macro':
            alert('Usted eligio Banco Macro, posee una tasa de 25% anual')
            resultado = dinero * 0.25
            break
        case 'nativo':
            alert('Usted eligio Banco Nativo, posee una tasa de 30% anual')
            resultado = dinero * 0.3
            break
        default:
            alert('Por el momento no trabajamos con ese banco, intente otra vez')
            break
    }
    
}

function mostrar(){
    console.log('El dinero que ingreso es:' + plata + ' el interes que genera su dinero en un año es de ' + resultado)
}

interes(plata,banco.toLowerCase())
mostrar()