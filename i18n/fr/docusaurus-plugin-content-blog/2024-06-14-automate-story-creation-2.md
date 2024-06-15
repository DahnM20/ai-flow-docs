---
slug: automate-story-creation-2
title: Comment automatiser la création d'histoires et d'images à l'aide de l'IA - Partie 2
authors: dahn
description: Créez des histoires captivantes pour enfants sans effort avec AI-FLOW. Suivez notre guide étape par étape pour améliorer votre processus de narration. Commencez dès maintenant !
tags:
  [
    AI-FLOW,
    Narration,
    Histoire pour enfants,
    Créativité,
    IA,
    Outils d'écriture IA,
  ]
---

<head>
  <meta name="twitter:card" content="summary_large_image"/>
  <meta name="twitter:title" content="Comment automatiser la création d'histoires et d'illustrations avec l'IA" /> 
  <meta name="twitter:description" content="Ce guide propose une configuration simple pour vous aider à créer efficacement des histoires captivantes alimentées par l'IA en utilisant AI-FLOW." />
  <meta name="twitter:creator" content="@AIFlowApp"/>
  <meta name="twitter:image" content="https://docs.ai-flow.net/img/blog-card-images/blog-story-2.png"/>
  <meta name="twitter:image:alt" content="Ce guide propose une configuration simple pour vous aider à créer efficacement des histoires captivantes alimentées par l'IA en utilisant AI-FLOW."/>
  <meta property="og:image" content="https://docs.ai-flow.net/img/blog-card-images/blog-story-2.png" data-rh="true"/>
</head>

## Comment automatiser la création d'histoires et d'illustrations avec AI-FLOW - Partie 2

Voici la deuxième partie de notre défi sur [Comment automatiser la création d'histoires](./2024-06-13-automate-story-creation-1.md).

Dans cette partie, nous nous concentrerons sur la construction d'un chapitre et l'automatisation de la génération d'illustrations.

### Écrire le Premier Chapitre

Dans la partie précédente, nous avons créé un plan de l'histoire avec trois chapitres, et un petit résumé pour chacun. Nous pourrions diviser le plan en trois segments, mais pour simplifier, je vais garder les chapitres comme un seul bloc. Cette approche aide GPT à maintenir le contexte de l'histoire, assurant la continuité entre les chapitres sans introduire d'éléments contradictoires.

Lors de l'écriture de votre chapitre, il est important de rappeler à GPT **le ton souhaité, le public cible, et comment vous voulez que l'histoire soit racontée.** Vous pourriez préférer plus de dialogues ou peut-être plus de descriptions. Ce choix vous appartient.

J'ai utilisé un prompt basique qui met l'accent sur les éléments importants, mais veuillez noter que ce n'est qu'un exemple simple.

**Voici le prompt que j'ai utilisé pour le premier chapitre :**

_Écrivez le premier chapitre de cette courte histoire destinée à un public de 12 ans._

- _**Ton :** Maintenez un ton léger, engageant et aventureux. L'histoire doit être excitante et remplie de merveilles, adaptée aux jeunes lecteurs._
- _**Langage :** Utilisez un langage simple et clair. Évitez un vocabulaire complexe et assurez-vous que les phrases sont faciles à suivre, mais suffisamment vives pour stimuler l'imagination._
- _**Dialogue :** Créez des dialogues naturels et relatables pour les préadolescents. Assurez-vous que les conversations sont animées et reflètent l'âge et la personnalité des personnages._
- _**Rythme :** Gardez le chapitre rapide et captivant pour maintenir l'attention du lecteur. Introduisez rapidement les éléments clés de l'histoire pour accrocher le public dès le début._
- _**Descriptions :** Utilisez des descriptions vibrantes et imaginatives pour peindre un tableau clair des scènes et des personnages. Visez un langage évocateur mais pas trop détaillé ou complexe._
- _**Longueur :** Gardez le chapitre concis, en vous concentrant sur l'introduction des éléments principaux de l'histoire sans surcharger le lecteur avec trop d'informations._

---

> Les instructions ont été traduites pour la version française du post. Mais en réalité tout est rédigé en anglais, comme vous pourrez le voir dans les images.

### Extraire les Scènes Intéressantes

À partir du chapitre, nous identifierons les scènes les plus intéressantes à illustrer :

_En vous basant sur ce chapitre, identifiez 3 éléments intéressants qui seraient attrayants à illustrer. Fournissez chaque élément sous forme de phrase courte, séparée par des points-virgules. Ne rajoutez pas de commentaires supplémentaires._

**Sortie :**

_Eryn et Frostbite naviguant dans la forêt glacée ; L'écaille de dragon écarlate au-dessus de la cheminée ; Les grottes de cristal scintillant au loin._

Ensuite, utilisez le Data Splitter pour traiter chaque élément individuellement.

![Diviser les concepts](/img/blog-images/story-2-0.png)

### Créer des Illustrations

Une fois les concepts divisés, utilisez le Merge Node pour créer un prompt illustré basé sur la scène spécifique **et l'essence générale de l'histoire**. Si votre essence est suffisamment bonne, elle doit inclure des descriptions de personnages, des lieux importants, des concepts et le style artistique souhaité. Cela aide à obtenir des prompts visuels cohérents.

Ici, nous utilisons le mode "Merge + GPT", de sorte que le résultat de la fusion soit directement envoyé en tant que prompt à GPT.

**Exemple de Prompt :**

_En vous basant sur cette description d'histoire : ${input-2}_

_Créez un prompt visuel pour DALL-E mettant en avant cet élément pour une scène donnée : ${input-1}_

_IMPORTANT : Répondez uniquement avec le prompt visuel. Ne rajoutez pas d'autres textes, titres, commentaires ou explications._

---

> Assurez-vous que GPT se concentre sur l'élément actuel pour éviter de dépeindre toute l'histoire/chapitre.

Répétez ce processus pour chaque scène. Vous pouvez dupliquer votre nœud.

![Illustrer l'élément de l'histoire](/img/blog-images/story-2-1.png)

Voici mes résultats pour "Les grottes de cristal" et "L'écaille de dragon écarlate au-dessus de la cheminée". Notez que GPT a ajouté les personnages principaux dans le premier, grâce à l'essence.

### Conseils Avancés

Envisagez également d'ajouter un prompt négatif à des outils comme Stable Diffusion 3 pour affiner les résultats. Par exemple, ajouter "réaliste" comme prompt négatif peut orienter la génération loin du réalisme si ce n'est pas souhaité.

Lors de la fusion, assurez-vous que GPT priorise l'élément actuel par rapport à l'histoire entière.

### Conclusion

Créer une histoire est un projet complexe. Même avec des prompts parfaits, procédez étape par étape pour assurer une progression fluide. Ce guide fournit un flux logique pour utiliser AI-FLOW afin de vous aider dans la création de votre histoire. Désormais vous pouvez répéter le principe pour les autres chapitres. Dans la prochaine partie, nous explorerons comment améliorer la cohérence de nos visuels et éditer certains images via l'IA.

Commencez votre aventure avec [AI-FLOW maintenant !](https://app.ai-flow.net)

![Flux global](/img/blog-images/story-2-3.png)
