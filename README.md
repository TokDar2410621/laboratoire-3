# Laboratoire #3 - CEPI Blog (React)

## Structure du projet

```
Laboratoire #3/
├── docs/                              # Documentation
│   ├── Consignes.docx                # Instructions du labo #1
│   ├── Consignes (2).docx           # Instructions du labo #2
│   ├── Consignes (3).docx           # Instructions du labo #3
│   └── Document de conception.docx   # Document de conception
│
├── html/                              # Pages HTML
│   ├── index.html                    # Page principale (liste des publications)
│   ├── detailBlog.html               # Page de détail d'une publication
│   └── ajoutPublication.html         # Page cachée d'ajout de publication
│
├── js/                                # JavaScript
│   ├── api/
│   │   └── api.js                    # Fonctions AJAX (GET/POST) vers JSON Server
│   └── components/                   # Composants React (JSX)
│       ├── Header.jsx                # En-tête avec navbar
│       ├── Footer.jsx                # Pied de page
│       ├── BlogCard.jsx              # Carte d'une publication (props)
│       ├── BlogList.jsx              # Liste des publications (useEffect + API)
│       ├── BlogDetails.jsx           # Détails d'une publication (props + useEffect)
│       ├── Comment.jsx               # Affichage d'un commentaire (props)
│       ├── CommentList.jsx           # Liste des commentaires (props + useEffect)
│       ├── AddComment.jsx            # Formulaire d'ajout de commentaire (props + API)
│       └── Blog.jsx                  # Conteneur page détail (ID depuis URL)
│
├── ts/                                # Code source TypeScript
│   └── api/
│       └── api.ts                    # Source TypeScript de l'API
│
├── Sass/                              # Styles
│   ├── stylesheet/
│   │   └── style.sass               # Fichier source SASS
│   └── style.css                     # CSS compilé
│
├── cypress/                           # Tests Cypress
│   └── e2e/                          # Tests end-to-end
│       ├── publications.cy.js        # Tests chargement des publications
│       ├── ajoutPublication.cy.js    # Tests formulaire d'ajout
│       ├── detailPublication.cy.js   # Tests page de détail
│       ├── commentaires.cy.js        # Tests ajout de commentaires
│       └── testlien.cy.js           # Tests navigation entre pages
│
├── img/                               # Images du projet
├── esquisses/                         # Esquisses et maquettes
├── Maquette/                          # Maquette statique du labo #1
│
├── db.json                            # Base de données JSON Server
├── package.json                       # Configuration npm
├── tsconfig.json                      # Configuration TypeScript
└── cypress.config.js                  # Configuration Cypress
```

## Technologies

- **React 18** (via CDN) - Composants UI
- **Babel Standalone** (via CDN) - Transpilation JSX
- **Bootstrap 5** - Mise en page
- **jQuery / jQuery UI** - Dialogue de confirmation (page d'ajout)
- **JSON Server** - API REST temporaire
- **Cypress** - Tests end-to-end
- **TypeScript** - Source de l'API
- **SASS** - Préprocesseur CSS

## Palette de couleurs

https://colorhunt.co/palette/222831393e4600adb5eeeeee

- **Dark Charcoal**: `#222831` (fond principal)
- **Dark Gray**: `#393E46` (header, footer, cartes, formulaires)
- **Teal**: `#00ADB5` (couleur primaire, boutons, accents)
- **Light Gray**: `#EEEEEE` (texte, éléments clairs)

## Polices

- **Open Sans** (400, 700) - pour le contenu
- **Lora** (400, 700) - pour les titres

## Installation

```bash
npm install
```

## Lancer l'application

```bash
npm run api    # Démarre JSON Server sur le port 3000
npm run dev    # Démarre le serveur HTTP sur le port 8080
```

Ouvrir: http://localhost:8080/html/index.html

## Tests Cypress

```bash
npm run cypress
```
