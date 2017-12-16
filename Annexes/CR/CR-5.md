<center><h1>Compte-rendu #5 - 20/11/2017</h1></center>


## Sujets abordés

* [Organisation des branches](#organisation-branches)
* [React](#react)
* [Préparer la prochaine réunion](#préparer-la-prochaine-réunion)

<br>

## Organisation-branches

Il a été convenu que les nouvelles branches seraient directement tirées depuis Master.

**Nomenclature du nom de branche**: des minuscules uniquement, les mots sont séparés par des '_'

Une Pull Request par branche lorsqu'une fonctionnalité a été développée.

<br>

## React

### Initialisation du projet

Début du dev ! Le repo /src a directement placé dans le dossier /front à la racine du projet. A l'intérieur, deux dossiers très importants ont été ajouts : Components et Containers.
Components : des composants **réutilisables** qui contiennent directement du html
Containers : des contenants qui sont composés de plusieurs #components.

<br>

Le projet a été initialisé avec **[creat-react-app](https://github.com/facebookincubator/create-react-app)** permettant de créer une appli React sans avoir de configuration à faire. Une fois le projet récupéré, installer les modules situés dans le package.json (à la racine du projet) :
```
npm install
```
Un premier exemple a été mis en place pour montrer comment importer un component (le component Tata dans toto.jsx) dans un container (App.js à la racine de /src) et comment l'utiliser en lui passant des props en paramètres

Lancer la commande suivante pour afficher le résultat dans le navigateur
```
npm start
```

<br>

### Tests

On utilisera 
- **[Enzyme](https://github.com/airbnb/enzyme)** : API développée par Aribnb et conçue pour être employée avec react
- **[Chai](https://github.com/chaijs/chai)** : librairie d'assertions

*Ces modules ont été rajoutés dans le package.json (ils seront installés avec la commande **npm install**)*

Les fichiers de test seront placés dans les mêmes dossiers que les containers / components auxquels ils sont associés (pour faciliter les choses) et doivent respecter la nomenclature suivante : *nomfichier*.test.js

Le fichier **setupTests.js** a été rajouté dans le dossier /src pour que les tests avec Enzyme soient opérationnels

Un premier fichier de test toto.test.js a été créé, lancer la commande
```
npm test
```

<br>

## Préparer la prochaine réunion

1. Finaliser d'écrire ses propres Issues

2. Avoir commencé le dev de components et de containers

3. Pouvoir afficher quelque chose de fonctionnel 
