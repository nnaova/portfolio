# Portfolio Personnel 🚀

Un portfolio professionnel moderne créé avec Vue.js 3 et TypeScript, avec intégration GitHub dynamique pour mettre en avant vos compétences et projets.

![Portfolio Preview](/public/images/placeholder.jpg)

## 🌟 Fonctionnalités

- ✅ **Design moderne et responsive** - Adapté à tous les écrans
- ✅ **Mode clair/sombre** - Commutateur de thème avec persistance
- ✅ **Intégration GitHub dynamique** - Récupération automatique de vos repositories
- ✅ **Sélection de projets** - Interface pour choisir quels projets afficher
- ✅ **Catégorisation automatique** - Tri par langage (Web, Mobile, Backend, etc.)
- ✅ **Sections personnalisables** - Hero, À propos, Compétences, Projets, Témoignages, Contact
- ✅ **Filtres interactifs** - Filtrage des compétences et projets par catégorie
- ✅ **Formulaire de contact** - Avec validation côté client
- ✅ **Navigation fluide** - Défilement automatique entre sections
- ✅ **Optimisé SEO** - Meta tags et structure sémantique
- ✅ **Performances optimisées** - Lazy loading et bundle optimisé

## 🛠️ Technologies utilisées

- **Vue.js 3** avec Composition API et `<script setup>`
- **TypeScript** pour la robustesse du code
- **Vite** pour le build rapide et le HMR
- **GitHub API** pour l'intégration dynamique des projets
- **CSS personnalisé** avec variables CSS et thème sombre/clair
- **Responsive design** adaptatif
- **LocalStorage** pour la persistance des préférences

## 🎯 Intégration GitHub

Le portfolio se connecte automatiquement à l'API GitHub pour récupérer vos repositories et les afficher dynamiquement.

### Configuration rapide

1. **Changez votre nom d'utilisateur GitHub** dans `src/components/ProjectsSection.vue` :

```typescript
const GITHUB_USERNAME = 'votre-nom-utilisateur' // Remplacez 'nnaova'
```

2. **Sélectionnez vos projets** en cliquant sur "Configurer" dans la section Projets

3. **Personnalisez les catégories** selon vos préférences dans le même fichier

### Fonctionnalités GitHub

- 🔄 Récupération automatique de tous vos repositories publics
- 🚫 Exclusion des repositories forkés et archivés
- 📊 Affichage des statistiques (étoiles, forks, langage)
- 🏷️ Catégorisation automatique par langage
- 💾 Sauvegarde de vos sélections dans le navigateur
- ⚡ Mise en cache pour de meilleures performances

## 🎨 Comment personnaliser

### 1. Configuration GitHub (Obligatoire)

**Étape la plus importante** : Changez le nom d'utilisateur GitHub dans `src/components/ProjectsSection.vue` :

```typescript
const GITHUB_USERNAME = 'votre-nom-utilisateur' // Remplacez 'nnaova'
```

### 2. Informations personnelles

Modifiez les composants suivants pour personnaliser votre portfolio :

- **`Hero.vue`** : Votre nom, titre, description et call-to-action
- **`AboutView.vue`** : Votre parcours professionnel, timeline et services
- **`SkillsSection.vue`** : Vos compétences techniques par catégorie
- **`TestimonialsSection.vue`** : Témoignages de clients ou collègues
- **`ContactSection.vue`** : Vos coordonnées et liens vers réseaux sociaux
- **`FooterSection.vue`** : Informations du pied de page

### 3. Images et médias

Remplacez les images par défaut dans `/public/images/` :

```
/public/images/
├── profile.jpg          # Votre photo de profil
├── placeholder.jpg      # Image par défaut pour les projets
└── project-*.jpg        # Images spécifiques à vos projets
```

### 4. Style et couleurs

Modifiez les variables CSS dans `/src/assets/base.css` :

```css
:root {
  --color-background: #ffffff;
  --color-text: #2c3e50;
  --color-primary: #3498db;
  /* ... plus de variables */
}
```

### 5. Configuration des projets

Dans `ProjectsSection.vue`, personnalisez :

- Les catégories de langages
- Les repositories à exclure
- L'ordre d'affichage
- Les informations complémentaires

## 🚀 Configuration du projet

### Installation et développement

```sh
# Installation des dépendances
npm install

# Lancement du serveur de développement avec hot-reload
npm run dev

# Accès local : http://localhost:5173/
```

### Production et déploiement

```sh
# Build de production
npm run build

# Aperçu du build de production
npm run preview

# Tests unitaires (si configurés)
npm run test:unit
```

### 🌐 Déploiement

Votre portfolio peut être déployé sur plusieurs plateformes :

#### Netlify (Recommandé)

1. Connectez votre repository GitHub à Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Déploiement automatique à chaque push

#### Vercel

```sh
npm i -g vercel
vercel --prod
```

#### GitHub Pages

```sh
npm run build
# Uploadez le contenu du dossier 'dist' sur votre branche gh-pages
```

#### Firebase Hosting

```sh
npm install -g firebase-tools
firebase init hosting
npm run build
firebase deploy
```

## 📚 Documentation

- **[FEATURES.md](./FEATURES.md)** - Guide détaillé des fonctionnalités
- **[Vue.js 3 Documentation](https://vuejs.org/)** - Documentation officielle Vue.js
- **[TypeScript Handbook](https://www.typescriptlang.org/docs/)** - Guide TypeScript
- **[GitHub API Documentation](https://docs.github.com/en/rest)** - API GitHub

## 🤝 Contribution

1. Fork le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Commitez vos modifications (`git commit -m 'Add some AmazingFeature'`)
4. Pushez vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus d'informations.

## 💡 Support

Si vous avez des questions ou rencontrez des problèmes :

1. Consultez la documentation dans `FEATURES.md`
2. Vérifiez les issues existantes sur GitHub
3. Créez une nouvelle issue si nécessaire

---

**Fait avec ❤️ et Vue.js**

⭐ N'hésitez pas à donner une étoile si ce portfolio vous a été utile !
