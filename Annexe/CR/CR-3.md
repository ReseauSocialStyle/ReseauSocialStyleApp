<center><h1>Compte-rendu #3 - 06/11/2017</h1></center>


## Sujets abordés

* [Node](#node)
* [Normes Javascript (ES2015)](#es2015)
* [Branches Git](#branches-git)
* [Specs]()
* [Préparer la prochaine réunion](#préparer-la-prochaine-réunion)

<br>

## Node

### Fichier package.json
Ce fichier contient notamment
* la liste des modules (packages) installés et nécessaire au développement de l'application
* la liste des scripts : l'idée étant d'avoir des raccourcis pour lancer des tâches (test, build, start...)

### NPM (Node Package Manager)
NPM est installé de base avec Node.js
* permet d'installer des packages qui seront placés dans le dossier */node_modules* du projet
* le fichier *package.json* contiendra ce package dans l'object dependencies (ou devDependencies)

### Quelques commandes basiques
Initialiser un projet avec npm : créer le fichier *package.json* en demandant des informations pour décrire le projet 
```
npm init
```

Installer le package React et toutes ses dépendances (les modules téléchargés seront placés dans le dossier */node_modules*)
```
npm install react
```
Généralement, on utilise l'une des deux options suivantes lors de l'installation d'un package :
* *--save* permet de signaler directement dans le fichier *package.json* que notre projet est dépendant de ce package pour pouvoir fonctionner
* *--save-dev* permet de signaler que notre projet dépend de ce package seulement dans le cadre du développement (test, minification...)
```
npm install react --save
npm install react --save-dev
```

Utiliser des commandes de script (commandes à définir dans le package json)
```
npm run *commande*
```
Des commandes prédéfinies 'usuelles' (telles que *test*, *start*, *build*...) ne nécessitent pas la saisie de run pour être exécutées 
```
npm test
npm start
npm build
```
Il est nécessaire d'utiliser *run* pour une commande créée
```
npm run toto
```

on peut définir des commandes de build pour différents environnements (prod, recette...)

<br>

## ES2015

ES2015 (ou ES6) détaille les nouvelles normes Javascript et apporte de nouvelles notions
* arrow functions
* destructuring
* création d'objets
* let et const
* import / export
* ...


ES2017 (ES2015 : notions : arrow functions, destructuring...)
ESLint - Prettier (surcouche à ESLint : plugin pour rajouter d'autres règles) : fichier .eslintrc

[Node.green](http://node.green) : permet de voir les fonctionnalités ES6 supportées par les différentes versions de Node.js

Dans notre projet Node, cette commande permet de charger la fonction React depuis le package se trouvant dans le dossier */node_modules*
```javascript
import React from 'react'
```
Pour charger plusieurs fonctions spécifiques dans un même package
```js
import { Provider, connect } from 'react-redux'
```

<br>

## Branches Git

La branche **master** ne contient que le code sur lequel tout le monde est d'accord (code review effectuées à partir d'une autre branche que l'on mergera avec la branch master après validation)

<br>

## Specs

Pour travailler sur les specs :
* une branche **feature/specs** a été créée à partir de laquelle chacun crée une branche par spec qu'il a écrite
* la personne chargée de la spec review sera chargée de relire, commenter et faire des remarues/suggestions sur la spec
* après discussion et validation sur la branche, celle-ci sera mergée avec la branche **feature/spec**
* lorsque toutes les specs seront validées, la branche **feature/spec** sera mergée avec la branch **master**

*(On doit avoir une branche featre/spec dans laquelle il y a une sous-branche pour chaque US)*

Mahmoud a écrit les commandes principales pour pour effectuer ces opérations dans *[ce document](/Specs/README.md)*

<br>

## Préparer la prochaine réunion

* A finaliser avant la réunion de lundi : refaire le tour des specs (spec review décrite dans la [section précédente](#specs)). Pour rappel, le tableau suivant récapitule pour chaque spec qui l'a écrite et qui doit faire la review :

| US                        	| Rédacteur        	| Spec Review 	|
|-------------------------------|-------------------|---------------|
| connexion utilisateur     	| Alain         	| Marion      	|
| création du profil        	| Dhouha        	| Marion      	|
| ajout de vêtements        	| Marion           	| Dhouha      	|
| recherche d'utilisateurs  	| Alain         	| Monireh     	|
| suggestion d'utilisateurs 	| Mahmoud          	| Alain       	|
| ajout d'utilisateurs      	| Mahmoud          	| Marion      	|
| gestion de looks          	| Marion           	| Monireh     	|
| like ou rating            	| Monireh          	| Alain       	|
| commentaires              	| Monireh          	| Mahmoud     	|
| administrer la communauté 	| Dhouha        	| Mahmoud     	|
| suppression de vêtements  	| Monireh          	| Alain       	|
| création d'une wishlist   	| Alain            	| Dhouha      	|

* Installer [Node.js](https://nodejs.org) 8.9 LTS 

* Lire l'article *[Understanding the GitHub Flow](https://guides.github.com/introduction/flow/)* (envoyé par Vincent) pour ceux qui ne sont pas à l'aise avec Git et le système de branches, commit pull request merges...

* Commencer ou continuer la formation sur React. Vous pouvez déjà commencer par ce *[ce tuto](http://buildwithreact.com/tutorial)* envoyé par Vincent


Mahmoud a fait un tuto pour expliquer les différentes commandes à effectuer pour le spec review
=> on a une branche feature/spec dans laquelle il y a une sous-branche par US
