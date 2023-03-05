'use strict';

// M413 - TD1
let message = 'JavaScript is ok :)';
// alert( message);
console.log(message);

function onLoad() {
	console.log('In onLoad() function…');
	defineHeading1();
	//defineHeading2();
	defineHeading3();
	defineHeading4();
	swapInnerHTML();
	dateAlter();
}

function defineHeading1() {
	let newTitle = document.getElementById("title")
	let heading1 = newTitle.innerHTML;
	document.title = heading1;
}

function defineHeading2() {
	let newTitleH2 = document.getElementsByTagName("h2");
	let heading2 = newTitleH2[newTitleH2.length - 1].innerHTML; //on met 0 dans [] si on veut le premier
	document.title = heading2;
}

function defineHeading3() {
	let newTitleH2 = document.getElementsByTagName("h2");
	// console.log(newTitleH2.length);
	if (newTitleH2.length === 0) {
		document.title = "Thomas DENEUX";
	}
	else {
		defineHeading2();
	}
}

function defineHeading4() {
	let newTitle = document.getElementsByClassName("firstOrLast");
	let heading;

	if (newTitle.length === 0) {
		document.title = "Thomas DENEUX";
	}
	else if (newTitle.length % 2 === 0) {
		heading = newTitle[0].innerHTML;
	} else {
		heading = newTitle[newTitle.length - 1].innerHTML;
	}

	document.title = heading;
}

function swapInnerHTML() {
	let textep = document.getElementsByTagName("p");
	let texte1 = textep[0];
	let texte2 = textep[textep.length - 1]
	let texteTemp;
	texteTemp = texte1.innerHTML;
	texte1.innerHTML = texte2.innerHTML;
	texte2.innerHTML = texteTemp;
}

function dateAlter() {
	let updateDate = document.getElementById("update-date")
	let today = new Date();
	let daynumber = today.getDay();

	let author = document.getElementsByName("author");
	updateDate.innerHTML = "Dernière modification : le " + daynumber;
	//  + today.getMonth + today.getFullYear + "par" + author;
}

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
