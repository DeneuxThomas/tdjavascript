# M413 - TD2 : Réponses aux Questions

Exercice 1

6.1
Comment avez-vous ajouté l'écouteur d'évènement et sur quel objet ?
addEventListener("click",initSelect);

6.2
Que se passe-t-il si vous utilisez currentTarget en lieu et place de target ?
Le curretTarget va changer l'élément parent sur lequel j'ai cliqué

6.3
Comment avez-vous ajouté l’élément ?
insertElement(input.target);

6.4
Comment avez-vous fait pour que la fonction select2() ignore les évèments de la div
donnée ci-dessus ?
if (input.target.id !== "insert-div" && !input.target.closest("#insert-div"))
cette condition va vérifié si l'élément cliqué par l'utilisateur n'est pas l'élément avec l'ID "insert-div" ou un de ses éléments parents.
