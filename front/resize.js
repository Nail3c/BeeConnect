var lastMoved = 0
var middleState = 0

function resize (cardbox,child){
	if(child==-1){child=lastMoved}
	lastMoved = child
	var card = cardbox.children[child]

	var midDiv= document.getElementById('midDiv')

	var rect = card.getBoundingClientRect();
	var trax = ((window.innerWidth/2)-(card.offsetWidth/2))-rect.left
	var tray = ((window.innerHeight/2)-(card.offsetHeight/2))-rect.top


	rect = card.getBoundingClientRect();

	if (middleState==0){
	card.style.transform=`translate(${trax.toString()+'px'}, ${tray.toString()+'px'})`
	midDiv.style.opacity='100'
	midDiv.style.transform='scale(3)'
	document.getElementById('header').style.opacity='0'
	if(child==0){midDiv.innerHTML=midDiv.innerHTML.replace('{{ title }}', 'Température').replace('{{ content }}', '{{ temperature }}')}
		
	else if (child==1){midDiv.innerHTML=midDiv.innerHTML.replace('{{ title }}', 'Humiditée').replace('{{ content }}', '{{ humiditee }}')}

	else if (child==2){midDiv.innerHTML=midDiv.innerHTML.replace('{{ title }}', 'Pluie').replace('{{ content }}', '{{ pluie }}')}

	else if (child==3){midDiv.innerHTML=midDiv.innerHTML.replace('{{ title }}', 'Poids').replace('{{ content }}', '{{ poids }}')}
	setTimeout(()=>{
		document.getElementById('cardsBox').style.opacity='0'
	},100)
	middleState=1
	}

	else{
	midDiv.style.opacity='0'
	midDiv.style.transform='scale(0.000000000000000001)'
	card.style.transform=`scale(1)`
	document.getElementById('header').style.opacity='100'
	setTimeout(()=>{
		midDiv.innerHTML=midDiv.innerHTML.replace('Température', '{{ title }}').replace('{{ temperature }}', '{{ content }}')
									 .replace('Humiditée', '{{ title }}').replace('{{ humiditee }}', '{{ content }}')
									 .replace('Pluie', '{{ title }}').replace('{{ pluie }}', '{{ content }}')
									 .replace('Poids', '{{ title }}').replace('{{ poids }}', '{{ content }}')
		document.getElementById('cardsBox').style.opacity='100'
	},100)
	
	middleState=0
	}

	
	


}

