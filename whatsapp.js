function sendOrder(){

let message = "Pedido Boutique Manu\n\n"

let total = 0

cart.forEach(p => {

message += `${p.name} - R$${p.price}\n`

total += p.price

})

message += `\nTotal: R$${total}`

const phone = "5599999999999"

window.open(
`https://wa.me/${phone}?text=${encodeURIComponent(message)}`
)

}
