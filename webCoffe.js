// tombol navbar nav start ==============================================================================================
let navPhone = document.querySelector('.navbar-nav')

const tMenu = document.getElementById('menu-phone');
tMenu.addEventListener('click', () => {
		navPhone.classList.toggle('active');
		// alert('ok')
})

document.addEventListener('click', (e) => {
	
	if(!tMenu.contains(e.target) && !navPhone.contains(e.target)){
		navPhone.classList.remove('active');
	}
})	
// tombol navbar nav end ==============================================================================================



// tombol untung tampilkan form search start ===========================================================================
let tSearch = document.getElementById('search');
const tempatSearch = document.querySelector('.navsearch');
const searchBox = document.getElementById('search-box');


tSearch.addEventListener('click', (e) => {
	tempatSearch.classList.toggle('active');
	navPhone.classList.toggle('act');
	searchBox.focus();  //fungsi ini untuk ketika form input muncul langsung bisa di ketik pencarian 
	e.preventDefault();
})

document.addEventListener('click', (e) =>{
	if(!tSearch.contains(e.target) && !tempatSearch.contains(e.target)){
		tempatSearch.classList.remove('active');
		navPhone.classList.remove('act');
	}	
})
// tombol untung tampilkan form search end ===========================================================================



// tombol detile keranjang start ====================================================================================
let keranjangProduct = document.getElementById('shopping-cart');
const displayCart = document.querySelector('.cart-shop')

keranjangProduct.addEventListener('click', (e) => {
	// alert('ok');
	displayCart.classList.toggle('activeT');
	e.preventDefault();
});

document.addEventListener('click', (e) => {
	if(!keranjangProduct.contains(e.target) && !displayCart.contains(e.target)){
		displayCart.classList.remove('activeT');
	}
})
// tombol detile keranjang end ====================================================================================

// modal box start ======================================================================================================

let buttonDettile = document.querySelectorAll('.view-dettile');
let buttonClose = document.querySelector('.close-icon');
const dettileProduct = document.querySelector('.modal-box');

buttonDettile.forEach(btn => {
	btn.addEventListener('click', (e) =>{
	dettileProduct.style.display = 'flex';
	e.preventDefault();
	});

});


buttonClose.addEventListener('click', (e) => {
	dettileProduct.style.display = 'none';
	e.preventDefault();
})


window.onclick = (e) => {
	if(e.target === dettileProduct){
		dettileProduct.style.display = 'none';
	}
}

// modal box end ======================================================================================================


//  cart trolly start ========================================================================================

let trash = document.querySelectorAll('.remove-cart-item');
const cartItem = document.querySelector('.cart-item');

for(let i=0; i<trash.length; i++){
	trash[i].addEventListener('click', (e) => {
		trash[i].parentElement.style.display = 'none';
		e.target.preventDefault();
	})
}

// trash.forEach(btn => {
// 	btn.addEventListener('click', (e) => {
// 	e.target.cartItem.classList.remove('active');
// 	})
// });


// cart trolly end =============================================================================================
