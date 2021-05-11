/*var myHeaders = new Headers();

var myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' };

function test (){
	fetch('http://localhost:8080/test', myInit)
	.then((response)=>{
		console.log('check')
		return(response)
	})
}
window.onload= document.write(test())*/

fetch("http://localhost:8080/data")
.then(response => response.json())
.then(response => {
console.log(JSON.stringify(response))

var tempe = document.getElementById("temperature") ;
tempe.innerHTML = tempe.innerHTML
			.replace('{{ temperature }}', JSON.parse(JSON.stringify(response)).temp)


var humid = document.getElementById("humiditee") ;
humid.innerHTML = humid.innerHTML
			.replace('{{ humiditee }}', JSON.parse(JSON.stringify(response)).humi)


var pluiee = document.getElementById("pluie") ;
pluiee.innerHTML = pluiee.innerHTML
			.replace('{{ pluie }}', JSON.parse(JSON.stringify(response)).rain)


var poid = document.getElementById("poids") ;
poid.innerHTML = poid.innerHTML
			.replace('{{ poids }}', JSON.parse(JSON.stringify(response)).weig)
var midDiv= document.getElementById("midDiv")
midDiv.innerHTML=midDiv.innerHTML
			.replace('{{ temperature }}', JSON.parse(JSON.stringify(response)).temp)
			.replace('{{ humiditee }}', JSON.parse(JSON.stringify(response)).humi)
			.replace('{{ pluie }}', JSON.parse(JSON.stringify(response)).rain)
			.replace('{{ poids }}', JSON.parse(JSON.stringify(response)).weig)



})
.catch(error => alert("Erreur : " + error));

