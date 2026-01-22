import menuArray from './data.js'

const orderBtn = document.getElementById('checkout-box')
const payBtn = document.getElementById('pay-btn')

orderBtn.addEventListener('click', function(){
        document.getElementById(`cc-box`).classList.toggle('hidden')
        renderCart()
})

// Handle payment form submission (prevents page reload)
const paymentForm = document.querySelector('.payment-form')
if (paymentForm) {
    paymentForm.addEventListener('submit', function(e) {
        e.preventDefault()

        // const nameInput = paymentForm.querySelector('input[type="text"]')
        // const name = nameInput ? nameInput.value.trim() : ''
        // const displayName = name || 'Customer'

        // const orderCompleteTitle = document.querySelector('#order-complete-box .order-complete-title')
        // if (orderCompleteTitle) {
        //     orderCompleteTitle.textContent = `Thanks, ${displayName}! Your order is on its way!`
        // }

        document.getElementById('order-box').classList.add('hidden')
        document.getElementById('cc-box').classList.add('hidden')
        document.getElementById('order-complete-box').classList.remove('hidden')

        // clear cart and update UI
        // cart = []
        // renderCart()
    })
}

document.addEventListener('click', function(e){
    if(e.target.dataset.add){
        addToCart(Number(e.target.dataset.add))
        renderCart()
    }
    
    if(e.target.dataset.remove){
        removeFromCart(Number(e.target.dataset.remove))
        renderCart()
    }
})

let cart = []

function addToCart(id){
    // we should find the the item price, from the object then calculate the totalprice. passe the results in renderCart function
    
    const getPrice = menuArray.find(function(item){
            return item.id === id       
    })
    
    const existingItem = cart.find(function(item){
            return item.id === id      
    })
    
    if (existingItem) {
        existingItem.quantity += 1
    } else{
        cart.push(getPrice)
    } 
}


// function addToCart(id){
//   const numericId = Number(id);
//   const item = menuArray.find(i => i.id === numericId);
//   if (!item) { console.warn('item not found', id); return; }
//   const existing = cart.find(c => c.id === numericId);
//   if (existing) existing.qty++;
//   else cart.push({...item, qty: 1});
// }

function removeFromCart(id) {
    const item = cart.find(function(itemId){
        return itemId.id === id
    })

    if (item.quantity > 1) {
        item.quantity --
    } else {
        cart = cart.filter(function(itemId){
           return itemId.id !== id
        })
    }
}

// function removeFrmCart(id){
//             console.log(cart)

//      cart = cart.find(function(item){ 
//         return item.id ===id
//     })
    
//     if (!item) return
    
//     if(cart.qty > 1){
//         cart.qty--
//     } else {
//         cart = cart.filter(function (item){
//             return item.id !== id
//         })
//     }
// }

// function checkout(){
//     document.getElementById(`cc-box`).classList.toggle('hidden')
// }

// function orderComplete(){
//     document.getElementById(`order-box`).classList.toggle('hidden')
//     document.getElementById(`order-complete-box`).classList.toggle('hidden')
// }

function renderCart() {
    let cartToFeed = ``
    let totalPrice = 0
    
    // cartToFeed += `<h2 class="checkout-title">Your Order</h2>`

    cart.forEach(function(item) {
        // rewrite it with .reduce() later
        const itemTotal = item.price * item.quantity
        totalPrice += itemTotal

        cartToFeed += `
            <div class="order-items">
                <p class="order-item">${item.name} 
                <span class="qtty">x${item.quantity}</span></p>
                <span class="spn-remove-btn">
                    <button class="remove-button" data-remove="${item.id}">Remove</button>
                </span>
                <p>$${itemTotal}</p>
            </div>
        `
    })
    
    cartToFeed += `
        <div class="total-price">
            <p>Total price:</p>
            <p class="price">$${totalPrice}</p>
        </div>
    `
    
    document.getElementById('order-details').innerHTML = cartToFeed
}



function render () {
    let html = ``

    // const html = menu.map(function(item) {
    menuArray.forEach(function(array) {
        html += `
        <div class="container">
            <div class="item-list">                        
                <img src="public/images/${array.image}" alt="${array.name} image"/>
                <div class="item-text">
                    <h2>${array.name}</h2>
                    <p class="item-description">${array.ingredients.join(', ')}</p>
                    <p>$${array.price}</p>
                    <div class="spacer">
                <button class="add-button" data-add="${array.id}">+</button>
                    </div>
                </div>
            </div>
        </div>
        `
    })
    
    // html +=`
    //     <div class="payment-container hidden" id="cc-box">
    //         <form class="payment-form">
    //             <h2 class="payment-title">Enter card details</h2>
    //                 <div class="input-group">
    //                     <input type="text" placeholder="Enter your name" required />
    //                     <input type="number" placeholder="Enter card number" required />
    //                     <input type="number" placeholder="Enter CVV" required />
    //                 </div>
    //             <button class="pay-button" type="submit">Pay</button>
    //         </form>
    //     </div>
    // `
    
    return html
}

document.getElementById('menu-list').innerHTML = render()







//             <section>
//                 <div class="order-complete-container">
//                     <h2 class="order-complete-title">Thanks, James! Your order is on its way!</h2>
//                 </div>
//             </section>

//             <section>
//                                 <div class="checkout-section">
//                     <h2 class="checkout-title">Your Order</h2>
//                         <div class="order-items">
//                             <p class="order-item">Pizza</p>
//                             <button class="remove-button">Remove</button>
//                             <p>$14</p>
//                         </div>
//                             <div class="total-price">
//                                 <p>Total price:</p>
//                                 <p class="price">$14</p>
//                             </div>
//                             <button class="purchase-button">Complete Order</button>
//                         </div>
//                     </div>
//             </section>

//             <section>
//                 <div class="payment-container">
//                     <form class="payment-form">
//                         <h2 class="payment-title">Enter card details</h2>
//                             <div class="input-group">
//                                 <input type="text" placeholder="Enter your name" required />
//                                 <input type="number" placeholder="Enter card number" required />
//                                 <input type="number" placeholder="Enter CVV" required />
//                             </div>
//                         <button class="pay-button" type="submit">Pay</button>
//                     </form>
//                 </div>
//             </section>