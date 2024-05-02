# Contributing to Translations

Thank you for your interest in contributing to the translations for our application. By helping to translate the text, you play a vital role in making the app accessible to users around the world. This document outlines how to contribute to translating the application into various languages.

## Getting Started

To start contributing to translations, you will need a basic understanding of JSON files and GitHub workflows if you're contributing directly via a repository.

### Prerequisites

- Familiarity with JSON file format
- Basic knowledge of Git operations

## Translation Files Structure

Translations are stored in JSON files located in the `packages/ui/public/locales/` directory. Each language has its own directory named using its ISO language code (e.g., `en` for English, `fr` for French).

Here's the structure of the directory:

```
    packages/
    └── ui/
    └── public/
    └── locales/
    ├── en/
    │ └── flow.json
    │ └── config.json
    │ └── ...
    └── fr/
    │ └── flow.json
    │ └── config.json
    │ └── ...
```

Inside each `translation.json` file, you'll find key-value pairs where the key is a unique identifier for each string and the value is the translation in the respective language.

### Examples

English

```json
{
  "configurationTitle": "Configuration",
  "ApiKeyRequiredMessage": "Please provide your API Key in the configuration settings to run your flow successfully.",
  "ClickToShowImageOutput": "Click to show image output"
}
```

French

```json
{
  "configurationTitle": "Configuration",
  "ApiKeyRequiredMessage": "Veuillez fournir votre clé API dans les paramètres de configuration pour exécuter correctement votre flow.",
  "ClickToShowImageOutput": "Cliquez pour afficher la sortie d'image"
}
```

## How to Contribute

1. **Fork the Repository**: Start by forking the repository to your own GitHub account.

2. **Clone the Repository**: Clone the forked repository to your local machine.

   ```bash
   git clone <your-forked-repository-url>
   cd <repository-name>
   ```

3. **Create a New Branch**: Create a branch for your translations.

   ```bash
   git checkout -b add_<language>_translations
   ```

4. **Update/Add Translation Files**: Navigate to the appropriate language directory under `packages/ui/public/locales/`. If you are adding a new language, create a new folder with the appropriate ISO language code.

5. **Make Your Changes**: Edit the existing `translation.json` files or create a new one if adding a new language. Make sure to maintain the JSON structure.

6. **Commit Your Changes**: Once you have made your changes, commit them with a clear message.

   ```bash
   git add .
   git commit -m "Add French translations for new strings"
   ```

7. **Push Your Changes**: Push your changes to your fork.

   ```bash
   git push origin add_<language>_translations
   ```

8. **Create a Pull Request**: Go to your fork on GitHub and create a pull request to the main repository. Provide a clear description of your changes and mention the addition of new translations.

9. **Review and Merge**: The repository maintainers will review your pull request. Once approved, it will be merged into the main project.

## Testing Your Translations

Before submitting your translations, please ensure they are displayed correctly within the app. You may need to sync with developers to ensure the new language is supported by the application framework.

## Questions and Support

If you have questions or need help with your translation contributions, please contact the project maintainers by submitting an issue on GitHub.

Thank you for contributing to the project and helping make it accessible to more users worldwide!
