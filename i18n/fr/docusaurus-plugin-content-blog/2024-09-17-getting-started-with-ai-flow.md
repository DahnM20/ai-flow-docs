---
slug: getting-started-with-ai-flow
title: Démarrer avec AI-Flow
authors: dahn
description: Ce guide vous aidera à démarrer avec AI-Flow, à ajouter des nœuds, à les connecter et à personnaliser votre espace de travail.
tags: [AI-FLOW, Outils IA, Automatisation des flux de travail]
---

<head>
  <meta name="twitter:card" content="summary_large_image"/>
  <meta name="twitter:title" content="Démarrer avec AI-Flow" />
  <meta name="twitter:description" content="Ce guide vous aidera à démarrer avec AI-Flow, à ajouter des nœuds, à les connecter et à personnaliser votre espace de travail." />
  <meta name="twitter:creator" content="@AIFlowApp"/>
  <meta name="twitter:image" content="https://docs.ai-flow.net/img/blog-card-images/app-overview-r.png.png"/>
  <meta name="twitter:image:alt" content="Intégration des flux de travail AI-Flow"/>
  <meta property="og:title" content="Démarrer avec AI-Flow"/>
  <meta property="og:description" content="Ce guide vous aidera à démarrer avec AI-Flow, à ajouter des nœuds, à les connecter et à personnaliser votre espace de travail."/>
  <meta property="og:image" content="https://docs.ai-flow.net/img/blog-card-images/app-overview-r.png.png"/>
</head>

AI-Flow est un outil conçu pour simplifier et automatiser vos flux de travail IA en connectant divers services et outils dans un flux unifié. Ce guide vous aidera à démarrer avec AI-Flow, notamment en ajoutant des nœuds, en les connectant, et en personnalisant votre espace de travail pour un flux de travail optimisé.

## Ajouter et connecter des nœuds

Pour construire votre flux de travail IA, des nœuds peuvent être ajoutés à l'interface à l'aide d'une interface de glisser-déposer simple. Voici un aperçu rapide de la gestion des nœuds :

- **Connecteurs :** Dans AI-Flow, les connexions d'entrée et de sortie sont visualisées via des connecteurs :
  - **Les connecteurs ronds** représentent les connexions d'entrée.
  - **Les connecteurs carrés** représentent les connexions de sortie.
- **Code couleur des connecteurs :**
  - **Entrée bleue** : facultative.
  - **Entrée rouge** : obligatoire et doit être connectée (ou renseignée) pour que le nœud fonctionne.

Pour certains nœuds, les valeurs peuvent être saisies directement dans le champ ou fournies via un connecteur. Si un connecteur est relié à un champ, le champ d'entrée disparaît, ne laissant que le connecteur.

---

![Exemple de connexion de nœuds](/img/blog-images/getting-started-1.png)

Voici un exemple de base :

- Les deux méthodes produisent le même résultat.
- Le champ **contexte** est facultatif, permettant au nœud de fonctionner sans celui-ci.
- Le champ **prompt** est obligatoire et doit être rempli ou connecté à un autre nœud.

## Types de nœuds

AI-Flow propose une grande variété de nœuds pour répondre à différents besoins. Voici un aperçu général des catégories de nœuds :

- **Entrées :** Nœuds qui apportent des données externes dans votre flux.
- **Modèles :** Ces nœuds se connectent à des modèles IA fournis par des services comme OpenAI, StabilityAI et Replicate.
- **Outils :** Nœuds conçus pour manipuler les données et structurer votre flux de travail.
- **Constructeur d'API :** Ces nœuds permettent d'accéder à votre flux via des appels API. Apprenez-en plus sur cette fonctionnalité dans la [documentation sur API Builder](/docs/pro-features/api-builder/api-nodes/).

---

Pour explorer plus en détail les fonctionnalités d'un nœud spécifique, **utilisez l'option d'aide à l'intérieur du nœud pour obtenir des descriptions détaillées, des démonstrations et des ressources associées.**

![Action d'aide](/img/blog-images/getting-started-2.gif)

## Nœud Fichier

Le nœud **hébergement de fichier** est utilisé pour héberger un fichier dans le flux. Le nœud renvoie une **URL** qui mène au fichier.

Il est important de noter que si vous hébergez un fichier PDF, la sortie du nœud de fichier ne contiendra pas le contenu textuel du PDF lui-même. Pour extraire le texte du document, il faudra utiliser ensuite le nœud **Document-vers-Texte**, qui traitera le fichier et renverra son contenu textuel.

![Nœud de téléchargement de fichier](/img/blog-images/summarize-doc-post.png)

## Ouverture du panneau latéral droit

![Action d'aide](/img/blog-images/getting-started-3.png)

Le panneau latéral droit dans AI-Flow offre des fonctionnalités supplémentaires pour améliorer la gestion de votre flux de travail. Voici ce que vous pouvez faire lorsque le panneau est ouvert :

- **Voir les sorties :** Affichez une liste complète de toutes les sorties générées par les nœuds dans votre flux.
- **Modifier les nœuds :** Modifiez directement tout nœud sélectionné, même si le nœud est minimisé sur l'interface.
- **Désactiver la sauvegarde automatique :** Choisissez de désactiver la sauvegarde automatique dans le cloud si vous le souhaitez.
- **Sauvegarder et importer des flux :** Vous pouvez enregistrer votre flux actuel sous forme de fichier `.json` pour une utilisation future ou importer un flux précédemment exporté.
- **Gestion des API :** Gérez vos paramètres et configurations d'API directement depuis ce panneau.

Cette fonctionnalité est essentielle pour garder votre flux de travail organisé et accessible, tout en offrant un accès rapide aux actions critiques.

## Personnalisation de votre expérience

Vous pouvez adapter l'interface AI-Flow selon vos besoins :

- Accédez aux paramètres pour personnaliser les nœuds affichés dans l'application.
- La minimap peut être activée ou désactivée selon votre préférence.

Notez que de nouveaux nœuds peuvent être ajoutés au fil du temps mais ne seront pas nécessairement visibles par défaut. Restez informé des nouveautés sur la page d'accueil et ajustez vos paramètres d'affichage pour inclure les nouveaux nœuds qui correspondent à votre flux de travail.

## Ressources supplémentaires

Pour des informations plus détaillées, consultez les ressources suivantes :

- [Nœud Replicate](/fr/blog/replicate-node)
- [Documentation API Builder](/docs/pro-features/api-builder/api-nodes/)
