# 🚀 Space Crew Front-end

<p><img src="https://img.shields.io/github/last-commit/mariegautron/space-crew-front.svg?style=flat-square" alt="shields"></p>


Space Crew est une application web de gestion d'équipages spatiaux, conçue pour aider les administrateurs à suivre les membres d'équipage assignés à chaque mission. Le front-end de l'application est développé avec **React, ViteJS et Chakra UI**.

Le projet a été créé pour aider les entreprises spatiales et les agences gouvernementales à mieux gérer leurs équipages d'astronautes. Avec une interface simple, conviviale et personnalisable, Space Crew est la solution idéale pour les missions spatiales de toutes tailles.

Nous espérons que vous apprécierez cette application et que vous trouverez toutes les fonctionnalités dont vous avez besoin pour gérer efficacement votre équipage spatial.

![Preview application Space Crew](/public/preview.png)


## 👨‍💻 Technologies utilisées

- [React](https://fr.legacy.reactjs.org/docs/getting-started.html) - une bibliothèque JavaScript pour la création d'interfaces utilisateur.
- [ViteJS](https://vitejs.dev/) - un outil de développement rapide et léger pour la création d'applications web modernes.
- [Chakra UI](https://chakra-ui.com/getting-started) - une bibliothèque de composants d'interface utilisateur pour React, qui permet de créer des interfaces personnalisées, esthétiques et accessibles.
- [React Query](https://tanstack.com/query/v3/) - une bibliothèque pour la gestion des requêtes côté client.

## 🤔 Pourquoi avoir choisi ces technologies ?

**React** a été choisi pour sa popularité, sa flexibilité et sa réactivité, qui permettent de créer facilement des interfaces utilisateur dynamiques et performantes.

**ViteJS** a été choisi pour sa rapidité de compilation et de développement, ainsi que pour son support des fonctionnalités modernes de JavaScript, telles que les modules ECMAScript.

**Chakra UI** a été choisi pour sa personnalisation facile, sa compatibilité avec React et son accessibilité, qui permettent de créer des interfaces esthétiques et conviviales.

**React Query** a été choisi pour sa simplicité d'utilisation et sa gestion performante des requêtes côté client, offrant ainsi une expérience utilisateur optimale.

## 💻 Installation

Pour installer et exécuter le projet localement, vous devez avoir Node.js et npm (ou yarn) installés sur votre machine.

Clonez le dépôt GitHub :

```
git clone https://github.com/mariegautron/space-crew-front-end.git
```

Installez les dépendances :

```
npm install

ou

yarn
```

Lancez l'application en mode développement :

```
npm run dev

ou

yarn dev
```

Accédez à l'application à l'adresse suivante : http://localhost:5173.
## 🚀 Build

Pour créer une version de production de l'application, exécutez la commande suivante :

```
npm run build

ou

yarn build
```

Les fichiers de production seront générés dans le dossier dist.

## 📁 Structure des dossiers

Le projet suit une structure de dossier basée sur **[Atomic Design](https://atomicdesign.bradfrost.com/chapter-2/)** pour organiser les composants. Les dossiers sont organisés comme suit :

- **theme** : ce dossier contient les fichiers pour la personnalisation du thème Chakra UI, tels que les variables dans les fichiers "tokens" et les styles globaux dans les fichiers "global".
- **pages** : ce dossier contient les pages principales de l'application. Chaque page est un composant React qui peut contenir d'autres composants.
- **hooks** : ce dossier contient les hooks personnalisés de l'application, tels que les hooks pour la gestion de formulaires, la gestion de l'état global, la gestion de l'authentification, etc.
- **contexts** : ce dossier contient les contextes de l'application, tels que le contexte d'API, qui fournit les services pour faire les appels d'API. Il peut également contenir des services pour d'autres fonctionnalités globales de l'application.
- **constants** : ce dossier contient les constantes ou enum de l'application
- **components** : ce dossier contient les composants réutilisables de l'application organisés en Atomic Design (au plus proche de la méthode).
    - atoms : les éléments de base tels que les boutons, les champs de saisie, etc.
    - molecules : des groupes d'atomes qui forment un élément plus complexe tel qu'un formulaire.
    - organisms : des groupes de molécules et d'atomes qui forment des parties autonomes de l'interface utilisateur
    - layout: tous les composants relatif au layout