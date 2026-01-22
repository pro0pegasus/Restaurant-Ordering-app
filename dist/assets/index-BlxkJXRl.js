(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function i(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(n){if(n.ep)return;n.ep=!0;const r=i(n);fetch(n.href,r)}})();const u=[{name:"Pizza",image:"pizza.png",ingredients:["pepperoni","mushrom","mozarella"],id:0,price:14,emoji:"🍕",quantity:1},{name:"Hamburger",image:"burger.png",ingredients:["beef","cheese","lettuce"],price:12,emoji:"🍔",id:1,quantity:1},{name:"Beer",image:"beer.png",ingredients:["grain, hops, yeast, water"],price:12,emoji:"🍺",id:2,quantity:1}],l=document.getElementById("checkout-box");document.getElementById("pay-btn");l.addEventListener("click",function(){document.getElementById("cc-box").classList.toggle("hidden"),d()});const a=document.querySelector(".payment-form");a&&a.addEventListener("submit",function(e){e.preventDefault(),document.getElementById("order-box").classList.add("hidden"),document.getElementById("cc-box").classList.add("hidden"),document.getElementById("order-complete-box").classList.remove("hidden")});document.addEventListener("click",function(e){e.target.dataset.add&&(m(Number(e.target.dataset.add)),d()),e.target.dataset.remove&&(p(Number(e.target.dataset.remove)),d())});let s=[];function m(e){const t=u.find(function(o){return o.id===e}),i=s.find(function(o){return o.id===e});i?i.quantity+=1:s.push(t)}function p(e){const t=s.find(function(i){return i.id===e});t.quantity>1?t.quantity--:s=s.filter(function(i){return i.id!==e})}function d(){let e="",t=0;s.forEach(function(i){const o=i.price*i.quantity;t+=o,e+=`
            <div class="order-items">
                <p class="order-item">${i.name} 
                <span class="qtty">x${i.quantity}</span></p>
                <span class="spn-remove-btn">
                    <button class="remove-button" data-remove="${i.id}">Remove</button>
                </span>
                <p>$${o}</p>
            </div>
        `}),e+=`
        <div class="total-price">
            <p>Total price:</p>
            <p class="price">$${t}</p>
        </div>
    `,document.getElementById("order-details").innerHTML=e}function f(){let e="";return u.forEach(function(t){e+=`
        <div class="container">
            <div class="item-list">                        
                <img src="public/images/${t.image}" alt="${t.name} image"/>
                <div class="item-text">
                    <h2>${t.name}</h2>
                    <p class="item-description">${t.ingredients.join(", ")}</p>
                    <p>$${t.price}</p>
                    <div class="spacer">
                <button class="add-button" data-add="${t.id}">+</button>
                    </div>
                </div>
            </div>
        </div>
        `}),e}document.getElementById("menu-list").innerHTML=f();
