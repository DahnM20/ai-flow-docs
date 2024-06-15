---
slug: automate-story-creation-1
title: Comment automatiser la création d'histoires et d'images à l'aide de l'IA - Partie 1
authors: dahn
description: Créez facilement des histoires captivantes pour enfants en utilisant AI-FLOW. Suivez notre guide étape par étape pour améliorer votre processus de narration avec des outils d'IA.
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
  <meta name="twitter:image" content="https://docs.ai-flow.net/img/blog-card-images/blog-story-1.png"/>
  <meta name="twitter:image:alt" content="Ce guide propose une configuration simple pour vous aider à créer efficacement des histoires captivantes alimentées par l'IA en utilisant AI-FLOW."/>
  <meta property="og:image" content="https://docs.ai-flow.net/img/blog-card-images/blog-story-1.png" data-rh="true"/>
</head>

## Comment automatiser la création d'histoires et d'illustrations avec AI-FLOW - Partie 1

Ce guide vise à fournir des informations sur l'automatisation de la création d'une histoire courte complète en utilisant l'IA. L'objectif est de générer une histoire cohérente et captivante, complétée par plusieurs visuels engageants. Le but ultime est d'y parvenir en un clic après avoir configuré le flux de travail initial.

Pour être clair, ce guide n'a pas pour but de promouvoir la production en masse d'histoires alimentées par l'IA, mais plutôt de proposer une méthode pour vous aider à établir un enchainement logiques d'étapes pour vous inspirer lors de votre processus créatif.

### Initialiser l'histoire

Commencez par un concept de base de l'histoire que vous souhaitez créer :

- Qui est le personnage principal ?
- Le personnage principal a-t-il un acolyte, un animal de compagnie ou un compagnon ?
- Où se déroule l'histoire ?
- Quels sont les concepts ou événements clés de votre histoire ?
- Quel est le style artistique ?
- Quel est le public cible ?

Ajouter votre touche personnelle à l'histoire est crucial. Vous pouvez choisir de générer ces idées avec l'IA, mais si votre prompt est trop simple, le résultat risque d'être une histoire générique.

Je vais rester simple pour l'exemple, mais vous pourriez avoir besoin de quelque chose de plus élaboré, voici mon prompt :

---

_L'histoire se déroule dans un pays glacé où notre jeune héroïne, Eryn, une fille de 16 ans, est captivée par les récits de héros légendaires. Eryn manie une réplique de l'épée d'un héros célèbre et rêve de vivre à la hauteur des légendes qu'elle a toujours admirées. Sa mission est cruciale : trouver une écaille de dragon écarlate qui a fourni de la chaleur à sa famille ces deux dernières années. Alors qu'Eryn se lance dans sa quête, elle découvre une vérité profonde : ce n'est pas l'épée légendaire qui fait un héros, mais le courage et le cœur de celui qui la manie._

_Style artistique : Le récit est illustré dans un style de peinture numérique, mélangeant des éléments poétiques adaptés aux enfants, créant un voyage fantaisiste et inspirant._

---

> Les instructions ont été traduites pour la version française du post. Mais en réalité tout est rédigé en anglais, comme vous pourrez le voir dans les images.

### Élaborer l'univers avec l'IA

À partir de vos idées, demandez à l'IA de connecter tous les éléments et de développer l'univers et l'histoire en un résumé simple. Le but est de capturer l'essence de l'histoire.

Voici un exemple de prompt que vous pouvez utiliser :

_En vous basant sur ces idées, détaillez l'histoire, les personnages, les lieux importants et la quête principale._

![Construire l'essence de l'histoire](/img/blog-images/story-0.png)

### Structurer votre histoire

En utilisant l'essence de votre histoire, demandez à l'IA de créer un plan simple. Pour une histoire courte, vous pourriez demander trois chapitres. Chaque chapitre doit avoir un titre et un bref résumé.

Voici un exemple de prompt :

_En vous basant sur cette description, créez un plan pour le livre avec trois chapitres. Fournissez un court résumé pour chaque chapitre, en vous assurant que l'histoire se termine à la fin du Chapitre 3._

![Flux d'image de couverture](/img/blog-images/story-1.png)

> Le premier nœud ici est juste un nœud d'affichage utilisé pour montrer l'essence de l'histoire.

### Créer la couverture de votre histoire

En transférant l'essence de votre histoire comme base, créez un prompt visuel pour la couverture de l'histoire. Demandez à GPT de raffiner l'essence en un prompt visuel qui prend en compte le style artistique choisi. Ensuite, utilisez des outils comme Stable Diffusion 3 ou DALL-E pour générer l'image. Si le résultat n'est pas satisfaisant, relancez la génération d'image. Si nécessaire, régénérez le prompt et essayez à nouveau.

Voici un exemple de prompt pour DALL-E :

_En vous basant sur cette histoire, créez un prompt visuel pour DALL-E représentant une couverture idéale pour cette histoire._

![Flux d'image de couverture](/img/blog-images/story-2.png)

Voici le résultat !

Pour cet exemple, j'ai utilisé à la fois DALL-E 3 et Stable Diffusion 3 pour comparer. DALL-E a produit une couverture avec un style artistique fort et un titre solide rappelant les histoires pour enfants. Stable Diffusion 3 a créé une illustration plus réaliste, appropriée pour les adolescents. Le résultat dépend de la manière dont vous demandez à GPT de construire votre prompt. Dans un scénario réel, vous devrez ajuster votre prompt et régénérer l'image plusieurs fois pour obtenir des résultats convaincants.

> N.B : DALL-E 3 améliore chacun de vos prompts en arrière-plan.

Dans le prochain article, nous explorerons comment construire un chapitre et créer des images associées ! L'idée est d'avoir 3 images cohérentes par chapitre.

Vous pouvez essayer [AI-FLOW maintenant !](https://app.ai-flow.net)
