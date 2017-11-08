<center><h1>Compte-rendu #2 - 27/10/2017</h1></center>


## Sujets abordés

* [Liste des US](#liste-des-us)
* [Choix de l'environnement technique](#choix-de-lenvironnement-technique)
* [Environnement de travail](#environnement-de-travail)
* [Préparer la prochaine réunion](#préparer-la-prochaine-réunion)

<br>

## Liste des US

Nous avons établi la liste des US suivantes :
* connexion utilisateur
* création du profil
* ajout de vêtements
* recherche d'utilisateurs
* suggestion d'utilisateurs
* ajout d'utilisateurs
* gestion de looks (ensemble de vêtements)
* like ou rating
* commentaires
* administrer la communauté (commentaires abusifs...)

<br>

## Choix de l'environnement technique

* Front : React.js
* Back : Node.js
* BDD : Azure (service cloud Microsoft) sur lequel on utilisera une base NoSQL MongoDB. Nous l'utiliserons aussi pour stocker des fichiers (photos par exemple). Azure est plus accessible aux débutants qu'AWS et nous avons des experts à Soat (Luc, Vincent, Mickaël, Cyril...)

<br>

## Environnement de travail

•	Repo Github open source : gratuit et permet d'avoir accès à des outils extérieurs (notamment des outils d'intégration continue comme Travis ou Jenkins, ou des outils de ticketing)
•	Git Kraken (interface graphique Git)
•	Communication via Slack
•	Gherkin (description des US). Pour ceux qui utilisent vscode, voici *[une extension](https://marketplace.visualstudio.com/items?itemName=alexkrechik.cucumberautocomplete)* permettant d'avoir notamment la coloration syntaxique, des snippets et l'autocompletion pour rédiger des US en Gherkin

Il faudra vérifier quels autres produits tierces pouvant se connecter à Github il serait intéressant d'employer.

<br>

## Préparer la prochaine réunion

* Trouver un nom : pensez à quelques propositions
* Ecrire les US en Gherkin (choisissez 2 US dans la liste)
* Créer le repo Github et inviter tout le groupe
* Commencer à se former sur React : n'hésitez pas à demander une licence Pluralsight auprès de Soat (c'est une excellente plateforme regroupant une multitude de cours vidéo)
