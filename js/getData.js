const getDataJson = () =>{
	const links = document.querySelectorAll('.navigation-link')

	const getData = () =>{
		fetch('/db/db.json')
			.then((res) => res.json())
			.then((data)	=>	{
				console.log(data)
				localStorage.setItem('goods', JSON.stringify(data))
			})
	}
	
	links.forEach((link) =>{
		link.addEventListener('click', (event) =>{
			event.preventDefault()
			getData()
		})
	})
	
	// localStorage.setItem('goods', JSON.stringify([1,2,3,4,5,6]))
	// const goods = JSON.parse(localStorage.getItem('goods'))
	// console.log(localStorage)
	// localStorage.removeItem('goods')
	// console.log(localStorage)
}
getDataJson()