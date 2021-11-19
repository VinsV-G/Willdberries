const cart = function () {
	const modalClose = document.querySelector('.modal-close')
	const cartBtn = document.querySelector('.button-cart')
	const cart = document.getElementById('modal-cart')
	modalClose.onclick = () => {
		cart.classList.remove('show')
	}
	cartBtn.addEventListener('click', () => {
		cart.classList.add('show')
	})
}
cart()