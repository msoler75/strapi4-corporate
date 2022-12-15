# Strapi plugin icon-select

A strapi custom field for selecting any icon based on the ISO 3166-1 icon code standard.

## Installation

To install this plugin, you need to add an NPM dependency to your Strapi application:

```
# Using Yarn
yarn add strapi-plugin-icon-select

# Or using NPM
npm install strapi-plugin-icon-select
```

Then, you'll need to build your admin panel:

```
# Using Yarn
yarn build

# Or using NPM
npm run build
```


## Usage

After installation you will find the icon-select at the custom fields section of the content-type builder.

![icon select screenshot](./icon-select-custom-field.png)

Now you can select any icon from the list. The Alpha-2 code of the selected icon is stored in the database.

![icon select screenshot](./icon-select.png)


## Related

- [i18n-iso-icons](https://github.com/michaelwittig/node-i18n-iso-icons) - i18n for ISO 3166-1 icon codes