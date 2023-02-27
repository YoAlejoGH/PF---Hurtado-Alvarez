//Local Storage

localStorage.setItem("name", "Terrenofrances")
localStorage.setItem("code", 55413)
localStorage.setItem("name", "AptoPoblado")
localStorage.setItem("code", 55613)
localStorage.setItem("name", "AptoLaureles")
localStorage.setItem("code", 66598)
localStorage.setItem("name", "AptoCartagena")
localStorage.setItem("code", 25698)
localStorage.setItem("name", "AptoBogota")
localStorage.setItem("code", 77869)

let names = localStorage.getItem("name")
console.log("Estos son los muebles que tenemos: ", names)
let code = localStorage.getItem("code")
console.log("Y estos son sus codigos de identificacion: ", code)

let items = localStorage.length;
console.log("Total de items es: ", items)

