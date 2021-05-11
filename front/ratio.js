window.onload = ratio
window.onresize = ratio

function height (){
	var body = document.body,
    html = document.documentElement;

return(Math.max( body.scrollHeight, body.offsetHeight,html.clientHeight, html.scrollHeight, html.offsetHeight ))
}
function ratio (){
	let cardsBox = document.getElementById('cardsBox').children
	for (let i =0; i<cardsBox.length; i++){
		let hei = (cardsBox[i].offsetWidth*0.6).toString()
		cardsBox[i].style.height = hei+'px'

	}
	let html = document.getElementById('html')
	
		
		if (html.offsetHeight>=cardsBox.offsetHeight+100){
			html.style.height = (cardsBox.offsetHeight+100).toString()+'px'
		}
		else{
			html.style.height = height().toString()+'px'
		}
	
}

