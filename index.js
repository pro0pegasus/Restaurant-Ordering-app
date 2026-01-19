import menuArray from './data.js';


document.addEventListener('click', function(e){
    if(e.target.dataset.id){
        console.log(e.target.dataset.id);
    }
})

function addToCart(id){
    let cart = [];

}

function renderCart(){

}


function render () {
        // const {
        //     name,
        //     image,
        //     ingredients,
        //     price,
        //     id,
        //     emoji  
        // } = properties;

    let menuItem = ``;

    // const html = menu.map(function(item) {
    menuArray.forEach(function(array) {
        menuItem += `
        <div class="container">
            <div class="item-list">                        
                <img src="public/images/${array.image}" alt="Pizza Image"/>
                <div class="item-text">
                    <h2>${array.name}</h2>
                    <p class="item-description">${array.ingredients.join(', ')}</p>
                    <p>$${array.price}</p>
                    <div class="spacer">
                <button class="add-button" id="${array.id}">+</button>
                    </div>
                </div>
            </div>
        </div>
        `
    // }).join(" ");

    // return html; 
    });
    return menuItem;
}

document.getElementById('menu-list').innerHTML = render();