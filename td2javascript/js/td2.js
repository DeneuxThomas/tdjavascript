/**
* 
* M413 - TD2
* * 
* 	@author Jean-Michel Bruneau
*	@copyright UCA - IUT -INFO
* 	@version	1.0
* 	@date			2021-01-31
*
*/
"use strict";

// M413 - TD2
let message = 'JavaScript is ok :)';
// alert( message);
console.log( message);

function onLoad() {
	console.log( 'Processus de chargement du document terminé…');
	
}

function initSelect(input){
	if (input.target.style.backgroundColor === "yellow"){
    	input.target.style.backgroundColor = null;
	}
	else{
		input.target.style.backgroundColor = "yellow";
	}
}

let temp = null;

function select(input){
	if (temp){
		if (input.target.style.backgroundColor === "pink"){
			input.target.style.backgroundColor = null;
			temp=null;
		}
		else {
			temp.target.style.backgroundColor = null;
			input.target.style.backgroundColor = "pink";
			temp = input;
		}
	}
	else {
		input.target.style.backgroundColor = "pink";
		temp = input;
	}
}

function select2(input) {
  	if (temp){
	  	if (input.target.id !== "insert-div" && !input.target.closest("#insert-div")) {
			if (input.target.style.backgroundColor === "blue"){
				insertElement(input.target);
				input.target.style.backgroundColor = null;
				temp=null;
			}
			else {
				insertElement(input.target);
				temp.target.style.backgroundColor = null;
				input.target.style.backgroundColor = "blue";
				temp = input;
			}
		}
	} else {
		if (input.target.id !== "insert-div" && !input.target.closest("#insert-div")) {
		insertElement(input.target);
    	input.target.style.backgroundColor = "blue";
      	temp = input;
    	}
 	}
}

function insertElement(target) {
  let insertDiv = document.getElementById("insert-div");
  let elementType = insertDiv.querySelector("#insert-type").value;
  let elementText = insertDiv.querySelector("#insert-text").value;
  let newElement = document.createElement(elementType);
  newElement.textContent = elementText;
  target.parentNode.insertBefore(newElement, target);
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



document.getElementById("search-btn").addEventListener("click",search);

function selectParent (input){
	if (temp) {
        if (input.target.id !== "insert-div" && !input.target.closest("#insert-div")) {
            if (input.target.style.backgroundColor === "blue") {
                insertElement(input.target);
                input.target.style.backgroundColor = null;
                input.target.parentElement.style.backgroundColor = null;
                temp = null;
            } else {
                insertElement(input.target);
                temp.target.style.backgroundColor = null;
                temp.target.parentElement.style.backgroundColor = null;
                input.target.style.backgroundColor = "blue";
                input.target.parentElement.style.backgroundColor = "orange";
                temp = input;
            }
        } else if (input.target.parentElement === temp.target) { 
            temp.target.parentElement.style.backgroundColor = "orange"; 
            temp = input;
        } else { 
            temp.target.style.backgroundColor = null;
            temp.target.parentElement.style.backgroundColor = null;
            insertElement(input.target);
            input.target.style.backgroundColor = "blue";
            input.target.parentElement.style.backgroundColor = "orange";
            temp = input;
        }
    } else {
        if (input.target.id !== "insert-div" && !input.target.closest("#insert-div")) {
            insertElement(input.target);
            input.target.style.backgroundColor = "blue";
            input.target.parentElement.style.backgroundColor = "orange";
            temp = input;
        }
    }
}


addEventListener("click",selectParent);



// Toute les ressources de la page sont complètement chargées.
window.onload = onLoad;


