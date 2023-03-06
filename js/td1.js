'use strict';

// M413 - TD1
let message = 'JavaScript is ok :)';
// alert( message);
console.log(message);

function onLoad() {
	console.log( 'In onLoad() function…');
	defineHeading1();
	defineHeading2();
	defineHeading3();
	defineHeading4();
	swapInnerHTML();
	dateAlter();
	setInterval(updateClock1, 1000);
	updateClock2();
	setInterval(updateGraphicClock, 1000);
	search();
}

function defineHeading1(){
	let newTitle = document.getElementById("title")
	let heading1 = newTitle.innerHTML;
  	document.title = heading1;
}

function defineHeading2(){
	let newTitleH2 = document.getElementsByTagName("h2");
	let heading2 = newTitleH2[0].innerHTML; 
	document.title = heading2;
}

function defineHeading3(){
	let newTitleH2 = document.getElementsByTagName("h2");
	if (newTitleH2.length === 0){
		document.title = "Thomas DENEUX";
	}
	else{
		let heading2 = newTitleH2[newTitleH2.length-1].innerHTML;
		document.title = heading2;
	}
}

function defineHeading4() {
	let newTitle = document.getElementsByClassName("firstOrLast");
	let heading;

	if (newTitle.length === 0){
		document.title = "Thomas DENEUX";
  	}
  	else if (newTitle.length % 2 === 0) {
    	heading = newTitle[0].innerHTML;
  	} else {
    	heading = newTitle[newTitle.length-1].innerHTML;
  	}

  	document.title = heading;
}

function swapInnerHTML() {
	let textep = document.getElementsByTagName("p");
	let texte1 = textep[0];
	let texte2 = textep[1];
	let texteTemp ;
	texteTemp = texte1.innerHTML;
	texte1.innerHTML = texte2.innerHTML;
	texte2.innerHTML = texteTemp;
}

function dateAlter(){

	let updateDate = document.getElementById("update-date");
	let today = new Date();
	let daynumber = today.getDate();
	let nbDay = today.getDay();
	let dayWeek = '';
	let month = '';
	let nbMonth = today.getMonth();
	let year = today.getFullYear();
	let author = '';

	let authorTemp = document.getElementsByTagName("meta");
	for (let i = 0; i < authorTemp.length; i++) {
		author = authorTemp[i].getAttribute("content")
	}	

	switch (nbDay) {
		case 1:
			dayWeek = 'lundi';
			break;
		case 2:
			dayWeek = 'mardi';
			break;
		case 3:
			dayWeek = 'mercredi';
			break;
		case 4:
			dayWeek = 'jeudi';
			break;
		case 5:
			dayWeek = 'vendredi';
			break;
		case 6:
			dayWeek = 'samedi';
			break;
		case 7:
			dayWeek = 'dimanche';
			break;
	}

	switch (nbMonth) {
		case 1:
			month = 'janvier';
			break;
		case 2:
			month = 'février';
			break;
		case 3:
			month = 'mars';
			break;
		case 4:
			month = 'avril';
			break;
		case 5:
			month = 'mai';
			break;
		case 6:
			month = 'juin';
			break;
		case 7:
			month = 'juillet';
			break;
		case 8:
			month = 'août';
			break;
		case 9:
			month = 'septembre';
			break;
		case 10:
			month = 'octobre';
			break;
		case 11:
			month = 'novembre';
			break;
		case 7:
			month = 'décembre';
			break;

	}


	
	updateDate.innerHTML = "Dernière modification : le " + dayWeek + " " + daynumber + " " + month + " " + year + " par " + author;
}

document.getElementById("get-nb-days").addEventListener("click",getNbDays);

function getNbDays() {
	let getNbDays = document.getElementById("get-nb-days");

	let today = new Date();
	let targetDate = new Date(2023, 6, 19);

	let timeBetween = targetDate - today;

	let daysLeft = Math.floor(timeBetween / (1000 * 60 * 60 * 24));
	
	if (daysLeft == 1) {
		getNbDays.innerHTML = "il reste " + daysLeft + " jour avant le 19 juillet 2023";
	} else {
		getNbDays.innerHTML = "il reste " + daysLeft + " jours avant le 19 juillet 2023";
	}
}

function updateClock1() {
	let getClock = document.getElementById("clock1");

	let today = new Date();
	let getHour = today.getHours();
	let getMinute = today.getMinutes();
	let getSeconds = today.getSeconds();



	getClock.innerHTML = getHour + ":" + getMinute + ":" + getSeconds;
}

function updateClock2() {
	setTimeout("updateClock2()", "1000");
	let getClock = document.getElementById("clock2");

	let today = new Date();
	let getHour = today.getHours();
	let getMinute = today.getMinutes();
	let getSeconds = today.getSeconds();

	getClock.innerHTML = getHour + ":" + getMinute + ":" + getSeconds;
}

function updateGraphicClock() {

	let today = new Date();
	let getHour = today.getHours();
	let getFirstDigitHour = Math.floor(getHour/10);
	let getLastDigitHour = getHour%10;
	let getMinute = today.getMinutes();
	let getFirstDigitMinute = Math.floor(getMinute/10);
	let getLastDigitMinute = getMinute%10;
	let getSeconds = today.getSeconds();
	let getFirstDigitSeconds = Math.floor(getSeconds/10);
	let getLastDigitSeconds = getSeconds%10;


	if (getHour < 10){
		document.getElementById("graphic-clock").innerHTML = '<img class="img-clock" src="../TD1/assets/images/'+ getLastDigitHour+'.gif" alt="'+getLastDigitHour+'">';
	} else {
		document.getElementById("graphic-clock").innerHTML = '<img class="img-clock" src="../TD1/assets/images/'+ getFirstDigitHour+'.gif" alt="'+getFirstDigitHour+'">';
		document.getElementById("graphic-clock").innerHTML += '<img class="img-clock" src="../TD1/assets/images/'+ getLastDigitHour+'.gif" alt="'+getLastDigitHour+'">';
	}

	document.getElementById("graphic-clock").innerHTML += ":";

	if (getMinute < 10){
		document.getElementById("graphic-clock").innerHTML += '<img class="img-clock" src="../TD1/assets/images/'+ getLastDigitMinute+'.gif" alt="'+getLastDigitMinute+'">';
	} else {
		document.getElementById("graphic-clock").innerHTML += '<img class="img-clock" src="../TD1/assets/images/'+ getFirstDigitMinute+'.gif" alt="'+getFirstDigitMinute+'">';
		document.getElementById("graphic-clock").innerHTML += '<img class="img-clock" src="../TD1/assets/images/'+ getLastDigitMinute+'.gif" alt="'+getLastDigitMinute+'">';
	}

	document.getElementById("graphic-clock").innerHTML += ":";

	if (getSeconds < 10){
		document.getElementById("graphic-clock").innerHTML += '<img class="img-clock" src="../TD1/assets/images/'+ getLastDigitSeconds+'.gif" alt="'+getLastDigitSeconds+'">';
	} else {
		document.getElementById("graphic-clock").innerHTML += '<img class="img-clock" src="../TD1/assets/images/'+ getFirstDigitSeconds+'.gif" alt="'+getFirstDigitSeconds+'">';
		document.getElementById("graphic-clock").innerHTML += '<img class="img-clock" src="../TD1/assets/images/'+ getLastDigitSeconds+'.gif" alt="'+getLastDigitSeconds+'">';
	}
}

const inputText = document.getElementById("inputText");

inputText.addEventListener("input", function() {
  if (isNaN(this.value)) {
    this.className = "red";
  } else if (this.value.length > 0) {
    this.className = "green";
  } else {
    this.className = "white";
  }
});


let imgs = document.querySelectorAll('.aside-img');
let bottoms = document.querySelectorAll('.bottom');

imgs.forEach(function(img, i) {
	img.addEventListener('click', function() {
		if (bottoms[i].style.display === 'block') {
			bottoms[i].style.display = 'none';
		} else {
			bottoms[i].style.display = 'block';
		}
	});
});


// let btnSumbit = 0;
// document.getElementById("sumbit-btn").addEventListener("click", btnTrue);
// document.getElementById("sumbit-btn").addEventListener("click", search);

// function btnTrue(){
// 	btnSumbit ++;
// 	console.log(btnSumbit);
// }

// let searchFirstTime = true;
// let savePage = '';
// let index = 0;
// let dictionary = {};

// function search(){
// 	if (btnSumbit > 0){
// 		if (searchFirstTime){
// 			savePage = document.body.innerHTML;
// 			searchFirstTime = false;

// 		}
// 		else {
// 			document.body.innerHTML = savePage;
// 		}
// 		let textSearch = document.getElementById("text-search").value;

// 		index = 0;
// 		dictionary = {};

// 		while (index < savePage.length) {
// 			let startIndex = savePage.indexOf(textSearch, index);
// 			if (startIndex === -1) {
// 				break; // sortir de la boucle si le texte de recherche n'est pas trouvé
// 			}

// 			let endIndex = startIndex + textSearch.length;
// 			dictionary[startIndex] = endIndex;

// 			// Mettre à jour l'index pour commencer la recherche à partir du caractère suivant après la fin de l'occurrence actuelle
// 			index = endIndex;
// 		}
// 		console.log(dictionary);
// 	}

// 	console.log(savePage);
// }


function search() {
	let searchText = document.getElementById('search-input').value;
	if (searchText === '') {
		return;
	}

	let body = document.getElementsByTagName('body')[0];
	if (!body.originalHTML) {
		body.originalHTML = body.innerHTML;
	} else {
		body.innerHTML = body.originalHTML;
	}

	let textNodes = getTextNodes(body);
	for (let i = 0; i < textNodes.length; i++) {
		let node = textNodes[i];
		let nodeText = node.textContent;
		let index = nodeText.toLowerCase().indexOf(searchText.toLowerCase());
		if (index >= 0) {
			let spanNode = document.createElement('span');
			spanNode.className = 'select';
			spanNode.style.backgroundColor = 'yellow';

			let matchingText = nodeText.substr(index, searchText.length);
			let beforeText = nodeText.substr(0, index);
			let afterText = nodeText.substr(index + searchText.length);
			let beforeNode = document.createTextNode(beforeText);
			let matchingNode = document.createTextNode(matchingText);
			let afterNode = document.createTextNode(afterText);

			node.parentNode.insertBefore(beforeNode, node);
			node.parentNode.insertBefore(spanNode, node);
			spanNode.appendChild(matchingNode);
			node.parentNode.insertBefore(afterNode, node);
			node.parentNode.removeChild(node);
		}
	}
}

function getTextNodes(node) {
	let textNodes = [];
	if (node.nodeType === Node.TEXT_NODE) {
		textNodes.push(node);
	} else {
		let children = node.childNodes;
		for (let i = 0; i < children.length; i++) {
			let childTextNodes = getTextNodes(children[i]);
			textNodes = textNodes.concat(childTextNodes);
		}
	}
	return textNodes;
}


