---
slug: api-builder-1
title: Intégrez et automatisez vos workflows IA avec API Builder
authors: dahn
description: Apprenez à générer des personnages cohérents en utilisant l'IA avec notre guide détaillé. Découvrez des méthodes pratiques pour obtenir une uniformité dans vos images générées par l'IA.
tags: [AI-FLOW, API Builder, API, Outils IA, Webhook]
---

<head>
  <meta name="twitter:card" content="summary_large_image"/>
  <meta name="twitter:title" content="Intégrez et automatisez vos workflows IA avec API Builder" />
  <meta name="twitter:description" content="Découvrez des méthodes pratiques pour automatiser votre workflow IA via AI-Flow API Builder." />
  <meta name="twitter:creator" content="@AIFlowApp"/>
  <meta name="twitter:image" content="https://docs.ai-flow.net/img/blog-card-images/api-builder-1.png"/>
  <meta name="twitter:image:alt" content="Découvrez des méthodes pratiques pour automatiser votre workflow IA via AI-Flow API Builder."/>
  <meta property="og:title" content="Intégrez et automatisez vos workflows IA avec API Builder"/>
  <meta property="og:description" content="Découvrez des méthodes pratiques pour automatiser votre workflow IA via AI-Flow API Builder."/>
  <meta property="og:image" content="https://docs.ai-flow.net/img/blog-card-images/api-builder-1.png"/>
</head>

## Libérez la puissance de votre workflow IA avec les nœuds API Builder

Automatiser et intégrer des workflows IA est désormais plus accessible grâce aux capacités avancées de l'API AI-Flow. En utilisant l'API Builder, les développeurs peuvent créer des workflows d'IA robustes, assurant une intégration et une interaction transparentes entre divers modèles d'IA tels que GPT, DALL-E, Claude, Stable Diffusion ou tout modèle Replicate. Cet article explore les principales fonctionnalités de l'API AI-Flow, démontrant ses avantages et sa facilité d'utilisation.

![Aperçu d'API Builder](/img/page-images/api-builder/api-builder-6.png)

### Simplifiez votre workflow IA avec les nœuds d'entrée et de sortie API

**Nœud d'entrée API** :
Le nœud d'entrée API est conçu pour définir les entrées de votre API, en mappant chaque champ du corps de la requête à un nœud correspondant dans votre flow. En définissant des valeurs par défaut, les développeurs peuvent rendre certains paramètres optionnels, améliorant ainsi la flexibilité dans la conception de l'API.

![Exemple de nœud d'entrée API](/img/page-images/api-builder/api-builder-1.png)

Exemple de configuration :

```json
{
  "my_prompt": "Lorem Ipsum",
  "my_context": "Lorem Ipsum"
}
```

Cette configuration montre comment les entrées sont structurées, facilitant le lancement du workflow avec des paramètres clairs et définis.

---

**Nœud de sortie API** :
Configurer le nœud de sortie API est tout aussi simple. Ce nœud spécifie les noms des champs dans la réponse finale, garantissant que la sortie est structurée et compréhensible. Plusieurs nœuds de sortie peuvent être définis pour passer des résultats additionnels ou intermédiaires.

![Exemple de nœud de sortie API](/img/page-images/api-builder/api-builder-2.png)

Dans cet exemple simple, la réponse de l'API sera formatée comme suit :

```json
{
  "my_output": "Lorem Ipsum dolor sit amet, consectetur"
}
```

Cet exemple démontre la simplicité de la configuration de sortie, offrant une structure de réponse claire et concise.

### Gérez et surveillez votre API avec la vue API Builder

La **vue API Builder** est votre centre de commande pour gérer et surveiller l'API de votre workflow. Accessible via le volet droit de l'application, cette vue offre une vue d'ensemble complète de la configuration de votre API, vous permettant de générer et de gérer les clés API de manière transparente.

![Vue API Builder](/img/page-images/api-builder/api-builder-3.png)

**Génération de clés API** :
Pour garantir un accès sécurisé, les clés API sont générées au sein de l'API Builder. Ces clés, essentielles pour autoriser les requêtes, sont affichées une seule fois pour maintenir la sécurité. L'inclusion de ces clés dans vos requêtes en tant qu'en-tête Authorization est cruciale pour des appels API réussis.

**Exécution de votre flux via l'API** :
Lancer votre flux est simple avec les extraits de code fournis dans la vue API Builder. Par exemple, en utilisant cURL, vous pouvez lancer votre flux comme suit :

```bash
curl https://api.ai-flow.net/v1/flow/<your_flow_id>/run \
-H "Content-Type: application/json" \
-H "Authorization: Bearer $AI_FLOW_API_KEY" \
-d '{
  "my_prompt": "Lorem Ipsum",
  "my_context": "Continue my sentence with 5 words of lorem ipsum"
}'
```

Cette commande lance le flux, renvoyant un ID de lancement pour suivre le processus. Récupérez les résultats en utilisant cet ID une fois le traitement terminé.

### Améliorez l'intégration avec les nœuds Webhook

Le **nœud Webhook** est un outil polyvalent au sein de l'API Builder, vous permettant d'envoyer des sorties vers des URL désignées. Configurer le nœud Webhook implique de spécifier l'URL cible et de sélectionner les sorties à envoyer, avec la possibilité d'inclure des signatures personnalisées pour une sécurité accrue.

![Exemple de nœud Webhook](/img/page-images/api-builder/api-builder-4.png)

Dans ce cas, le webhook enverra les données suivantes :

```json
{
  "my_output": "Lorem Ipsum dolor sit amet, consectetur"
}
```

Dans cette configuration, le nœud Webhook envoie des données structurées à l'URL spécifiée, garantissant une intégration fluide et une authentification via des signatures personnalisées.

### Conclusion

L'API AI-Flow, propulsée par les nœuds API Builder, offre un moyen simplifié et efficace de créer et de gérer des workflows d'IA. Avec des nœuds intuitifs pour les entrées et les sorties, des outils de gestion d'API et des configurations de webhook flexibles, les développeurs peuvent créer des workflows IA puissants et adaptés à leurs besoins.

### Ressources supplémentaires

Pour plus d'informations détaillées, consultez les ressources suivantes :

- [Nœuds API Builder](/docs/pro-features/api-builder/api-nodes/)
- [Vue API Builder](/docs/pro-features/api-builder/builder-view/)
- [Documentation sur les Webhooks](/docs/pro-features/api-builder/webhooks/)
