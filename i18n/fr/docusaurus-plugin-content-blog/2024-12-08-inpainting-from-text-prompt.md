---
slug: inpainting-from-text-prompt
title: Retouche d'Images par Texte - Comment Obtenir une Édition Fluide et Assistée par IA
authors: dahn
description: Découvrez la puissance de l'édition d'images basée sur le texte avec le modèle Inpainting from Text Prompt. Apprenez à l'utiliser, comparez ses avantages, et explorez des cas d'usage pratiques pour une retouche fluide.
tags:
  [
    Inpainting from Text Prompt,
    Retouche d'Image par IA,
    Grounded SAM,
    FLUX Fill Pro,
    Outils IA,
  ]
---

<head>
  <meta name="twitter:card" content="summary_large_image"/>
  <meta name="twitter:title" content="Inpainting from Text Prompt : Un Outil Révolutionnaire pour la Retouche d'Images" />
  <meta name="twitter:description" content="Découvrez comment l'outil Inpainting from Text Prompt révolutionne la retouche d'images grâce à l'IA. Apprenez ses fonctionnalités, son usage et ses avantages." />
  <meta name="twitter:creator" content="@AIFlowApp"/>
  <meta name="twitter:image" content="https://docs.ai-flow.net/img/blog-images/programmatic-inpainting-11.png"/>
  <meta name="twitter:image:alt" content="Capture d'écran de l'outil Inpainting from Text Prompt"/>
  <meta property="og:title" content="Inpainting from Text Prompt : Un Outil Révolutionnaire pour la Retouche d'Images"/>
  <meta property="og:description" content="Découvrez comment l'outil Inpainting from Text Prompt transforme la retouche d'images avec l'IA. Apprenez à l'utiliser efficacement et ses avantages sur les méthodes traditionnelles."/>
  <meta property="og:image" content="https://docs.ai-flow.net/img/blog-images/programmatic-inpainting-11.png"/>
</head>

L’outil **"Inpainting from Text Prompt"** est un template puissant désormais disponible dans l'application AI-FLOW. Ce guide vous expliquera comment cet outil peut révolutionner vos tâches de retouche d'images, comment l'utiliser efficacement et le comparer à d'autres méthodes disponibles dans l'application.

## Pourquoi Choisir le Template Inpainting from Text Prompt ?

Cet outil combine la puissance de **Grounded SAM** et **FLUX Fill Pro** pour offrir précision et flexibilité dans l’édition d’images basée sur le texte. Il permet de modifier des images de manière fluide à l’aide de simples invites textuelles, ce qui en fait un choix idéal pour les designers, artistes numériques, marketeurs et développeurs. Que vous soyez professionnel expérimenté ou débutant, cet outil simplifie les tâches complexes de retouche d’images, vous faisant gagner du temps et des efforts.

![Capture d'écran de l'outil Inpainting from Text Prompt](/img/blog-images/programmatic-inpainting-11.png)

## Comment Cela Fonctionne

Le template **Inpainting from Text Prompt** s’appuie sur des modèles avancés d’IA pour produire des résultats de haute qualité :

- **Grounded SAM** : Propose des solutions robustes pour les tâches de masquage complexes en générant des masques à partir d’invites textuelles.

<div class="flex flex-row justify-center gap-4 w-full md:w-[50%]">
    <span class="flex flex-1 justify-center items-center">
        <img src="/fr/img/blog-images/programmatic-inpainting-2.jpg" alt="Sélection tenue" class="w-full max-w-[468px] h-auto object-cover"/>
    </span>
    <span class="flex flex-1 justify-center items-center">
        <img src="/fr/img/blog-images/programmatic-inpainting-3.jpg" alt="Sélection cheveux" class="w-full max-w-[468px] h-auto object-cover"/>
    </span>
    <span class="flex flex-1 justify-center items-center">
        <img src="/fr/img/blog-images/programmatic-inpainting-4.jpg" alt="Masque cheveux" class="w-full max-w-[468px] h-auto object-cover"/>
    </span>
</div>

- **FLUX Fill Pro** : Renforce ces capacités avec une technique d’inpainting de pointe, garantissant que les modifications s’intègrent naturellement à l’image originale en préservant l’éclairage, la perspective et le contexte.

<div class="flex flex-row justify-center gap-4 w-full md:w-[50%]">
    <span class="flex flex-1 justify-center items-center">
        <img src="/fr/img/blog-images/programmatic-inpainting-9.png" alt="Image de Base" class="w-full max-w-[468px] h-auto object-cover"/>
    </span>
    <span class="flex flex-1 justify-center items-center">
        <img src="/fr/img/blog-images/programmatic-inpainting-8.jpg" alt="Armure V1" class="w-full max-w-[468px] h-auto object-cover"/>
    </span>
    <span class="flex flex-1 justify-center items-center">
        <img src="/fr/img/blog-images/programmatic-inpainting-5.jpg" alt="Armure V2" class="w-full max-w-[468px] h-auto object-cover"/>
    </span>
</div>

### Aperçus Pratiques

La sélection de masques générée par **Grounded SAM** est très précise et identifie aisément les éléments clés. Cependant, cette précision peut limiter la flexibilité pour redimensionner ou remodeler des objets. Par exemple, dans le cas d’une armure, l’outil conserve la forme originale, laissant parfois des traces visibles comme des vêtements en arrière-plan.

Pour ajuster le comportement du masque, vous pouvez expérimenter avec le paramètre "adjustment_factor" de grounded_sam. Une valeur positive dilatera le masque, tandis qu'une valeur négative l'érodera.

Ci-dessous, deux résultats avec un adjustment_factor de 50 :

<div class="flex flex-row justify-center gap-4 w-full md:w-[50%]">
    <span class="flex flex-1 justify-center items-center">
        <img src="/fr/img/blog-images/programmatic-inpainting-20.jpg" alt="AI-FLOW Template - Base Image" class="w-full max-w-[468px] h-auto object-cover"/>
    </span>
    <span class="flex flex-1 justify-center items-center">
        <img src="/fr/img/blog-images/programmatic-inpainting-21.jpg" alt="AI-FLOW Template - Base Image" class="w-full max-w-[468px] h-auto object-cover"/>
    </span>
</div>

Comme on peut le voir, le masque plus grand semble permettre au modèle FLUX Fill d'utiliser l'espace de manière plus efficace. Il n'y a plus de traces de vêtements visibles.

---

Vous également pouvez utiliser cet outil pour des modifications qui respectent la forme du conteneur original, comme retexturer ou recolorer un objet, par exemple ce t-shirt :

<div class="flex flex-row justify-center gap-4 w-full md:w-[50%]">
    <span class="flex flex-1 justify-center items-center">
        <img src="/fr/img/blog-images/programmatic-inpainting-9.jpg" alt="T-Shirt" class="w-full max-w-[468px] h-auto object-cover"/>
    </span>
    <span class="flex flex-1 justify-center items-center">
        <img src="/fr/img/blog-images/programmatic-inpainting-10.jpg" alt="T-Shirt V2" class="w-full max-w-[468px] h-auto object-cover"/>
    </span>
    <span class="flex flex-1 justify-center items-center">
        <img src="/fr/img/blog-images/programmatic-inpainting-11.jpg" alt="T-Shirt V3" class="w-full max-w-[468px] h-auto object-cover"/>
    </span>
</div>

Cette solution programmatique convient mieux pour l'édition par lots de fichiers similaires ayant des formes de conteneur cohérentes, plutôt que pour des modifications individuelles complexes.

### Entrées et Sorties

- **Entrées** : Fichiers d’images, invites textuelles pour la génération et le réglage de masques. Expérimentez avec le paramètre de "guidance" pour optimiser les résultats.
- **Sorties** : Images modifiées avec des changements intégrés de manière fluide tout en conservant la qualité de la photo originale.

![Capture d'écran de l'outil Inpainting from Text Prompt V2](/img/blog-images/programmatic-inpainting-22.png)

## Cas d’Usage Potentiels

La polyvalence de l’outil "Inpainting from Text Prompt" le rend utile dans divers scénarios :

- **Designers** : Modifier facilement des images de produits pour le commerce en ligne.
- **Marketeurs** : Personnaliser des visuels pour des campagnes tout en respectant l’identité de la marque.
- **Artistes** : Créer efficacement des variations d’œuvres existantes et explorer de nouvelles directions créatives.

## Méthodes Alternatives

Le **Noeud StabilityAI** propose des modèles "Rechercher et Remplacer" et "Rechercher et Recolorer" qui produisent des résultats similaires. Bien que ces modèles ne permettent pas de vérifier directement les masques, ils excellent dans les modifications et offrent un paramètre pour "agrandir" les masques, permettant ainsi de remplacer un objet par un plus grand, au risque de modifications inattendues.

Voici un exemple avec l’armure, la modification s'intègre moins bien qu'avec FLUX Fill, mais je me suis contenté d'un prompt basique. En revanche, la forme est bonne. Pour chaque exemple j'ai laissé le paramètre "grow" à 3.

<div class="flex flex-row justify-center gap-4 w-full md:w-[50%]">
    <span class="flex flex-1 justify-center items-center">
        <img src="/fr/img/blog-images/programmatic-inpainting-9.png" alt="Image de Base" class="w-full max-w-[468px] h-auto object-cover"/>
    </span>
    <span class="flex flex-1 justify-center items-center">
        <img src="/fr/img/blog-images/programmatic-inpainting-13.png" alt="Ajout d'armure V1" class="w-full max-w-[468px] h-auto object-cover"/>
    </span>
    <span class="flex flex-1 justify-center items-center">
        <img src="/fr/img/blog-images/programmatic-inpainting-12.png" alt="Ajout d'armure V2" class="w-full max-w-[468px] h-auto object-cover"/>
    </span>
</div>

Et un exemple de t-shirt :

<div class="flex flex-row justify-center gap-4 w-full md:w-[50%]">
    <span class="flex flex-1 justify-center items-center">
        <img src="/fr/img/blog-images/programmatic-inpainting-9.jpg" alt="T-shirt Non edité" class="w-full max-w-[468px] h-auto object-cover"/>
    </span>
    <span class="flex flex-1 justify-center items-center">
        <img src="/fr/img/blog-images/programmatic-inpainting-16.png" alt="T-shirt Edité" class="w-full max-w-[468px] h-auto object-cover"/>
    </span>
</div>

Pour utiliser cette alternative, sélectionnez le template **"Rechercher et Remplacer"** dans l’application, ou utilisez directement le StabilityAI Node.

![Capture d'écran de l'outil Inpainting from Text Prompt V3](/img/blog-images/programmatic-inpainting-14.png)

### Prêt à Améliorer Votre Expérience de Retouche d’Images ?

Avec AI-FLOW, intégrez cet outil dans vos flux de travail, automatisez des processus, et créez des outils IA sur mesure sans expertise approfondie en programmation. Explorez le potentiel du template **"Inpainting from Text Prompt"** dès aujourd’hui en visitant [AI-FLOW App](https://app.ai-flow.net/). Libérez votre créativité et améliorez vos projets grâce à la retouche d'images assistée par IA !

---

_Ressources Supplémentaires_

Pour plus d’informations détaillées, consultez les ressources suivantes :

- [Commencer avec AI-FLOW](/blog/getting-started-with-ai-flow)
