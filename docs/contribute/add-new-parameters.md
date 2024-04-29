# Adding New Parameters

To introduce new user parameters into the app, update the `packages/backend/config.yaml` file as follows:

```yaml
core:
  ################################
  ## The core params of the app ##
  ################################

my_extension: # Your new section
  my_extension_api_key:
    tag: "extension"
    description: "Description of what this parameter controls."

  my_extension_token:
    tag: "extension"
    description: "Description of what this parameter controls."
```

After updating the configuration and restarting the server, these new parameters will be visible in the UI's configuration menu.
