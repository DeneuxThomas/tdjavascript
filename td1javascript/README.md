# M413 - TD1 : Réponses aux Questions

exo 1)

6.1.1
1- évènement qui appelle la fonction : onLoad

2- méthode pour récupérer l'objet : document.getElementById("title")

3- propriété pour récupérer l'objet : innerHTML

6.1.2
1- méthode utilisée pour récupérer l’objet représentant la première
balise h2 : newTitleH2[0].innerHTML

6.1.3
1- nombre de balise h2 du document : newTitleH2.length

6.1.4
1- méthode utilisé pour récupérer les objets de ma classe : getElementsByClassName()

2- déterminé si un nombre est : si le nombre est paire cela veux dire que newTitle.length % 2 === 0 est vrai sinon cela sera donc impaire

6.2
1- différences entre les 3 propriétés innerHTML, innerText et textContent :
innerHTML permet de manipuler le contenu HTML complet d'un élément
innerText se concentrent sur le texte visible dans l'élément et ne prend pas en compte les balises HTML
textContent se concentrent sur le texte visible dans l'élément et inclut les balise HTML mais sans le style de présentation.

6.3
1- 1er auteur de la liste : on peut utiliser document.getElementsByTagName("meta")[0];

2- dernier auteur de la liste : for (let i = 0; i < authorTemp.length; i++) {
author = authorTemp[i].getAttribute("content")
}

exo 2)

7.0
1- obtention du nombre de jours : grâce à Date() je peux avoir la date actuel puis je créé une nouvelle date définit au 19 juillet 2023. Il suffit de les soustraires entre elles pour obtenir la différence. Le problème étant que le résultat est en miliseconde il a fallut faire : 1000 _ 60 _ 60 \* 24 pour obtenir le nombre de jours.

2- mise à jour du texte : quand on appuie sur le texte donc avec document.getElementById("get-nb-days").addEventListener("click",getNbDays); puis on fait le traitement et on finit par l'afficher avec un innerHTML.

7.1
1- méthode window utilisé : window.setInterval() est plus corréhent pour cette utilisation car on souhaite que la fonction s'exécute à des intervalles de tems régulier et ici toute les secondes.

exo 3)

8.1
1- évènement utilisé : addEventListener("input", function() { la fonction }

2- comment j'ai changer la couleur : je regarde si la valeur entré est une valeur numérique. Si oui je change la class de base dans "white" en "red". Si non et si il y a bien quelque chose de rentré, je change la class en "green". Sinon elle reste de la class "white".
